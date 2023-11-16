import { Button, Grid, Stack, Typography, useTheme } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import useWidth from '../../hooks/useWidth';
import SegmentedControl from '../../components/common/SegmentedControl';

const FREE_OPTIONS = [
  {
    label: 'Browser Calendar Events',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Explore All Asssets',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Upvote, Downvote and Save News',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Build Stunning, Dynamic Charts',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Compare Metrics Across Assets',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Enhanced AI News Summary',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Contextual Charts in News Stories',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: '5 Custom Alets',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Create Unlimited Templates',
    checked: false,
    color: '#5b747f',
    textColor: '#5b747f',
  },
  {
    label: 'Deep Personalization',
    checked: false,
    color: '#5b747f',
    textColor: '#5b747f',
  },
  {
    label: 'Predictive Market Intel Reports',
    checked: false,
    color: '#5b747f',
    textColor: '#5b747f',
  },
  {
    label: 'Enterprise Onboarding',
    checked: false,
    color: '#5b747f',
    textColor: '#5b747f',
  },
  {
    label: 'Enterprise Account Management',
    checked: false,
    color: '#5b747f',
    textColor: '#5b747f',
  },
  {
    label: 'Unlimited API Calls',
    checked: false,
    color: '#5b747f',
    textColor: '#5b747f',
  },
];

const PRO_OPTIONS = [
  {
    label: 'Browser Calendar Events',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Explore All Asssets',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Upvote, Downvote and Save News',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Build Stunning, Dynamic Charts',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Compare Metrics Across Assets',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Enhanced AI News Summary',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Contextual Charts in News Stories',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: '100 Custom Alets',
    checked: true,
    color: '#4985a5',
    textColor: '#fff',
    info: 'info',
  },
  {
    label: 'Create Unlimited Templates',
    checked: true,
    color: '#4985a5',
    textColor: '#fff',
    info: 'info',
  },
  {
    label: 'Deep Personalization',
    checked: true,
    color: '#4985a5',
    textColor: '#fff',
    info: 'info',
  },
  {
    label: 'Predictive Market Intel Reports',
    checked: true,
    color: '#4985a5',
    textColor: '#fff',
    info: 'info',
  },
  {
    label: 'Enterprise Onboarding',
    checked: false,
    color: '#5b747f',
    textColor: '#5b747f',
  },
  {
    label: 'Enterprise Account Management',
    checked: false,
    color: '#5b747f',
    textColor: '#5b747f',
  },
  {
    label: 'Unlimited API Calls',
    checked: false,
    color: '#5b747f',
    textColor: '#5b747f',
  },
];

const ENTERPRISE_OPTIONS = [
  {
    label: 'Browser Calendar Events',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Explore All Asssets',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Upvote, Downvote and Save News',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Build Stunning, Dynamic Charts',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Compare Metrics Across Assets',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Enhanced AI News Summary',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Contextual Charts in News Stories',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: '100 Custom Alets',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Create Unlimited Templates',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Deep Personalization',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Predictive Market Intel Reports',
    checked: true,
    color: '#a4c7d4',
    textColor: '#fff',
  },
  {
    label: 'Enterprise Onboarding',
    checked: true,
    color: '#22414f',
    textColor: '#fff',
    info: 'info',
  },
  {
    label: 'Enterprise Account Management',
    checked: true,
    color: '#22414f',
    textColor: '#fff',
    info: 'info',
  },
  {
    label: 'Unlimited API Calls',
    checked: true,
    color: '#22414f',
    textColor: '#fff',
    info: 'info',
  },
];

const SUBSCRIPTIONS = [
  {
    label: 'Monthly',
    value: 1,
  },
  {
    label: 'Annually',
    value: 2,
  },
];

