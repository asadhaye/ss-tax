'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUsers, deleteUser } from '../lib/data';
import { AuthContext } from '../app/lib/AuthProvider';
import { User } from '../app/lib/interfaces';
import Navbar from '../components/Navbar';

import Footer from '../app/components/Footer';

export default function AdminPanel() {
  const { user } = useContext(AuthContext)!;
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const usersList = await getUsers();
        setUsers(usersList);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [user, router]);

  const handleDelete = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;
    setLoading(true);
    setError(null);
    try {
      await deleteUser(userId);
      setUsers(users.filter(u => u.id !== userId));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="p-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
          {error && <p className="text-red-500">{error}</p>}
          {loading ? (
            <p>Loading users...</p>
          ) : (
            <div>
              <h3 className="text-xl font-semibold mb-2">Manage Users</h3>
              <ul className="space-y-2">
                {users.map(u => (
                  <li key={u.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span>{u.email}</span>
                    <button
                      onClick={() => handleDelete(u.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}