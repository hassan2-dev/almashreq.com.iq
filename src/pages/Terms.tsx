import { site } from '../config/site';

export function Terms() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow max-w-3xl">
        <h1 className="section-title mb-6">الشروط والأحكام</h1>
        <div className="prose prose-neutral text-neutral-600 space-y-4">
          <p>
            استخدامك لموقع {site.companyName} يعني موافقتك على هذه الشروط.
          </p>
          <h2 className="font-bold text-neutral-800 text-lg">استخدام الموقع</h2>
          <p>
            المحتوى الموجود على هذا الموقع لأغراض إعلامية فقط. لا يُسمح باستخدام المحتوى أو إعادة نشره دون إذن مسبق.
          </p>
          <h2 className="font-bold text-neutral-800 text-lg">المنتجات والخدمات</h2>
          <p>
            الأسعار والتفاصيل قابلة للتغيير. يرجى التأكد من التفاصيل عند التعاقد أو الطلب.
          </p>
          <h2 className="font-bold text-neutral-800 text-lg">روابط خارجية</h2>
          <p>
            قد يحتوي الموقع على روابط لمواقع أخرى. نحن غير مسؤولين عن محتوى أو ممارسات تلك المواقع.
          </p>
          <p className="pt-4">
            للاستفسارات: <a href={`mailto:${site.email}`} className="text-primary hover:underline">{site.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
