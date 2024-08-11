import { Observable, of } from 'rxjs';

export const keyTest1: string = 'user.profile.contact.address.city';
export const sourceDUKC1$: Observable<object> = of(
  { user: { profile: { contact: { address: { city: 'Chicago' } } } } },
  { user: { profile: { contact: { address: { city: 'Chicago' } } } } },
  { user: { profile: { contact: { address: { city: 'Houston' } } } } },
  { user: { profile: { contact: { address: { city: 'Houston' } } } } },
  { user: { profile: { contact: { address: { city: 'Austin' } } } } }
);

export const keyTest2: string = 'user.details.contacts';
export const sourceDUKC2$: Observable<object> = of(
  {
    user: {
      details: { contacts: [{ type: 'email', value: 'alice@example.com' }] },
    },
  },
  {
    user: {
      details: { contacts: [{ type: 'email', value: 'alice@example.com' }] },
    },
  },
  { user: { details: { contacts: [{ type: 'phone', value: '555-1234' }] } } },
  { user: { details: { contacts: [{ type: 'phone', value: '555-1234' }] } } },
  {
    user: {
      details: { contacts: [{ type: 'email', value: 'bob@example.com' }] },
    },
  }
);
