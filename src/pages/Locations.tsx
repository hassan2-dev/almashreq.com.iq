import { locations } from '../config/content';
import { site } from '../config/site';

function whatsappUrl(wa: string) {
  const num = (wa || site.whatsapp).replace(/\D/g, '');
  return `https://wa.me/${num}`;
}

export function Locations() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow">
        <h1 className="section-title mb-2">الفروع ومراكز الصيانة</h1>
        <p className="text-neutral-600 mb-10">
          عناوين المقر الرئيسي والفروع ومراكز الصيانة — اتصل أو استخدم الاتجاهات.
        </p>

        <div className="space-y-6">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-primary">{loc.type}</span>
                  <h2 className="font-bold text-lg text-neutral-800 mt-1">{loc.name}</h2>
                  <p className="text-neutral-600 mt-2">{loc.address}</p>
                  <ul className="mt-2 space-y-1">
                    {loc.phones.map((ph) => (
                      <li key={ph}>
                        <a href={`tel:${ph.replace(/\s/g, '')}`} className="text-primary hover:underline">
                          {ph}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href={whatsappUrl(loc.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    واتساب
                  </a>
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    الاتجاهات
                  </a>
                </div>
              </div>
              {loc.lat && loc.lng && (
                <div className="mt-4 rounded-lg overflow-hidden bg-neutral-100 h-48">
                  <iframe
                    title={`خريطة ${loc.name}`}
                    src={`https://www.google.com/maps?q=${loc.lat},${loc.lng}&z=15&output=embed`}
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
