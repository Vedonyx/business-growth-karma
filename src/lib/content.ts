import assets from '@/data/brand-assets.json';

export const brand = {
  name: 'Business Growth Karma',
  founder: 'Shweta Shah',
  phone: '+91 99202 20513',
  phoneHref: 'tel:+919920220513',
  secondPhone: '+91 81499 20513',
  email: 'info@shwetashah.in',
  secondEmail: 'shwetavshah23@gmail.com',
  address: '207B, 2nd Floor, Rajgruhi Business Hub, near Go Pune City, Kondhwa Budruk, Pune, Maharashtra 411048',
  booking: 'https://shwetashah.in/book-call.html',
  linkedIn: 'https://www.linkedin.com/in/shweta-shah-digital-marketing/',
  ebook: 'https://drive.google.com/file/d/1smkkTmHFV1t0IuGaz352ib7rz_Rel67y/view',
  tedx: 'https://www.youtube.com/watch?v=GfbIvOl_wSA',
};

export const images = assets.images;
export const videos = assets.videos;
export function imageFor(fragment: string) {
  const key = fragment.replace(/\.[^.]+$/, '').toLowerCase();
  const image = images.find(image => decodeURIComponent(image.source).split('/').pop()?.replace(/\.[^.]+$/, '').toLowerCase() === key);
  if (!image) throw new Error(`Missing imported brand asset: ${fragment}`);
  return image.src;
}

export const pillars = [
  { id: 'setup', number: '01', icon: 'layers', title: 'The setup', subtitle: 'Build your foundation.', text: 'A conversion-focused landing page, connected to the Sales Psychology System. Every enquiry has a clear next step.', details: ['Conversion-focused landing pages', 'Lead capture and qualification', 'CRM and WhatsApp, SMS & email automation', '3I response and 3B nurturing workflows'] },
  { id: 'branding', number: '02', icon: 'spark', title: 'Strong branding', subtitle: 'Become the obvious choice.', text: 'Personal, company and product branding that builds recognition, credibility and trust before your first conversation.', details: ['Personal, product and company positioning', 'Organic content and social storytelling', 'AI and animated explainer videos', 'Authority and reputation building'] },
  { id: 'sales', number: '03', icon: 'people', title: 'A strong sales team', subtitle: 'Turn conversations into clients.', text: 'Regular training, clear SOPs and sales psychology help your team handle objections and convert qualified opportunities.', details: ['Sales psychology training for your team', 'Qualification and objection-handling frameworks', 'Sales SOPs and response processes', 'Lead tracking and conversion reviews'] },
  { id: 'leads', number: '04', icon: 'target', title: 'Quality lead generation', subtitle: 'Reach the right people.', text: 'Intent-led Google, Meta and LinkedIn campaigns that bring your business in front of buyers who need what you offer.', details: ['Google Search and intent-based advertising', 'LinkedIn targeting and relationship building', 'Meta campaigns and remarketing', 'Campaign tracking and lead quality optimisation'] },
];

export const plans = [
  { id: 'setup', tag: 'YOU HAVE THE TEAM', title: 'The Setup', price: '1,20,000', period: '/ year', text: 'Your team runs the marketing. We build the conversion foundation.', features: ['Conversion-focused landing page', 'Sales Psychology System integration', 'Lead capture and nurturing setup', 'Setup training and annual support'], bestFor: 'Businesses with an existing marketing and sales team.', cta: 'Build my foundation', featured: false },
  { id: 'training', tag: 'BUILD YOUR CAPABILITY', title: 'DIY + Training', price: '2,40,000', period: 'programme investment', text: 'Learn the framework. Equip your people. Own your growth.', features: ['Everything in The Setup', 'Branding implementation training', 'Sales team training and SOPs', 'Paid lead generation training', 'AI video training'], bestFor: 'Owners who want a capable, independent in-house team.', cta: 'Empower my team', featured: false },
  { id: 'done-for-you', tag: 'YOUR COMPLETE GROWTH PARTNER', title: 'Done for You', price: '4,00,000', period: '/ month', text: 'You focus on your business. We manage all four growth pillars.', features: ['Complete setup and system integration', 'Personal, company and product branding', 'Regular sales training and SOPs', 'Paid campaigns and ongoing optimisation'], bestFor: 'Business owners who want an expert team to manage the system.', cta: 'Let’s grow together', featured: true },
];

