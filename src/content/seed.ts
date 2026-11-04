/**
 * Default content, taken only from the Webpulse corporate profile PDF.
 * Used to render the site before Sanity is connected, and by scripts/seed.ts
 * to populate a fresh dataset.
 * In headlines, *text* marks the highlighted (grey/blue) words.
 */
import type { Page, SiteSettings } from "./types";

export const seedSettings: SiteSettings = {
  companyName: "Webpulse Network Services Limited",
  tagline: "Empowering growth through smart ICT solutions.",
  rcNumber: "RC 7381182",
  email: "webpulsenetworkservices@gmail.com",
  phone: "0806 016 3941",
  phoneHref: "tel:+2348060163941",
  offices: [
    { label: "Head office", shortName: "Kaduna", address: "YB 9, Tudun Wada, Kabala,\nKaduna State, Nigeria" },
    { label: "Branch office", shortName: "Dutse, Jigawa", address: "No. 99 Mechanic Village Road,\nDutse, Jigawa State, Nigeria" },
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Compliance", href: "#compliance" },
    { label: "FAQ", href: "#faq" },
  ],
  headerCta: { label: "Get in touch", href: "#contact" },
  footerServices: [
    { label: "ICT Project Management", href: "#services" },
    { label: "Networking & Cabling", href: "#services" },
    { label: "Web & Software", href: "#services" },
    { label: "Device Supply", href: "#services" },
    { label: "Printing & Publishing", href: "#services" },
    { label: "Procurement & Logistics", href: "#services" },
  ],
};

const k = (i: number) => `k${i}`;

