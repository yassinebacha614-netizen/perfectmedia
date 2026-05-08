import { Button } from "@/components/ui/Button";

const stats = [
  { label: "Campaigns", value: "250+" },
  { label: "Client Retention", value: "98%" },
  { label: "Pipeline Generated", value: "$50M+" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-24 sm:py-32">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Fill Your Pipeline With{" "}
            <span className="text-brand-300">Qualified Leads</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
            Data-driven SEO, paid ads, and email campaigns that turn strangers into customers.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button variant="secondary" size="lg" href="#lead-magnet">
              Get Your Free Audit
            </Button>
            <Button variant="outline-light" size="lg" href="#case-studies">
              See Our Work
            </Button>
          </div>
        </div>

        {/* Stats grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-brand-300 sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
