import { Search, Target, Mail, Check } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="h-8 w-8" />,
  Target: <Target className="h-8 w-8" />,
  Mail: <Mail className="h-8 w-8" />,
};

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Everything you need to generate leads at scale
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl bg-brand-50 p-3 text-brand-600">
                {iconMap[service.icon]}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
