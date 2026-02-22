import { site } from '../config/site';

export function Privacy() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-narrow max-w-3xl">
        <h1 className="section-title mb-6">سياسة الخصوصية</h1>
        <div className="prose prose-neutral text-neutral-600 space-y-4">
          <p>
            تحترم {site.companyNameShort} خصوصيتك. هذه الصفحة توضح كيفية جمعنا واستخدامنا للمعلومات عند زيارة موقعنا.
          </p>
          <h2 className="font-bold text-neutral-800 text-lg">المعلومات التي نجمعها</h2>
          <p>
            قد نجمع الاسم ورقم الهاتف والبريد الإلكتروني والرسائل التي ترسلها عبر نموذج التواصل، وذلك للرد على استفساراتك فقط.
          </p>
          <h2 className="font-bold text-neutral-800 text-lg">استخدام المعلومات</h2>
          <p>
            نستخدم هذه المعلومات للتواصل معك والرد على طلباتك، ولن نشاركها مع أطراف ثالثة لأغراض تسويقية دون موافقتك.
          </p>
          <h2 className="font-bold text-neutral-800 text-lg">التحديثات</h2>
          <p>
            قد نحدّث سياسة الخصوصية من وقت لآخر. أي تغييرات ستُنشر على هذه الصفحة.
          </p>
          <p className="pt-4">
            للاستفسارات: <a href={`mailto:${site.email}`} className="text-primary hover:underline">{site.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
