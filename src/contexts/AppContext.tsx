import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language =
  | "en"
  | "ar"
  | "ig"
  | "es"
  | "fr"
  | "de"
  | "zh"
  | "ja"
  | "pt"
  | "ru"
  | "hi";
export type Theme = "light" | "dark";

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
      products: "Products",
      solutions: "Solutions",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      signIn: "Sign In",
      startTrial: "Start Free Trial",
    },
    hero: {
      preHeadline: "Welcome to the Future of Business Management",
      revolutionizeYour: "Revolutionize Your",
      mainTexts: [
        "AI-Powered Accounting",
        "Smart Business Solutions",
        "Global Enterprise Software",
        "Future of Finance",
      ],
      subtitle:
        "Complete AI-powered business solutions including accounting, inventory, payroll, ecommerce, and enterprise management - all unified in one intelligent platform.",
      ctaPrimary: "Experience AI Accounting",
      ctaSecondary: "Schedule Live Demo",
      trustIndicators: {
        clients: "500+ Global Clients",
        uptime: "99.9% Uptime",
        security: "Enterprise Grade Security",
      },
    },
    features: {
      title: "AI-Powered Business Solutions",
      subtitle:
        "Comprehensive suite of intelligent tools designed to automate, optimize, and revolutionize every aspect of your business operations.",
      cta: "Explore All Features",
      ready: "Ready to transform your business with AI-powered solutions?",
      items: [
        {
          title: "Complete Accounting Suite",
          description:
            "Automated bookkeeping and financial tracking with AI-powered insights",
          url: "/features/complete-accounting-suite",
          //externalUrl: "https://www.youtube.com/",
          openInNewTab: true,
        },
        {
          title: "Smart Inventory Management",
          description: "Real-time stock monitoring with predictive analytics",
          url: "/features/smart-inventory-management",
          //externalUrl: "https://www.youtube.com/",
          openInNewTab: true,
        },
        {
          title: "Payroll & HR Management",
          description:
            "Automated salary processing and employee management system",
          url: "/features/payroll-hr-management",
          //externalUrl: "https://www.youtube.com/",
          openInNewTab: true,
        },
        {
          title: "Comprehensive Finance Tools",
          description:
            "Advanced budgeting, forecasting, and financial planning",
          url: "/features/comprehensive-finance-tools",
          //externalUrl: "https://www.youtube.com/",
          openInNewTab: true,
        },
        {
          title: "Purchase & Sales Management",
          description: "Automated procurement and sales tracking solutions",
          url: "/features/purchase-sales-management",
          //externalUrl: "https://www.youtube.com/",
          openInNewTab: true,
        },
        {
          title: "Point of Sale System",
          description:
            "Integrated payment processing and transaction management",
          url: "/features/point-of-sale-system",
          //externalUrl: "https://www.youtube.com/",
          openInNewTab: true,
        },
        {
          title: "Executive Reporting App",
          description: "Real-time business insights and interactive dashboards",
          url: "/features/executive-reporting-app",
          //externalUrl: "https://www.youtube.com/",
          openInNewTab: true,
        },
        {
          title: "Order Taking App",
          description: "Streamlined customer order processing and management",
          url: "/features/order-taking-app",
          //externalUrl: "https://www.youtube.com/",
          openInNewTab: true,
        },
        {
          title: "Customer & Chef Display Systems",
          description: "Seamless kitchen and service coordination platforms",
          url: "/features/customer-chef-display-systems",
          //externalUrl: "https://www.youtube.com/",
          openInNewTab: true,
        },
        {
          title: "Smart Menu-Based Ordering",
          description: "AI-powered recommendations and customization features",
          url: "/features/smart-menu-based-ordering",
          //externalUrl: "https://www.youtube.com/",
          openInNewTab: true,
        },
        {
          title: "Ready-Made Ecommerce Platform",
          description:
            "Fully integrated online store solution with advanced features",
          url: "/features/ready-made-ecommerce-platform",
          //externalUrl: "https://www.youtube.com/",
          openInNewTab: true,
        },
        {
          title: "Complete Marketplace Software",
          description:
            "Multi-channel selling with centralized inventory control",
          url: "/features/complete-marketplace-software",
          //externalUrl: "https://www.youtube.com/",
          openInNewTab: true,
        },
      ],
    },
    industries: {
      title: "Industry-Specific Solutions",
      subtitle:
        "Tailored solutions designed to meet the unique challenges and requirements of specific industries with specialized workflows and compliance needs.",
      healthcare: {
        title: "Healthcare",
        subtitle: "Hospital Management System",
        description:
          "Complete healthcare administration and financial management solution designed for modern medical facilities.",
        learnMore: "Learn More",
      },
      education: {
        title: "Education",
        subtitle: "Learning Management System",
        description:
          "Comprehensive educational platform with integrated accounting and administration for educational institutions.",
        learnMore: "Learn More",
      },
      enterprise: {
        title: "Enterprise",
        subtitle: "Scalable Business Solutions",
        description:
          "Enterprise-grade solutions designed for large-scale business operations across multiple industries.",
        learnMore: "Learn More",
      },
      successMetrics: "Success Metrics",
      activeClients: "Active Clients",
      efficiencyIncrease: "Efficiency Increase",
      costSavings: "Cost Savings",
      readyToStart: "Ready to Get Started?",
      scheduleDemoText:
        "Schedule a personalized demo to see how our solution can transform your operations.",
      scheduleDemo: "Schedule Demo",
    },
    globalMap: {
      title: "Global Presence",
      subtitle:
        "Trusted by businesses worldwide, TaxGo Global serves clients across continents with localized solutions and 24/7 support.",
      whyChoose: "Why Global Leaders Choose TaxGo",
      features: [
        "Multi-currency & multi-language support",
        "Local compliance & regulatory adherence",
        "24/7 global customer support",
        "Cloud infrastructure in every region",
      ],
    },
    contact: {
      title: "Ready to Transform Your Business?",
      subtitle:
        "Get in touch with our experts to discuss your specific needs and discover how TaxGo Global can revolutionize your business operations.",
      getInTouch: "Get in Touch",
      fullName: "Full Name",
      emailAddress: "Email Address",
      companyName: "Company Name",
      phoneNumber: "Phone Number",
      solutionInterest: "Solution Interest",
      message: "Message",
      sendMessage: "Send Message",
      thankYou: "Thank You!",
      successMessage:
        "Your message has been sent successfully. Our team will get back to you within 24 hours.",
      sendAnother: "Send Another Message",
    },
    footer: {
      description:
        "Revolutionizing business management with AI-powered solutions. From accounting to enterprise management, we provide comprehensive tools that help businesses thrive in the digital age.",
      stayUpdated: "Stay Updated",
      newsletterText:
        "Get the latest updates on new features, industry insights, and exclusive offers.",
      emailPlaceholder: "Enter your email address",
      subscribe: "Subscribe",
      support: "Support",
      happyClients: "Happy Clients",
      copyright: "© 2024 TaxGo Global. All rights reserved.",
      terms: "Terms",
      privacy: "Privacy",
      sections: {
        products: {
          title: "Products",
          links: [
            "Accounting Suite",
            "Inventory Management",
            "Payroll & HR",
            "Ecommerce Platform",
            "Point of Sale",
            "Enterprise Solutions",
          ],
        },
        industries: {
          title: "Industries",
          links: [
            "Healthcare",
            "Education",
            "Retail & Commerce",
            "Restaurants",
            "Manufacturing",
            "Professional Services",
          ],
        },
        resources: {
          title: "Resources",
          links: [
            "Documentation",
            "API Reference",
            "Help Center",
            "Video Tutorials",
            "Webinars",
            "Case Studies",
          ],
        },
        company: {
          title: "Company",
          links: [
            "About Us",
            "Careers",
            "Press Kit",
            "Partners",
            "Security",
            "Privacy Policy",
          ],
        },
      },
      trustBadges: [
        "SOC 2 Certified",
        "GDPR Compliant",
        "ISO 27001",
        "256-bit SSL",
      ],
    },
  },
  ar: {
    nav: {
      products: "المنتجات",
      solutions: "الحلول",
      pricing: "التسعير",
      about: "حول",
      contact: "اتصل",
      signIn: "تسجيل الدخول",
      startTrial: "ابدأ النسخة التجريبية",
    },
    hero: {
      preHeadline: "مرحباً بك في مستقبل إدارة الأعمال",
      revolutionizeYour: "ثورة في",
      mainTexts: [
        "المحاسبة المدعومة بالذكاء الاصطناعي",
        "حلول الأعمال الذكية",
        "برمجيات المؤسسات العالمية",
        "مستقبل التمويل",
      ],
      subtitle:
        "حلول الأعمال الكاملة المدعومة بالذكاء الاصطناعي تشمل المحاسبة والمخزون والرواتب والتجارة الإلكترونية وإدارة المؤسسات - كلها موحدة في منصة ذكية واحدة.",
      ctaPrimary: "جرب المحاسبة بالذكاء الاصطناعي",
      ctaSecondary: "احجز عرضاً مباشراً",
      trustIndicators: {
        clients: "500+ عميل عالمي",
        uptime: "99.9% وقت التشغيل",
        security: "أمان على مستوى المؤسسات",
      },
    },
    features: {
      title: "حلول الأعمال المدعومة بالذكاء الاصطناعي",
      subtitle:
        "مجموعة شاملة من الأدوات الذكية المصممة لأتمتة وتحسين وثورة كل جانب من جوانب عمليات عملك.",
      cta: "استكشف جميع الميزات",
      ready: "هل أنت مستعد لتحويل عملك بحلول مدعومة بالذكاء الاصطناعي؟",
      items: [
        {
          title: "مجموعة المحاسبة الكاملة",
          description:
            "مسك الدفاتر الآلي وتتبع مالي مع رؤى مدعومة بالذكاء الاصطناعي",
        },
        {
          title: "إدارة المخزون الذكية",
          description: "مراقبة المخزون في الوقت الفعلي مع التحليلات التنبؤية",
        },
        {
          title: "إدارة الرواتب والموارد البشرية",
          description: "معالجة الرواتب الآلية ونظام إدارة الموظفين",
        },
        {
          title: "أدوات التمويل الشاملة",
          description: "وضع الميزانية المتقدم والتنبؤ والتخطيط المالي",
        },
        {
          title: "إدارة المشتريات والمبيعات",
          description: "حلول المشتريات الآلية وتتبع المبيعات",
        },
        {
          title: "نظام نقطة البيع",
          description: "معالجة الدفع المتكاملة وإدارة المعاملات",
        },
        {
          title: "تطبيق التقارير التنفيذية",
          description: "رؤى الأعمال في الوقت الفعلي ولوحات المعلومات التفاعلية",
        },
        {
          title: "تطبيق أخذ الطلبات",
          description: "معالجة طلبات العملاء المبسطة والإدارة",
        },
        {
          title: "أنظمة عرض العملاء والطهاة",
          description: "منصات تنسيق المطبخ والخدمة السلسة",
        },
        {
          title: "الطلب الذكي القائم على القائمة",
          description: "توصيات مدعومة بالذكاء الاصطناعي وميزات التخصيص",
        },
        {
          title: "منصة التجارة الإلكترونية الجاهزة",
          description: "حل متجر عبر الإنترنت متكامل بالكامل مع ميزات متقدمة",
        },
        {
          title: "برمجيات السوق الكاملة",
          description: "البيع متعدد القنوات مع التحكم المركزي في المخزون",
        },
      ],
    },
    industries: {
      title: "حلول خاصة بالصناعة",
      subtitle:
        "حلول مخصصة مصممة لتلبية التحديات والمتطلبات الفريدة للصناعات المحددة مع سير العمل المتخصص ومتطلبات الامتثال.",
      healthcare: {
        title: "الرعاية الصحية",
        subtitle: "نظام إدارة المستشفيات",
        description:
          "حل إدارة الرعاية الصحية والإدارة المالية الكامل المصمم للمرافق الطبية الحديثة.",
        learnMore: "اعرف أكثر",
      },
      education: {
        title: "التعليم",
        subtitle: "نظام إدارة التعلم",
        description:
          "منصة تعليمية شاملة مع المحاسبة المتكاملة والإدارة للمؤسسات التعليمية.",
        learnMore: "اعرف أكثر",
      },
      enterprise: {
        title: "المؤسسات",
        subtitle: "حلول الأعمال القابلة للتطوير",
        description:
          "حلول على مستوى المؤسسات مصممة لعمليات الأعمال واسعة النطاق عبر صناعات متعددة.",
        learnMore: "اعرف أكثر",
      },
      successMetrics: "مقاييس النجاح",
      activeClients: "العملاء النشطون",
      efficiencyIncrease: "زيادة الكفاءة",
      costSavings: "توفير التكاليف",
      readyToStart: "هل أنت مستعد للبدء؟",
      scheduleDemoText:
        "حدد موعداً لعرض توضيحي شخصي لترى كيف يمكن لحلولنا أن تحول عملياتك.",
      scheduleDemo: "حدد موعد عرض توضيحي",
    },
    globalMap: {
      title: "الوجود العالمي",
      subtitle:
        "موثوق به من قبل الشركات في جميع أنحاء العالم، يخدم TaxGo Global العملاء عبر القارات بحلول محلية ودعم على مدار الساعة.",
      whyChoose: "لماذا يختار القادة العالميون TaxGo",
      features: [
        "دعم متعدد العملات ومتعدد اللغات",
        "الامتثال المحلي والالتزام التنظيمي",
        "دعم العملاء العالمي على مدار الساعة",
        "البنية التحتية السحابية في كل منطقة",
      ],
    },
    contact: {
      title: "هل أنت مستعد لتحويل عملك؟",
      subtitle:
        "تواصل مع خبرائنا لمناقشة احتياجاتك المحددة واكتشاف كيف يمكن لـ TaxGo Global أن تثور عمليات عملك.",
      getInTouch: "تواصل معنا",
      fullName: "الاسم الكامل",
      emailAddress: "عنوان البريد الإلكتروني",
      companyName: "اسم الشركة",
      phoneNumber: "رقم الهاتف",
      solutionInterest: "اهتمام الحل",
      message: "الرسالة",
      sendMessage: "إرسال الرسالة",
      thankYou: "شكراً لك!",
      successMessage: "تم إرسال رسالتك بنجاح. سيتواصل معك فريقنا خلال 24 ساعة.",
      sendAnother: "إرسال رسالة أخرى",
    },
    footer: {
      description:
        "ثورة في إدارة الأعمال بحلول مدعومة بالذكاء الاصطناعي. من المحاسبة إلى إدارة المؤسسات، نقدم أدوات شاملة تساعد الشركات على النجاح في العصر الرقمي.",
      stayUpdated: "ابق محدثاً",
      newsletterText:
        "احصل على آخر التحديثات حول الميزات الجديدة، رؤى الصناعة، والعروض الحصرية.",
      emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
      subscribe: "اشترك",
      support: "الدعم",
      happyClients: "العملاء السعداء",
      copyright: "© 2024 TaxGo Global. جميع الحقوق محفوظة.",
      terms: "الشروط",
      privacy: "الخصوصية",
      sections: {
        products: {
          title: "المنتجات",
          links: [
            "مجموعة المحاسبة",
            "إدارة المخزون",
            "الرواتب والموارد البشرية",
            "منصة التجارة الإلكترونية",
            "نقطة البيع",
            "حلول المؤسسات",
          ],
        },
        industries: {
          title: "الصناعات",
          links: [
            "الرعاية الصحية",
            "التعليم",
            "التجارة والبيع بالتجزئة",
            "المطاعم",
            "التصنيع",
            "الخدمات المهنية",
          ],
        },
        resources: {
          title: "الموارد",
          links: [
            "الوثائق",
            "مرجع API",
            "مركز المساعدة",
            "دروس الفيديو",
            "الندوات الإلكترونية",
            "دراسات الحالة",
          ],
        },
        company: {
          title: "الشركة",
          links: [
            "من نحن",
            "الوظائف",
            "الصحافة",
            "الشركاء",
            "الأمان",
            "سياسة الخصوصية",
          ],
        },
      },
      trustBadges: [
        "معتمد SOC 2",
        "متوافق مع GDPR",
        "ISO 27001",
        "تشفير 256-bit SSL",
      ],
    },
  },
  ig: {
    nav: {
      products: "Ngwaahịa",
      solutions: "Ngwọta",
      pricing: "Ọnụahịa",
      about: "Gbasara",
      contact: "Kpọtụrụ",
      signIn: "Banye",
      startTrial: "Malite nnwale efu",
    },
    hero: {
      preHeadline: "Nnọọ na ọdịnihu nke njikwa azụmahịa",
      revolutionizeYour: "Gbanwee",
      mainTexts: [
        "Akụntụ nke AI na-akwado",
        "Ngwọta azụmahịa nwere ọgụgụ isi",
        "Ngwanrọ ụlọ ọrụ zuru ụwa ọnụ",
        "Ọdịnihu ego",
      ],
      subtitle:
        "Ngwọta azụmahịa zuru oke nke AI na-akwado gụnyere akụntụ, ngwa ahịa, ụgwọ ọrụ, azụmahịa elektrọnik, na njikwa ụlọ ọrụ - niile jikọtara ọnụ na otu ikpo okwu nwere ọgụgụ isi.",
      ctaPrimary: "Nwaa akụntụ AI",
      ctaSecondary: "Hazie ngosi ndụ",
      trustIndicators: {
        clients: "500+ ndị ahịa zuru ụwa ọnụ",
        uptime: "99.9% oge ọrụ",
        security: "Nchekwa ọkwa ụlọ ọrụ",
      },
    },
    features: {
      title: "Ngwọta azụmahịa nke AI na-akwado",
      subtitle:
        "Ngwá ọrụ nwere ọgụgụ isi zuru oke emebere iji mee ka ihe na-aga n'ihu, melite ma megharia akụkụ ọ bụla nke arụmọrụ azụmahịa gị.",
      cta: "Nyochaa njiri mara niile",
      ready: "Ị dị njikere ịgbanwe azụmahịa gị site na ngwọta AI?",
      items: [
        {
          title: "Ngwa akụntụ zuru oke",
          description: "Njikwa ego na nyocha akụntụ nwere AI",
        },
        {
          title: "Njikwa ngwa ahịa nwere ọgụgụ isi",
          description: "Nlekọta ngwa ahịa na mgbe oge yana amụma analytics",
        },
        {
          title: "Njikwa ụgwọ ọrụ na HR",
          description:
            "Sistemụ nhazi ụgwọ na njikwa ndị ọrụ na-arụ ọrụ naanị ya",
        },
        {
          title: "Ngwá ọrụ ego zuru oke",
          description: "Nhazi ego dị elu, amụma na nhazi atụmatụ ego",
        },
        {
          title: "Njikwa azụmahịa na ire ere",
          description: "Ngwọta azụmahịa na-arụ ọrụ naanị ya na nlekọta ire ere",
        },
        {
          title: "Sistemụ ebe ire ere",
          description: "Nhazi ịkwụ ụgwọ jikọtara ọnụ na njikwa azụmahịa",
        },
        {
          title: "Ngwa mkpesa ndị isi",
          description: "Nghọta azụmahịa na mgbe oge na dashboard mmekọrịta",
        },
        {
          title: "Ngwa iwere iwu",
          description: "Nhazi iwu ndị ahịa dị mfe na njikwa",
        },
        {
          title: "Sistemụ ngosi ndị ahịa na ndị osi nri",
          description: "Ikpo okwu nkwekọrịta kichin na ọrụ dị mfe",
        },
        {
          title: "Iwu nwere ọgụgụ isi dabere na menu",
          description: "Nkwanye ugwu AI na njiri mara nhazi",
        },
        {
          title: "Ikpo okwu azụmahịa elektrọnik dị njikere",
          description:
            "Ngwọta ụlọ ahịa n'ịntanetị jikọtara ọnụ nwere njiri mara dị elu",
        },
        {
          title: "Ngwanrọ ahịa zuru oke",
          description: "Ire ere ọtụtụ ụzọ na njikwa ngwa ahịa etiti",
        },
      ],
    },
    industries: {
      title: "Ngwọta pụrụ iche maka ụlọ ọrụ",
      subtitle:
        "Ngwọta ahaziri ahazi emebere iji gboo ihe ịma aka na ihe achọrọ pụrụ iche nke ụlọ ọrụ ndị ahụ nwere usoro ọrụ pụrụ iche na ihe achọrọ nrụbere.",
      healthcare: {
        title: "Nlekọta ahụike",
        subtitle: "Sistemụ njikwa ụlọ ọgwụ",
        description:
          "Ngwọta nlekọta ahụike na njikwa ego zuru oke emebere maka ụlọ ọrụ ahụike ọgbara ọhụrụ.",
        learnMore: "Mụtakwuo",
      },
      education: {
        title: "Agụmakwụkwọ",
        subtitle: "Sistemụ njikwa mmụta",
        description:
          "Ikpo okwu agụmakwụkwọ zuru oke nwere akụntụ jikọtara ọnụ na nchịkwa maka ụlọ akwụkwọ.",
        learnMore: "Mụtakwuo",
      },
      enterprise: {
        title: "Ụlọ ọrụ",
        subtitle: "Ngwọta azụmahịa nwere ike ịgbasa",
        description:
          "Ngwọta ọkwa ụlọ ọrụ emebere maka arụmọrụ azụmahịa buru ibu n'ụlọ ọrụ dị iche iche.",
        learnMore: "Mụtakwuo",
      },
      successMetrics: "Nrụpụta ihe ịga nke ọma",
      activeClients: "Ndị ahịa na-arụ ọrụ",
      efficiencyIncrease: "Mmụba arụmọrụ",
      costSavings: "Nchekwa ọnụ ahịa",
      readyToStart: "Ị dị njikere ịmalite?",
      scheduleDemoText:
        "Hazie ngosi onwe onye iji hụ otú ngwọta anyị si nwee ike ịgbanwe arụmọrụ gị.",
      scheduleDemo: "Hazie ngosi",
    },
    globalMap: {
      title: "Ọnọdụ zuru ụwa ọnụ",
      subtitle:
        "Ndị ọrụ azụmahịa zuru ụwa ọnụ tụkwasịrị obi, TaxGo Global na-eje ozi ndị ahịa n'ọtụtụ kọntinent site na ngwọta mpaghara na nkwado 24/7.",
      whyChoose: "Gịnị mere ndị ndu zuru ụwa ọnụ ji ahọrọ TaxGo",
      features: [
        "Nkwado ego ọtụtụ na asụsụ ọtụtụ",
        "Nrụbere mpaghara na nrube isi iwu",
        "Nkwado ndị ahịa zuru ụwa ọnụ 24/7",
        "Ihe owuwu igwe ojii na mpaghara ọ bụla",
      ],
    },
    contact: {
      title: "Ị dị njikere ịgbanwe azụmahịa gị?",
      subtitle:
        "Soro ndị ọkachamara anyị kparịta uka mkpa gị pụrụ iche ma chọpụta otú TaxGo Global si nwee ike ime mgbanwe na arụmọrụ azụmahịa gị.",
      getInTouch: "Metụ anyị aka",
      fullName: "Aha zuru oke",
      emailAddress: "Adreesị email",
      companyName: "Aha ụlọ ọrụ",
      phoneNumber: "Nọmba ekwentị",
      solutionInterest: "Mmasị ngwọta",
      message: "Ozi",
      sendMessage: "Zigaa ozi",
      thankYou: "Daalụ!",
      successMessage:
        "Ezigara ozi gị nke ọma. Ndị otu anyị ga-akpọghachi gị n'ime awa 24.",
      sendAnother: "Zipu ozi ọzọ",
    },
    footer: {
      description:
        "Na-agbanwe njikwa azụmahịa site na ngwọta AI. Site na akụntụ ruo njikwa ụlọ ọrụ, anyị na-enye ngwá ọrụ zuru oke na-enyere azụmahịa aka ka ha bie n'oge dijitalụ.",
      stayUpdated: "Nọrọ na-emelite",
      newsletterText:
        "Nweta mmelite ọhụrụ gbasara njiri mara ọhụrụ, nghọta ụlọ ọrụ, na onyinye pụrụ iche.",
      emailPlaceholder: "Tinye adreesị email gị",
      subscribe: "Debanye aha",
      support: "Nkwado",
      happyClients: "Ndị ahịa obi ụtọ",
      copyright: "© 2024 TaxGo Global. Ikike niile echekwara.",
      terms: "Usoro",
      privacy: "Nzuzo",
      sections: {
        products: {
          title: "Ngwaahịa",
          links: [
            "Ngwa akụntụ",
            "Njikwa ngwa ahịa",
            "Ụgwọ ọrụ na HR",
            "Ikpo okwu azụmahịa elektrọnik",
            "Ebe ire ere",
            "Ngwọta ụlọ ọrụ",
          ],
        },
        industries: {
          title: "Ụlọ ọrụ",
          links: [
            "Nlekọta ahụike",
            "Agụmakwụkwọ",
            "Azụmahịa na ire ere",
            "Ụlọ oriri na ọṅụṅụ",
            "Nrụpụta",
            "Ọrụ ọkachamara",
          ],
        },
        resources: {
          title: "Akụrụngwa",
          links: [
            "Akwụkwọ",
            "Ntụaka API",
            "Ebe enyemaka",
            "Nkuzi vidiyo",
            "Webina",
            "Nyocha okwu",
          ],
        },
        company: {
          title: "Ụlọ ọrụ",
          links: [
            "Gbasara anyị",
            "Ọrụ",
            "Akwụkwọ akụkọ",
            "Ndị mmekọ",
            "Nchekwa",
            "Usoro nzuzo",
          ],
        },
      },
      trustBadges: [
        "SOC 2 kwadoro",
        "GDPR kwekọrọ",
        "ISO 27001",
        "256-bit SSL",
      ],
    },
  },
  es: {
    nav: {
      products: "Productos",
      solutions: "Soluciones",
      pricing: "Precios",
      about: "Acerca",
      contact: "Contacto",
      signIn: "Iniciar Sesión",
      startTrial: "Iniciar Prueba Gratis",
    },
    hero: {
      preHeadline: "Bienvenido al Futuro de la Gestión Empresarial",
      revolutionizeYour: "Revoluciona Tu",
      mainTexts: [
        "Contabilidad Impulsada por IA",
        "Soluciones Empresariales Inteligentes",
        "Software Empresarial Global",
        "Futuro de las Finanzas",
      ],
      subtitle:
        "Soluciones empresariales completas impulsadas por IA que incluyen contabilidad, inventario, nómina, comercio electrónico y gestión empresarial - todo unificado en una plataforma inteligente.",
      ctaPrimary: "Experimenta Contabilidad IA",
      ctaSecondary: "Programar Demo en Vivo",
      trustIndicators: {
        clients: "500+ Clientes Globales",
        uptime: "99.9% Tiempo de Actividad",
        security: "Seguridad de Nivel Empresarial",
      },
    },
    features: {
      title: "Soluciones Empresariales Impulsadas por IA",
      subtitle:
        "Suite integral de herramientas inteligentes diseñadas para automatizar, optimizar y revolucionar cada aspecto de las operaciones de tu negocio.",
      cta: "Explorar Todas las Características",
      ready:
        "¿Listo para transformar tu negocio con soluciones impulsadas por IA?",
      items: [
        {
          title: "Suite Completa de Contabilidad",
          description:
            "Contabilidad automatizada y seguimiento financiero con insights impulsados por IA",
        },
        {
          title: "Gestión Inteligente de Inventario",
          description:
            "Monitoreo de stock en tiempo real con análisis predictivo",
        },
        {
          title: "Gestión de Nómina y RRHH",
          description:
            "Sistema automatizado de procesamiento de salarios y gestión de empleados",
        },
        {
          title: "Herramientas Financieras Integrales",
          description:
            "Presupuestación avanzada, pronósticos y planificación financiera",
        },
        {
          title: "Gestión de Compras y Ventas",
          description:
            "Soluciones automatizadas de adquisiciones y seguimiento de ventas",
        },
        {
          title: "Sistema de Punto de Venta",
          description:
            "Procesamiento de pagos integrado y gestión de transacciones",
        },
        {
          title: "App de Reportes Ejecutivos",
          description:
            "Insights empresariales en tiempo real y dashboards interactivos",
        },
        {
          title: "App de Toma de Pedidos",
          description:
            "Procesamiento simplificado de pedidos de clientes y gestión",
        },
        {
          title: "Sistemas de Visualización para Clientes y Chefs",
          description:
            "Plataformas de coordinación perfecta entre cocina y servicio",
        },
        {
          title: "Pedidos Inteligentes Basados en Menú",
          description:
            "Recomendaciones impulsadas por IA y características de personalización",
        },
        {
          title: "Plataforma de Comercio Electrónico Lista",
          description:
            "Solución de tienda online completamente integrada con características avanzadas",
        },
        {
          title: "Software Completo de Marketplace",
          description:
            "Venta multicanal con control centralizado de inventario",
        },
      ],
    },
    industries: {
      title: "Soluciones Específicas por Industria",
      subtitle:
        "Soluciones personalizadas diseñadas para satisfacer los desafíos únicos y requisitos de industrias específicas con flujos de trabajo especializados y necesidades de cumplimiento.",
      healthcare: {
        title: "Salud",
        subtitle: "Sistema de Gestión Hospitalaria",
        description:
          "Solución completa de administración sanitaria y gestión financiera diseñada para instalaciones médicas modernas.",
        learnMore: "Saber Más",
      },
      education: {
        title: "Educación",
        subtitle: "Sistema de Gestión de Aprendizaje",
        description:
          "Plataforma educativa integral con contabilidad integrada y administración para instituciones educativas.",
        learnMore: "Saber Más",
      },
      enterprise: {
        title: "Empresarial",
        subtitle: "Soluciones Empresariales Escalables",
        description:
          "Soluciones de nivel empresarial diseñadas para operaciones comerciales a gran escala en múltiples industrias.",
        learnMore: "Saber Más",
      },
      successMetrics: "Métricas de Éxito",
      activeClients: "Clientes Activos",
      efficiencyIncrease: "Aumento de Eficiencia",
      costSavings: "Ahorro de Costos",
      readyToStart: "¿Listo para Comenzar?",
      scheduleDemoText:
        "Programa una demo personalizada para ver cómo nuestra solución puede transformar tus operaciones.",
      scheduleDemo: "Programar Demo",
    },
    globalMap: {
      title: "Presencia Global",
      subtitle:
        "Confiado por empresas mundialmente, TaxGo Global sirve a clientes en todos los continentes con soluciones localizadas y soporte 24/7.",
      whyChoose: "Por Qué los Líderes Globales Eligen TaxGo",
      features: [
        "Soporte multi-moneda y multi-idioma",
        "Cumplimiento local y adherencia regulatoria",
        "Soporte al cliente global 24/7",
        "Infraestructura en la nube en cada región",
      ],
    },
    contact: {
      title: "¿Listo para Transformar tu Negocio?",
      subtitle:
        "Ponte en contacto con nuestros expertos para discutir tus necesidades específicas y descubrir cómo TaxGo Global puede revolucionar las operaciones de tu negocio.",
      getInTouch: "Ponte en Contacto",
      fullName: "Nombre Completo",
      emailAddress: "Dirección de Correo",
      companyName: "Nombre de la Empresa",
      phoneNumber: "Número de Teléfono",
      solutionInterest: "Interés en Solución",
      message: "Mensaje",
      sendMessage: "Enviar Mensaje",
      thankYou: "¡Gracias!",
      successMessage:
        "Tu mensaje ha sido enviado exitosamente. Nuestro equipo se pondrá en contacto contigo dentro de 24 horas.",
      sendAnother: "Enviar Otro Mensaje",
    },
    footer: {
      description:
        "Revolucionando la gestión empresarial con soluciones impulsadas por IA. Desde contabilidad hasta gestión empresarial, proporcionamos herramientas integrales que ayudan a las empresas a prosperar en la era digital.",
      stayUpdated: "Mantente Actualizado",
      newsletterText:
        "Obtén las últimas actualizaciones sobre nuevas características, insights de la industria y ofertas exclusivas.",
      emailPlaceholder: "Ingresa tu dirección de correo",
      subscribe: "Suscribirse",
      support: "Soporte",
      happyClients: "Clientes Felices",
      copyright: "© 2024 TaxGo Global. Todos los derechos reservados.",
      terms: "Términos",
      privacy: "Privacidad",
      sections: {
        products: {
          title: "Productos",
          links: [
            "Suite de Contabilidad",
            "Gestión de Inventario",
            "Nómina y RRHH",
            "Plataforma de Comercio Electrónico",
            "Punto de Venta",
            "Soluciones Empresariales",
          ],
        },
        industries: {
          title: "Industrias",
          links: [
            "Salud",
            "Educación",
            "Retail y Comercio",
            "Restaurantes",
            "Manufactura",
            "Servicios Profesionales",
          ],
        },
        resources: {
          title: "Recursos",
          links: [
            "Documentación",
            "Referencia API",
            "Centro de Ayuda",
            "Tutoriales en Video",
            "Webinars",
            "Casos de Estudio",
          ],
        },
        company: {
          title: "Empresa",
          links: [
            "Acerca de Nosotros",
            "Carreras",
            "Kit de Prensa",
            "Socios",
            "Seguridad",
            "Política de Privacidad",
          ],
        },
      },
      trustBadges: [
        "Certificado SOC 2",
        "Cumple GDPR",
        "ISO 27001",
        "SSL 256-bit",
      ],
    },
  },
  fr: {
    nav: {
      products: "Produits",
      solutions: "Solutions",
      pricing: "Tarifs",
      about: "À Propos",
      contact: "Contact",
      signIn: "Se Connecter",
      startTrial: "Essai Gratuit",
    },
    hero: {
      preHeadline: "Bienvenue dans le Futur de la Gestion d'Entreprise",
      revolutionizeYour: "Révolutionnez Votre",
      mainTexts: [
        "Comptabilité Alimentée par IA",
        "Solutions Commerciales Intelligentes",
        "Logiciels d'Entreprise Globaux",
        "Futur de la Finance",
      ],
      subtitle:
        "Solutions commerciales complètes alimentées par IA incluant comptabilité, inventaire, paie, e-commerce et gestion d'entreprise - tout unifié dans une plateforme intelligente.",
      ctaPrimary: "Expérimentez la Comptabilité IA",
      ctaSecondary: "Programmer une Démo Live",
      trustIndicators: {
        clients: "500+ Clients Mondiaux",
        uptime: "99.9% de Disponibilité",
        security: "Sécurité de Niveau Entreprise",
      },
    },
    features: {
      title: "Solutions Commerciales Alimentées par IA",
      subtitle:
        "Suite complète d'outils intelligents conçus pour automatiser, optimiser et révolutionner chaque aspect des opérations de votre entreprise.",
      cta: "Explorer Toutes les Fonctionnalités",
      ready:
        "Prêt à transformer votre entreprise avec des solutions alimentées par IA?",
      items: [
        {
          title: "Suite Comptable Complète",
          description:
            "Tenue de livres automatisée et suivi financier avec insights alimentés par IA",
        },
        {
          title: "Gestion Intelligente des Stocks",
          description:
            "Surveillance des stocks en temps réel avec analyses prédictives",
        },
        {
          title: "Gestion de la Paie et RH",
          description:
            "Système automatisé de traitement des salaires et de gestion des employés",
        },
        {
          title: "Outils Financiers Complets",
          description:
            "Budgétisation avancée, prévisions et planification financière",
        },
        {
          title: "Gestion des Achats et Ventes",
          description:
            "Solutions automatisées d'approvisionnement et de suivi des ventes",
        },
        {
          title: "Système de Point de Vente",
          description:
            "Traitement des paiements intégré et gestion des transactions",
        },
        {
          title: "App de Rapports Exécutifs",
          description:
            "Insights commerciaux en temps réel et tableaux de bord interactifs",
        },
        {
          title: "App de Prise de Commandes",
          description: "Traitement simplifié des commandes clients et gestion",
        },
        {
          title: "Systèmes d'Affichage Client et Chef",
          description:
            "Plateformes de coordination fluide entre cuisine et service",
        },
        {
          title: "Commandes Intelligentes Basées sur Menu",
          description:
            "Recommandations alimentées par IA et fonctionnalités de personnalisation",
        },
        {
          title: "Plateforme E-commerce Prête à l'Emploi",
          description:
            "Solution de boutique en ligne entièrement intégrée avec fonctionnalités avancées",
        },
        {
          title: "Logiciel de Marketplace Complet",
          description: "Vente multicanal avec contrôle centralisé des stocks",
        },
      ],
    },
    industries: {
      title: "Solutions Spécifiques par Industrie",
      subtitle:
        "Solutions sur mesure conçues pour répondre aux défis uniques et exigences d'industries spécifiques avec des flux de travail spécialisés et des besoins de conformité.",
      healthcare: {
        title: "Santé",
        subtitle: "Système de Gestion Hospitalière",
        description:
          "Solution complète d'administration des soins de santé et de gestion financière conçue pour les installations médicales modernes.",
        learnMore: "En Savoir Plus",
      },
      education: {
        title: "Éducation",
        subtitle: "Système de Gestion de l'Apprentissage",
        description:
          "Plateforme éducative complète avec comptabilité intégrée et administration pour les institutions éducatives.",
        learnMore: "En Savoir Plus",
      },
      enterprise: {
        title: "Entreprise",
        subtitle: "Solutions Commerciales Évolutives",
        description:
          "Solutions de niveau entreprise conçues pour des opérations commerciales à grande échelle dans plusieurs industries.",
        learnMore: "En Savoir Plus",
      },
      successMetrics: "Métriques de Succès",
      activeClients: "Clients Actifs",
      efficiencyIncrease: "Augmentation d'Efficacité",
      costSavings: "Économies de Coûts",
      readyToStart: "Prêt à Commencer?",
      scheduleDemoText:
        "Programmez une démo personnalisée pour voir comment notre solution peut transformer vos opérations.",
      scheduleDemo: "Programmer une Démo",
    },
    globalMap: {
      title: "Présence Mondiale",
      subtitle:
        "Approuvé par des entreprises dans le monde entier, TaxGo Global sert des clients sur tous les continents avec des solutions localisées et un support 24/7.",
      whyChoose: "Pourquoi les Leaders Mondiaux Choisissent TaxGo",
      features: [
        "Support multi-devises et multi-langues",
        "Conformité locale et adhésion réglementaire",
        "Support client mondial 24/7",
        "Infrastructure cloud dans chaque région",
      ],
    },
    contact: {
      title: "Prêt à Transformer Votre Entreprise?",
      subtitle:
        "Contactez nos experts pour discuter de vos besoins spécifiques et découvrir comment TaxGo Global peut révolutionner les opérations de votre entreprise.",
      getInTouch: "Entrer en Contact",
      fullName: "Nom Complet",
      emailAddress: "Adresse E-mail",
      companyName: "Nom de l'Entreprise",
      phoneNumber: "Numéro de Téléphone",
      solutionInterest: "Intérêt pour la Solution",
      message: "Message",
      sendMessage: "Envoyer le Message",
      thankYou: "Merci!",
      successMessage:
        "Votre message a été envoyé avec succès. Notre équipe vous contactera dans les 24 heures.",
      sendAnother: "Envoyer un Autre Message",
    },
    footer: {
      description:
        "Révolutionner la gestion d'entreprise avec des solutions alimentées par IA. De la comptabilité à la gestion d'entreprise, nous fournissons des outils complets qui aident les entreprises à prospérer à l'ère numérique.",
      stayUpdated: "Restez Informé",
      newsletterText:
        "Obtenez les dernières mises à jour sur les nouvelles fonctionnalités, les insights de l'industrie et les offres exclusives.",
      emailPlaceholder: "Entrez votre adresse e-mail",
      subscribe: "S'abonner",
      support: "Support",
      happyClients: "Clients Satisfaits",
      copyright: "© 2024 TaxGo Global. Tous droits réservés.",
      terms: "Termes",
      privacy: "Confidentialité",
      sections: {
        products: {
          title: "Produits",
          links: [
            "Suite Comptable",
            "Gestion des Stocks",
            "Paie et RH",
            "Plateforme E-commerce",
            "Point de Vente",
            "Solutions Entreprise",
          ],
        },
        industries: {
          title: "Industries",
          links: [
            "Santé",
            "Éducation",
            "Retail et Commerce",
            "Restaurants",
            "Fabrication",
            "Services Professionnels",
          ],
        },
        resources: {
          title: "Ressources",
          links: [
            "Documentation",
            "Référence da API",
            "Centre d'Aide",
            "Tutoriels Vidéo",
            "Webinaires",
            "Études de Cas",
          ],
        },
        company: {
          title: "Entreprise",
          links: [
            "À Propos",
            "Carrières",
            "Kit Presse",
            "Partenaires",
            "Sécurité",
            "Politique de Confidentialité",
          ],
        },
      },
      trustBadges: [
        "Certifié SOC 2",
        "Conforme GDPR",
        "ISO 27001",
        "SSL 256-bit",
      ],
    },
  },
  de: {
    nav: {
      products: "Produkte",
      solutions: "Lösungen",
      pricing: "Preisgestaltung",
      about: "Über uns",
      contact: "Kontakt",
      signIn: "Anmelden",
      startTrial: "Kostenlose Testversion",
    },
    hero: {
      preHeadline: "Willkommen in der Zukunft des Unternehmensmanagements",
      revolutionizeYour: "Revolutionieren Sie Ihr",
      mainTexts: [
        "KI-gestützte Buchhaltung",
        "Intelligente Geschäftslösungen",
        "Globale Unternehmenssoftware",
        "Zukunft der Finanzen",
      ],
      subtitle:
        "Komplette KI-gestützte Geschäftslösungen einschließlich Buchhaltung, Inventar, Gehaltsabrechnung, E-Commerce und Unternehmensmanagement - alles vereint in einer intelligenten Plattform.",
      ctaPrimary: "KI-Buchhaltung erleben",
      ctaSecondary: "Live-Demo planen",
      trustIndicators: {
        clients: "500+ globale Kunden",
        uptime: "99,9% Betriebszeit",
        security: "Unternehmenssicherheit",
      },
    },
    features: {
      title: "KI-gestützte Geschäftslösungen",
      subtitle:
        "Umfassende Suite intelligenter Tools, die entwickelt wurden, um jeden Aspekt Ihrer Geschäftsabläufe zu automatisieren, zu optimieren und zu revolutionieren.",
      cta: "Alle Funktionen erkunden",
      ready:
        "Bereit, Ihr Unternehmen mit KI-gestützten Lösungen zu transformieren?",
      items: [
        {
          title: "Komplette Buchhaltungssuite",
          description:
            "Automatisierte Buchführung und Finanzverfolgung mit KI-gestützten Einblicken",
        },
        {
          title: "Intelligente Lagerverwaltung",
          description: "Echtzeit-Bestandsüberwachung mit prädiktiven Analysen",
        },
        {
          title: "Gehalts- und HR-Management",
          description:
            "Automatisiertes Gehaltsabrechnungssystem und Mitarbeiterverwaltung",
        },
        {
          title: "Umfassende Finanztools",
          description: "Erweiterte Budgetierung, Prognosen und Finanzplanung",
        },
        {
          title: "Einkaufs- und Vertriebsmanagement",
          description:
            "Automatisierte Beschaffungs- und Vertriebsverfolgungslösungen",
        },
        {
          title: "Kassensystem",
          description:
            "Integrierte Zahlungsabwicklung und Transaktionsmanagement",
        },
        {
          title: "Executive Reporting App",
          description: "Echtzeit-Geschäftseinblicke und interaktive Dashboards",
        },
        {
          title: "Bestellannahme-App",
          description: "Optimierte Kundenbestellungsabwicklung und -verwaltung",
        },
        {
          title: "Kunden- und Küchen-Display-Systeme",
          description: "Nahtlose Küchen- und Service-Koordinationsplattformen",
        },
        {
          title: "Intelligente menübasierte Bestellung",
          description: "KI-gestützte Empfehlungen und Anpassungsfunktionen",
        },
        {
          title: "Fertige E-Commerce-Plattform",
          description:
            "Vollständig integrierte Online-Shop-Lösung mit erweiterten Funktionen",
        },
        {
          title: "Komplette Marktplatz-Software",
          description:
            "Multi-Channel-Verkauf mit zentralisierter Bestandskontrolle",
        },
      ],
    },
    industries: {
      title: "Branchenspezifische Lösungen",
      subtitle:
        "Maßgeschneiderte Lösungen, die darauf ausgelegt sind, die einzigartigen Herausforderungen und Anforderungen spezifischer Branchen mit spezialisierten Arbeitsabläufen und Compliance-Anforderungen zu erfüllen.",
      healthcare: {
        title: "Gesundheitswesen",
        subtitle: "Krankenhaus-Management-System",
        description:
          "Komplette Gesundheitsverwaltungs- und Finanzmanagement-Lösung für moderne medizinische Einrichtungen.",
        learnMore: "Mehr erfahren",
      },
      education: {
        title: "Bildung",
        subtitle: "Lernmanagementsystem",
        description:
          "Umfassende Bildungsplattform mit integrierter Buchhaltung und Verwaltung für Bildungseinrichtungen.",
        learnMore: "Mehr erfahren",
      },
      enterprise: {
        title: "Unternehmen",
        subtitle: "Skalierbare Geschäftslösungen",
        description:
          "Unternehmensklasse-Lösungen für großangelegte Geschäftsabläufe in verschiedenen Branchen.",
        learnMore: "Mehr erfahren",
      },
      successMetrics: "Erfolgsmetriken",
      activeClients: "Aktive Kunden",
      efficiencyIncrease: "Effizienzsteigerung",
      costSavings: "Kosteneinsparungen",
      readyToStart: "Bereit anzufangen?",
      scheduleDemoText:
        "Planen Sie eine personalisierte Demo, um zu sehen, wie unsere Lösung Ihre Abläufe transformieren kann.",
      scheduleDemo: "Demo planen",
    },
    globalMap: {
      title: "Globale Präsenz",
      subtitle:
        "Vertraut von Unternehmen weltweit, bedient TaxGo Global Kunden auf allen Kontinenten mit lokalisierten Lösungen und 24/7-Support.",
      whyChoose: "Warum globale Führungskräfte TaxGo wählen",
      features: [
        "Multi-Währungs- und Multi-Sprach-Support",
        "Lokale Compliance und regulatorische Einhaltung",
        "24/7 globaler Kundensupport",
        "Cloud-Infrastruktur in jeder Region",
      ],
    },
    contact: {
      title: "Bereit, Ihr Unternehmen zu transformieren?",
      subtitle:
        "Kontaktieren Sie unsere Experten, um Ihre spezifischen Bedürfnisse zu besprechen und zu erfahren, wie TaxGo Global Ihre Geschäftsabläufe revolutionieren kann.",
      getInTouch: "Kontakt aufnehmen",
      fullName: "Vollständiger Name",
      emailAddress: "E-Mail-Adresse",
      companyName: "Firmenname",
      phoneNumber: "Telefonnummer",
      solutionInterest: "Lösungsinteresse",
      message: "Nachricht",
      sendMessage: "Nachricht senden",
      thankYou: "Vielen Dank!",
      successMessage:
        "Ihre Nachricht wurde erfolgreich gesendet. Unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.",
      sendAnother: "Weitere Nachricht senden",
    },
    footer: {
      description:
        "Revolutionierung des Unternehmensmanagements mit KI-gestützten Lösungen. Von der Buchhaltung bis zum Unternehmensmanagement bieten wir umfassende Tools, die Unternehmen helfen, im digitalen Zeitalter zu gedeihen.",
      stayUpdated: "Auf dem Laufenden bleiben",
      newsletterText:
        "Erhalten Sie die neuesten Updates zu neuen Funktionen, Brancheneinblicken und exklusiven Angeboten.",
      emailPlaceholder: "E-Mail-Adresse eingeben",
      subscribe: "Abonnieren",
      support: "Support",
      happyClients: "Zufriedene Kunden",
      copyright: "© 2024 TaxGo Global. Alle Rechte vorbehalten.",
      terms: "Bedingungen",
      privacy: "Datenschutz",
      sections: {
        products: {
          title: "Produkte",
          links: [
            "Buchhaltungssuite",
            "Lagerverwaltung",
            "Gehaltsabrechnung & HR",
            "E-Commerce-Plattform",
            "Kassensystem",
            "Unternehmenslösungen",
          ],
        },
        industries: {
          title: "Branchen",
          links: [
            "Gesundheitswesen",
            "Bildung",
            "Einzelhandel & Commerce",
            "Restaurants",
            "Fertigung",
            "Professionelle Dienstleistungen",
          ],
        },
        resources: {
          title: "Ressourcen",
          links: [
            "Dokumentation",
            "API-Referenz",
            "Hilfezentrum",
            "Video-Tutorials",
            "Webinare",
            "Fallstudien",
          ],
        },
        company: {
          title: "Unternehmen",
          links: [
            "Über uns",
            "Karriere",
            "Presse-Kit",
            "Partner",
            "Sicherheit",
            "Datenschutzrichtlinie",
          ],
        },
      },
      trustBadges: [
        "SOC 2 zertifiziert",
        "GDPR-konform",
        "ISO 27001",
        "256-bit SSL",
      ],
    },
  },
  zh: {
    nav: {
      products: "产品",
      solutions: "解决方案",
      pricing: "定价",
      about: "关于",
      contact: "联系",
      signIn: "登录",
      startTrial: "开始免费试用",
    },
    hero: {
      preHeadline: "欢迎来到企业管理的未来",
      revolutionizeYour: "革新您的",
      mainTexts: [
        "AI驱动的会计",
        "智能商业解决方案",
        "全球企业软件",
        "金融的未来",
      ],
      subtitle:
        "完整的AI驱动业务解决方案，包括会计、库存、工资、电子商务和企业管理 - 全部统一在一个智能平台中。",
      ctaPrimary: "体验AI会计",
      ctaSecondary: "安排现场演示",
      trustIndicators: {
        clients: "500+全球客户",
        uptime: "99.9%正常运行时间",
        security: "企业级安全",
      },
    },
    features: {
      title: "AI驱动的商业解决方案",
      subtitle:
        "全面的智能工具套件，旨在自动化、优化和革命化您业务运营的每个方面。",
      cta: "探索所有功能",
      ready: "准备好用AI驱动的解决方案转变您的业务了吗？",
      items: [
        {
          title: "完整会计套件",
          description: "自动化簿记和财务跟踪，配备AI驱动的洞察",
        },
        {
          title: "智能库存管理",
          description: "实时库存监控和预测分析",
        },
        {
          title: "工资和人力资源管理",
          description: "自动化薪资处理和员工管理系统",
        },
        {
          title: "综合财务工具",
          description: "高级预算、预测和财务规划",
        },
        {
          title: "采购和销售管理",
          description: "自动化采购和销售跟踪解决方案",
        },
        {
          title: "销售点系统",
          description: "集成支付处理和交易管理",
        },
        {
          title: "执行报告应用",
          description: "实时业务洞察和交互式仪表板",
        },
        {
          title: "订单处理应用",
          description: "简化的客户订单处理和管理",
        },
        {
          title: "客户和厨师显示系统",
          description: "无缝厨房和服务协调平台",
        },
        {
          title: "智能菜单订购",
          description: "AI驱动的推荐和定制功能",
        },
        {
          title: "现成的电子商务平台",
          description: "具有高级功能的完全集成在线商店解决方案",
        },
        {
          title: "完整的市场软件",
          description: "多渠道销售和集中库存控制",
        },
      ],
    },
    industries: {
      title: "行业特定解决方案",
      subtitle:
        "量身定制的解决方案，旨在满足特定行业的独特挑战和要求，具有专门的工作流程和合规需求。",
      healthcare: {
        title: "医疗保健",
        subtitle: "医院管理系统",
        description: "为现代医疗设施设计的完整医疗管理和财务管理解决方案。",
        learnMore: "了解更多",
      },
      education: {
        title: "教育",
        subtitle: "学习管理系统",
        description: "为教育机构提供集成会计和管理的综合教育平台。",
        learnMore: "了解更多",
      },
      enterprise: {
        title: "企业",
        subtitle: "可扩展的商业解决方案",
        description: "为跨多个行业的大规模商业运营设计的企业级解决方案。",
        learnMore: "了解更多",
      },
      successMetrics: "成功指标",
      activeClients: "活跃客户",
      efficiencyIncrease: "效率提升",
      costSavings: "成本节约",
      readyToStart: "准备开始了吗？",
      scheduleDemoText: "安排个性化演示，看看我们的解决方案如何转变您的运营。",
      scheduleDemo: "安排演示",
    },
    globalMap: {
      title: "全球存在",
      subtitle:
        "受到全球企业信赖，TaxGo Global为各大洲的客户提供本地化解决方案和24/7支持。",
      whyChoose: "为什么全球领导者选择TaxGo",
      features: [
        "多货币和多语言支持",
        "本地合规和监管遵循",
        "24/7全球客户支持",
        "每个地区的云基础设施",
      ],
    },
    contact: {
      title: "准备转变您的业务？",
      subtitle:
        "联系我们的专家讨论您的具体需求，了解TaxGo Global如何革命化您的业务运营。",
      getInTouch: "联系我们",
      fullName: "全名",
      emailAddress: "电子邮件地址",
      companyName: "公司名称",
      phoneNumber: "电话号码",
      solutionInterest: "解决方案兴趣",
      message: "消息",
      sendMessage: "发送消息",
      thankYou: "谢谢！",
      successMessage: "您的消息已成功发送。我们的团队将在24小时内与您联系。",
      sendAnother: "发送另一条消息",
    },
    footer: {
      description:
        "用AI驱动的解决方案革命化企业管理。从会计到企业管理，我们提供帮助企业在数字时代蓬勃发展的综合工具。",
      stayUpdated: "保持更新",
      newsletterText: "获取新功能、行业洞察和独家优惠的最新更新。",
      emailPlaceholder: "输入您的电子邮件地址",
      subscribe: "订阅",
      support: "支持",
      happyClients: "满意客户",
      copyright: "© 2024 TaxGo Global. 保留所有权利。",
      terms: "条款",
      privacy: "隐私",
      sections: {
        products: {
          title: "产品",
          links: [
            "会计套件",
            "库存管理",
            "工资和人力资源",
            "电子商务平台",
            "销售点",
            "企业解决方案",
          ],
        },
        industries: {
          title: "行业",
          links: [
            "医疗保健",
            "教育",
            "零售和商务",
            "餐厅",
            "制造业",
            "专业服务",
          ],
        },
        resources: {
          title: "资源",
          links: [
            "文档",
            "API参考",
            "帮助中心",
            "视频教程",
            "网络研讨会",
            "案例研究",
          ],
        },
        company: {
          title: "公司",
          links: [
            "关于我们",
            "职业",
            "新闻资料袋",
            "合作伙伴",
            "安全",
            "隐私政策",
          ],
        },
      },
      trustBadges: ["SOC 2认证", "GDPR合规", "ISO 27001", "256位SSL"],
    },
  },
  ja: {
    nav: {
      products: "製品",
      solutions: "ソリューション",
      pricing: "料金",
      about: "会社概要",
      contact: "お問い合わせ",
      signIn: "ログイン",
      startTrial: "無料トライアル開始",
    },
    hero: {
      preHeadline: "ビジネス管理の未来へようこそ",
      revolutionizeYour: "革新的な",
      mainTexts: [
        "AI駆動会計",
        "スマートビジネスソリューション",
        "グローバル企業ソフトウェア",
        "金融の未来",
      ],
      subtitle:
        "会計、在庫、給与、eコマース、企業管理を含む完全なAI駆動ビジネスソリューション - すべて1つのインテリジェントプラットフォームに統合。",
      ctaPrimary: "AI会計を体験",
      ctaSecondary: "ライブデモをスケジュール",
      trustIndicators: {
        clients: "500+グローバル顧客",
        uptime: "99.9%稼働時間",
        security: "エンタープライズグレードセキュリティ",
      },
    },
    features: {
      title: "AI駆動ビジネスソリューション",
      subtitle:
        "ビジネス運営のあらゆる側面を自動化、最適化、革新するために設計された包括的なインテリジェントツールスイート。",
      cta: "すべての機能を探索",
      ready: "AI駆動ソリューションでビジネスを変革する準備はできていますか？",
      items: [
        {
          title: "完全会計スイート",
          description: "AI駆動のインサイトによる自動簿記と財務追跡",
        },
        {
          title: "スマート在庫管理",
          description: "予測分析によるリアルタイム在庫監視",
        },
        {
          title: "給与・人事管理",
          description: "自動給与処理と従業員管理システム",
        },
        {
          title: "包括的財務ツール",
          description: "高度な予算編成、予測、財務計画",
        },
        {
          title: "購買・販売管理",
          description: "自動調達と販売追跡ソリューション",
        },
        {
          title: "POSシステム",
          description: "統合決済処理と取引管理",
        },
        {
          title: "エグゼクティブレポートアプリ",
          description:
            "リアルタイムビジネスインサイトとインタラクティブダッシュボード",
        },
        {
          title: "注文取得アプリ",
          description: "合理化された顧客注文処理と管理",
        },
        {
          title: "顧客・シェフディスプレイシステム",
          description: "シームレスなキッチンとサービス調整プラットフォーム",
        },
        {
          title: "スマートメニューベース注文",
          description: "AI駆動の推奨とカスタマイゼーション機能",
        },
        {
          title: "レディメイドeコマースプラットフォーム",
          description:
            "高度な機能を備えた完全統合オンラインストアソリューション",
        },
        {
          title: "完全マーケットプレイスソフトウェア",
          description: "集中在庫制御によるマルチチャネル販売",
        },
      ],
    },
    industries: {
      title: "業界固有ソリューション",
      subtitle:
        "専門的なワークフローとコンプライアンス要件を持つ特定業界の独特な課題と要件を満たすように設計されたカスタマイズソリューション。",
      healthcare: {
        title: "ヘルスケア",
        subtitle: "病院管理システム",
        description:
          "現代医療施設向けに設計された完全なヘルスケア管理と財務管理ソリューション。",
        learnMore: "詳細を見る",
      },
      education: {
        title: "教育",
        subtitle: "学習管理システム",
        description:
          "教育機関向けの統合会計と管理を備えた包括的教育プラットフォーム。",
        learnMore: "詳細を見る",
      },
      enterprise: {
        title: "エンタープライズ",
        subtitle: "スケーラブルビジネスソリューション",
        description:
          "複数業界にわたる大規模ビジネス運営向けに設計されたエンタープライズグレードソリューション。",
        learnMore: "詳細を見る",
      },
      successMetrics: "成功指標",
      activeClients: "アクティブ顧客",
      efficiencyIncrease: "効率向上",
      costSavings: "コスト削減",
      readyToStart: "開始準備はできていますか？",
      scheduleDemoText:
        "パーソナライズされたデモをスケジュールして、当社のソリューションがどのように運営を変革できるかをご覧ください。",
      scheduleDemo: "デモをスケジュール",
    },
    globalMap: {
      title: "グローバルプレゼンス",
      subtitle:
        "世界中の企業に信頼され、TaxGo Globalは大陸を越えてローカライズされたソリューションと24/7サポートで顧客にサービスを提供しています。",
      whyChoose: "グローバルリーダーがTaxGoを選ぶ理由",
      features: [
        "マルチ通貨・マルチ言語サポート",
        "現地コンプライアンスと規制遵守",
        "24/7グローバルカスタマーサポート",
        "各地域のクラウドインフラストラクチャ",
      ],
    },
    contact: {
      title: "ビジネスを変革する準備はできていますか？",
      subtitle:
        "専門家にお問い合わせいただき、具体的なニーズについて話し合い、TaxGo Globalがビジネス運営をどのように革命化できるかをご確認ください。",
      getInTouch: "お問い合わせ",
      fullName: "フルネーム",
      emailAddress: "メールアドレス",
      companyName: "会社名",
      phoneNumber: "電話番号",
      solutionInterest: "ソリューションへの関心",
      message: "メッセージ",
      sendMessage: "メッセージを送信",
      thankYou: "ありがとうございます！",
      successMessage:
        "メッセージが正常に送信されました。チームが24時間以内にご連絡いたします。",
      sendAnother: "別のメッセージを送信",
    },
    footer: {
      description:
        "AI駆動ソリューションでビジネス管理を革命化。会計から企業管理まで、デジタル時代に企業が繁栄するための包括的ツールを提供します。",
      stayUpdated: "最新情報を受け取る",
      newsletterText:
        "新機能、業界インサイト、限定オファーの最新アップデートを取得してください。",
      emailPlaceholder: "メールアドレスを入力",
      subscribe: "購読",
      support: "サポート",
      happyClients: "満足顧客",
      copyright: "© 2024 TaxGo Global. 全著作権所有。",
      terms: "利用規約",
      privacy: "プライバシー",
      sections: {
        products: {
          title: "製品",
          links: [
            "会計スイート",
            "在庫管理",
            "給与・人事",
            "eコマースプラットフォーム",
            "POS",
            "エンタープライズソリューション",
          ],
        },
        industries: {
          title: "業界",
          links: [
            "ヘルスケア",
            "教育",
            "リテール・コマース",
            "レストラン",
            "製造業",
            "プロフェッショナルサービス",
          ],
        },
        resources: {
          title: "リソース",
          links: [
            "ドキュメンテーション",
            "APIリファレンス",
            "ヘルプセンター",
            "ビデオチュートリアル",
            "ウェビナー",
            "ケーススタディ",
          ],
        },
        company: {
          title: "会社",
          links: [
            "会社概要",
            "キャリア",
            "プレスキット",
            "パートナー",
            "セキュリティ",
            "プライバシーポリシー",
          ],
        },
      },
      trustBadges: ["SOC 2認定", "GDPR準拠", "ISO 27001", "256ビットSSL"],
    },
  },
  pt: {
    nav: {
      products: "Produtos",
      solutions: "Soluções",
      pricing: "Preços",
      about: "Sobre",
      contact: "Contato",
      signIn: "Entrar",
      startTrial: "Iniciar Teste Grátis",
    },
    hero: {
      preHeadline: "Bem-vindo ao Futuro da Gestão Empresarial",
      revolutionizeYour: "Revolucione Seu",
      mainTexts: [
        "Contabilidade Alimentada por IA",
        "Soluções Empresariais Inteligentes",
        "Software Empresarial Global",
        "Futuro das Finanças",
      ],
      subtitle:
        "Soluções empresariais completas alimentadas por IA incluindo contabilidade, inventário, folha de pagamento, e-commerce e gestão empresarial - tudo unificado em uma plataforma inteligente.",
      ctaPrimary: "Experimente Contabilidade IA",
      ctaSecondary: "Agendar Demo ao Vivo",
      trustIndicators: {
        clients: "500+ Clientes Globais",
        uptime: "99,9% Tempo de Atividade",
        security: "Segurança Nível Empresarial",
      },
    },
    features: {
      title: "Soluções Empresariais Alimentadas por IA",
      subtitle:
        "Suíte abrangente de ferramentas inteligentes projetadas para automatizar, otimizar e revolucionar todos os aspectos das operações do seu negócio.",
      cta: "Explorar Todas as Funcionalidades",
      ready:
        "Pronto para transformar seu negócio com soluções alimentadas por IA?",
      items: [
        {
          title: "Suíte Completa de Contabilidade",
          description:
            "Escrituração automatizada e rastreamento financeiro com insights alimentados por IA",
        },
        {
          title: "Gestão Inteligente de Inventário",
          description:
            "Monitoramento de estoque em tempo real com análises preditivas",
        },
        {
          title: "Gestão de Folha de Pagamento e RH",
          description:
            "Sistema automatizado de processamento de salários e gestão de funcionários",
        },
        {
          title: "Ferramentas Financeiras Abrangentes",
          description:
            "Orçamentação avançada, previsões e planejamento financeiro",
        },
        {
          title: "Gestão de Compras e Vendas",
          description:
            "Soluções automatizadas de aquisição e rastreamento de vendas",
        },
        {
          title: "Sistema de Ponto de Venda",
          description:
            "Processamento de pagamentos integrado e gestão de transações",
        },
        {
          title: "App de Relatórios Executivos",
          description:
            "Insights empresariais em tempo real e dashboards interativos",
        },
        {
          title: "App de Recebimento de Pedidos",
          description:
            "Processamento simplificado de pedidos de clientes e gestão",
        },
        {
          title: "Sistemas de Display para Clientes e Chefs",
          description:
            "Plataformas de coordenação perfeita entre cozinha e serviço",
        },
        {
          title: "Pedidos Inteligentes Baseados em Menu",
          description:
            "Recomendações alimentadas por IA e recursos de personalização",
        },
        {
          title: "Plataforma de E-commerce Prête à l'Emploi",
          description:
            "Solution de boutique en ligne entièrement intégrée avec fonctionnalités avancées",
        },
        {
          title: "Software Completo de Marketplace",
          description:
            "Vendas multicanal com controle centralizado de inventário",
        },
      ],
    },
    industries: {
      title: "Soluções Específicas por Indústria",
      subtitle:
        "Soluções customizadas projetadas para atender os desafios únicos e requisitos de indústrias específicas com fluxos de trabalho especializados e necessidades de conformidade.",
      healthcare: {
        title: "Saúde",
        subtitle: "Sistema de Gestão Hospitalar",
        description:
          "Solução completa de administração de saúde e gestão financeira projetada para instalações médicas modernas.",
        learnMore: "Saiba Mais",
      },
      education: {
        title: "Educação",
        subtitle: "Sistema de Gestão de Aprendizagem",
        description:
          "Plateforme educacional abrangente com contabilidade integrada e administração para instituições educacionais.",
        learnMore: "Saiba Mais",
      },
      enterprise: {
        title: "Empresarial",
        subtitle: "Soluções Empresariais Escaláveis",
        description:
          "Soluções de nível empresarial projetadas para operações empresariais de grande escala em múltiplas indústrias.",
        learnMore: "Saiba Mais",
      },
      successMetrics: "Métricas de Sucesso",
      activeClients: "Clientes Ativos",
      efficiencyIncrease: "Aumento de Eficiência",
      costSavings: "Economia de Custos",
      readyToStart: "Pronto para Começar?",
      scheduleDemoText:
        "Agende uma demonstração personalizada para ver como nossa solução pode transformar suas operações.",
      scheduleDemo: "Agendar Demo",
    },
    globalMap: {
      title: "Presença Global",
      subtitle:
        "Confiado por empresas mundialmente, TaxGo Global serve clientes em todos os continentes com soluções localizadas e suporte 24/7.",
      whyChoose: "Por Que Líderes Globais Escolhem TaxGo",
      features: [
        "Suporte multi-moeda e multi-idioma",
        "Conformidade local e aderência regulatória",
        "Suporte ao cliente global 24/7",
        "Infraestrutura em nuvem em cada região",
      ],
    },
    contact: {
      title: "Pronto para Transformar Seu Negócio?",
      subtitle:
        "Entre em contato com nossos especialistas para discutir suas necessidades específicas e descobrir como TaxGo Global pode revolucionar suas operações empresariais.",
      getInTouch: "Entrar em Contato",
      fullName: "Nome Completo",
      emailAddress: "Endereço de E-mail",
      companyName: "Nome da Empresa",
      phoneNumber: "Número de Telefone",
      solutionInterest: "Interesse em Solução",
      message: "Mensagem",
      sendMessage: "Enviar Mensagem",
      thankYou: "Obrigado!",
      successMessage:
        "Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em 24 horas.",
      sendAnother: "Enviar Outra Mensagem",
    },
    footer: {
      description:
        "Revolucionando a gestão empresarial com soluções alimentadas por IA. Da contabilidade à gestão empresarial, fornecemos ferramentas abrangentes que ajudam empresas a prosperar na era digital.",
      stayUpdated: "Mantenha-se Atualizado",
      newsletterText:
        "Receba as últimas atualizações sobre novos recursos, insights da indústria e ofertas exclusivas.",
      emailPlaceholder: "Digite seu endereço de e-mail",
      subscribe: "Inscrever-se",
      support: "Suporte",
      happyClients: "Clientes Satisfeitos",
      copyright: "© 2024 TaxGo Global. Todos os direitos reservados.",
      terms: "Termos",
      privacy: "Privacidade",
      sections: {
        products: {
          title: "Produtos",
          links: [
            "Suíte de Contabilidade",
            "Gestão de Inventário",
            "Folha de Pagamento e RH",
            "Plataforma de E-commerce",
            "Ponto de Venda",
            "Soluções Empresariais",
          ],
        },
        industries: {
          title: "Indústrias",
          links: [
            "Saúde",
            "Educação",
            "Varejo e Comércio",
            "Restaurantes",
            "Manufatura",
            "Serviços Profissionais",
          ],
        },
        resources: {
          title: "Recursos",
          links: [
            "Documentação",
            "Referência da API",
            "Centro de Ajuda",
            "Tutoriais em Vídeo",
            "Webinars",
            "Estudos de Caso",
          ],
        },
        company: {
          title: "Empresa",
          links: [
            "Sobre Nós",
            "Carreiras",
            "Kit de Imprensa",
            "Parceiros",
            "Segurança",
            "Política de Privacidade",
          ],
        },
      },
      trustBadges: [
        "Certificado SOC 2",
        "Conforme GDPR",
        "ISO 27001",
        "SSL 256-bit",
      ],
    },
  },
  ru: {
    nav: {
      products: "Продукты",
      solutions: "Решения",
      pricing: "Цены",
      about: "О нас",
      contact: "Контакты",
      signIn: "Войти",
      startTrial: "Начать бесплатную пробную версию",
    },
    hero: {
      preHeadline: "Добро пожаловать в будущее управления бизнесом",
      revolutionizeYour: "Революционизируйте Ваш",
      mainTexts: [
        "Бухгалтерия на базе ИИ",
        "Умные бизнес-решения",
        "Глобальное корпоративное ПО",
        "Будущее финансов",
      ],
      subtitle:
        "Полные бизнес-решения на базе ИИ, включающие бухгалтерию, складской учет, расчет зарплаты, электронную коммерцию и управление предприятием - все объединено в одной интеллектуальной платформе.",
      ctaPrimary: "Попробуйте ИИ-бухгалтерию",
      ctaSecondary: "Запланировать живую демонстрацию",
      trustIndicators: {
        clients: "500+ глобальных клиентов",
        uptime: "99,9% время работы",
        security: "Корпоративная безопасность",
      },
    },
    features: {
      title: "Бизнес-решения на базе ИИ",
      subtitle:
        "Комплексный набор интеллектуальных инструментов, разработанных для автоматизации, оптимизации и революционного изменения каждого аспекта операций вашего бизнеса.",
      cta: "Изучить все функции",
      ready:
        "Готовы трансформировать свой бизнес с помощью решений на базе ИИ?",
      items: [
        {
          title: "Полный бухгалтерский пакет",
          description:
            "Автоматизированная бухгалтерия и финансовое отслеживание с аналитикой на базе ИИ",
        },
        {
          title: "Умное управление складом",
          description:
            "Мониторинг запасов в реальном времени с прогнозной аналитикой",
        },
        {
          title: "Управление зарплатой и HR",
          description:
            "Автоматизированная система расчета зарплаты и управления сотрудниками",
        },
        {
          title: "Комплексные финансовые инструменты",
          description:
            "Расширенное бюджетирование, прогнозирование и финансовое планирование",
        },
        {
          title: "Управление закупками и продажами",
          description:
            "Автоматизированные решения для закупок и отслеживания продаж",
        },
        {
          title: "Система торговых точек",
          description:
            "Интегрированная обработка платежей и управление транзакциями",
        },
        {
          title: "Приложение исполнительной отчетности",
          description:
            "Бизнес-аналитика в реальном времени и интерактивные панели",
        },
        {
          title: "Приложение приема заказов",
          description: "Упрощенная обработка клиентских заказов и управление",
        },
        {
          title: "Системы отображения для клиентов и поваров",
          description: "Бесшовные платформы координации кухни и обслуживания",
        },
        {
          title: "Умные заказы на основе меню",
          description: "Рекомендации на базе ИИ и функции кастомизации",
        },
        {
          title: "Готовая платформа электронной коммерции",
          description:
            "Полностью интегрированное решение интернет-магазина с расширенными функциями",
        },
        {
          title: "Полное программное обеспечение маркетплейса",
          description:
            "Многоканальные продажи с централизованным контролем запасов",
        },
      ],
    },
    industries: {
      title: "Отраслевые решения",
      subtitle:
        "Индивидуальные решения, разработанные для удовлетворения уникальных вызовов и требований конкретных отраслей со специализированными рабочими процессами и потребностями в соответствии.",
      healthcare: {
        title: "Здравоохранение",
        subtitle: "Система управления больницей",
        description:
          "Полное решение для администрирования здравоохранения и финансового управления, разработанное для современных медицинских учреждений.",
        learnMore: "Узнать больше",
      },
      education: {
        title: "Образование",
        subtitle: "Система управления обучением",
        description:
          "Комплексная образовательная платформа с интегрированной бухгалтерией и администрированием для образовательных учреждений.",
        learnMore: "Узнать больше",
      },
      enterprise: {
        title: "Предприятие",
        subtitle: "Масштабируемые бизнес-решения",
        description:
          "Корпоративные решения, разработанные для крупномасштабных бизнес-операций в различных отраслях.",
        learnMore: "Узнать больше",
      },
      successMetrics: "Показатели успеха",
      activeClients: "Активные клиенты",
      efficiencyIncrease: "Повышение эффективности",
      costSavings: "Экономия затрат",
      readyToStart: "Готовы начать?",
      scheduleDemoText:
        "Запланируйте персонализированную демонстрацию, чтобы увидеть, как наше решение может трансформировать ваши операции.",
      scheduleDemo: "Запланировать демонстрацию",
    },
    globalMap: {
      title: "Глобальное присутствие",
      subtitle:
        "Доверенная компаниями по всему миру, TaxGo Global обслуживает клиентов на всех континентах с локализованными решениями и поддержкой 24/7.",
      whyChoose: "Почему глобальные лидеры выбирают TaxGo",
      features: [
        "Поддержка множественных валют и языков",
        "Местное соответствие и регулятивное соблюдение",
        "Глобальная поддержка клиентов 24/7",
        "Облачная инфраструктура в каждом регионе",
      ],
    },
    contact: {
      title: "Готовы трансформировать свой бизнес?",
      subtitle:
        "Свяжитесь с нашими экспертами, чтобы обсудить ваши конкретные потребности и узнать, как TaxGo Global может революционизировать операции вашего бизнеса.",
      getInTouch: "Связаться с нами",
      fullName: "Полное имя",
      emailAddress: "Адрес электронной почты",
      companyName: "Название компании",
      phoneNumber: "Номер телефона",
      solutionInterest: "Интерес к решению",
      message: "Сообщение",
      sendMessage: "Отправить сообщение",
      thankYou: "Спасибо!",
      successMessage:
        "Ваше сообщение было успешно отправлено. Наша команда свяжется с вами в течение 24 часов.",
      sendAnother: "Отправить другое сообщение",
    },
    footer: {
      description:
        "Революционизируем управление бизнесом с помощью решений на базе ИИ. От бухгалтерии до управления предприятием, мы предоставляем комплексные инструменты, которые помогают бизнесу процветать в цифровую эпоху.",
      stayUpdated: "Оставайтесь в курсе",
      newsletterText:
        "Получайте последние обновления о новых функциях, отраслевых инсайтах и эксклюзивных предложениях.",
      emailPlaceholder: "Введите ваш адрес электронной почты",
      subscribe: "Подписаться",
      support: "Поддержка",
      happyClients: "Довольные клиенты",
      copyright: "© 2024 TaxGo Global. Все права защищены.",
      terms: "Условия",
      privacy: "Конфиденциальность",
      sections: {
        products: {
          title: "Продукты",
          links: [
            "Бухгалтерский пакет",
            "Управление складом",
            "Зарплата и HR",
            "Платформа электронной коммерции",
            "Торговая точка",
            "Корпоративные решения",
          ],
        },
        industries: {
          title: "Отрасли",
          links: [
            "Здравоохранение",
            "Образование",
            "Розничная торговля и коммерция",
            "Рестораны",
            "Производство",
            "Профессиональные услуги",
          ],
        },
        resources: {
          title: "Ресурсы",
          links: [
            "Документация",
            "Справочник API",
            "Центр помощи",
            "Видеоуроки",
            "Вебинары",
            "Кейсы",
          ],
        },
        company: {
          title: "Компания",
          links: [
            "О нас",
            "Карьера",
            "Пресс-кит",
            "Партнеры",
            "Безопасность",
            "Политика конфиденциальности",
          ],
        },
      },
      trustBadges: [
        "Сертифицировано SOC 2",
        "Соответствует GDPR",
        "ISO 27001",
        "256-битный SSL",
      ],
    },
  },
  hi: {
    nav: {
      products: "उत्पाद",
      solutions: "समाधान",
      pricing: "मूल्य निर्धारण",
      about: "हमारे बारे में",
      contact: "संपर्क",
      signIn: "लॉग इन करें",
      startTrial: "निःशुल्क परीक्षण शुरू करें",
    },
    hero: {
      preHeadline: "व्यवसाय प्रबंधन के भविष्य में आपका स्वागत है",
      revolutionizeYour: "अपने को क्रांतिकारी बनाएं",
      mainTexts: [
        "AI-संचालित लेखांकन",
        "स्मार्ट व्यवसाय समाधान",
        "वैश्विक उद्यम सॉफ़्टवेयर",
        "वित्त का भविष्य",
      ],
      subtitle:
        "लेखांकन, इन्वेंटरी, पेरोल, ई-कॉमर्स और उद्यम प्रबंधन सहित संपूर्ण AI-संचालित व्यवसाय समाधान - सभी एक बुद्धिमान प्लेटफॉर्म में एकीकृत।",
      ctaPrimary: "AI लेखांकन का अनुभव करें",
      ctaSecondary: "लाइव डेमो शेड्यूल करें",
      trustIndicators: {
        clients: "500+ वैश्विक ग्राहक",
        uptime: "99.9% अपटाइम",
        security: "एंटरप्राइज़ ग्रेड सुरक्षा",
      },
    },
    features: {
      title: "AI-संचालित व्यवसाय समाधान",
      subtitle:
        "आपके व्यवसाय संचालन के हर पहलू को स्वचालित, अनुकूलित और क्रांतिकारी बनाने के लिए डिज़ाइन किए गए बुद्धिमान उपकरणों का व्यापक सूट।",
      cta: "सभी सुविधाओं का अन्वेषण करें",
      ready:
        "AI-संचालित समाधानों के साथ अपने व्यवसाय को रूपांतरित करने के लिए तैयार हैं?",
      items: [
        {
          title: "संपूर्ण लेखांकन सूट",
          description:
            "AI-संचालित अंतर्दृष्टि के साथ स्वचालित पुस्तक रखरखाव और वित्तीय ट्रैकिंग",
        },
        {
          title: "स्मार्ट इन्वेंटरी प्रबंधन",
          description: "भविष्यवाणी विश्लेषण के साथ रीयल-टाइम स्टॉक मॉनिटरिंग",
        },
        {
          title: "पेरोल और HR प्रबंधन",
          description: "स्वचालित वेतन प्रसंस्करण और कर्मचारी प्रबंधन प्रणाली",
        },
        {
          title: "व्यापक वित्तीय उपकरण",
          description: "उन्नत बजट, पूर्वानुमान और वित्तीय योजना",
        },
        {
          title: "खरीद और बिक्री प्रबंधन",
          description: "स्वचालित खरीद और बिक्री ट्रैकिंग समाधान",
        },
        {
          title: "पॉइंट ऑफ सेल सिस्टम",
          description: "एकीकृत भुगतान प्रसंस्करण और लेनदेन प्रबंधन",
        },
        {
          title: "कार्यकारी रिपोर्टिंग ऐप",
          description: "रीयल-टाइम व्यवसाय अंतर्दृष्टि और इंटरैक्टिव डैशबोर्ड",
        },
        {
          title: "ऑर्डर लेने वाला ऐप",
          description: "सुव्यवस्थित ग्राहक ऑर्डर प्रसंस्करण और प्रबंधन",
        },
        {
          title: "ग्राहक और शेफ डिस्प्ले सिस्टम",
          description: "निर्बाध रसोई और सेवा समन्वय प्लेटफॉर्म",
        },
        {
          title: "स्मार्ट मेनू-आधारित ऑर्डरिंग",
          description: "AI-संचालित सिफारिशें और अनुकूलन सुविधाएं",
        },
        {
          title: "तैयार ई-कॉमर्स प्लेटफॉर्म",
          description: "उन्नत सुविधाओं के साथ पूर्ण एकीकृत ऑनलाइन स्टोर समाधान",
        },
        {
          title: "संपूर्ण मार्केटप्लेस सॉफ़्टवेयर",
          description: "केंद्रीकृत इन्वेंटरी नियंत्रण के साथ मल्टी-चैनल बिक्री",
        },
      ],
    },
    industries: {
      title: "उद्योग-विशिष्ट समाधान",
      subtitle:
        "विशेष वर्कफ़्लो और अनुपालन आवश्यकताओं के साथ विशिष्ट उद्योगों की अनूठी चुनौतियों और आवश्यकताओं को पूरा करने के लिए डिज़ाइन किए गए अनुकूलित समाधान।",
      healthcare: {
        title: "स्वास्थ्य सेवा",
        subtitle: "अस्पताल प्रबंधन प्रणाली",
        description:
          "आधुनिक चिकित्सा सुविधाओं के लिए डिज़ाइन किया गया संपूर्ण स्वास्थ्य सेवा प्रशासन और वित्तीय प्रबंधन समाधान।",
        learnMore: "और जानें",
      },
      education: {
        title: "शिक्षा",
        subtitle: "शिक्षा प्रबंधन प्रणाली",
        description:
          "शैक्षिक संस्थानों के लिए एकीकृत लेखांकन और प्रशासन के साथ व्यापक शैक्षिक प्लेटफॉर्म।",
        learnMore: "और जानें",
      },
      enterprise: {
        title: "उद्यम",
        subtitle: "स्केलेबल व्यवसाय समाधान",
        description:
          "कई उद्योगों में बड़े पैमाने के व्यवसाय संचालन के लिए डिज़ाइन किए गए उद्यम-ग्रेड समाधान।",
        learnMore: "और जानें",
      },
      successMetrics: "सफलता मेट्रिक्स",
      activeClients: "सक्रिय ग्राहक",
      efficiencyIncrease: "दक्षता वृद्धि",
      costSavings: "लागत बचत",
      readyToStart: "शुरू करने के लिए तैयार हैं?",
      scheduleDemoText:
        "एक व्यक्तिगत डेमो शेड्यूल करें यह देखने के लिए कि हमारा समाधान आपके संचालन को कैसे रूपांतरित कर सकता है।",
      scheduleDemo: "डेमो शेड्यूल करें",
    },
    globalMap: {
      title: "वैश्विक उपस्थिति",
      subtitle:
        "दुनिया भर के व्यवसायों द्वारा भरोसा किया गया, TaxGo Global स्थानीयकृत समाधानों और 24/7 सहायता के साथ सभी महाद्वीपों में ग्राहकों की सेवा करता है।",
      whyChoose: "वैश्विक नेता TaxGo क्यों चुनते हैं",
      features: [
        "मल्टी-करेंसी और मल्टी-भाषा समर्थन",
        "स्थानीय अनुपालन और नियामक पालन",
        "24/7 वैश्विक ग्राहक सहायता",
        "हर क्षेत्र में क्लाउड इन्फ्रास्ट्रक्चर",
      ],
    },
    contact: {
      title: "अपने व्यवसाय को रूपांतरित करने के लिए तैयार हैं?",
      subtitle:
        "अपनी विशिष्ट आवश्यकताओं पर चर्चा करने और यह जानने के लिए हमारे विशेषज्ञों से संपर्क करें कि TaxGo Global आपके व्यवसाय संचालन में क्रांति कैसे ला सकता है।",
      getInTouch: "संपर्क में रहें",
      fullName: "पूरा नाम",
      emailAddress: "ईमेल पता",
      companyName: "कंपनी का नाम",
      phoneNumber: "फ़ोन नंबर",
      solutionInterest: "समाधान रुचि",
      message: "संदेश",
      sendMessage: "संदेश भेजें",
      thankYou: "धन्यवाद!",
      successMessage:
        "आपका संदेश सफलतापूर्वक भेजा गया है। हमारी टीम 24 घंटों के अंदर आपसे संपर्क करेगी।",
      sendAnother: "दूसरा संदेश भेजें",
    },
    footer: {
      description:
        "AI-संचालित समाधानों के साथ व्यवसाय प्रबंधन में क्रांति। लेखांकन से उद्यम प्रबंधन तक, हम व्यापक उपकरण प्रदान करते हैं जो व्यवसायों को डिजिटल युग में फलने-फूलने में मदद करते हैं।",
      stayUpdated: "अपडेट रहें",
      newsletterText:
        "नई सुविधाओं, उद्योग अंतर्दृष्टि और विशेष ऑफ़र पर नवीनतम अपडेट प्राप्त करें।",
      emailPlaceholder: "अपना ईमेल पता दर्ज करें",
      subscribe: "सब्सक्राइब करें",
      support: "सहायता",
      happyClients: "खुश ग्राहक",
      copyright: "© 2024 TaxGo Global. सभी अधिकार सुरक्षित।",
      terms: "नियम",
      privacy: "गोपनीयता",
      sections: {
        products: {
          title: "उत्पाद",
          links: [
            "लेखांकन सूट",
            "इन्वेंटरी प्रबंधन",
            "पेरोल और HR",
            "ई-कॉमर्स प्लेटफॉर्म",
            "पॉइंट ऑफ सेल",
            "उद्यम समाधान",
          ],
        },
        industries: {
          title: "उद्योग",
          links: [
            "स्वास्थ्य सेवा",
            "शिक्षा",
            "खुदरा और वाणिज्य",
            "रेस्तराँ",
            "विनिर्माण",
            "व्यावसायिक सेवाएं",
          ],
        },
        resources: {
          title: "संसाधन",
          links: [
            "दस्तावेज़ीकरण",
            "API संदर्भ",
            "सहायता केंद्र",
            "वीडियो ट्यूटोरियल",
            "वेबिनार",
            "केस स्टडी",
          ],
        },
        company: {
          title: "कंपनी",
          links: [
            "हमारे बारे में",
            "करियर",
            "प्रेस किट",
            "पार्टनर्स",
            "सुरक्षा",
            "गोपनीयता नीति",
          ],
        },
      },
      trustBadges: [
        "SOC 2 प्रमाणित",
        "GDPR अनुपालित",
        "ISO 27001",
        "256-बिट SSL",
      ],
    },
  },
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Load saved preferences
    const savedLanguage = localStorage.getItem("taxgo-language") as Language;
    const savedTheme = localStorage.getItem("taxgo-theme") as Theme;

    if (
      savedLanguage &&
      [
        "en",
        "ar",
        "ig",
        "es",
        "fr",
        "de",
        "zh",
        "ja",
        "pt",
        "ru",
        "hi",
      ].includes(savedLanguage)
    ) {
      setLanguage(savedLanguage);
    }

    if (savedTheme && ["light", "dark"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save language preference
    localStorage.setItem("taxgo-language", language);

    // Update document direction for Arabic
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    // Save theme preference and update document class
    localStorage.setItem("taxgo-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const value: AppContextType = {
    language,
    setLanguage,
    theme,
    setTheme,
    translations: translations[language],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};
