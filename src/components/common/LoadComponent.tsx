import { Suspense, LazyExoticComponent, ComponentType } from 'react';
import { CircularProgressProps } from '@mui/material/CircularProgress';
import { Spinner } from '../';

const LoadComponent =
  (
    Component:
      | LazyExoticComponent<() => JSX.Element>
      | ComponentType<React.ReactNode>
      | any
  ) =>
  (props: CircularProgressProps) => (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  );

export default LoadComponent;
