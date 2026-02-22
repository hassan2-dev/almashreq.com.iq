import { useEffect, useState } from 'react';
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

function NavLinks({
  location,
  t,
  onLinkClick,
  className = '',
}: {
  location: ReturnType<typeof useLocation>;
  t: (key: string) => string;
  onLinkClick?: () => void;
  className?: string;
}) {
  return (
    <>
      {navPaths.map(({ to, key }) => (
        <Link
          key={to}
          to={to}
          onClick={onLinkClick}
          className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition ${
            location.pathname === to
              ? 'bg-primary text-white'
              : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
          } ${className}`}
        >
          {t(key)}
        </Link>
      ))}
    </>
  );
}

function LangSwitcher({
  i18n,
  className = '',
  onSwitch,
}: {
  i18n: { language: string; changeLanguage: (lng: string) => void };
  className?: string;
  onSwitch?: () => void;
}) {
  return (
    <div className={`flex shrink-0 gap-1 ${className}`}>
      <button
        type="button"
        onClick={() => {
          i18n.changeLanguage('ar');
          onSwitch?.();
        }}
        className={`rounded px-2 py-1 text-sm font-medium ${i18n.language === 'ar' || i18n.language?.startsWith?.('ar') ? 'bg-primary text-white' : 'text-neutral-600 hover:bg-neutral-100'}`}
        aria-label="العربية"
      >
        ع
      </button>
      <button
        type="button"
        onClick={() => {
          i18n.changeLanguage('en');
          onSwitch?.();
        }}
        className={`rounded px-2 py-1 text-sm font-medium ${i18n.language === 'en' || i18n.language?.startsWith?.('en') ? 'bg-primary text-white' : 'text-neutral-600 hover:bg-neutral-100'}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const lang = i18n.language || 'ar';
    const dir = lang.startsWith('ar') ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
  }, [i18n.language]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen flex flex-col ">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="container-narrow flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
            <img src="/logo.svg" alt={t('site.companyNameShort')} className="h-10 w-10 object-contain" />
            <span className="font-bold text-lg text-neutral-800 hidden sm:inline">{t('site.companyNameShort')}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-2">
            <NavLinks location={location} t={t} />
            <div className="ms-2 flex shrink-0 gap-1 border-s border-neutral-200 ps-2">
              <LangSwitcher i18n={i18n} />
            </div>
          </nav>

          {/* Mobile: burger button */}
          <div className="flex items-center gap-2 lg:hidden ">
            <LangSwitcher i18n={i18n} className="border-s border-neutral-200 ps-2" />
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 top-16 z-40 bg-black/50 transition-opacity lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          aria-hidden={!menuOpen}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`fixed top-16 bottom-0 left-0 rtl:left-auto rtl:right-0 z-50 w-full max-w-sm bg-white border-s   transition-transform duration-300 ease-out lg:hidden ${
            menuOpen ? 'translate-x-0' : '-translate-x-full rtl:translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-2 p-4 overflow-y-auto bg-white min-h-full w-full">
            <NavLinks
              location={location}
              t={t}
              onLinkClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-medium bg-white text-black"
            />
            <div className="mt-4 pt-4  rounded-xl p-4 shadow-sm border ">
              <span className="block px-0 py-2 text-xs font-semibold text-black uppercase tracking-wider">
                {t('footer.followUs')}
              </span>
              <LangSwitcher i18n={i18n} onSwitch={() => setMenuOpen(false)} className="mt-2 px-0" />
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
