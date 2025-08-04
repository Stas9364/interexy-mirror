export type Review = {
  company: string;
  logo: string;
  domain: string;
  text: string;
  reviewer: {
    name: string;
    position: string;
  };
};
