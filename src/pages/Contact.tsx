import { useState } from 'react';
import { site } from '../config/site';
import { SocialIcons } from '../components/SocialIcons';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // بدون backend: نعرض رسالة نجاح فقط. لاحقاً يربط مع API أو يرسل بريد.
    setSubmitted(true);
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow">
        <h1 className="section-title mb-2">تواصل معنا</h1>
        <p className="text-neutral-600 mb-10">
          للاستفسارات أو طلب تسعيرة، استخدم النموذج أو وسائل التواصل المباشر.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-bold text-lg text-neutral-800 mb-4">معلومات التواصل</h2>
            <ul className="space-y-3 text-neutral-600">
              <li>
                <span className="font-semibold text-neutral-800">البريد:</span>{' '}
                <a href={`mailto:${site.email}`} className="text-primary hover:underline">
                  {site.email}
                </a>
              </li>
              {site.phones.map((ph) => (
                <li key={ph}>
                  <span className="font-semibold text-neutral-800">هاتف:</span>{' '}
                  <a href={`tel:${ph.replace(/\s/g, '')}`} className="text-primary hover:underline">
                    {ph}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={`tel:${site.phones[0]?.replace(/\s/g, '')}`} className="btn-primary">
                اتصل
              </a>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                واتساب
              </a>
              <SocialIcons linkClassName="flex items-center justify-center rounded-lg p-2 text-neutral-600 transition hover:text-primary hover:bg-neutral-100" iconSize="h-7 w-7" />
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-lg text-neutral-800 mb-4">نموذج تواصل</h2>
            {submitted ? (
              <p className="text-primary font-semibold">
                تم إرسال رسالتك. سنتواصل معك قريباً.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    الاسم
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    الهاتف
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  إرسال
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