export const seedHome: Page = {
  title: "Home",
  seoTitle: "Webpulse Network Services Limited — Smart ICT Solutions",
  seoDescription:
    "Webpulse Network Services Limited: ICT solutions, hardware and software supply, general contracting and project management. Kaduna and Jigawa, Nigeria.",
  sections: [
    {
      _key: "hero",
      _type: "heroSection",
      eyebrow: "ICT · Supply · Project Management",
      headline: "Empowering Growth *Through Smart* ICT Solutions",
      cta: { label: "Discover services", href: "#services" },
      intro:
        "We empower businesses and organizations through smart, scalable and sustainable ICT solutions, backed by reliable supply and procurement services across industries.",
      statValue: "2024",
      statEyebrow: "Incorporated · CAC RC 7381182",
      statLabel: "Built for modern\nbusiness needs",
      watermark: "Network",
      backgroundImage: { src: "/images/stock/hero-server-racks.jpg", alt: "" },
    },
    {
      _key: "intro",
      _type: "introSection",
      anchor: "intro",
      pillAccent: "CAC registered",
      pillText: "RC 7381182",
      headline: "Technology, Supply And Projects *Delivered With* Integrity",
      body: "We deliver high-quality ICT and general supply services through advanced technology, expert collaboration and a customer-centric approach that ensures long-term partnerships and impactful results.",
      metrics: [
        { _key: k(1), label: "Service lines", value: "09", caption: "From networks to printing" },
        { _key: k(2), label: "Offices", value: "02", caption: "Kaduna & Jigawa States" },
        { _key: k(3), label: "Compliance documents", value: "11", caption: "Registrations, clearances & filings" },
      ],
    },
    {
      _key: "about",
      _type: "aboutSection",
      anchor: "about",
      eyebrow: "Who we are",
      headline: "A Forward-Thinking *ICT & Contracting* Partner",
      body: "Webpulse Network Services Limited is a dynamic contracting company specializing in Information and Communication Technology, general supply and project management. We were established to deliver cutting-edge solutions tailored to modern business needs, with a commitment to excellence, integrity and customer satisfaction.",
      facts: [
        { _key: k(1), label: "Head office", value: "Kaduna" },
        { _key: k(2), label: "Branch office", value: "Dutse, Jigawa" },
        { _key: k(3), label: "Incorporated", value: "04.03.2024" },
      ],
      badgeText: "RC",
      image: { src: "/images/stock/about-patch-panel.jpg", alt: "Network rack with patch cables" },
      secondaryImage: { src: "/images/stock/about-network-cables.jpg", alt: "Blue network cables plugged into a patch panel" },
      badgeCaption: "7381182 · Corporate Affairs Commission",
      quote:
        "To become a leading provider of innovative ICT solutions and general contracting services in Nigeria and beyond, delivering value through technology, creativity and strategic execution.",
      quoteCaption: "Our vision",
    },
    {
      _key: "practices",
      _type: "practicesSection",
      anchor: "practices",
      eyebrow: "What we do",
      headline: "Three Practices. *One Accountable* Partner.",
      body: "From the network in your office to the laptops on your desks and the goods your project needs on site, we plan it, source it and deliver it under one contract.",
      image: { src: "/images/stock/practices-laptop-desk.jpg", alt: "Laptop, notepad and coffee on a desk" },
      items: [
        {
          _key: k(1),
          title: "ICT & Technology Services",
          focus: "Build & Deploy",
          points: [
            "Networking, IT project management and programming",
            "Software development, web design and internet development",
            "Graphic design, IT management, advertising and marketing",
            "Procurement and installation of IT solutions",
          ],
        },
        {
          _key: k(2),
          title: "Hardware & Software Supply",
          focus: "Equip & Support",
          points: [
            "Laptops, computers, printers and photocopy machines",
            "Mobile devices, phone and computer accessories",
            "Manuscript services and printing press solutions",
          ],
        },
        {
          _key: k(3),
          title: "General Contracting & Supply",
          focus: "Procure & Deliver",
          points: [
            "General supply of goods and services across sectors",
            "Procurement and logistics for projects of every size",
          ],
        },
      ],
    },
    {
      _key: "services",
      _type: "servicesSection",
      anchor: "services",
      eyebrow: "Services offered",
      headline: "Nine Ways We *Move Your* Business Forward.",
      countLabel: "Service lines under one roof",
      items: [
        ["ICT Project Management", "Planning, coordination and delivery of IT projects, from scope to handover."],
        ["IT Infrastructure Deployment", "Procurement and installation of IT services and related technology solutions."],
        ["Web Design & Software Development", "Corporate and e-commerce websites, programming and custom business software."],
        ["Computer & Mobile Device Supply", "Laptops, computers, printers, photocopy machines and mobile devices."],
        ["Networking & Structured Cabling", "Network infrastructure for SMEs and institutions."],
        ["Graphic Design & Digital Marketing", "Branding, advertising and digital campaign services."],
        ["Printing Services & Publishing", "Manuscript services and professional printing press solutions."],
        ["General Procurement & Logistics", "General supply of goods and services across sectors."],
        ["Hardware/Software Maintenance & Support", "Support and accessories for phones, computers and other digital devices."],
      ].map(([title, description], i) => ({ _key: k(i + 1), title, description, href: "#contact" })),
    },
    {
      _key: "values",
      _type: "valuesSection",
      eyebrow: "Core values",
      headline: "Principles Behind *Every* Delivery.",
      body: "Excellence, integrity and customer satisfaction are the commitments we were founded on. These five values shape how we work with every client, stakeholder and team member.",
      items: [
        { _key: k(1), icon: "bulb", title: "Innovation", tag: "Always evolving", description: "Continuously developing new solutions that meet changing market needs." },
        { _key: k(2), icon: "shield", title: "Integrity", tag: "Transparent dealings", description: "Operating with transparency and trust in all business dealings." },
        { _key: k(3), icon: "star", title: "Excellence", tag: "Highest standards", description: "Striving for the highest standards in service delivery." },
        { _key: k(4), icon: "person", title: "Customer Focus", tag: "Personal attention", description: "Prioritizing client needs with personalized attention." },
        { _key: k(5), icon: "people", title: "Collaboration", tag: "Strong partnerships", description: "Building strong partnerships with clients, stakeholders and team members." },
      ],
    },
    {
      _key: "projects",
      _type: "projectsSection",
      anchor: "projects",
      eyebrow: "Project portfolio",
      headline: "Selected Work *Across Networks,* Software & Supply",
      cta: { label: "Request portfolio", href: "#contact" },
      note: "Client names and project references available on request.",
      items: [
        ["Network Infrastructure for SMEs & Institutions", "Networking", "project-server-rack.jpg", "Server rack with status lights"],
        ["E-commerce & Corporate Website Development", "Web", "project-web-code-laptop.jpg", "Laptop showing web code"],
        ["Bulk Supply of Computers & Accessories", "Supply", "project-computer-lab.jpg", "Computer lab with rows of workstations"],
        ["Custom Software for Business Management", "Software", "project-software-code.jpg", "Source code on a monitor"],
        ["Branding & Digital Campaign Services", "Marketing", "project-print-swatches.jpg", "Printed colour swatch book"],
      ].map(([title, category, file, alt], i) => ({ _key: k(i + 1), title, category, image: { src: `/images/stock/${file}`, alt } })),
    },
    {
      _key: "compliance",
      _type: "complianceSection",
      anchor: "compliance",
      eyebrow: "Certifications & licenses",
      headline: "Registered, Cleared *And Ready* To Contract.",
      body: "Webpulse Network Services Limited is duly registered with the Corporate Affairs Commission and complies with the regulatory and industry standards required to operate across its areas of expertise.",
      facts: [
        { _key: k(1), label: "Company reg. no.", value: "RC 7381182" },
        { _key: k(2), label: "Registered under", value: "CAMA 2020" },
      ],
      items: [
        ["CAC", "Certificate of Incorporation", "Corporate Affairs Commission"],
        ["CAC", "Annual Return Filing Acknowledgement", "Corporate Affairs Commission"],
        ["NRS", "Tax Clearance Certificate", "Nigeria Revenue Service"],
        ["FIRS", "TIN / VAT Registration", "Federal Inland Revenue Service"],
        ["BPP", "Interim Registration Report", "Bureau of Public Procurement"],
        ["PenCom", "Pension Clearance Certificate", "National Pension Commission"],
        ["NSITF", "ECS Clearance Certificate", "Nigeria Social Insurance Trust Fund"],
        ["ITF", "Certificate of Compliance", "Industrial Training Fund"],
        ["SCUML", "Certificate of Registration", "Special Control Unit Against Money Laundering"],
        ["DPPMB", "Works Registration — Contractor", "Jigawa State Due Process & Project Monitoring Bureau"],
        ["MoCI", "Registration of Business Premises", "Jigawa State Ministry of Commerce & Industry"],
      ].map(([acronym, document, issuer], i) => ({ _key: k(i + 1), acronym, document, issuer })),
      ctaTitle: "Copies",
      ctaText: "Available on request for tenders & vendor onboarding",
      ctaHref: "#contact",
    },
    {
      _key: "faq",
      _type: "faqSection",
      anchor: "faq",
      eyebrow: "FAQ's",
      headline: "Answers *Before* You Ask.",
      body: "Can't find what you need? Call or email our team and we'll get back to you.",
      cta: { label: "Contact us", href: "#contact" },
      items: [
        {
          _key: k(1),
          question: "What does Webpulse do?",
          answer:
            "We are an ICT and general contracting company. We deliver networking and IT infrastructure, web and software development, hardware and software supply, graphic design and digital marketing, printing, and general procurement and logistics.",
        },
        {
          _key: k(2),
          question: "Where are you located?",
          answer:
            "Our head office is at YB 9, Tudun Wada, Kabala, Kaduna State. Our branch office is at No. 99 Mechanic Village Road, Dutse, Jigawa State.",
        },
        {
          _key: k(3),
          question: "Is Webpulse a registered company?",
          answer:
            "Yes. Webpulse Network Services Limited is incorporated with the Corporate Affairs Commission as a private company limited by shares, registration number RC 7381182. Copies of our registrations and clearances are available on request.",
        },
        {
          _key: k(4),
          question: "Can you supply computers and devices in bulk?",
          answer:
            "Yes. We supply laptops, computers, printers, photocopy machines, mobile devices and accessories, and bulk supply of computers and accessories is part of our project portfolio.",
        },
        {
          _key: k(5),
          question: "Can I see examples of past projects?",
          answer: "Yes. Details of selected clients and projects are available on request. Get in touch and tell us what you're planning.",
        },
      ],
    },
  ],
};
