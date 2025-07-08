import { CONTACTS } from '@/lib/constants/contacts_constants';

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
    flag_src: '/flags/US.svg',
    location: 'USA',
    address: {
      city: CONTACTS.usa.city,
      street: CONTACTS.usa.street,
    },
    phone: CONTACTS.usa.phone,
  },
  {
    flag_src: '/flags/PL.svg',
    location: 'Poland',
    address: {
      city: CONTACTS.poland.city,
      street: CONTACTS.poland.street,
    },
    phone: CONTACTS.poland.phone,
  },
  {
    flag_src: '/flags/AE.svg',
    location: 'UAE',
    address: {
      city: CONTACTS.uae.city,
      street: CONTACTS.uae.street,
    },
    phone: CONTACTS.uae.phone,
  },
];
