import { Grid } from '@mui/material';
import { AssetsLeftComponent, AssetsRightComponent } from '../../components';

export default function AssetsDetail() {
  return (
    <>
      <Grid container>
        <Grid item xxs={12} md={5} lg={4}>
          <AssetsLeftComponent />
        </Grid>
        <Grid item xxs={12} md={7} lg={8}>
          <AssetsRightComponent />
        </Grid>
      </Grid>
    </>
  );
}
