import { useTranslation } from 'react-i18next';
import { site } from '../config/site';

export function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow max-w-3xl">
        <h1 className="section-title mb-6">{t('privacy.title')}</h1>
        <div className="prose prose-neutral text-neutral-600 space-y-4">
          <p>
            {t('privacy.intro', { company: t('site.companyNameShort') })}
          </p>
          <h2 className="font-bold text-neutral-800 text-lg">{t('privacy.infoWeCollect')}</h2>
          <p>
            {t('privacy.infoWeCollectText')}
          </p>
          <h2 className="font-bold text-neutral-800 text-lg">{t('privacy.useOfInfo')}</h2>
          <p>
            {t('privacy.useOfInfoText')}
          </p>
          <h2 className="font-bold text-neutral-800 text-lg">{t('privacy.updates')}</h2>
          <p>
            {t('privacy.updatesText')}
          </p>
          <p className="pt-4">
            {t('privacy.inquiries')} <a href={`mailto:${site.email}`} className="text-primary hover:underline">{site.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
