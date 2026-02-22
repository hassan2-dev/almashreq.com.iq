/**
 * محتوى الموقع الثابت - يُحدَّث من صفحة التواصل والعناوين في الملف الأصلي
 */
export const site = {
  companyName: 'شركة المشرق المتحدة للتجارة العامة المحدودة',
  companyNameShort: 'المشرق المتحدة',
  foundedYear: 1992,
  tagline: 'زيوت • فلاتر • بطاريات • مراكز صيانة',
  /** أرقام الهاتف */
  phones: ['+964 780 572 3218'],
  /** واتساب - رقم كامل مع مفتاح الدولة بدون + */
  whatsapp: '9647805723218',
  /** البريد الإلكتروني */
  email: 'info@almashreq.com.iq',
  /** روابط السوشيال */
  social: {
    facebook: 'https://www.facebook.com/share/1DVg9FngEZ/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/almashreq.united?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    tiktok: 'https://www.tiktok.com/@almashreq.united?_r=1&_t=ZS-9485MZMxsP6',
  },
  /** رابط واتساب للضغط المباشر */
  get whatsappUrl() {
    return `https://wa.me/${this.whatsapp.replace(/\D/g, '')}`;
  },
} as const;

export type SiteConfig = typeof site;
