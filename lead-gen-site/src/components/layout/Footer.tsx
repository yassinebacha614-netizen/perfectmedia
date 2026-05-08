import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { href: "#services", label: "SEO" },
    { href: "#services", label: "Paid Ads" },
    { href: "#services", label: "Email Marketing" },
    { href: "#lead-magnet", label: "Free Audit" },
  ],
  company: [
    { href: "#case-studies", label: "Case Studies" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ],
  contact: [
    { icon: Phone, text: "(555) 123-4567" },
    { icon: Mail, text: "hello@leadgenagency.com" },
    { icon: MapPin, text: "San Francisco, CA" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="container-site py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-brand-700">
              Pipeline<span className="text-brand-500">Pro</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              We help B2B companies fill their pipeline with qualified leads through SEO, paid ads,
              and email marketing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contact
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm text-gray-600">
                  <item.icon className="h-4 w-4 text-brand-500" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} PipelinePro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
