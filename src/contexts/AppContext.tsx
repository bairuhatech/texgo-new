import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'ig';
export type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  translations: Record<string, any>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const translations = {
  en: {
    nav: {
      products: 'Products',
      solutions: 'Solutions',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      signIn: 'Sign In',
      startTrial: 'Start Free Trial'
    },
    hero: {
      preHeadline: 'Welcome to the Future of Business Management',
      mainTexts: [
        'AI-Powered Accounting',
        'Smart Business Solutions',
        'Global Enterprise Software',
        'Future of Finance'
      ],
      subtitle: 'Complete AI-powered business solutions including accounting, inventory, payroll, ecommerce, and enterprise management - all unified in one intelligent platform.',
      ctaPrimary: 'Experience AI Accounting',
      ctaSecondary: 'Schedule Live Demo',
      trustIndicators: {
        clients: '500+ Global Clients',
        uptime: '99.9% Uptime',
        security: 'Enterprise Grade Security'
      }
    },
    features: {
      title: 'AI-Powered Business Solutions',
      subtitle: 'Comprehensive suite of intelligent tools designed to automate, optimize, and revolutionize every aspect of your business operations.',
      cta: 'Explore All Features',
      ready: 'Ready to transform your business with AI-powered solutions?',
      items: [
        {
          title: 'Complete Accounting Suite',
          description: 'Automated bookkeeping and financial tracking with AI-powered insights'
        },
        {
          title: 'Smart Inventory Management',
          description: 'Real-time stock monitoring with predictive analytics'
        },
        {
          title: 'Payroll & HR Management',
          description: 'Automated salary processing and employee management system'
        },
        {
          title: 'Comprehensive Finance Tools',
          description: 'Advanced budgeting, forecasting, and financial planning'
        },
        {
          title: 'Purchase & Sales Management',
          description: 'Automated procurement and sales tracking solutions'
        },
        {
          title: 'Point of Sale System',
          description: 'Integrated payment processing and transaction management'
        },
        {
          title: 'Executive Reporting App',
          description: 'Real-time business insights and interactive dashboards'
        },
        {
          title: 'Order Taking App',
          description: 'Streamlined customer order processing and management'
        },
        {
          title: 'Customer & Chef Display Systems',
          description: 'Seamless kitchen and service coordination platforms'
        },
        {
          title: 'Smart Menu-Based Ordering',
          description: 'AI-powered recommendations and customization features'
        },
        {
          title: 'Ready-Made Ecommerce Platform',
          description: 'Fully integrated online store solution with advanced features'
        },
        {
          title: 'Complete Marketplace Software',
          description: 'Multi-channel selling with centralized inventory control'
        }
      ]
    },
    industries: {
      title: 'Industry-Specific Solutions',
      subtitle: 'Tailored solutions designed to meet the unique challenges and requirements of specific industries with specialized workflows and compliance needs.',
      healthcare: {
        title: 'Healthcare',
        subtitle: 'Hospital Management System',
        description: 'Complete healthcare administration and financial management solution designed for modern medical facilities.',
        learnMore: 'Learn More'
      },
      education: {
        title: 'Education',  
        subtitle: 'Learning Management System',
        description: 'Comprehensive educational platform with integrated accounting and administration for educational institutions.',
        learnMore: 'Learn More'
      },
      enterprise: {
        title: 'Enterprise',
        subtitle: 'Scalable Business Solutions', 
        description: 'Enterprise-grade solutions designed for large-scale business operations across multiple industries.',
        learnMore: 'Learn More'
      },
      successMetrics: 'Success Metrics',
      activeClients: 'Active Clients',
      efficiencyIncrease: 'Efficiency Increase',
      costSavings: 'Cost Savings',
      readyToStart: 'Ready to Get Started?',
      scheduleDemoText: 'Schedule a personalized demo to see how our solution can transform your operations.',
      scheduleDemo: 'Schedule Demo'
    },
    globalMap: {
      title: 'Global Presence',
      subtitle: 'Trusted by businesses worldwide, TaxGo Global serves clients across continents with localized solutions and 24/7 support.',
      whyChoose: 'Why Global Leaders Choose TaxGo',
      features: [
        'Multi-currency & multi-language support',
        'Local compliance & regulatory adherence', 
        '24/7 global customer support',
        'Cloud infrastructure in every region'
      ]
    },
    contact: {
      title: 'Ready to Transform Your Business?',
      subtitle: 'Get in touch with our experts to discuss your specific needs and discover how TaxGo Global can revolutionize your business operations.',
      getInTouch: 'Get in Touch',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      companyName: 'Company Name',
      phoneNumber: 'Phone Number',
      solutionInterest: 'Solution Interest',
      message: 'Message',
      sendMessage: 'Send Message',
      thankYou: 'Thank You!',
      successMessage: 'Your message has been sent successfully. Our team will get back to you within 24 hours.',
      sendAnother: 'Send Another Message'
    },
    footer: {
      description: 'Revolutionizing business management with AI-powered solutions. From accounting to enterprise management, we provide comprehensive tools that help businesses thrive in the digital age.',
      stayUpdated: 'Stay Updated',
      newsletterText: 'Get the latest updates on new features, industry insights, and exclusive offers.',
      emailPlaceholder: 'Enter your email address',
      subscribe: 'Subscribe',
      support: 'Support',
      happyClients: 'Happy Clients',
      copyright: '© 2024 TaxGo Global. All rights reserved.',
      terms: 'Terms',
      privacy: 'Privacy',
      sections: {
        products: {
          title: 'Products',
          links: [
            'Accounting Suite',
            'Inventory Management', 
            'Payroll & HR',
            'Ecommerce Platform',
            'Point of Sale',
            'Enterprise Solutions'
          ]
        },
        industries: {
          title: 'Industries',
          links: [
            'Healthcare',
            'Education',
            'Retail & Commerce',
            'Restaurants',
            'Manufacturing',
            'Professional Services'
          ]
        },
        resources: {
          title: 'Resources',
          links: [
            'Documentation',
            'API Reference',
            'Help Center',
            'Video Tutorials',
            'Webinars',
            'Case Studies'
          ]
        },
        company: {
          title: 'Company',
          links: [
            'About Us',
            'Careers',
            'Press Kit',
            'Partners',
            'Security',
            'Privacy Policy'
          ]
        }
      },
      trustBadges: [
        'SOC 2 Certified',
        'GDPR Compliant',
        'ISO 27001',
        '256-bit SSL'
      ]
    }
  },
  ar: {
    nav: {
      products: 'المنتجات',
      solutions: 'الحلول',
      pricing: 'التسعير',
      about: 'حول',
      contact: 'اتصل',
      signIn: 'تسجيل الدخول',
      startTrial: 'ابدأ النسخة التجريبية'
    },
    hero: {
      preHeadline: 'مرحباً بك في مستقبل إدارة الأعمال',
      mainTexts: [
        'المحاسبة المدعومة بالذكاء الاصطناعي',
        'حلول الأعمال الذكية',
        'برمجيات المؤسسات العالمية',
        'مستقبل التمويل'
      ],
      subtitle: 'حلول الأعمال الكاملة المدعومة بالذكاء الاصطناعي تشمل المحاسبة والمخزون والرواتب والتجارة الإلكترونية وإدارة المؤسسات - كلها موحدة في منصة ذكية واحدة.',
      ctaPrimary: 'جرب المحاسبة بالذكاء الاصطناعي',
      ctaSecondary: 'احجز عرضاً مباشراً',
      trustIndicators: {
        clients: '500+ عميل عالمي',
        uptime: '99.9% وقت التشغيل',
        security: 'أمان على مستوى المؤسسات'
      }
    },
    features: {
      title: 'حلول الأعمال المدعومة بالذكاء الاصطناعي',
      subtitle: 'مجموعة شاملة من الأدوات الذكية المصممة لأتمتة وتحسين وثورة كل جانب من جوانب عمليات عملك.',
      cta: 'استكشف جميع الميزات',
      ready: 'هل أنت مستعد لتحويل عملك بحلول مدعومة بالذكاء الاصطناعي؟',
      items: [
        {
          title: 'مجموعة المحاسبة الكاملة',
          description: 'مسك الدفاتر الآلي وتتبع مالي مع رؤى مدعومة بالذكاء الاصطناعي'
        },
        {
          title: 'إدارة المخزون الذكية',
          description: 'مراقبة المخزون في الوقت الفعلي مع التحليلات التنبؤية'
        },
        {
          title: 'إدارة الرواتب والموارد البشرية',
          description: 'معالجة الرواتب الآلية ونظام إدارة الموظفين'
        },
        {
          title: 'أدوات التمويل الشاملة',
          description: 'وضع الميزانية المتقدم والتنبؤ والتخطيط المالي'
        },
        {
          title: 'إدارة المشتريات والمبيعات',
          description: 'حلول المشتريات الآلية وتتبع المبيعات'
        },
        {
          title: 'نظام نقطة البيع',
          description: 'معالجة الدفع المتكاملة وإدارة المعاملات'
        },
        {
          title: 'تطبيق التقارير التنفيذية',
          description: 'رؤى الأعمال في الوقت الفعلي ولوحات المعلومات التفاعلية'
        },
        {
          title: 'تطبيق أخذ الطلبات',
          description: 'معالجة طلبات العملاء المبسطة والإدارة'
        },
        {
          title: 'أنظمة عرض العملاء والطهاة',
          description: 'منصات تنسيق المطبخ والخدمة السلسة'
        },
        {
          title: 'الطلب الذكي القائم على القائمة',
          description: 'توصيات مدعومة بالذكاء الاصطناعي وميزات التخصيص'
        },
        {
          title: 'منصة التجارة الإلكترونية الجاهزة',
          description: 'حل متجر عبر الإنترنت متكامل بالكامل مع ميزات متقدمة'
        },
        {
          title: 'برمجيات السوق الكاملة',
          description: 'البيع متعدد القنوات مع التحكم المركزي في المخزون'
        }
      ]
    },
    industries: {
      title: 'حلول خاصة بالصناعة',
      subtitle: 'حلول مخصصة مصممة لتلبية التحديات والمتطلبات الفريدة للصناعات المحددة مع سير العمل المتخصص ومتطلبات الامتثال.',
      healthcare: {
        title: 'الرعاية الصحية',
        subtitle: 'نظام إدارة المستشفيات',
        description: 'حل إدارة الرعاية الصحية والإدارة المالية الكامل المصمم للمرافق الطبية الحديثة.',
        learnMore: 'اعرف أكثر'
      },
      education: {
        title: 'التعليم',
        subtitle: 'نظام إدارة التعلم',
        description: 'منصة تعليمية شاملة مع المحاسبة المتكاملة والإدارة للمؤسسات التعليمية.',
        learnMore: 'اعرف أكثر'
      },
      enterprise: {
        title: 'المؤسسات',
        subtitle: 'حلول الأعمال القابلة للتطوير',
        description: 'حلول على مستوى المؤسسات مصممة لعمليات الأعمال واسعة النطاق عبر صناعات متعددة.',
        learnMore: 'اعرف أكثر'
      },
      successMetrics: 'مقاييس النجاح',
      activeClients: 'العملاء النشطون',
      efficiencyIncrease: 'زيادة الكفاءة',
      costSavings: 'توفير التكاليف',
      readyToStart: 'هل أنت مستعد للبدء؟',
      scheduleDemoText: 'حدد موعداً لعرض توضيحي شخصي لترى كيف يمكن لحلولنا أن تحول عملياتك.',
      scheduleDemo: 'حدد موعد عرض توضيحي'
    },
    globalMap: {
      title: 'الوجود العالمي',
      subtitle: 'موثوق به من قبل الشركات في جميع أنحاء العالم، يخدم TaxGo Global العملاء عبر القارات بحلول محلية ودعم على مدار الساعة.',
      whyChoose: 'لماذا يختار القادة العالميون TaxGo',
      features: [
        'دعم متعدد العملات ومتعدد اللغات',
        'الامتثال المحلي والالتزام التنظيمي',
        'دعم العملاء العالمي على مدار الساعة',
        'البنية التحتية السحابية في كل منطقة'
      ]
    },
    contact: {
      title: 'هل أنت مستعد لتحويل عملك؟',
      subtitle: 'تواصل مع خبرائنا لمناقشة احتياجاتك المحددة واكتشاف كيف يمكن لـ TaxGo Global أن تثور عمليات عملك.',
      getInTouch: 'تواصل معنا',
      fullName: 'الاسم الكامل',
      emailAddress: 'عنوان البريد الإلكتروني',
      companyName: 'اسم الشركة',
      phoneNumber: 'رقم الهاتف',
      solutionInterest: 'اهتمام الحل',
      message: 'الرسالة',
      sendMessage: 'إرسال الرسالة',
      thankYou: 'شكراً لك!',
      successMessage: 'تم إرسال رسالتك بنجاح. سيتواصل معك فريقنا خلال 24 ساعة.',
      sendAnother: 'إرسال رسالة أخرى'
    },
    footer: {
      description: 'ثورة في إدارة الأعمال بحلول مدعومة بالذكاء الاصطناعي. من المحاسبة إلى إدارة المؤسسات، نقدم أدوات شاملة تساعد الشركات على النجاح في العصر الرقمي.',
      stayUpdated: 'ابق محدثاً',
      newsletterText: 'احصل على آخر التحديثات حول الميزات الجديدة، رؤى الصناعة، والعروض الحصرية.',
      emailPlaceholder: 'أدخل عنوان بريدك الإلكتروني',
      subscribe: 'اشترك',
      support: 'الدعم',
      happyClients: 'العملاء السعداء',
      copyright: '© 2024 TaxGo Global. جميع الحقوق محفوظة.',
      terms: 'الشروط',
      privacy: 'الخصوصية',
      sections: {
        products: {
          title: 'المنتجات',
          links: [
            'مجموعة المحاسبة',
            'إدارة المخزون',
            'الرواتب والموارد البشرية',
            'منصة التجارة الإلكترونية',
            'نقطة البيع',
            'حلول المؤسسات'
          ]
        },
        industries: {
          title: 'الصناعات',
          links: [
            'الرعاية الصحية',
            'التعليم',
            'التجارة والبيع بالتجزئة',
            'المطاعم',
            'التصنيع',
            'الخدمات المهنية'
          ]
        },
        resources: {
          title: 'الموارد',
          links: [
            'الوثائق',
            'مرجع API',
            'مركز المساعدة',
            'دروس الفيديو',
            'الندوات الإلكترونية',
            'دراسات الحالة'
          ]
        },
        company: {
          title: 'الشركة',
          links: [
            'من نحن',
            'الوظائف',
            'الصحافة',
            'الشركاء',
            'الأمان',
            'سياسة الخصوصية'
          ]
        }
      },
      trustBadges: [
        'معتمد SOC 2',
        'متوافق مع GDPR',
        'ISO 27001',
        'تشفير 256-bit SSL'
      ]
    }
  },
  ig: {
    nav: {
      products: 'Ngwaahịa',
      solutions: 'Ngwọta',
      pricing: 'Ọnụahịa',
      about: 'Gbasara',
      contact: 'Kpọtụrụ',
      signIn: 'Banye',
      startTrial: 'Malite nnwale efu'
    },
    hero: {
      preHeadline: 'Nnọọ na ọdịnihu nke njikwa azụmahịa',
      mainTexts: [
        'Akụntụ nke AI na-akwado',
        'Ngwọta azụmahịa nwere ọgụgụ isi',
        'Ngwanrọ ụlọ ọrụ zuru ụwa ọnụ',
        'Ọdịnihu ego'
      ],
      subtitle: 'Ngwọta azụmahịa zuru oke nke AI na-akwado gụnyere akụntụ, ngwa ahịa, ụgwọ ọrụ, azụmahịa elektrọnik, na njikwa ụlọ ọrụ - niile jikọtara ọnụ na otu ikpo okwu nwere ọgụgụ isi.',
      ctaPrimary: 'Nwaa akụntụ AI',
      ctaSecondary: 'Hazie ngosi ndụ',
      trustIndicators: {
        clients: '500+ ndị ahịa zuru ụwa ọnụ',
        uptime: '99.9% oge ọrụ',
        security: 'Nchekwa ọkwa ụlọ ọrụ'
      }
    },
    features: {
      title: 'Ngwọta azụmahịa nke AI na-akwado',
      subtitle: 'Ngwá ọrụ nwere ọgụgụ isi zuru oke emebere iji mee ka ihe na-aga n\'ihu, melite ma megharia akụkụ ọ bụla nke arụmọrụ azụmahịa gị.',
      cta: 'Nyochaa njiri mara niile',
      ready: 'Ị dị njikere ịgbanwe azụmahịa gị site na ngwọta AI?',
      items: [
        {
          title: 'Ngwa akụntụ zuru oke',
          description: 'Njikwa ego na nyocha akụntụ nwere AI'
        },
        {
          title: 'Njikwa ngwa ahịa nwere ọgụgụ isi',
          description: 'Nlekọta ngwa ahịa na mgbe oge yana amụma analytics'
        },
        {
          title: 'Njikwa ụgwọ ọrụ na HR',
          description: 'Sistemụ nhazi ụgwọ na njikwa ndị ọrụ na-arụ ọrụ naanị ya'
        },
        {
          title: 'Ngwá ọrụ ego zuru oke',
          description: 'Nhazi ego dị elu, amụma na nhazi atụmatụ ego'
        },
        {
          title: 'Njikwa azụmahịa na ire ere',
          description: 'Ngwọta azụmahịa na-arụ ọrụ naanị ya na nlekọta ire ere'
        },
        {
          title: 'Sistemụ ebe ire ere',
          description: 'Nhazi ịkwụ ụgwọ jikọtara ọnụ na njikwa azụmahịa'
        },
        {
          title: 'Ngwa mkpesa ndị isi',
          description: 'Nghọta azụmahịa na mgbe oge na dashboard mmekọrịta'
        },
        {
          title: 'Ngwa iwere iwu',
          description: 'Nhazi iwu ndị ahịa dị mfe na njikwa'
        },
        {
          title: 'Sistemụ ngosi ndị ahịa na ndị osi nri',
          description: 'Ikpo okwu nkwekọrịta kichin na ọrụ dị mfe'
        },
        {
          title: 'Iwu nwere ọgụgụ isi dabere na menu',
          description: 'Nkwanye ugwu AI na njiri mara nhazi'
        },
        {
          title: 'Ikpo okwu azụmahịa elektrọnik dị njikere',
          description: 'Ngwọta ụlọ ahịa n\'ịntanetị jikọtara ọnụ nwere njiri mara dị elu'
        },
        {
          title: 'Ngwanrọ ahịa zuru oke',
          description: 'Ire ere ọtụtụ ụzọ na njikwa ngwa ahịa etiti'
        }
      ]
    },
    industries: {
      title: 'Ngwọta pụrụ iche maka ụlọ ọrụ',
      subtitle: 'Ngwọta ahaziri ahazi emebere iji gboo ihe ịma aka na ihe achọrọ pụrụ iche nke ụlọ ọrụ ndị ahụ nwere usoro ọrụ pụrụ iche na ihe achọrọ nrụbere.',
      healthcare: {
        title: 'Nlekọta ahụike',
        subtitle: 'Sistemụ njikwa ụlọ ọgwụ',
        description: 'Ngwọta nlekọta ahụike na njikwa ego zuru oke emebere maka ụlọ ọrụ ahụike ọgbara ọhụrụ.',
        learnMore: 'Mụtakwuo'
      },
      education: {
        title: 'Agụmakwụkwọ',
        subtitle: 'Sistemụ njikwa mmụta',
        description: 'Ikpo okwu agụmakwụkwọ zuru oke nwere akụntụ jikọtara ọnụ na nchịkwa maka ụlọ akwụkwọ.',
        learnMore: 'Mụtakwuo'
      },
      enterprise: {
        title: 'Ụlọ ọrụ',
        subtitle: 'Ngwọta azụmahịa nwere ike ịgbasa',
        description: 'Ngwọta ọkwa ụlọ ọrụ emebere maka arụmọrụ azụmahịa buru ibu n\'ụlọ ọrụ dị iche iche.',
        learnMore: 'Mụtakwuo'
      },
      successMetrics: 'Nrụpụta ihe ịga nke ọma',
      activeClients: 'Ndị ahịa na-arụ ọrụ',
      efficiencyIncrease: 'Mmụba arụmọrụ',
      costSavings: 'Nchekwa ọnụ ahịa',
      readyToStart: 'Ị dị njikere ịmalite?',
      scheduleDemoText: 'Hazie ngosi onwe onye iji hụ otú ngwọta anyị si nwee ike ịgbanwe arụmọrụ gị.',
      scheduleDemo: 'Hazie ngosi'
    },
    globalMap: {
      title: 'Ọnọdụ zuru ụwa ọnụ',
      subtitle: 'Ndị ọrụ azụmahịa zuru ụwa ọnụ tụkwasịrị obi, TaxGo Global na-eje ozi ndị ahịa n\'ọtụtụ kọntinent site na ngwọta mpaghara na nkwado 24/7.',
      whyChoose: 'Gịnị mere ndị ndu zuru ụwa ọnụ ji ahọrọ TaxGo',
      features: [
        'Nkwado ego ọtụtụ na asụsụ ọtụtụ',
        'Nrụbere mpaghara na nrube isi iwu',
        'Nkwado ndị ahịa zuru ụwa ọnụ 24/7',
        'Ihe owuwu igwe ojii na mpaghara ọ bụla'
      ]
    },
    contact: {
      title: 'Ị dị njikere ịgbanwe azụmahịa gị?',
      subtitle: 'Soro ndị ọkachamara anyị kparịta uka mkpa gị pụrụ iche ma chọpụta otú TaxGo Global si nwee ike ime mgbanwe na arụmọrụ azụmahịa gị.',
      getInTouch: 'Metụ anyị aka',
      fullName: 'Aha zuru oke',
      emailAddress: 'Adreesị email',
      companyName: 'Aha ụlọ ọrụ',
      phoneNumber: 'Nọmba ekwentị',
      solutionInterest: 'Mmasị ngwọta',
      message: 'Ozi',
      sendMessage: 'Zigaa ozi',
      thankYou: 'Daalụ!',
      successMessage: 'Ezigara ozi gị nke ọma. Ndị otu anyị ga-akpọghachi gị n\'ime awa 24.',
      sendAnother: 'Zipu ozi ọzọ'
    },
    footer: {
      description: 'Na-agbanwe njikwa azụmahịa site na ngwọta AI. Site na akụntụ ruo njikwa ụlọ ọrụ, anyị na-enye ngwá ọrụ zuru oke na-enyere azụmahịa aka ka ha bie n\'oge dijitalụ.',
      stayUpdated: 'Nọrọ na-emelite',
      newsletterText: 'Nweta mmelite ọhụrụ gbasara njiri mara ọhụrụ, nghọta ụlọ ọrụ, na onyinye pụrụ iche.',
      emailPlaceholder: 'Tinye adreesị email gị',
      subscribe: 'Debanye aha',
      support: 'Nkwado',
      happyClients: 'Ndị ahịa obi ụtọ',
      copyright: '© 2024 TaxGo Global. Ikike niile echekwara.',
      terms: 'Usoro',
      privacy: 'Nzuzo',
      sections: {
        products: {
          title: 'Ngwaahịa',
          links: [
            'Ngwa akụntụ',
            'Njikwa ngwa ahịa',
            'Ụgwọ ọrụ na HR',
            'Ikpo okwu azụmahịa elektrọnik',
            'Ebe ire ere',
            'Ngwọta ụlọ ọrụ'
          ]
        },
        industries: {
          title: 'Ụlọ ọrụ',
          links: [
            'Nlekọta ahụike',
            'Agụmakwụkwọ',
            'Azụmahịa na ire ere',
            'Ụlọ oriri na ọṅụṅụ',
            'Nrụpụta',
            'Ọrụ ọkachamara'
          ]
        },
        resources: {
          title: 'Akụrụngwa',
          links: [
            'Akwụkwọ',
            'Ntụaka API',
            'Ebe enyemaka',
            'Nkuzi vidiyo',
            'Webina',
            'Nyocha okwu'
          ]
        },
        company: {
          title: 'Ụlọ ọrụ',
          links: [
            'Gbasara anyị',
            'Ọrụ',
            'Akwụkwọ akụkọ',
            'Ndị mmekọ',
            'Nchekwa',
            'Usoro nzuzo'
          ]
        }
      },
      trustBadges: [
        'SOC 2 kwadoro',
        'GDPR kwekọrọ',
        'ISO 27001',
        '256-bit SSL'
      ]
    }
  }
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Load saved preferences
    const savedLanguage = localStorage.getItem('taxgo-language') as Language;
    const savedTheme = localStorage.getItem('taxgo-theme') as Theme;
    
    if (savedLanguage && ['en', 'ar', 'ig'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
    
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save language preference
    localStorage.setItem('taxgo-language', language);
    
    // Update document direction for Arabic
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    // Save theme preference and update document class
    localStorage.setItem('taxgo-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const value: AppContextType = {
    language,
    setLanguage,
    theme,
    setTheme,
    translations: translations[language]
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};