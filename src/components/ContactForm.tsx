'use client';

import { useEffect, useState } from 'react';
import Icon from './Icon';
import { brand } from '@/lib/content';

export default function ContactForm() {
  const [plan, setPlan] = useState('not-sure');
  const [prepared, setPrepared] = useState(false);
  const [emailHref, setEmailHref] = useState('');
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('plan');
    if (value && ['setup', 'training', 'done-for-you'].includes(value)) setPlan(value);
  }, []);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Growth enquiry from ${data.get('name')} — ${data.get('company')}`;
    const body = `Hi Shweta,\n\nI'd like to discuss growth for my business.\n\nName: ${data.get('name')}\nBusiness: ${data.get('company')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nInterested in: ${plan}\nAnnual sales goal: ${data.get('goal')}\n\nAbout my business and goals:\n${data.get('message')}\n`;
    const href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailHref(href); setPrepared(true);
    window.location.href = href;
  }
  return <form className="contact-form" onSubmit={submit}><div className="form-topline"><span className="micro">LET’S GET TO KNOW YOUR BUSINESS</span><Icon name="spark" size={20} /></div><h2>Tell us what’s <em>next.</em></h2><div className="form-grid"><label>Your name <span>*</span><input name="name" autoComplete="name" placeholder="Your full name" required maxLength={100} /></label><label>Business name <span>*</span><input name="company" autoComplete="organization" placeholder="Your company" required maxLength={150} /></label><label>Email address <span>*</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label><label>Phone number <span>*</span><input name="phone" type="tel" autoComplete="tel" placeholder="+91" required pattern="[+0-9 ()\-]{7,20}" maxLength={20} /></label><label>Interested in<select name="plan" value={plan} onChange={e => setPlan(e.target.value)}><option value="not-sure">Help me choose</option><option value="setup">The Setup — ₹1,20,000/year</option><option value="training">DIY + Training — ₹2,40,000</option><option value="done-for-you">Done for You — ₹4,00,000/month</option></select></label><label>Annual sales goal<select name="goal" defaultValue=""><option value="" disabled>Select your goal</option><option>Under ₹1 crore</option><option>₹1–5 crore</option><option>₹5–10 crore</option><option>₹10 crore and above</option><option>Let’s discuss</option></select></label><label className="full-width">What would you like to achieve? <span>*</span><textarea name="message" rows={4} placeholder="Tell us about your business, your current challenges and the growth you have in mind." required minLength={10} maxLength={5000} /></label></div><p className="form-note">This opens a ready-to-send enquiry in your email app. Your details are sent only when you send the email.</p><button type="submit" className="button">Prepare my enquiry <Icon name="diagonal" size={18} /></button>{prepared && <div className="form-feedback" role="status"><Icon name="check" size={19} /><div><strong>Your enquiry is ready in your email app.</strong><p>Send the email to complete your enquiry. If your email app didn’t open, <a href={emailHref}>open the draft again</a> or email <a href={`mailto:${brand.email}`}>{brand.email}</a>.</p></div></div>}</form>;
}
