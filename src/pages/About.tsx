import { aboutText, vision, mission } from '../config/content';
import { site } from '../config/site';

const timeline = [
  { year: 1992, text: 'تأسيس الشركة' },
  { year: 2000, text: 'توسع في التوزيع والوكالات' },
  { year: 2010, text: 'افتتاح مراكز صيانة متعددة' },
  { year: new Date().getFullYear(), text: 'استمرار النمو والشراكات' },
];

export function About() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow">
        <h1 className="section-title mb-2">من نحن</h1>
        <p className="text-neutral-500 mb-10">{site.companyName}</p>

        <div className="prose prose-neutral max-w-none mb-12">
          <p className="text-neutral-600 leading-relaxed whitespace-pre-line">
            {aboutText.trim()}
          </p>
        </div>

        <h2 className="font-bold text-xl text-neutral-800 mb-4">لمحة زمنية</h2>
        <ul className="space-y-4 mb-12">
          {timeline.map((item) => (
            <li key={item.year} className="flex gap-4 items-start">
              <span className="font-bold text-primary shrink-0 w-16">{item.year}</span>
              <span className="text-neutral-600">{item.text}</span>
            </li>
          ))}
        </ul>

        <div className="grid gap-8 md:grid-cols-2 rounded-xl bg-neutral-50 p-8">
          <div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">رؤيتنا</h3>
            <p className="text-neutral-600">{vision}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-neutral-800 mb-2">رسالتنا</h3>
            <p className="text-neutral-600">{mission}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
