/**
 * Translation system for iPortfolio website
 * Supports English (en) and Ukrainian (uk) languages
 */

const translations = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About",
    navResume: "Resume",
    navPortfolio: "Portfolio",
    navServices: "Services",
    navContact: "Contact",
    
    // Hero Section
    heroTitle: "Georgiy Oriabinskiy",
    heroSubtitle: "I'm a",
    heroRoles: "Backend Developer, .NET Developer, C# Developer, Full-Stack Developer",
    
    // About Section
    aboutTitle: "About",
    aboutSubtitle: "Backend .NET C# Developer passionate about building scalable applications and clean code architecture.",
    aboutHeading: "Backend .NET C# Developer",
    aboutDescription: "Motivated Junior .NET C# Developer with strong knowledge of C#, ASP.NET Core, SQL Server, Azure, and modern web technologies. Proficient in object-oriented design principles, design patterns, and basic software architecture.",
    aboutLocation: "Location:",
    aboutWebsite: "Website:",
    aboutPhone: "Phone:",
    aboutGitHub: "GitHub:",
    aboutEmail: "Email:",
    aboutEducation: "Education:",
    aboutSpecialization: "Specialization:",
    aboutStatus: "Status:",
    aboutEducationValue: "IT STEP Computer Academy",
    aboutSpecializationValue: "Software Development",
    aboutStatusValue: "Available for opportunities",
    aboutExtendedDescription: "Experienced in full-stack application development, creating REST APIs, working with relational databases, and building responsive user interfaces. Advocate of clean code, SOLID principles, and continuous improvement. Experienced in working with teams of full-stack developers and designers.",
    
    // Skills Section
    skillsTitle: "Skills",
    
    // Resume Section
    resumeTitle: "Resume",
    resumeSubtitle: "My professional journey in software development, education, and technical expertise.",
    resumeSummary: "Summary",
    resumeSummaryDescription: "Motivated Junior .NET C# Developer with strong knowledge of C#, ASP.NET Core, SQL Server, Azure, and modern web technologies. Proficient in object-oriented design principles, design patterns, and basic software architecture.",
    resumeEducation: "Education",
    resumeEducationDescription: "Computing program study focusing on Software development (full-stack). Comprehensive training in backend and frontend technologies, database management, and software architecture principles.",
    resumeLanguages: "Languages",
    resumeLanguagesUkrainian: "Ukrainian - Native",
    resumeLanguagesEnglish: "English - Professional",
    resumeLanguagesRussian: "Russian - Fluent",
    resumePersonalSkills: "Personal Skills",
    resumeCoreCompetencies: "Core Competencies",
    resumePersonalSkill1: "Analytical thinking",
    resumePersonalSkill2: "Responsibility",
    resumePersonalSkill3: "Fast learning",
    resumePersonalSkill4: "Teamwork",
    resumePersonalSkill5: "Attention to detail",
    resumeCompetency1: "Full-stack application development",
    resumeCompetency2: "REST API design and implementation",
    resumeCompetency3: "Relational database design and optimization",
    resumeCompetency4: "Clean code and SOLID principles",
    resumeCompetency5: "Design patterns (Strategy, Command, Repository)",
    resumeCompetency6: "Docker containerization",
    resumeCompetency7: "Azure cloud services",
    resumeCompetency8: "Git version control",
    
    // Portfolio Section
    portfolioTitle: "Portfolio",
    portfolioSubtitle: "A collection of my projects showcasing full-stack and backend development expertise. These applications demonstrate my skills in ASP.NET Core, C#, React, database design, and modern web technologies. Each project represents real-world solutions built with clean architecture, SOLID principles, and best practices.",
    portfolioFilterAll: "All",
    portfolioFilterFullstack: "Full-Stack",
    portfolioFilterWeb: "Web App",
    portfolioFilterWebsite: "Website",
    
    // Services Section
    servicesTitle: "Services",
    servicesSubtitle: "Professional software development services specializing in .NET backend development, full-stack applications, and modern web technologies.",
    servicesBackendTitle: "Backend Development",
    servicesBackendDescription: "ASP.NET Core MVC and Web API development using C# .NET 6/7/8. Building scalable server-side applications with Entity Framework Core, LINQ, and clean architecture principles.",
    servicesAPITitle: "REST API Development",
    servicesAPIDescription: "Design and implementation of RESTful APIs with proper architecture, authentication, and documentation. Integration with frontend frameworks and third-party services.",
    servicesDatabaseTitle: "Database Design & Development",
    servicesDatabaseDescription: "MS SQL Server database design, optimization, and management. Entity Framework Core migrations, complex queries, and relational database architecture.",
    servicesFullstackTitle: "Full-Stack Development",
    servicesFullstackDescription: "End-to-end application development from database design to user interface. ASP.NET Core backend with React frontend, ensuring seamless integration and optimal performance.",
    servicesFrontendTitle: "Frontend Development",
    servicesFrontendDescription: "Responsive web development using HTML5, CSS3, JavaScript, React, and Bootstrap. Creating intuitive user interfaces with modern design principles and mobile-first approach.",
    servicesCloudTitle: "Cloud Services & Architecture",
    servicesCloudDescription: "Azure cloud services integration, Docker containerization, and deployment. Implementing clean architecture, SOLID principles, and design patterns for maintainable codebases.",
    
    // Contact Section
    contactTitle: "Contact",
    contactLocation: "Location",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactFormName: "Your Name",
    contactFormEmail: "Your Email",
    contactFormPhone: "Phone Number (Optional)",
    contactFormCompany: "Company Name (Optional)",
    contactFormCompanyPlaceholder: "Your Company",
    contactFormSubject: "Subject",
    contactFormMessage: "Message",
    contactFormSend: "Send Message",
    contactFormLoading: "Loading",
    contactFormSuccess: "Your message has been sent. Thank you!",
    
    // Footer
    footerCopyright: "Copyright",
    footerRights: "All Rights Reserved",
    
    // Detail Pages Common
    home: "Home",
    breadcrumbPortfolio: "Portfolio",
    projectInfo: "Project information",
    projectLabel: "Project",
    categoryLabel: "Category",
    roleLabel: "Role",
    stackLabel: "Stack",
    viewGitHub: "View on GitHub",
    
    // Portfolio Detail Pages
    details: "Details"
  },
  
  uk: {
    // Navigation
    navHome: "Головна",
    navAbout: "Про мене",
    navResume: "Резюме",
    navPortfolio: "Портфоліо",
    navServices: "Послуги",
    navContact: "Контакти",
    
    // Hero Section
    heroTitle: "Георгій Орябинський",
    heroSubtitle: "Я",
    heroRoles: "Backend Developer, .NET Developer, C# Developer, Full-Stack Developer",
    
    // About Section
    aboutTitle: "Про мене",
    aboutSubtitle: "Backend .NET C# розробник, захоплений створенням масштабованих додатків та чистою архітектурою коду.",
    aboutHeading: "Backend .NET C# розробник",
    aboutDescription: "Мотивований Junior .NET C# розробник з глибокими знаннями C#, ASP.NET Core, SQL Server, Azure та сучасних веб-технологій. Досвідчений у принципах об'єктно-орієнтованого дизайну, патернах проектування та базовій архітектурі програмного забезпечення.",
    aboutLocation: "Місцезнаходження:",
    aboutWebsite: "Веб-сайт:",
    aboutPhone: "Телефон:",
    aboutGitHub: "GitHub:",
    aboutEmail: "Email:",
    aboutEducation: "Освіта:",
    aboutSpecialization: "Спеціалізація:",
    aboutStatus: "Статус:",
    aboutEducationValue: "Комп'ютерна академія IT STEP",
    aboutSpecializationValue: "Розробка програмного забезпечення",
    aboutStatusValue: "Доступний для можливостей",
    aboutExtendedDescription: "Досвідчений у розробці full-stack додатків, створенні REST API, роботі з реляційними базами даних та побудові адаптивних користувацьких інтерфейсів. Прихильник чистого коду, принципів SOLID та постійного вдосконалення. Досвід роботи з командами full-stack розробників та дизайнерів.",
    
    // Skills Section
    skillsTitle: "Навички",
    
    // Resume Section
    resumeTitle: "Резюме",
    resumeSubtitle: "Мій професійний шлях у розробці програмного забезпечення, освіті та технічній експертизі.",
    resumeSummary: "Резюме",
    resumeSummaryDescription: "Мотивований Junior .NET C# розробник з глибокими знаннями C#, ASP.NET Core, SQL Server, Azure та сучасних веб-технологій. Досвідчений у принципах об'єктно-орієнтованого дизайну, патернах проектування та базовій архітектурі програмного забезпечення.",
    resumeEducation: "Освіта",
    resumeEducationDescription: "Навчальна програма з обчислювальної техніки, що зосереджується на розробці програмного забезпечення (full-stack). Комплексне навчання backend та frontend технологіям, управлінню базами даних та принципам архітектури програмного забезпечення.",
    resumeLanguages: "Мови",
    resumeLanguagesUkrainian: "Українська - Рідна",
    resumeLanguagesEnglish: "Англійська - Професійна",
    resumeLanguagesRussian: "Російська - Вільна",
    resumePersonalSkills: "Особисті навички",
    resumeCoreCompetencies: "Основні компетенції",
    resumePersonalSkill1: "Аналітичне мислення",
    resumePersonalSkill2: "Відповідальність",
    resumePersonalSkill3: "Швидке навчання",
    resumePersonalSkill4: "Командна робота",
    resumePersonalSkill5: "Увага до деталей",
    resumeCompetency1: "Розробка full-stack сайтів",
    resumeCompetency2: "Проектування та реалізація REST API",
    resumeCompetency3: "Проектування та оптимізація реляційних баз даних",
    resumeCompetency4: "Чистий код та принципи SOLID",
    resumeCompetency5: "Патерни проектування (Strategy, Command, Repository)",
    resumeCompetency6: "Контейнеризація Docker",
    resumeCompetency7: "Хмарні сервіси Azure",
    resumeCompetency8: "Контроль версій Git",
    
    // Portfolio Section
    portfolioTitle: "Портфоліо",
    portfolioSubtitle: "Колекція моїх проектів, що демонструють експертизу у full-stack та backend розробці. Ці додатки демонструють мої навички в ASP.NET Core, C#, React, проектуванні баз даних та сучасних веб-технологіях. Кожен проект представляє реальні рішення, побудовані з чистою архітектурою, принципами SOLID та найкращими практиками.",
    portfolioFilterAll: "Всі",
    portfolioFilterFullstack: "Full-Stack",
    portfolioFilterWeb: "Веб-додаток",
    portfolioFilterWebsite: "Веб-сайт",
    
    // Services Section
    servicesTitle: "Послуги",
    servicesSubtitle: "Професійні послуги з розробки програмного забезпечення, що спеціалізуються на .NET backend розробці, full-stack додатках та сучасних веб-технологіях.",
    servicesBackendTitle: "Backend розробка",
    servicesBackendDescription: "Розробка ASP.NET Core MVC та Web API з використанням C# .NET 6/7/8. Створення масштабованих серверних додатків з Entity Framework Core, LINQ та принципами чистої архітектури.",
    servicesAPITitle: "Розробка REST API",
    servicesAPIDescription: "Проектування та реалізація RESTful API з правильною архітектурою, аутентифікацією та документацією. Інтеграція з frontend фреймворками та сторонніми сервісами.",
    servicesDatabaseTitle: "Проектування та розробка баз даних",
    servicesDatabaseDescription: "Проектування, оптимізація та управління базами даних MS SQL Server. Міграції Entity Framework Core, складні запити та архітектура реляційних баз даних.",
    servicesFullstackTitle: "Full-Stack розробка",
    servicesFullstackDescription: "Розробка веб-додатків від проектування бази даних до користувацького інтерфейсу. ASP.NET Core backend з React frontend, забезпечуючи безшовну інтеграцію та оптимальну продуктивність.",
    servicesFrontendTitle: "Frontend розробка",
    servicesFrontendDescription: "Адаптивна веб-розробка з використанням HTML5, CSS3, JavaScript, React та Bootstrap. Створення інтуїтивних користувацьких інтерфейсів з сучасними принципами дизайну та mobile-first підходом.",
    servicesCloudTitle: "Хмарні сервіси та архітектура",
    servicesCloudDescription: "Інтеграція хмарних сервісів Azure, контейнеризація Docker та розгортання. Реалізація чистої архітектури, принципів SOLID та патернів проектування для підтримуваних кодових баз.",
    
    // Contact Section
    contactTitle: "Контакти",
    contactLocation: "Місцезнаходження",
    contactPhone: "Телефон",
    contactEmail: "Email",
    contactFormName: "Ваше ім'я",
    contactFormEmail: "Ваш email",
    contactFormPhone: "Номер телефону (необов'язково)",
    contactFormCompany: "Назва компанії (необов'язково)",
    contactFormCompanyPlaceholder: "Ваша компанія",
    contactFormSubject: "Тема",
    contactFormMessage: "Повідомлення",
    contactFormSend: "Відправити повідомлення",
    contactFormLoading: "Завантаження",
    contactFormSuccess: "Ваше повідомлення відправлено. Дякуємо!",
    
    // Footer
    footerCopyright: "Авторське право",
    footerRights: "Всі права захищені",
    
    // Detail Pages Common
    home: "Головна",
    breadcrumbPortfolio: "Портфоліо",
    projectInfo: "Інформація про проект",
    projectLabel: "Проект",
    categoryLabel: "Категорія",
    roleLabel: "Роль",
    stackLabel: "Стек",
    viewGitHub: "Переглянути на GitHub",
    
    // Portfolio Detail Pages
    details: "Деталі"
  }
};

