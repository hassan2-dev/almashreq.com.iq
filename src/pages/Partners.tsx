import { useTranslation } from 'react-i18next';
import { partners } from '../config/content';

export function Partners() {
  const { t } = useTranslation();

  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow">
        <h1 className="section-title mb-2">{t('partnersPage.title')}</h1>
        <p className="text-neutral-600 mb-10">
          {t('content.partnersIntro')}
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-md transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
            >
              {p.logo && (
                <div className="mb-6 flex h-24 w-full items-center justify-center rounded-lg bg-neutral-50 p-4">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              )}
              <h2 className="text-2xl font-bold text-neutral-800">{p.name}</h2>
              <p className="mt-2 text-neutral-600">
                {t(`content.partners.${p.name}.description`, { defaultValue: p.description })}
              </p>
              {p.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {t(`content.partnerTags.${tag}`, { defaultValue: tag })}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-neutral-500 text-sm mt-10">
          {t('content.partnersTagline')}
        </p>
      </div>
    </div>
  );
}
