export type TitleKind =
  | 'project'
  | 'experience'
  | 'certification'
  | 'education'
  | 'skill'
  | 'marketing'
  | 'about'
  | 'contact';

export type ProfileId = 'it' | 'security' | 'marketing' | 'all';

export type Link = {
  label: string;
  href: string;
};

export type Title = {
  id: string;
  kind: TitleKind;
  profileTags: ProfileId[];

  name: string;
  subtitle?: string;
  year?: string;
  status?: 'Active' | 'In progress' | 'Completed';

  description: string;
  bullets?: string[];
  tech?: string[];
  tags?: string[];
  links?: Link[];

  posterSeed?: string;
};

export type Row = {
  id: string;
  label: string;
  predicate: (t: Title) => boolean;
};

export type Profile = {
  id: ProfileId;
  label: string;
  tagline: string;
  imageSrc?: string;
};
