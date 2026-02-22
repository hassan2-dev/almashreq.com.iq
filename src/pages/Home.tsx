import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { site } from '../config/site';
import { locations, partners } from '../config/content';

const serviceIds = ['oils', 'filters', 'batteries', 'maintenance', 'recycling'] as const;

export function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-neutral-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="container-narrow relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            {t('site.companyNameShort')}
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
            {t('site.tagline')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${site.phones[0]?.replace(/\s/g, '')}`} className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              {t('buttons.callNow')}
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-primary hover:bg-neutral-100">
              {t('buttons.whatsapp')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container-narrow">
          <h2 className="section-title mb-6">{t('home.aboutTitle')}</h2>
          <p className="text-neutral-600 leading-relaxed max-w-3xl whitespace-pre-line">
            {t('content.aboutText')}
          </p>
          <Link to="/about" className="mt-4 inline-block font-semibold text-primary hover:underline">
            {t('buttons.readMore')}
          </Link>
        </div>
      </section>

      <section className="py-14 bg-neutral-50">
        <div className="container-narrow">
          <h2 className="section-title mb-8">{t('home.servicesTitle')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceIds.map((id) => (
              <div
                key={id}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <span className="text-xs font-semibold text-primary">{t(`content.servicesList.${id}.category`)}</span>
                <h3 className="font-bold text-lg text-neutral-800 mt-1">{t(`content.servicesList.${id}.title`)}</h3>
                <p className="text-neutral-600 text-sm mt-2">{t(`content.servicesList.${id}.description`)}</p>
                <Link
                  to="/contact"
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  {t('buttons.requestQuote')}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services" className="btn-primary">
              {t('buttons.viewAllServices')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container-narrow">
          <h2 className="section-title mb-6">{t('home.qualityTitle')}</h2>
          <p className="text-neutral-600 max-w-2xl">
            {t('home.qualityIntro')}
          </p>
          <Link to="/quality" className="mt-4 inline-block font-semibold text-primary hover:underline">
            {t('buttons.qualityPolicy')}
          </Link>
        </div>
      </section>

      <section className="py-14 bg-primary/5 border-y border-primary/10">
        <div className="container-narrow grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-bold text-xl text-neutral-800 mb-2">{t('home.visionTitle')}</h3>
            <p className="text-neutral-600">{t('content.vision')}</p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-neutral-800 mb-2">{t('home.missionTitle')}</h3>
            <p className="text-neutral-600">{t('content.mission')}</p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-neutral-50">
        <div className="container-narrow">
          <h2 className="section-title mb-8">{t('home.locationsTitle')}</h2>
          <ul className="space-y-4">
            {locations.slice(0, 3).map((loc) => (
              <li key={loc.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white p-4 shadow-sm">
                <div>
                  <span className="text-xs text-primary font-semibold">{t(`content.locations.${loc.id}.type`)}</span>
                  <p className="font-semibold text-neutral-800">{t(`content.locations.${loc.id}.name`)}</p>
                  <p className="text-sm text-neutral-600">{t(`content.locations.${loc.id}.address`)}</p>
                </div>
                <div className="flex gap-2">
                  <a href={site.whatsappUrl} className="text-sm text-green-600 hover:underline">{t('buttons.whatsapp')}</a>
                  <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">{t('buttons.directions')}</a>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Link to="/locations" className="btn-primary">
              {t('buttons.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container-narrow">
          <h2 className="section-title mb-8">{t('home.partnersTitle')}</h2>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-6 shadow-md transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                {p.logo && (
                  <div className="mb-4 flex min-h-[5rem] w-full items-center justify-center rounded-xl bg-neutral-50 p-4">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-h-16 w-full max-w-[8rem] object-contain"
                    />
                  </div>
                )}
                <span className="font-bold text-neutral-800">{p.name}</span>
                <span className="mt-1 text-center text-sm text-neutral-500">
                  {t(`content.partners.${p.name}.description`, { defaultValue: p.description })}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-neutral-500 text-sm">
            {t('home.partnersTagline')}
          </p>
          <div className="mt-4 text-center">
            <Link to="/partners" className="font-semibold text-primary hover:underline">
              {t('buttons.viewPartners')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-primary text-white">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold mb-4">{t('home.ctaTitle')}</h2>
          <p className="mb-6 opacity-95">
            {t('home.ctaIntro')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${site.phones[0]?.replace(/\s/g, '')}`} className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              {t('buttons.call')}
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-primary hover:bg-neutral-100">
              {t('buttons.whatsapp')}
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              {t('buttons.contactForm')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
