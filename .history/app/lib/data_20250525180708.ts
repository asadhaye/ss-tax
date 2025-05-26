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
  title: string;
  description: string;
  icon?: string;
}

export async function getServices(): Promise<Service[]> {
  // TODO: Replace with actual API call when backend is ready
  return [
    {
      id: '1',
      title: 'Tax Planning',
      description: 'Strategic tax planning and optimization for individuals and businesses',
      icon: 'calculator'
    },
    {
      id: '2',
      title: 'Tax Filing',
      description: 'Professional tax return preparation and filing services',
      icon: 'document'
    },
    {
      id: '3',
      title: 'Business Advisory',
      description: 'Expert financial and tax advisory services for businesses',
      icon: 'briefcase'
    }
  ];
}

export async function saveCommunitySignup(email: string, timestamp: Date): Promise<void> {
  // Placeholder: Implement Azure Cosmos DB or similar storage
  throw new Error('Community signup storage not implemented');
}