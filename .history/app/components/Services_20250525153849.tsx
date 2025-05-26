'use client';

import React, { useState, useEffect } from 'react';
import { getServices } from '../app/lib/data';
import { Service } from '../app/lib/interfaces';

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const serviceList = await getServices();
        setServices(serviceList);
      } catch (err) {
        console.error('Failed to fetch services:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <section className="services py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Services</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.length ? (
              services.map(service => (
                <div key={service.id} className="p-6 bg-white rounded-lg shadow-md">
                  {service.name}
                </div>
              ))
            ) : (
              <p className="text-center col-span-3">No services available</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}