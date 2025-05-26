'use client';

export default function TaxCalculators() {
  const calculators = [
    {
      id: '1',
      title: 'Income Tax Calculator',
      description: 'Calculate your income tax based on FBR rates.',
      buttonText: 'Try Now'
    },
    {
      id: '2',
      title: 'Sales Tax Calculator',
      description: 'Estimate sales tax for your business.',
      buttonText: 'Try Now'
    }
  ];

  return (
    <section id="calculators" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Tax Calculators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {calculators.map(calc => (
            <div key={calc.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{calc.title}</h3>
              <p>{calc.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {calc.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}