import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  // Placeholder data for client logos - replace with actual data if available
  const clientLogos = [
    { id: 1, name: 'Client A', logo: '/images/client-a-logo.png' }, // Replace with actual path and data
    { id: 2, name: 'Client B', logo: '/images/client-b-logo.png' },
    { id: 3, name: 'Client C', logo: '/images/client-c-logo.png' },
    { id: 4, name: 'Client D', logo: '/images/client-d-logo.png' },
    // Add more client logos as needed
  ];

  return (
    <div className="hero-gradient-bg py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-background p-8 md:p-12 rounded-lg shadow-xl text-text-secondary">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">About Sohail Siraj (SIRAJUDDIN KHALID & COMPANY)</h1>

          <div className="flex flex-col md:flex-row items-center md:space-x-12 mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              {/* Placeholder for an image of Sohail Siraj or the team */}
              <Image
                src="/images/sohail-siraj.jpg" // Replace with actual image path
                alt="Sohail Siraj"
                width={400}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-auto"
              />
            </div>
            <div className="md:w-2/3 text-text-secondary leading-relaxed">
              <p className="mb-4">
                Sohail Siraj (SIRAJUDDIN KHALID & COMPANY) is a leading tax consulting firm in Pakistan, dedicated to providing expert tax and business advisory services to individuals and businesses. With a deep understanding of the Pakistani tax landscape and a commitment to client success, we offer tailored solutions to navigate complex financial and regulatory challenges.
              </p>
              <p>
                Our team of experienced professionals, including Chartered Accountants and legal experts, is committed to delivering high-quality services with integrity and professionalism. We strive to build long-term relationships with our clients, becoming their trusted partner in achieving financial clarity and business growth.
              </p>
              {/* Add more details about the firm's history, mission, or values */}
            </div>
          </div>

          {/* Trust Signals: Client Logos */}
          {clientLogos.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">Trusted By</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 opacity-75">
                {clientLogos.map(client => (
                  <div key={client.id} className="p-4 bg-gray-50 rounded-lg flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={100}
                      height={50}
                      objectFit="contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder for Team Section (Optional - can be a separate page) */}
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Map through team members here */}
              {/* Example Team Member Card */}
              
              <div className="bg-background p-6 rounded-lg shadow text-text-secondary text-center">
                <Image
                  src="/images/team-member-placeholder.jpg" // Replace with actual image path
                  alt="Team Member Name"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-text-primary mb-2">Team Member Name</h3>
                <p className="text-sm">Title/Role</p>
                {/* Add a short bio or expertise */}
              </div>

              <div className="bg-background p-6 rounded-lg shadow text-text-secondary text-center">
                <Image
                  src="/images/team-member-placeholder.jpg" // Replace with actual image path
                  alt="Team Member Name"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-text-primary mb-2">Team Member Name</h3>
                <p className="text-sm">Title/Role</p>
                {/* Add a short bio or expertise */}
              </div>

              <div className="bg-background p-6 rounded-lg shadow text-text-secondary text-center">
                <Image
                  src="/images/team-member-placeholder.jpg" // Replace with actual image path
                  alt="Team Member Name"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-text-primary mb-2">Team Member Name</h3>
                <p className="text-sm">Title/Role</p>
                {/* Add a short bio or expertise */}
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
} 