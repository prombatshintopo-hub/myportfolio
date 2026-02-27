export type DetailAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type DetailContent = {
  typeLabel?: string;
  title: string;
  subtitle?: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  actions?: DetailAction[];
};

