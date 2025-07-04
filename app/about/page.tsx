import React from 'react';
import Image from 'next/image';
import styles from '../styles/animations.module.css';

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
    <section id="about" className="py-20 bg-ceo dark:bg-cfo">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(31,41,55,0.12)] dark:shadow-[0_8px_32px_0_rgba(16,185,129,0.12)] p-8 md:p-12 text-text-secondary dark:text-text-light">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-light mb-8 text-center scroll-fade-up">About Sohail Siraj (SIRAJUDDIN KHALID & COMPANY)</h1>

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
            <div className="md:w-2/3 text-text-secondary dark:text-text-light leading-relaxed">
              <p className="mb-4">
                Sohail Siraj (SIRAJUDDIN KHALID & COMPANY) is a leading tax consulting firm in Pakistan, dedicated to providing expert tax and business advisory services to individuals and businesses. With a deep understanding of the Pakistani tax landscape and a commitment to client success, we offer tailored solutions to navigate complex financial and regulatory challenges.
              </p>
              <p>
                Our team of experienced professionals, including Chartered Accountants and legal experts, is committed to delivering high-quality services with integrity and professionalism. We strive to build long-term relationships with our clients, becoming their trusted partner in achieving financial clarity and business growth.
              </p>
              {/* Add more details about the firm's history, mission, or values */}

              <div className="mt-6">
                <p className="mb-3">
                  Sohail Siraj proudly continues the legacy of Sirajuddin Khalid & Company, a respected name in Tax & Visa Consultancy since 1968. As the son of the late Sirajuddin Sb, Sohail carries forward the values and expertise established by his father, dedicating his practice to providing exceptional tax legal services.
                </p>
                <p className="mb-3">
                  With a deep understanding of the foundations laid by Sirajuddin Khalid & Company, Sohail assists individuals and businesses in navigating the complexities of tax law. He is committed to upholding the firm's reputation for integrity, knowledge, and personalized client care that has been a hallmark since 1968.
                </p>
                <p className="mb-3">
                  Sohail's approach is centered on providing timely, practical, and cost-effective solutions, ensuring each client receives the attention and expertise needed to address their unique tax situation.
                </p>
                <p>
                  Whether you require assistance with tax planning, resolving tax disputes, or understanding your tax obligations, Sohail Siraj is here to provide the knowledgeable support you need, building upon a rich family legacy of excellence in tax and visa consultancy.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Signals: Client Logos */}
          {clientLogos.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-text-primary dark:text-text-light mb-8 text-center scroll-fade-up">Trusted By</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 opacity-75">
                {clientLogos.map((client, idx) => (
                  <div key={client.id} className="p-4 bg-background/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(31,41,55,0.12)] dark:shadow-[0_8px_32px_0_rgba(16,185,129,0.12)] flex items-center justify-center transition-all duration-300 scroll-fade-up" style={{ '--index': idx } as React.CSSProperties}>
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
            <h2 className="text-2xl font-bold text-text-primary dark:text-text-light mb-8 text-center scroll-fade-up">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Map through team members here */}
              {/* Example Team Member Card */}
              
              <div className="bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(31,41,55,0.12)] dark:shadow-[0_8px_32px_0_rgba(16,185,129,0.12)] text-text-secondary dark:text-text-light text-center p-6 transition-all duration-300 scroll-fade-up" style={{ '--index': 0 } as React.CSSProperties}>
                <Image
                  src="/images/team-member-placeholder.jpg" // Replace with actual image path
                  alt="Sohail Siraj"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-light mb-2">Sohail Siraj</h3>
                <p className="text-sm text-text-muted dark:text-text-light">Founder & Lead Consultant</p>
                <p className="text-xs text-text-secondary dark:text-text-light mt-2">{/* Placeholder bio */}</p>
                {/* Add a short bio or expertise */}
              </div>

              <div className="bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(31,41,55,0.12)] dark:shadow-[0_8px_32px_0_rgba(16,185,129,0.12)] text-text-secondary dark:text-text-light text-center p-6 transition-all duration-300 scroll-fade-up" style={{ '--index': 1 } as React.CSSProperties}>
                <Image
                  src="/images/team-member-placeholder.jpg" // Replace with actual image path
                  alt="Team Member 2"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-light mb-2">Team Member 2 Name</h3>
                <p className="text-sm text-text-muted dark:text-text-light">Senior Tax Advisor</p>
                <p className="text-xs text-text-secondary dark:text-text-light mt-2">{/* Placeholder bio */}</p>
                {/* Add a short bio or expertise */}
              </div>

              <div className="bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(31,41,55,0.12)] dark:shadow-[0_8px_32px_0_rgba(16,185,129,0.12)] text-text-secondary dark:text-text-light text-center p-6 transition-all duration-300 scroll-fade-up" style={{ '--index': 2 } as React.CSSProperties}>
                <Image
                  src="/images/team-member-placeholder.jpg" // Replace with actual image path
                  alt="Team Member 3"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-light mb-2">Team Member 3 Name</h3>
                <p className="text-sm text-text-muted dark:text-text-light">Business Advisory Specialist</p>
                <p className="text-xs text-text-secondary dark:text-text-light mt-2">{/* Placeholder bio */}</p>
                {/* Add a short bio or expertise */}
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
} 