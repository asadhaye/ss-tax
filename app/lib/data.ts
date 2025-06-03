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
      description: 'Comprehensive company and firm registration services in Pakistan.',
      longDescription: 'Our comprehensive services cover all aspects of registering your company or firm in Pakistan. We handle the entire process, including SECP registration, business name reservation, preparation of memorandum and articles of association, and compliance with all regulatory requirements. Our experienced team ensures a smooth and efficient registration, setting up the proper legal structure for your business operations in Pakistan.',
      img: 'https://taxcalculator.pk/assets/images/services/1.webp',
      link: '/services/company-registration',
      category: 'business-setup'
    },
    {
      id: '2',
      name: 'Income Tax Return Filing',
      description: 'Professional income tax return filing services for individuals and businesses.',
      longDescription: 'We provide expert income tax return filing services for individuals, businesses (sole proprietors, partnerships, companies), and AOPs in Pakistan. Our service ensures accurate calculation of tax liabilities, proper documentation, and timely submission of returns to the Federal Board of Revenue (FBR). We stay updated with the latest income tax laws and regulations to optimize your tax position and ensure full compliance, helping you avoid penalties and audits.',
      img: 'https://taxcalculator.pk/assets/images/services/4.webp',
      link: '/services/income-tax-filing',
      category: 'tax-compliance'
    },
    {
      id: '3',
      name: 'Tax Appeals & Litigation',
      description: 'Expert representation in tax appeals and litigation matters.',
      longDescription: 'Navigating tax disputes requires specialized expertise. We offer professional representation in tax appeals and litigation before various tax authorities and appellate forums in Pakistan, including Commissioners (Appeals), Appellate Tribunals, and higher courts. We meticulously prepare your case, draft effective appeals and submissions, and represent your interests vigorously to achieve the best possible outcome in tax controversies.',
      img: 'https://taxcalculator.pk/assets/images/services/3.webp',
      link: '/services/tax-appeals',
      category: 'tax-litigation'
    },
    {
      id: '4',
      name: 'Drafting Legal Agreements & Contracts',
      description: 'Professional drafting and review of legal agreements and contracts.',
      longDescription: 'Properly drafted legal agreements are vital for secure business operations. We provide services for drafting, reviewing, and finalizing various legal agreements and contracts tailored to your specific needs under Pakistani law. This includes partnership deeds, joint venture agreements, employment contracts, service agreements, non-disclosure agreements, and other commercial contracts, ensuring they are legally sound and protect your interests.',
      img: 'https://taxcalculator.pk/assets/images/services/2.webp',
      link: '/services/legal-agreements',
      category: 'legal-services'
    },
    {
      id: '5',
      name: 'Tax Planning & Strategy',
      description: 'Strategic tax planning services to optimize your tax position.',
      longDescription: 'Effective tax planning is key to minimizing your tax burden while remaining compliant. We offer strategic tax planning services for individuals and businesses to analyze your financial activities, identify potential tax-saving opportunities, and develop customized strategies. Our proactive approach helps you structure your affairs in a tax-efficient manner, ensuring compliance with FBR regulations and maximizing your after-tax income or profits.',
      img: 'https://taxcalculator.pk/assets/images/services/5.webp',
      link: '/services/tax-planning',
      category: 'tax-planning'
    },
    {
      id: '6',
      name: 'Business Advisory Services',
      description: 'Comprehensive business advisory services to help your business grow.',
      longDescription: 'Beyond tax, we offer comprehensive business advisory services to support your growth and navigate challenges. This includes advice on business structure, financial planning and analysis, risk management, regulatory compliance (other than tax), and strategic decision-making. Our goal is to provide insights and support to help you build a sustainable and successful business in Pakistan.',
      img: 'https://taxcalculator.pk/assets/images/services/6.webp',
      link: '/services/business-advisory',
      category: 'business-advisory'
    },
    {
      id: '7',
      name: 'Personal Tax Planning',
      description: 'Tailored tax strategies for individuals to minimize liabilities and maximize savings.',
      longDescription: 'We provide personalized tax planning services for individuals, focusing on optimizing your tax position through effective use of deductions, credits, and investment strategies, ensuring compliance with the latest tax laws.',
      img: 'https://taxcalculator.pk/assets/images/services/personal-tax.webp',
      link: '/services/personal-tax-planning',
      category: 'tax-planning'
    },
    {
      id: '8',
      name: 'Corporate Tax Planning',
      description: 'Advanced tax strategies for corporations to improve financial efficiency.',
      longDescription: 'Our corporate tax planning services focus on developing sophisticated strategies to reduce tax burdens, manage tax risks, and enhance after-tax profits for businesses of all sizes, aligning with corporate objectives and regulatory requirements.',
      img: 'https://taxcalculator.pk/assets/images/services/corporate-tax.webp',
      link: '/services/corporate-tax-planning',
      category: 'tax-planning'
    },
    {
      id: '9',
      name: 'Sales Tax Compliance',
      description: 'Ensuring accurate and timely sales tax filing and compliance.',
      longDescription: 'We assist businesses with all aspects of sales tax compliance, including registration, calculation, return filing, and navigating complex sales tax regulations to ensure accuracy and avoid penalties.',
      img: 'https://taxcalculator.pk/assets/images/services/sales-tax.webp',
      link: '/services/sales-tax-compliance',
      category: 'compliance'
    },
    {
      id: '10',
      name: 'Withholding Tax Management',
      description: 'Managing withholding tax obligations for businesses and individuals.',
      longDescription: 'Our services cover the calculation, deduction, deposit, and filing of withholding tax statements, ensuring compliance with FBR regulations and minimizing risks associated with non-compliance.',
      img: 'https://taxcalculator.pk/assets/images/services/withholding-tax.webp',
      link: '/services/withholding-tax-management',
      category: 'compliance'
    },
    {
      id: '11',
      name: 'Financial Modeling & Projections',
      description: 'Creating robust financial models and projections for business decisions.',
      longDescription: 'We develop detailed financial models and projections to support business planning, investment decisions, budgeting, and performance analysis, providing clear insights into future financial performance.',
      img: 'https://taxcalculator.pk/assets/images/services/financial-modeling.webp',
      link: '/services/financial-modeling',
      category: 'business-advisory'
    },
    {
      id: '12',
      name: 'Business Valuation',
      description: 'Providing expert business valuation services for various purposes.',
      longDescription: 'Our business valuation services provide independent and well-supported assessments of business value for transactions, financing, disputes, and strategic planning, using appropriate valuation methodologies.',
      img: 'https://taxcalculator.pk/assets/images/services/business-valuation.webp',
      link: '/services/business-valuation',
      category: 'business-advisory'
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