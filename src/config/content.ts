/**
 * محتوى الصفحات - يمكن نقله لاحقاً إلى CMS
 */
export const aboutText = `
تأسست شركة المشرق المتحدة للتجارة العامة المحدودة عام 1992، وتمتد خبرتها لأكثر من ثلاثة عقود في مجال توزيع الزيوت والفلاتر والبطاريات وخدمات مراكز الصيانة.
نلتزم بمعايير الجودة والأمان ونعمل مع وكالات وعلامات عالمية. نقدم حلولاً شاملة للجملة والمفرد ومراكز صيانة في مواقع متعددة.
`;

export const vision = 'أن نكون الخيار الأول للعملاء في مجال الزيوت والفلاتر والبطاريات وخدمات الصيانة في العراق والمنطقة.';
export const mission = 'تقديم منتجات وخدمات عالية الجودة مع ضمان الأمان والثقة وبناء شراكات طويلة الأمد مع العملاء والشركاء.';

export const qualityPolicyPoints = [
  'الالتزام بمعايير الجودة والأمان في جميع المنتجات والخدمات.',
  'اختيار موردين ووكالات معتمدين عالمياً.',
  'تدريب الفريق وتطوير العمليات بشكل مستمر.',
  'الاستماع لملاحظات العملاء والتحسين المستمر.',
];

export const servicesList = [
  {
    id: 'oils',
    title: 'الزيوت',
    description: 'توزيع زيوت محركات وزيوت صناعية بجملة ومفرد من علامات عالمية معتمدة.',
    category: 'توزيع',
  },
  {
    id: 'filters',
    title: 'الفلاتر',
    description: 'فلاتر زيت وهواء ووقود بجودة عالية لجميع أنواع المركبات والآليات.',
    category: 'توزيع',
  },
  {
    id: 'batteries',
    title: 'البطاريات',
    description: 'بطاريات سيارات ومركبات من وكالات معتمدة مع ضمان وجودة.',
    category: 'توزيع',
  },
  {
    id: 'maintenance',
    title: 'مراكز الصيانة',
    description: 'تبديل زيوت، فلاتر، بطاريات، وصيانة عامة في مراكزنا المجهزة.',
    category: 'خدمات',
  },
  {
    id: 'recycling',
    title: 'حلول بيئية',
    description: 'معمل لتنقية وتصفية الزيوت المستعملة ضمن التزامنا البيئي.',
    category: 'صناعي',
  },
];

/** الفروع ومراكز الصيانة - المقر الرئيسي وفرع الزبير */
export const locations = [
  {
    id: 'basra',
    name: 'شركة المشرق المتحدة — فرع البصرة',
    type: 'مقر رئيسي' as const,
    address: 'البصرة',
   
    phones: ['+964 780 103 0800'],
    whatsapp: '9647801030800',
    mapLink: 'https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%82+%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9+%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%A8%D8%B5%D8%B1%D8%A9%E2%80%AD/@30.5177576,47.8082236,59m/data=!3m1!1e3!4m6!3m5!1s0x3fc4991a2cbb6bb1:0x4837aa3dd9cee3e0!8m2!3d30.5178088!4d47.8082661!16s%2Fg%2F11pcthk_50?entry=ttu',
    lat: 30.5178088,
    lng: 47.8082661,
  },
  {
    id: 'zubayr',
    name: 'شركة المشرق المتحدة — فرع الزبير',
    type: 'فرع' as const,
    address: 'المنطقة الصناعية، الزبير، البصرة',
    phones: ['+964 780 572 3218'],
    whatsapp: '9647805723218',

    mapLink: 'https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%82+%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9+%2F+%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%B2%D8%A8%D9%8A%D8%B1%E2%80%AD/@30.3832133,47.7005647,234m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3fc4bc1ddd17c549:0x4f33925d2297ef9c!2sIndustrial+Area,+Az+Zubayr,+Basra+Governorate!3b1!8m2!3d30.382017!4d47.6990614!16s%2Fg%2F1hhgg4wfs!3m5!1s0x3fc4bd20feffaded:0xbf82e68c9059d4f6!8m2!3d30.3836286!4d47.7017182!16s%2Fg%2F11kkyg_1ff?entry=ttu',
    lat: 30.3836286,
    lng: 47.7017182,
  },
];

/** شركاء العمل / الوكالات - الشعارات في public/partners/ */
export const partners = [
  { name: 'IGOL', description: 'وكيل حصري في العراق', tags: ['زيوت'], logo: '/partners/igol.webp' },
  { name: 'Mobil', description: 'موزع', tags: ['زيوت'], logo: '/partners/mobil.png' },
  { name: 'ACDelco', description: 'موزع', tags: ['فلاتر', 'بطاريات'], logo: '/partners/acdelco.png' },
  { name: 'Rudson', description: 'وكيل حصري في العراق', tags: ['زيوت'], logo: '/partners/rudson.png' },
  {name:'Gat' , description: 'موزع', tags: ['اضافات كيميائية '], logo: '/partners/Gat.avif' },
  {name :'Triax' , description: 'موزع', tags: ['زيوت'], logo: '/partners/triax.avif' },

  { name :"almashreq factory" , description: 'معمل المشرق المتحدة للتجارة العامة المحدودة', tags: ['زيوت'], logo: '/partners/factory.png' },

  
];