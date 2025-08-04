export type Review = {
  review: {
    rating: number;
    text: string;
    review_link: string;
    name: string;
    position: string;
    company: string;
    company_link: string;
  };

  project: {
    description: string;
    link: string;
  };
};
