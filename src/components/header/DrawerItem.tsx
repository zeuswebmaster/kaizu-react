import { Stack, Typography, Button, Tooltip, styled } from '@mui/material';
import { useState, useEffect } from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarIcon from '@mui/icons-material/Star';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';

import axios from 'axios';
import { useAuthStore } from '../../features';

export default function DrawerItem() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const [bullishText, setBullishText] = useState('Bullish Scenario'); // Default text
  const startStream = () => {
    fetch('http://localhost:3000/api/openai/stream', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: "Predictive Intel: {\"type\": \"chart-data\", \"asset\": \"BTC\", \"price\": 29208.72, \"24hr-change-pct\" : 0.37, \"7day-change-pct\" : 0.07, response-type: \"hypothetical long-form bullish case at least three paragraphs\"}"
      })
    })
    .then(response => {
      if (!response.body) {
        throw new Error('ReadableStream not yet supported in this browser.');
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let data = '';
      setBullishText(''); // Clear the text before appending

      function processText() {
        return reader.read().then(({ done, value }) => {
          if (done) {
            return;
          }
  
          data += decoder.decode(value, { stream: true });

          // Process the data for each line
          let lines = data.split('\n');
          for (let line of lines) {
            if (line.startsWith('data: ')) {
              let text = line.slice(6);
              try {
                // Attempt to parse the JSON string and extract the data
                text = JSON.parse(text);
              } catch (e) {
                // If JSON parsing fails, use the text as is
              }
              setBullishText(prevText => prevText + text);
            }
          }
  
          // Keep the last incomplete line for the next chunk processing
          data = lines[lines.length - 1];
          return processText(); // Read the next chunk
        });
      }
  
      return processText();
    })
    .catch(error => {
      console.error('Error starting stream:', error);
    });
  };  

  const StyledButton = styled(Button)(() => ({
    backgroundColor: '#263c48',
    padding: '4px 8px',
    minWidth: 'auto',
    '& span': {
      marginRight: '-3px',
    },
    '&:hover': {
      backgroundColor: '#2d4551',
    },
  }));

  return (
    <Stack
      sx={{
        width: 450,
        height: '100%',
        backgroundImage: 'linear-gradient(to right, rgba(20, 42, 53, 1), rgba(40, 72, 86, 1))',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: '100%',
          backgroundImage: 'linear-gradient(to right, rgba(10, 21, 26, 1), rgba(19, 35, 42, 1))',
          padding: '20px 30px',
        }}
      >
        <Stack>
          <Stack
            sx={{
              width: '45px',
              marginBottom: '5px',
            }}
          >
            <img src="/icons/kaizu.svg" alt="" />
          </Stack>
          <Typography fontSize={14} color="#fff" fontWeight={500}>
            Predictive Intel Report
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Tooltip title="Expand" arrow>
            <StyledButton
              variant="contained"
              startIcon={<OpenInFullIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
            />
          </Tooltip>
          <Tooltip title="Info" arrow>
            <StyledButton
              variant="contained"
              startIcon={<InfoOutlinedIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
            />
          </Tooltip>
          <Tooltip title="Save report" arrow>
            <StyledButton
              variant="contained"
              startIcon={<StarIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
            />
          </Tooltip>
          <Tooltip title="Refresh" arrow>
            <StyledButton
              variant="contained"
              startIcon={<RefreshIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
              onClick={startStream}
            />
          </Tooltip>
          <Tooltip title="More" arrow>
            <StyledButton
              variant="contained"
              startIcon={<MoreHorizIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
            />
          </Tooltip>
          <Tooltip title="Close" arrow>
            <StyledButton
              variant="contained"
              startIcon={<CloseIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
            />
          </Tooltip>
        </Stack>
      </Stack>
      <Stack sx={{ padding: '20px 50px' }}>
        <Typography fontSize={14} color="#67777e" mt={1}>
          BITCOIN PRICE
        </Typography>
        <Typography variant="h3" color="#fff" mt={1}>
          BULLISH SCENARIO
        </Typography>
        <Typography fontSize={14} color="#67777e" mt={1} style={{ whiteSpace: 'pre-wrap' }}>
          {bullishText}
        </Typography>
      </Stack>
    </Stack>
  );
}
