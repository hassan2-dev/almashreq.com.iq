import { qualityPolicyPoints } from '../config/content';

export function Quality() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow">
        <h1 className="section-title mb-2">سياسة الجودة والأمان</h1>
        <p className="text-neutral-600 mb-10">
          التزامنا بمعايير الجودة والأمان في جميع منتجاتنا وخدماتنا.
        </p>

        <ul className="space-y-4">
          {qualityPolicyPoints.map((point, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                {i + 1}
              </span>
              <span className="text-neutral-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
