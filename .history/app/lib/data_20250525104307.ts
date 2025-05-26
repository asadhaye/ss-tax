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

export async function getServices(): Promise<Service[]> {
  // Placeholder: Implement Azure Cosmos DB or similar retrieval
  throw new Error('Service retrieval not implemented');
}

export async function saveCommunitySignup(email: string, timestamp: Date): Promise<void> {
  // Placeholder: Implement Azure Cosmos DB or similar storage
  throw new Error('Community signup storage not implemented');
}