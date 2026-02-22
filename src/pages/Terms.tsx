import { useTranslation } from 'react-i18next';
import { site } from '../config/site';

export function Terms() {
  const { t } = useTranslation();

  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow max-w-3xl">
        <h1 className="section-title mb-6">{t('terms.title')}</h1>
        <div className="prose prose-neutral text-neutral-600 space-y-4">
          <p>
            {t('terms.intro', { company: t('site.companyName') })}
          </p>
          <h2 className="font-bold text-neutral-800 text-lg">{t('terms.useOfSite')}</h2>
          <p>
            {t('terms.useOfSiteText')}
          </p>
          <h2 className="font-bold text-neutral-800 text-lg">{t('terms.productsServices')}</h2>
          <p>
            {t('terms.productsServicesText')}
          </p>
          <h2 className="font-bold text-neutral-800 text-lg">{t('terms.externalLinks')}</h2>
          <p>
            {t('terms.externalLinksText')}
          </p>
          <p className="pt-4">
            {t('terms.inquiries')} <a href={`mailto:${site.email}`} className="text-primary hover:underline">{site.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
