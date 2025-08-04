type Tab = {
  key: string;
  label: string;
};

type Feature = {
  title: string;
  description: string;
};

export type Data = {
  tabs: Tab[];
  content: {
    [key: string]: Feature[];
  };
};