export const industries = [
  { id: 'real-estate', icon: 'building', label: 'Real estate & builders', short: 'Real estate', text: 'Turn qualified enquiries into meaningful site visits and property bookings.', clients: ['V3 Partners', 'Signature', 'Omkar', 'MPLI', 'Shiv Parbat'], result: 'Sold out in 4 months', detail: 'The V3 Partners project combined landing pages, Google Ads and a structured follow-up system.', proof: 'google-ads-for-Realestate.png', logos: ['v3-partners.png', 'signature.png', 'omkar.png', 'mpli.png', 'shiv-parbat.png'] },
  { id: 'manufacturing', icon: 'factory', label: 'Manufacturers & B2B', short: 'Manufacturing & B2B', text: 'Reach decision-makers, qualify business enquiries and reduce price objections.', clients: ['Swan Enterprises', 'NPS', 'Kirobo', 'SVM', 'The Cyber Tech'], result: '11–18% closing ratio', detail: 'Website and landing pages, Google Ads and sales-ready lead qualification across manufacturing and B2B accounts.', proof: '18-Leads-every-month-for-myB2B.png', logos: ['swan-enterprises.png', 'NPS.png', 'kirobo.png', 'svm.png', 'the-cyber-tech.png'] },
  { id: 'education', icon: 'graduate', label: 'Institutes & education', short: 'Education', text: 'Help students and parents understand your value before the counselling call.', clients: ['MPMI', 'Virani', 'Thakkar', 'Techskill', 'IBF'], result: '25–30% closing ratio', detail: 'Admission-focused landing pages, Google Ads and the Sales Psychology System, with fewer irrelevant student enquiries.', proof: 'I-am-Getting-150-Leads-every-Month.png', logos: ['mpmi.png', 'virani.png', 'thakkar.png', 'techskill.png', 'IBF.png'] },
  { id: 'consulting', icon: 'briefcase', label: 'Consultants & services', short: 'Consultants & B2C', text: 'Build authority, start better conversations and nurture high-value relationships.', clients: ['Avcore', 'Dkraft', 'Miracles Derma', 'KK International', 'LIC'], result: 'From enquiry to opportunity', detail: 'Landing pages, Google Ads, nurturing, explainer videos and branding for consultants, service providers and B2C brands.', proof: 'Every-Month-Closing-3-clients-for-my-Placement-service.png', logos: ['avcore.png', 'dkraft.png', 'miracles-derma.png', 'kk-internationla.png', 'LIC.png'] },
];

export const faqs = [
  { q: 'Will this work for my business?', a: 'The framework is built for businesses that generate enquiries and need to convert more of them into customers. We work with real estate, manufacturing, B2B, education, consultants and service businesses. A strategy discussion helps assess your offer, audience, deal value and existing process before recommending a plan.' },
  { q: 'What if I already have a marketing and sales team?', a: 'The Setup connects your existing team to a structured conversion system. DIY + Training adds implementation guidance, while Done for You gives you a team to manage all four pillars. Choose the level of support that fits your people and goals.' },
  { q: 'How quickly can we start seeing progress?', a: 'Initial Google Ads leads and LinkedIn conversations can begin in around 2–4 weeks. Actual timing depends on your market, budget, offer and implementation. The system supports urgent buyers and longer-term prospects with different nurturing paths.' },
  { q: 'What is the difference between hot and warm leads?', a: 'Hot leads have an immediate buying need. The framework is designed to support their journey over 24 hours to 25 days. Warm leads are still researching and can need 2–12 months of useful content, trust-building and consistent nurturing. These are planning windows, not guaranteed timelines.' },
  { q: 'Are advertising budgets included in the plans?', a: 'The figures shown are the service investments for the growth programmes. Media spend, applicable taxes, billing terms and the final scope should be confirmed directly with Business Growth Karma before starting.' },
  { q: 'What happens in the strategy session?', a: 'You discuss your annual sales goal, current lead sources, conversion gaps and team capabilities with Shweta Shah. The next step is a tailored roadmap and a recommendation for the right level of support. The booking page confirms the current appointment fee and available slots.' },
];
