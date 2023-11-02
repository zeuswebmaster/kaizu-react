import { Grid } from '@mui/material';
import { AssetsLeftComponent, AssetsRightComponent } from '../../components';

export default function AssetsDetail() {
  return (
    <>
      <Grid container>
        <Grid item sm={5} lg={4}>
          <AssetsLeftComponent />
        </Grid>
        <Grid item sm={7} lg={8}>
          <AssetsRightComponent />
        </Grid>
      </Grid>
    </>
  );
}
