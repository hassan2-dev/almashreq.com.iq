import { Link } from 'react-router-dom';
import { servicesList } from '../config/content';

export function Services() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow">
        <h1 className="section-title mb-2">الخدمات</h1>
        <p className="text-neutral-600 mb-10">
          نقدم توزيعاً بالجملة والمفرد ومراكز صيانة وحلولاً صناعية وبيئية.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((s) => (
            <article
              key={s.id}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <span className="text-xs font-semibold text-primary">{s.category}</span>
              <h2 className="font-bold text-xl text-neutral-800 mt-2">{s.title}</h2>
              <p className="text-neutral-600 mt-3">{s.description}</p>
              <Link to="/contact" className="mt-4 btn-primary inline-block">
                اطلب تسعيرة / اتصل
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
