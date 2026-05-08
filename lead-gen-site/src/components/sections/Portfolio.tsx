import { Star } from "lucide-react";
import { caseStudies } from "@/lib/data";

export function Portfolio() {
  return (
    <section id="case-studies" className="bg-white py-20 sm:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Real results from real clients
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Card header */}
              <div className="border-b border-gray-100 p-6 pb-4">
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {study.industry}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-gray-900">
                  {study.title}
                </h3>
              </div>

              {/* Challenge & Solution */}
              <div className="flex-1 space-y-4 p-6 pb-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Challenge
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Solution
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {study.solution}
                  </p>
                </div>

                {/* Results grid */}
                <div className="grid grid-cols-3 gap-3 rounded-lg bg-brand-50 p-4">
                  {study.results.map((result) => (
                    <div key={result.metric} className="text-center">
                      <div className="text-sm font-bold text-brand-700">
                        {result.value}
                      </div>
                      <div className="mt-0.5 text-xs text-gray-500">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="border-t border-gray-100 p-6 pt-4">
                <div className="mb-1 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-2 text-sm leading-relaxed text-gray-600">
                  &ldquo;{study.testimonial}&rdquo;
                </blockquote>
                <div className="mt-3">
                  <div className="text-sm font-semibold text-gray-900">
                    {study.testimonialName}
                  </div>
                  <div className="text-xs text-gray-500">
                    {study.testimonialRole}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
