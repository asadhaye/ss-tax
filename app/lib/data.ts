import { SaveUserData, User, Service } from './interfaces';

// Temporary mock storage for development
const mockStorage = new Map<string, SaveUserData>();

export async function saveUser(
  userId: string, 
  data: SaveUserData
): Promise<void> {
  // Mock implementation for development
  mockStorage.set(userId, data);
  return Promise.resolve();
}

export async function getUser(userId: string): Promise<User> {
  // Mock implementation for development
  const userData = mockStorage.get(userId);
  if (!userData) {
    throw new Error('User not found');
  }
  return {
    id: userId,
    email: userData.email,
    createdAt: userData.createdAt
  };
}

export async function deleteUser(userId: string): Promise<void> {
  // Placeholder: Implement Azure Cosmos DB or similar deletion
  throw new Error('User deletion not implemented');
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

export async function getUsers(): Promise<User[]> {
  try {
    // Placeholder: Implement actual user fetching logic
    const mockUsers: User[] = [
      {
        id: 'user1',
        email: 'user1@example.com',
        name: 'User One',
        createdAt: new Date()
      },
      {
        id: 'user2',
        email: 'user2@example.com',
        name: 'User Two',
        createdAt: new Date()
      }
    ];
    return mockUsers;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw new Error('Failed to fetch users');
  }
}