// Language switcher functionality
let currentLanguage = localStorage.getItem('language') || 'en';
let typedInstance = null;

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  translatePage();
}

function translatePage() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.hasAttribute('placeholder')) {
          element.placeholder = translations[currentLanguage][key];
        } else if (element.hasAttribute('value')) {
          element.value = translations[currentLanguage][key];
        }
      } else if (element.hasAttribute('data-translate-html')) {
        element.innerHTML = translations[currentLanguage][key];
      } else {
        element.textContent = translations[currentLanguage][key];
      }
    }
  });
  
  // Update typed.js strings if exists
  const typedElement = document.querySelector('.typed');
  if (typedElement && translations[currentLanguage].heroRoles) {
    const roles = translations[currentLanguage].heroRoles.split(', ');
    typedElement.setAttribute('data-typed-items', roles.join(','));
    
    // Reinitialize typed.js if it exists
    if (typeof Typed !== 'undefined') {
      if (typedInstance) {
        typedInstance.destroy();
      }
      typedInstance = new Typed('.typed', {
        strings: roles,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
      window.typedInstance = typedInstance;
    }
  }
  
  // Update language switcher button text
  const langSwitcher = document.querySelector('.language-switcher');
  if (langSwitcher) {
    const langTexts = langSwitcher.querySelectorAll('.lang-text');
    if (langTexts.length >= 2) {
      if (currentLanguage === 'en') {
        langTexts[0].textContent = 'EN';
        langTexts[1].textContent = 'UK';
      } else {
        langTexts[0].textContent = 'EN';
        langTexts[1].textContent = 'UK';
      }
    }
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  setLanguage(currentLanguage);
  
  // Language switcher click handler
  const langSwitcher = document.querySelector('.language-switcher');
  if (langSwitcher) {
    langSwitcher.addEventListener('click', function(e) {
      e.preventDefault();
      const newLang = currentLanguage === 'en' ? 'uk' : 'en';
      setLanguage(newLang);
    });
  }
});