export default function Subscription() {
  const themeGlobal = useTheme();
  const windowWidth = useWidth();

  const [planValue, setPlanValue] = useState<number>(1);

  return (
    <Stack
      padding={{ md: 6, xxs: '20px 0 0 0' }}
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={5}
    >
      <Stack>
        <Stack display="-webkit-box" sx={{ margin: '0 auto 16px auto' }}>
          <SegmentedControl
            options={SUBSCRIPTIONS}
            value={planValue}
            setValue={setPlanValue}
            color="#0a141a"
            styles={{ border: `1px solid #fff`, borderRadius: '8px', padding: '3px', backgroundColor: '#fff' }}
            btnStyles={{ borderRadius: '8px', padding: '10px 20px', zIndex: 2 }}
            borderRadius={8}
            top={3}
            height={44}
          />
        </Stack>
        <Typography variant="body2" color={themeGlobal.palette.grey[300]} fontStyle="italic">
          Annually you save up to 25% off, which is 3 months free
        </Typography>
      </Stack>
      <Grid container spacing={2} mb={3}>
        <Grid item lg={4} xxs={12}>
          <Stack
            padding={{ xs: 2, xxs: 1 }}
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={1}
            height={200}
            sx={{ backgroundColor: '#0d1a20', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}
          >
            <Typography variant="h3" color={themeGlobal.palette.common.white}>
              n00b
            </Typography>
            <Typography variant="body2" color={themeGlobal.palette.grey[300]} align="center">
              Powerful features for savvy trades intent on generating alpha
            </Typography>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="h4" color={themeGlobal.palette.common.white}>
                $0
              </Typography>
              <Typography variant="caption" color={themeGlobal.palette.common.white} pt={1.5}>
                / forever
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            gap={3}
            px={{ xs: 2, xxs: 1 }}
            py={3}
            minWidth={{ sm: 0, xxs: windowWidth - 85 }}
            sx={{
              backgroundColor: '#112129',
              borderBottomLeftRadius: '6px',
              borderBottomRightRadius: '6px',
            }}
          >
            {FREE_OPTIONS.map((item) => (
              <Stack key={item.label} direction="row" alignItems="flex-start" gap={2} sx={{ width: '100%' }}>
                <Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: 16, height: 16, borderRadius: '3px', backgroundColor: item.color }}
                  >
                    {item.checked && <CheckIcon sx={{ color: '#2b4e60', width: 14, height: 14 }} />}
                  </Stack>
                </Stack>
                <Typography variant="caption" color={item.textColor}>
                  {item.label}
                </Typography>
              </Stack>
            ))}

            <Button
              sx={{
                backgroundImage: 'linear-gradient(to bottom, rgba(31, 56, 69, 1), rgba(34, 63, 78, 1))',
                color: themeGlobal.palette.common.white,
                height: 45,
              }}
            >
              Current Plan
            </Button>
          </Stack>
        </Grid>
        <Grid item lg={4} xxs={12}>
          <Stack
            padding={{ xs: 2, xxs: 1 }}
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={1}
            height={200}
            sx={{ backgroundColor: '#0a141a', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}
          >
            <Typography variant="h3" color={themeGlobal.palette.info.main}>
              Pro
            </Typography>
            <Typography variant="body2" color={themeGlobal.palette.grey[300]} align="center">
              Deep personalization, relevant insights for maximum trader perfomance
            </Typography>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="h4" color={themeGlobal.palette.common.white}>
                $49.95
              </Typography>
              <Typography variant="caption" color={themeGlobal.palette.common.white} pt={1.5}>
                / month
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            gap={3}
            px={2}
            py={3}
            minWidth={{ sm: 0, xxs: windowWidth - 85 }}
            sx={{
              backgroundColor: '#112129',
              borderBottomLeftRadius: '6px',
              borderBottomRightRadius: '6px',
            }}
          >
            {PRO_OPTIONS.map((item) => (
              <Stack key={item.label} direction="row" alignItems="flex-start" gap={2}>
                <Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: 16, height: 16, borderRadius: '3px', backgroundColor: item.color }}
                  >
                    {item.checked && <CheckIcon sx={{ color: '#2b4e60', width: 14, height: 14, fontWeight: 'bold' }} />}
                  </Stack>
                </Stack>
                <Typography variant="caption" color={item.textColor}>
                  {item.label}
                </Typography>
              </Stack>
            ))}

            <Button
              sx={{
                backgroundImage: 'linear-gradient(to bottom, rgba(74, 137, 170, 1), rgba(101, 176, 217, 1))',
                color: '#112129',
                height: 45,
              }}
            >
              Upgrade
            </Button>
          </Stack>
        </Grid>
        <Grid item lg={4} xxs={12}>
          <Stack
            padding={{ xs: 2, xxs: 1 }}
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={1}
            height={200}
            sx={{ backgroundColor: '#0a141a', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}
          >
            <Typography variant="h3" color={themeGlobal.palette.common.white}>
              Enterprise
            </Typography>
            <Typography variant="body2" color={themeGlobal.palette.grey[300]} align="center">
              Onboard your enterprise to extract marketing-leading alpha 24/7/365
            </Typography>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="h4" color={themeGlobal.palette.common.white}>
                $99.99
              </Typography>
              <Typography variant="caption" color={themeGlobal.palette.common.white} pt={1.5}>
                / seat, month
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            gap={3}
            px={2}
            py={3}
            minWidth={{ sm: 0, xxs: windowWidth - 85 }}
            sx={{
              backgroundColor: '#112129',
              borderBottomLeftRadius: '6px',
              borderBottomRightRadius: '6px',
            }}
          >
            {ENTERPRISE_OPTIONS.map((item) => (
              <Stack key={item.label} direction="row" alignItems="flex-start" gap={2}>
                <Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: 16, height: 16, borderRadius: '3px', backgroundColor: item.color }}
                  >
                    {item.checked && (
                      <CheckIcon
                        sx={{ color: item.info ? '#fff' : '#2b4e60', width: 14, height: 14, fontWeight: 'bold' }}
                      />
                    )}
                  </Stack>
                </Stack>
                <Typography variant="caption" color={item.textColor}>
                  {item.label}
                </Typography>
              </Stack>
            ))}

            <Button
              sx={{
                backgroundImage: 'linear-gradient(to bottom, rgba(29, 60, 74, 1), rgba(45, 76, 90, 1))',
                color: themeGlobal.palette.common.white,
                height: 45,
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Typography variant="body2" fontStyle="italic" color={themeGlobal.palette.grey[300]} mb={4}>
        * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
        facilisis.
      </Typography>
    </Stack>
  );
}
