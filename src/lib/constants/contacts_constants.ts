type CountryContact = {
  phone: string;
  street: string;
  city: string;
};

type Country = 'usa' | 'poland' | 'uae';

type Contacts = Record<Country, CountryContact>;

export const CONTACTS: Contacts = {
  usa: {
    phone: '+1 202 933 3772',
    street: '11820, Miramar Prkw, 125, Miramar,',
    city: 'Florida, 33025, USA',
  },
  poland: {
    phone: '+48 57 136 2271',
    street: 'Ul. Ostrobramska 101, 04-041',
    city: 'Warszawa, Poland',
  },
  uae: {
    phone: '+971 55 895 9032',
    street: 'Al Nahda First, Sama Residence, office №M05-41,',
    city: 'Dubai, UAE',
  },
};
