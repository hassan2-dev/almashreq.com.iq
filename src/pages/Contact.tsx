import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { site } from '../config/site';
import { SocialIcons } from '../components/SocialIcons';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError(t('contact.sendError'));
      return;
    }

    setLoading(true);
    setError(null);
    const form = e.currentTarget;

    try {
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      if (res.status !== 200) {
        setError(t('contact.sendError'));
        return;
      }
      setSubmitted(true);
      form.reset();
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'status' in err) {
        const status = (err as { status?: number }).status;
        if (status === 400) {
          setError(t('contact.sendError400'));
          return;
        }
      }
      setError(t('contact.sendError'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow">
        <h1 className="section-title mb-2">{t('contact.title')}</h1>
        <p className="text-neutral-600 mb-10">
          {t('contact.intro')}
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-bold text-lg text-neutral-800 mb-4">{t('contact.contactInfo')}</h2>
            <ul className="space-y-3 text-neutral-600">
              <li>
                <span className="font-semibold text-neutral-800">{t('contact.email')}:</span>{' '}
                <a href={`mailto:${site.email}`} className="text-primary hover:underline">
                  {site.email}
                </a>
              </li>
              {site.phones.map((ph) => (
                <li key={ph}>
                  <span className="font-semibold text-neutral-800">{t('contact.phone')}:</span>{' '}
                  <a href={`tel:${ph.replace(/\s/g, '')}`} className="text-primary hover:underline">
                    {ph}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={`tel:${site.phones[0]?.replace(/\s/g, '')}`} className="btn-primary">
                {t('buttons.call')}
              </a>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                {t('buttons.whatsapp')}
              </a>
              <SocialIcons linkClassName="flex items-center justify-center rounded-lg p-2 text-neutral-600 transition hover:text-primary hover:bg-neutral-100" iconSize="h-7 w-7" />
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-lg text-neutral-800 mb-4">{t('contact.formTitle')}</h2>
            {submitted ? (
              <p className="text-primary font-semibold">
                {t('contact.successMessage')}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={loading}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-60"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={loading}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-60"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.phone')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    disabled={loading}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-60"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={loading}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-60"
                  />
                </div>
                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? t('contact.sending') : t('buttons.send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
