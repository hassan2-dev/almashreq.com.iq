import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const serviceIds = ['oils', 'filters', 'batteries', 'maintenance', 'recycling'] as const;

export function Services() {
  const { t } = useTranslation();

  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow">
        <h1 className="section-title mb-2">{t('services.title')}</h1>
        <p className="text-neutral-600 mb-10">
          {t('content.servicesIntro')}
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceIds.map((id) => (
            <article
              key={id}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <span className="text-xs font-semibold text-primary">{t(`content.servicesList.${id}.category`)}</span>
              <h2 className="font-bold text-xl text-neutral-800 mt-2">{t(`content.servicesList.${id}.title`)}</h2>
              <p className="text-neutral-600 mt-3">{t(`content.servicesList.${id}.description`)}</p>
              <Link to="/contact" className="mt-4 btn-primary inline-block">
                {t('buttons.requestQuote')}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
