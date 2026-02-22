import { useTranslation } from 'react-i18next';

const timelineKeys = ['1992', '2000', '2010', 'current'] as const;
const timelineYears: Record<string, number> = { '1992': 1992, '2000': 2000, '2010': 2010, current: new Date().getFullYear() };

export function About() {
  const { t } = useTranslation();

  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow">
        <h1 className="section-title mb-2">{t('about.title')}</h1>
        <p className="text-neutral-500 mb-10">{t('site.companyName')}</p>

        <div className="prose prose-neutral max-w-none mb-12">
          <p className="text-neutral-600 leading-relaxed whitespace-pre-line">
            {t('content.aboutText')}
          </p>
        </div>

        <h2 className="font-bold text-xl text-neutral-800 mb-4">{t('about.timelineTitle')}</h2>
        <ul className="space-y-4 mb-12">
          {timelineKeys.map((key) => (
            <li key={key} className="flex gap-4 items-start">
              <span className="font-bold text-primary shrink-0 w-16">{timelineYears[key]}</span>
              <span className="text-neutral-600">{t(`content.timeline.${key}`)}</span>
            </li>
          ))}
        </ul>

        <div className="grid gap-8 md:grid-cols-2 rounded-xl bg-neutral-50 p-8">
          <div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">{t('home.visionTitle')}</h3>
            <p className="text-neutral-600">{t('content.vision')}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">{t('home.missionTitle')}</h3>
            <p className="text-neutral-600">{t('content.mission')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
