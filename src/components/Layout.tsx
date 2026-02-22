import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { site } from '../config/site';
import { SocialIcons } from './SocialIcons';

const navPaths = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/services', key: 'nav.services' },
  { to: '/locations', key: 'nav.locations' },
  { to: '/partners', key: 'nav.partners' },
  { to: '/quality', key: 'nav.quality' },
  { to: '/contact', key: 'nav.contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language || 'ar';
    const dir = lang.startsWith('ar') ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="container-narrow flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo.svg" alt={t('site.companyNameShort')} className="h-10 w-10 object-contain" />
            <span className="font-bold text-lg text-neutral-800 hidden sm:inline">{t('site.companyNameShort')}</span>
          </Link>
          <nav className="flex items-center gap-1 overflow-x-auto py-2">
            {navPaths.map(({ to, key }) => (
              <Link
                key={to}
                to={to}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition ${
                  location.pathname === to
                    ? 'bg-primary text-white'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                {t(key)}
              </Link>
            ))}
            <div className="ml-2 flex shrink-0 gap-1 border-l border-neutral-200 pl-2">
              <button
                type="button"
                onClick={() => i18n.changeLanguage('ar')}
                className={`rounded px-2 py-1 text-sm font-medium ${i18n.language === 'ar' ? 'bg-primary text-white' : 'text-neutral-600 hover:bg-neutral-100'}`}
                aria-label="العربية"
              >
                ع
              </button>
              <button
                type="button"
                onClick={() => i18n.changeLanguage('en')}
                className={`rounded px-2 py-1 text-sm font-medium ${i18n.language === 'en' ? 'bg-primary text-white' : 'text-neutral-600 hover:bg-neutral-100'}`}
                aria-label="English"
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-neutral-200 bg-neutral-100 text-neutral-600">
        <div className="container-narrow py-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <img src="/logo.svg" alt="" className="h-12 w-12 mb-3" />
              <p className="font-semibold text-neutral-800">{t('site.companyName')}</p>
              <p className="text-sm mt-1">{t('site.founded', { year: site.foundedYear })}</p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-2">{t('footer.quickLinks')}</h3>
              <ul className="space-y-1 text-sm">
                {navPaths.map(({ to, key }) => (
                  <li key={to}>
                    <Link to={to} className="hover:text-primary transition">
                      {t(key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-2">{t('footer.contact')}</h3>
              <ul className="space-y-1 text-sm">
                <li><a href={`tel:${site.phones[0]?.replace(/\s/g, '')}`} className="hover:text-primary">{site.phones[0]}</a></li>
                <li><a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-2">{t('footer.followUs')}</h3>
              <SocialIcons />
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-neutral-200 text-center text-sm">
            <Link to="/privacy" className="hover:text-primary">{t('footer.privacy')}</Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="hover:text-primary">{t('footer.terms')}</Link>
            <p className="mt-2">{t('footer.copyright', { year: new Date().getFullYear(), company: t('site.companyNameShort') })}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
