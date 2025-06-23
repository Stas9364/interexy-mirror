type LocationData = {
  flag_src: string;
  location: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
};

export const locationData: LocationData[] = [
  {
    flag_src: "/flags/US.svg",
    location: "US",
    address: {
      city: "Florida, 33025, USA",
      street: "11820, Miramar Prkw, 125, Miramar,",
    },
    phone: "+1 931 246 9959",
  },
  {
    flag_src: "/flags/PL.svg",
    location: "Poland",
    address: {
      city: "Warszawa, Poland",
      street: "Ul. Ostrobramska 101, 04-041",
    },
    phone: "+48 57 179 3561",
  },
  {
    flag_src: "/flags/AE.svg",
    location: "UAE",
    address: {
      city: "Dubai, UAE",
      street: "Al Nahda First, Sama Residence, office №M05-41,",
    },
    phone: "+971 55 895 9032",
  },
];
