import { User, Service } from './interfaces';

export async function saveUser(userId: string, data: { email: string; createdAt: Date }): Promise<void> {
  // Placeholder: Implement Azure Cosmos DB or similar storage
  throw new Error('User storage not implemented');
}

export async function getUsers(): Promise<User[]> {
  // Placeholder: Implement Azure Cosmos DB or similar retrieval
  throw new Error('User retrieval not implemented');
}

export async function deleteUser(userId: string): Promise<void> {
  // Placeholder: Implement Azure Cosmos DB or similar deletion
  throw new Error('User deletion not implemented');
}

export interface Service {
  id: string;
  name: string;
  img: string;
  link: string;
}


export async function getServices(): Promise<Service[]> {
  return [
    {
      id: '1',
      name: 'Company/Firm Registration',
      img: 'https://taxcalculator.pk/assets/images/services/1.webp',
      link: '#'
    },
    {
      id: '2',
      name: 'Income Tax Return Filing',
      img: 'https://taxcalculator.pk/assets/images/services/4.webp',
      link: '#'
    },
    {
      id: '3',
      name: 'Tax Appeals & Litigation',
      img: 'https://taxcalculator.pk/assets/images/services/3.webp',
      link: '#'
    },
    {
      id: '4',
      name: 'Drafting Legal Agreements & Contracts',
      img: 'https://taxcalculator.pk/assets/images/services/2.webp',
      link: '#'
    }
  ];
}

export async function saveCommunitySignup(email: string, timestamp: Date): Promise<void> {
  // Placeholder: Implement Azure Cosmos DB or similar storage
  throw new Error('Community signup storage not implemented');
}