export type MenuItem = {
  label: React.ReactNode;
  key: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: {
    label: React.ReactNode;
    key: string;
    icon?: React.ReactNode;
  }[];
};
