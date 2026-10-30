"use client";

import { useState } from "react";
import { brand, imageFor, industries, videos } from "@/lib/content";
import MediaOverlay from "./MediaOverlay";
import { useBooking } from "./SiteFrame";

export function ClientLogoRail() {
  const clients = industries.flatMap(industry => industry.logos.map((source, index) => ({ source, name: industry.clients[index] })));
  return <section className="clone-client-rail" aria-label="Businesses we have worked with"><h2 className="clone-rail-title">Our Clients</h2><div className="clone-logo-window"><div className="clone-logo-track">{[0, 1].map(copy => <div className="clone-logo-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{clients.map(client => <div className="clone-client-logo" key={client.source}><img src={imageFor(client.source)} alt={client.name} width="140" height="65" loading="lazy" /></div>)}</div>)}</div></div></section>;
}

export function PurposeSection() {
  return <section className="clone-extra-section" id="purpose"><div className="clone-section-header"><div className="section-badge">OUR WHY / HOW / WHAT</div><h2>Growth With <span className="gradient-text">A Clear Purpose</span></h2><p>Every part of your marketing and sales should work towards the same goal.</p></div><div className="clone-purpose-layout"><div className="clone-purpose-diagram" aria-label="Why drives how, and how drives what"><div className="clone-purpose-orbit orbit-what"><span>WHAT</span></div><div className="clone-purpose-orbit orbit-how"><span>HOW</span></div><div className="clone-purpose-orbit orbit-why"><strong>WHY</strong><i className="fa-solid fa-bullseye" /></div></div><div className="clone-purpose-cards">{[
    { icon: "fa-bullseye", label: "WHY — THE PURPOSE", title: "Your Annual Sales Goal", text: "We believe in ROI-driven marketing and sales that help business owners work towards their annual sales goals." },
    { icon: "fa-gears", label: "HOW — THE PROCESS", title: "The Four-Pillar Strategy", text: "A connected framework designed to improve ROI while saving your team time, money and effort." },
    { icon: "fa-chart-line", label: "WHAT — THE RESULT", title: "Digital Marketing That Connects to Sales", text: "ROI-focused digital marketing, sales psychology, automation and AI videos working together for your business." },
  ].map(item => <article className="clone-glass-card clone-purpose-card" key={item.label}><div className="clone-icon"><i className={"fa-solid " + item.icon} /></div><div><span className="clone-small-label">{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>;
}

export function FourPillarsSection() {
  const [reference, setReference] = useState(false);
  const diagram = "/brand/business-sales-growth-wide.png";

  return (
    <section className="clone-extra-section clone-pillars-section" id="framework">
      <div className="clone-section-header">
        <div className="section-badge">THE FOUR PILLARS STRATEGY</div>
        <h2>A Strong Foundation for <span className="gradient-text">Business Sales Growth</span></h2>
        <p>The setup. Strong branding. A strong sales team. Quality lead generation.</p>
      </div>
      <button
        type="button"
        className="clone-framework-visual"
        onClick={() => setReference(true)}
        aria-label="View the complete Business Sales Growth diagram"
        aria-haspopup="dialog"
      >
        <img
          src={diagram}
          alt="Business Sales Growth supported by four golden pillars: The Setup, Strong Branding, Strong Sales Team, and Quality Lead Generation. Each pillar explains the service and its benefit. Done-for-you service investment starts from Rs. 10k to 4 Lakh."
          width="1659"
          height="948"
          loading="lazy"
        />
      </button>
      <button type="button" className="clone-action clone-reference-action" onClick={() => setReference(true)}>
        View the Complete Framework <i className="fa-solid fa-expand" aria-hidden="true" />
      </button>
      {reference && (
        <MediaOverlay
          src={diagram}
          title="The complete four-pillar business sales growth framework"
          onClose={() => setReference(false)}
        />
      )}
    </section>
  );
}

export function LeadJourneysSection() {
  const openBooking = useBooking();
  const growthPillars = ["The Setup", "Organic Marketing", "Sales Training", "Quality Lead Generation"];

  return (
    <section className="clone-extra-section" id="lead-journeys">
      <div className="clone-section-header">
        <div className="section-badge">TWO TYPES OF LEADS. TWO CLEAR JOURNEYS.</div>
        <h2>Convert More <span className="gradient-text">Hot &amp; Warm Leads</span></h2>
        <p>Your hard-earned leads deserve a system that supports them at every stage.</p>
      </div>
      <div className="clone-two-cards">
        <article className="clone-glass-card clone-journey-card">
          <div className="clone-icon"><i className="fa-solid fa-bolt" /></div>
          <span className="clone-small-label">HOT LEADS / READY TO BUY</span>
          <h3>24 Hours to 25 Days</h3>
          <p>Help buyers with an immediate need move from enquiry to a meaningful sales conversation. The 3I formula connects engagement, team notification and a timely call.</p>
          <div className="clone-flow"><span>Instant Engage</span><i className="fa-solid fa-arrow-right" /><span>Instant Notify</span><i className="fa-solid fa-arrow-right" /><span>Instant Call</span></div>
        </article>
        <article className="clone-glass-card clone-journey-card">
          <div className="clone-icon"><i className="fa-solid fa-seedling" /></div>
          <span className="clone-small-label">WARM LEADS / STILL RESEARCHING</span>
          <h3>2 Months to 12 Months</h3>
          <p>Build a relationship while prospects consider their options. Useful content, value-based nurturing and the 3B formula help you stay relevant throughout the buying journey.</p>
          <div className="clone-flow"><span>Build Trust</span><i className="fa-solid fa-arrow-right" /><span>Build Credibility</span><i className="fa-solid fa-arrow-right" /><span>Build Relationships</span></div>
        </article>
      </div>
      <p className="clone-section-note">Indicative buying journeys. Actual conversion timing depends on the business, audience, offer and implementation.</p>
      <div className="clone-goal-prompt" id="growth-solutions" aria-labelledby="growth-solutions-title">
        <h3 id="growth-solutions-title">Choose the Right Solution for Your Business Sales Growth</h3>
        <p>Select the support that best fits your business goals, team capabilities, and growth ambitions.</p>
        <p className="clone-goal-pillars-heading">We strengthen your 4 Pillars of Business Growth</p>
        <ul className="clone-goal-pillars">
          {growthPillars.map(pillar => <li key={pillar}>{pillar}</li>)}
        </ul>
        <button type="button" className="clone-action" onClick={openBooking}>
          Discuss My Sales Goal <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

export function ServicesDetail() {
  const explainer = videos.find(video => video.id === "5qnq9h9zpv")!;
  const benefits = [
    ["Better Closing Conversations", "A connected landing page, qualification process and sales system."],
    ["Fewer Irrelevant Leads", "Clear positioning and intent-based qualification for a better fit."],
    ["More Qualified Prospects", "Reach relevant buyers and decision-makers across the right channels."],
    ["Earlier Objection Handling", "Help prospects understand your value before the sales call."],
    ["Faster Response with 3I", "Aim to engage in a minute, notify in two and connect with a call in five."],
    ["Reconnect with Older Leads", "Use the 3B formula to build trust, credibility and relationships."],
    ["Value-Based Nurturing", "Share useful content throughout the buying journey."],
    ["Custom Lead Magnets", "Give suitable prospects a valuable reason to engage."],
    ["Clear Lead Tracking", "Har lead ka hisaab. Keep every enquiry visible to your team."],
  ];
  return <><section className="clone-extra-section" id="setup"><div className="clone-section-header"><div className="section-badge">THE SALES PSYCHOLOGY SYSTEM</div><h2>Connect Your Leads to <span className="gradient-text">A Better Sales Journey</span></h2><p>Developed by Shweta Shah in 2021 to bring response, qualification and nurturing into one connected process.</p></div><div className="clone-system-video clone-glass-card"><video controls preload="none" poster={explainer.poster}><source src={explainer.src} type="video/mp4" /><track kind="captions" /></video><p>Watch Shweta explain the Sales Psychology System.</p></div><div className="clone-benefits-grid">{benefits.map(([title, text], index) => <article className="clone-glass-card" key={title}><span className="clone-small-label">BENEFIT 0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section><section className="clone-extra-section" id="leads"><div className="clone-section-header"><div className="section-badge">OUR LEAD GENERATION SERVICES</div><h2>The Right Channels. <span className="gradient-text">A Connected System.</span></h2></div><div className="clone-three-cards">{[
    { icon: "fa-brands fa-google", title: "Google Ads Lead Generation", text: "Reach prospects actively searching for your solution. Intent-based keywords, relevant landing pages, qualification and tracking connect the enquiry to the sales process." },
    { icon: "fa-brands fa-linkedin", title: "LinkedIn Lead Generation", text: "Connect with B2B decision-makers through precise targeting, thoughtful messaging, authority building and nurturing. Build relationships around the way your buyers think and decide." },
    { icon: "fa-solid fa-video", title: "Branding, AI & Animated Videos", text: "Build personal, company and product recognition through organic content, Meta campaigns, AI videos and animated explainers. Support your sales team with training and clear SOPs." },
  ].map(item => <article className="clone-glass-card" key={item.title}><div className="clone-icon"><i className={item.icon} /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section></>;
}

export function ShwetaStorySection() {
  return <section className="clone-extra-section"><div className="clone-section-header"><div className="section-badge">ABOUT SHWETA SHAH</div><h2>Marketing, Sales &amp; <span className="gradient-text">Buyer Psychology</span></h2><p>Helping business owners connect the first enquiry with the final decision.</p></div><div className="clone-two-cards"><article className="clone-glass-card"><div className="clone-icon"><i className="fa-solid fa-user-tie" /></div><h3>Your Digital Marketing ROI Strategist</h3><p>Shweta Vallabh Shah founded Business Growth Karma to help businesses generate relevant leads and convert more of them into customers. Based in Pune, the agency works with manufacturers, B2B businesses, real estate companies, educational institutes and consultants across India.</p><p>A graduate of Mithibai College in Mumbai and a Google Certified Professional, Shweta brings digital marketing, automation and buyer psychology into one business growth approach.</p></article><article className="clone-glass-card"><div className="clone-icon"><i className="fa-solid fa-microphone" /></div><h3>Why Do People Really Buy?</h3><p>In her TEDx talk, Shweta explores the psychology behind buying decisions, including emotion, perception, trust and social influence. This understanding also shapes her Sales Psychology System and her work with business owners.</p><p>She is the author of <strong>LinkedIn for Business</strong> and conducts business education sessions about lead generation and sales.</p><a className="clone-action" href={brand.tedx} target="_blank" rel="noreferrer">Watch the TEDx Talk <i className="fa-solid fa-play" /></a></article></div></section>;
}

export function LearningSection() {
  return <section className="clone-extra-section" id="learning"><div className="clone-section-header"><div className="section-badge">LEARN, IMPLEMENT &amp; GROW</div><h2>Build Your <span className="gradient-text">Business Knowledge</span></h2></div><div className="clone-two-cards"><article className="clone-glass-card clone-learning-card"><img src={imageFor("Copy-of-Copy-of-Linked-In-for-Business-by-Shweta-Shah.jpg")} alt="LinkedIn for Business by Shweta Shah" width="625" height="1000" loading="lazy" /><div><h3>LinkedIn for Business</h3><p>21 chapters for 21 days. Explore Shweta Shah’s e-book and take a practical first step towards understanding B2B lead generation.</p><a href={brand.ebook} target="_blank" rel="noreferrer" className="clone-action">Get the Free E-book <i className="fa-solid fa-arrow-right" /></a></div></article><article className="clone-glass-card"><div className="clone-icon"><i className="fa-solid fa-chalkboard-user" /></div><h3>Webinars, Seminars &amp; Team Training</h3><p>Explore training on lead generation, sales psychology, branding and marketing. The team can help you find the next suitable education session and the right support for your in-house team.</p><p>Contact us for current dates, slots and availability.</p><a href={"mailto:" + brand.email + "?subject=Business%20education%20session%20enquiry"} className="clone-action">Ask About the Next Session <i className="fa-solid fa-arrow-right" /></a></article></div></section>;
}
