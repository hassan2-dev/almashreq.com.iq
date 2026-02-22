import { Link, useLocation } from 'react-router-dom';
import { site } from '../config/site';
import { SocialIcons } from './SocialIcons';

const navItems = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'من نحن' },
  { to: '/services', label: 'الخدمات' },
  { to: '/locations', label: 'الفروع ومراكز الصيانة' },
  { to: '/partners', label: 'شركاء العمل' },
  { to: '/quality', label: 'الجودة والأمان' },
  { to: '/contact', label: 'تواصل معنا' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="container-narrow flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo.svg" alt={site.companyNameShort} className="h-10 w-10 object-contain" />
            <span className="font-bold text-lg text-neutral-800 hidden sm:inline">{site.companyNameShort}</span>
          </Link>
          <nav className="flex items-center gap-1 overflow-x-auto py-2">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition ${
                  location.pathname === to
                    ? 'bg-primary text-white'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-neutral-200 bg-neutral-100 text-neutral-600">
        <div className="container-narrow py-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <img src="/logo.svg" alt="" className="h-12 w-12 mb-3" />
              <p className="font-semibold text-neutral-800">{site.companyName}</p>
              <p className="text-sm mt-1">تأسست {site.foundedYear}</p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-2">روابط سريعة</h3>
              <ul className="space-y-1 text-sm">
                {navItems.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="hover:text-primary transition">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-2">تواصل</h3>
              <ul className="space-y-1 text-sm">
                <li><a href={`tel:${site.phones[0]?.replace(/\s/g, '')}`} className="hover:text-primary">{site.phones[0]}</a></li>
                <li><a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-2">تابعنا</h3>
              <SocialIcons />
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-neutral-200 text-center text-sm">
            <Link to="/privacy" className="hover:text-primary">سياسة الخصوصية</Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="hover:text-primary">الشروط والأحكام</Link>
            <p className="mt-2">© {new Date().getFullYear()} {site.companyNameShort}. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
