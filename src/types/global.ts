export type MenuItem = {
  label: React.ReactNode;
  key: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  value?: string;
  children?: {
    label: React.ReactNode;
    key: string;
    icon?: React.ReactNode;
  }[];
};
