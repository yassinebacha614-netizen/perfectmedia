import type { ServiceItem, PricingTier, CaseStudy } from "./types";

export const services: ServiceItem[] = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    description:
      "Dominate search rankings with data-driven SEO strategies that bring qualified traffic to your site.",
    icon: "Search",
    features: [
      "Technical SEO audits & fixes",
      "Keyword research & content strategy",
      "Link building & off-page SEO",
      "Local SEO optimization",
      "Monthly performance reports",
    ],
  },
  {
    id: "ads",
    title: "Paid Advertising",
    description:
      "Scale your lead pipeline with high-converting ad campaigns across Google, Meta, and LinkedIn.",
    icon: "Target",
    features: [
      "Multi-channel campaign management",
      "A/B tested ad creative & copy",
      "Landing page optimization",
      "Conversion tracking & analytics",
      "Weekly performance reviews",
    ],
  },
  {
    id: "email",
    title: "Email Marketing",
    description:
      "Nurture leads and drive repeat business with automated email sequences that convert.",
    icon: "Mail",
    features: [
      "Email automation workflows",
      "List segmentation & targeting",
      "A/B subject line testing",
      "Drip campaign management",
      "Performance analytics dashboard",
    ],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$2,500",
    description: "Perfect for small businesses ready to grow their lead pipeline.",
    features: [
      "One channel of your choice",
      "Monthly strategy session",
      "Basic analytics reporting",
      "Email support",
      "Monthly performance review",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$5,000",
    description: "For businesses serious about scaling their lead generation.",
    features: [
      "Two integrated channels",
      "Bi-weekly strategy sessions",
      "Advanced analytics & dashboards",
      "Priority email & chat support",
      "A/B testing on all campaigns",
      "Dedicated account manager",
    ],
    highlighted: true,
    cta: "Start Growing",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "Full-service lead generation for high-growth organizations.",
    features: [
      "All channels fully managed",
      "Weekly strategy sessions",
      "Custom analytics & reporting",
      "24/7 priority support",
      "Full-funnel optimization",
      "Dedicated growth team",
      "CRM integration & automation",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "saas-growth",
    title: "450% Lead Growth in 6 Months",
    client: "CloudSprint",
    industry: "B2B SaaS",
    challenge:
      "CloudSprint had a great product but struggled to generate qualified demo requests consistently.",
    solution:
      "Built a multi-channel strategy combining LinkedIn ads with a gated content funnel and automated email nurture sequences.",
    results: [
      { metric: "Demo requests", value: "+450%" },
      { metric: "Cost per lead", value: "-62%" },
      { metric: "Pipeline revenue", value: "+$2.4M" },
    ],
    testimonial:
      "The team transformed our lead generation from inconsistent to predictable. Our sales team now has a full pipeline every month.",
    testimonialName: "Sarah Chen",
    testimonialRole: "VP of Marketing, CloudSprint",
  },
  {
    id: "ecommerce-scale",
    title: "$1.2M Revenue from Email Flows",
    client: "Vera Home",
    industry: "D2C E-commerce",
    challenge:
      "Vera Home had a large email list but low engagement and almost no revenue from email marketing.",
    solution:
      "Redesigned their email program with behavioral segmentation, personalized product recommendations, and cart abandonment flows.",
    results: [
      { metric: "Email revenue", value: "+$1.2M" },
      { metric: "Click rate", value: "+210%" },
      { metric: "List growth", value: "+85%" },
    ],
    testimonial:
      "We went from dreading our email sends to them being our highest-ROI channel. The automated flows alone paid for the engagement in the first month.",
    testimonialName: "Marcus Rivera",
    testimonialRole: "CEO, Vera Home",
  },
  {
    id: "local-seo",
    title: "300% More Local Leads via SEO",
    client: "GreenLeaf Landscaping",
    industry: "Home Services",
    challenge:
      "GreenLeaf relied entirely on referrals and had zero online presence or search visibility.",
    solution:
      "Built a local SEO strategy including Google Business Profile optimization, location pages, review generation, and local link building.",
    results: [
      { metric: "Monthly leads", value: "+300%" },
      { metric: "Google rankings", value: "48 keywords (top 3)" },
      { metric: "Review rating", value: "4.8★ (from 3.2)" },
    ],
    testimonial:
      "We now get more leads in a week than we used to get in a month. Our phones ring steadily and it's all from Google searches.",
    testimonialName: "Dave Thompson",
    testimonialRole: "Owner, GreenLeaf Landscaping",
  },
];
