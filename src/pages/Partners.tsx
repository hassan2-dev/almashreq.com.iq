import { partners } from '../config/content';

export function Partners() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow">
        <h1 className="section-title mb-2">شركاء العمل / الوكالات</h1>
        <p className="text-neutral-600 mb-10">
          نتعامل مع علامات عالمية كموزعين ووكلاء معتمدين (حصري/معتمد/جنوب العراق حسب الوكالة).
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-md transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
            >
              {p.logo && (
                <div className="mb-6 flex h-20 w-full overflow-hidden rounded-lg bg-neutral-50 p-6 transition-colors duration-300 group-hover:bg-primary/5">
                  <img src={p.logo} alt={p.name} className=" h-full w-full object-cover object-center" />
                </div>
              )}
              <h2 className="text-2xl font-bold text-neutral-800">{p.name}</h2>
              <p className="mt-2 text-neutral-600">{p.description}</p>
              {p.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-neutral-500 text-sm mt-10">
          موزعون ووكلاء معتمدون لعلامات عالمية.
        </p>
      </div>
    </div>
  );
}
