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
    heroTagline: "Junior .NET Backend Developer",
    heroCtaCv: "Download CV",
    heroCtaCvView: "View CV",
    heroCtaGithub: "View GitHub",
    
    // About Section
    aboutTitle: "About",
    aboutSubtitle: "Backend .NET C# Developer passionate about building scalable applications and clean code architecture. Currently looking for a Junior / Middle .NET backend or full-stack role (remote only).",
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
    skillsGroupBackend: "Backend & Databases",
    skillsGroupFrontend: "Frontend & Tools",
    skillsGroupDevOps: "DevOps / Deployment",
    
    // Resume Section
    resumeTitle: "Resume",
    resumeSubtitle: "My professional journey in software development, education, and technical expertise.",
    resumeSummary: "Summary",
    resumeSummaryDescription: "Motivated Junior .NET C# Developer with strong knowledge of C#, ASP.NET Core, SQL Server, Azure, and modern web technologies. Proficient in object-oriented design principles, design patterns, and basic software architecture. Experience includes working on Nomyfy (full-stack health platform), Cukolini Graphs (scheduling system for a real bakery), and Ann's Decor (production business website).",
    resumeEducation: "Education",
    resumeEducationDescription: "Computing program study focusing on Software development (full-stack). Comprehensive training in backend and frontend technologies, database management, and software architecture principles.",
    resumeLanguages: "Languages",
    resumeLanguagesUkrainian: "Ukrainian - Native",
    resumeLanguagesEnglish: "English -Pre-Intermediate",
    resumeLanguagesRussian: "Russian - Fluent",
    resumePersonalSkills: "Personal Skills",
    resumeCoreCompetencies: "Core Competencies",
    resumePersonalSkill1: "Analytical thinking",
    resumePersonalSkill2: "Responsibility",
    resumePersonalSkill3: "Fast learning",
    resumePersonalSkill4: "Teamwork",
    resumePersonalSkill5: "Attention to detail",
    resumeCompetency1: "Full-stack and backend development",
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
    contactOpenTo: "Open to: full-time, part-time, and project work (remote only).",
    
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
    
    // Portfolio Detail Pages - Nomyfy
    nomyfyPageTitle: "Nomyfy — Health & Wellness Platform Details",
    nomyfyBreadcrumbCurrent: "Nomyfy",
    nomyfyHeading: "Nomyfy — Health & Wellness Platform",
    nomyfyP1: "Nomyfy is a full‑stack health & wellness platform that helps users build sustainable habits around fitness, nutrition, sleep, and mental health. The app combines personal health tracking, analytics, and social features to keep users motivated and engaged over the long term.",
    nomyfyP2: "Users can log weight, workouts, nutrition, sleep and mood, then review progress through interactive dashboards and charts. The platform includes social challenges, groups, and a community feed so people can share results, support each other, and compete in friendly goals.",
    nomyfyLi1: "Centralized health tracking across weight, workouts, nutrition, sleep, and mental health with analytics.",
    nomyfyLi2: "Social features: challenges, groups, community feed and profile pages to increase user engagement.",
    nomyfyLi3: "Specialist booking for trainers, dietitians, doctors, and psychologists with calendar management.",
    nomyfyLi4: "Secure authentication with JWT, including Google and Facebook login.",
    nomyfyLi5: "Scalable architecture using ASP.NET Core 8, React 19, SQL Server, Redis, MinIO, Docker, Stripe, EF Core, and Clean Architecture.",
    nomyfyP3: "My responsibilities included designing and implementing backend REST APIs in ASP.NET Core, configuring database schemas and queries with EF Core and SQL Server, integrating external services (authentication providers, Stripe, storage), and collaborating with front‑end developers and designers to deliver a cohesive user experience. The project demonstrates my ability to build production‑style full‑stack applications, work in a team, and apply clean architecture and SOLID principles in a real project.",

    // Portfolio Detail Pages - Cukolini
    cukoliniPageTitle: "Cukolini Graphs Details",
    cukoliniBreadcrumbCurrent: "Cukolini Graphs",
    cukoliniHeading: "Cukolini Graphs — Work Schedule Management System",
    cukoliniP1: "A full-stack web application for automated work schedule generation with employee preference management. Built with ASP.NET Core MVC, it demonstrates enterprise-level architecture, design patterns, and complex business logic.",
    cukoliniP2: "The system automates work schedule creation while considering employee preferences, branch requirements, and business rules. It supports multiple branches, role-based access control, and intelligent shift allocation algorithms that adapt to different day-of-week strategies.",
    cukoliniLi1: "Automated schedule generation with intelligent algorithms based on employee preferences, branch requirements, and day-of-week strategies.",
    cukoliniLi2: "Employee preference management system where employees can submit work schedule preferences factored into automatic generation.",
    cukoliniLi3: "Multi-branch support for managing multiple branches (filials) with independent scheduling requirements.",
    cukoliniLi4: "Role-based access control with complete authentication and authorization using ASP.NET Core Identity.",
    cukoliniLi5: "Undo/Redo functionality using Command pattern with persistent command history for branch management operations.",
    cukoliniLi6: "Enterprise architecture implementing Strategy, Command, and Repository patterns with dependency injection using Autofac.",
    cukoliniP3: "My responsibilities included designing and implementing the full-stack MVC application, developing complex scheduling algorithms with multiple constraints, implementing design patterns (Strategy, Command, Repository), configuring database schemas with Entity Framework Core migrations, and building a responsive UI with Bootstrap and custom CSS. The project demonstrates my ability to build production-ready applications with clean architecture, SOLID principles, and maintainable codebase.",

    // Portfolio Detail Pages - Ann's Decor
    annsdecorPageTitle: "Ann's Decor Details",
    annsdecorBreadcrumbCurrent: "Ann's Decor",
    annsdecorHeading: "Ann's Decor — Event Design Business Website",
    annsdecorP1: "Developed a responsive business website for an event design and floristry company. Customized the BootstrapMade Kelly template to create a multi-page site showcasing services, portfolio, and client testimonials.",
    annsdecorP2: "The website features a modern, elegant design with smooth animations, interactive galleries, and a fully functional contact form. Built with a mobile-first approach, it provides an excellent user experience across all devices.",
    annsdecorLi1: "Multi-page navigation (Home, About, Gallery, Services, Contact) with smooth scrolling and animated sections.",
    annsdecorLi2: "Filterable portfolio gallery with category-based filtering using Isotope.js and lightbox image viewer with GLightbox.",
    annsdecorLi3: "Testimonial carousel using Swiper.js with responsive breakpoints and autoplay functionality.",
    annsdecorLi4: "Contact form with real-time validation, phone number formatting, email domain verification, and PHP backend integration with PHPMailer.",
    annsdecorLi5: "Responsive design with Bootstrap 5.3.3, custom CSS variables for theming, and mobile-first approach.",
    annsdecorLi6: "Interactive elements including sticky navigation header, animated sections with AOS (Animate On Scroll), and form validation with visual feedback.",
    annsdecorP3: "My responsibilities included customizing the BootstrapMade Kelly template, implementing responsive layouts with Bootstrap 5.3.3, integrating JavaScript libraries (AOS, Swiper.js, GLightbox, Isotope.js), developing the contact form with PHP backend and PHPMailer integration, creating custom CSS styling with CSS variables, and ensuring cross-browser compatibility. The project demonstrates my skills in frontend web development, template customization, responsive design, form validation, JavaScript integration, and UI/UX design principles.",
    templateLabel: "Template",
    websiteLabel: "Client website",
    clientLabel: "Client",

    // Generic details label
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
    heroTagline: "Junior .NET Backend Developer",
    heroCtaCv: "Завантажити CV",
    heroCtaCvView: "Переглянути CV",
    heroCtaGithub: "Відкрити GitHub",
    
    // About Section
    aboutTitle: "Про мене",
    aboutSubtitle: "Backend .NET C# розробник, захоплений створенням масштабованих додатків та чистою архітектурою коду. Активно шукаю позицію Junior / Middle .NET backend або full-stack розробника (лише remote).",
    aboutHeading: "Backend .NET C# розробник",
    aboutDescription: "Мотивований Junior .NET C# розробник з впевненими знаннями C#, ASP.NET Core, SQL Server, Azure та сучасних веб-технологій. Досвідчений у принципах об'єктно-орієнтованого дизайну, патернах проектування та базовій архітектурі програмного забезпечення.",
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
    skillsGroupBackend: "Backend та бази даних",
    skillsGroupFrontend: "Frontend та інструменти",
    skillsGroupDevOps: "DevOps / Розгортання",
    
    // Resume Section
    resumeTitle: "Резюме",
    resumeSubtitle: "Мій професійний шлях у розробці програмного забезпечення, освіті та технічній експертизі.",
    resumeSummary: "Резюме",
    resumeSummaryDescription: "Мотивований Junior .NET C# розробник з глибокими знаннями C#, ASP.NET Core, SQL Server, Azure та сучасних веб-технологій. Досвідчений у принципах об'єктно-орієнтованого дизайну, патернах проектування та базовій архітектурі програмного забезпечення. Маю досвід роботи над Nomyfy (full-stack платформа для здоров'я), Cukolini Graphs (система планування змін для реальної пекарні) та Ann's Decor (production-сайт бізнесу з декору подій).",
    resumeEducation: "Освіта",
    resumeEducationDescription: "Навчальна програма з обчислювальної техніки, що зосереджується на розробці програмного забезпечення (full-stack). Комплексне навчання backend та frontend технологіям, управлінню базами даних та принципам архітектури програмного забезпечення.",
    resumeLanguages: "Мови",
    resumeLanguagesUkrainian: "Українська - Рідна",
    resumeLanguagesEnglish: "Англійська - Pre-Intermediate",
    resumeLanguagesRussian: "Російська - Вільна",
    resumePersonalSkills: "Особисті навички",
    resumeCoreCompetencies: "Основні компетенції",
    resumePersonalSkill1: "Аналітичне мислення",
    resumePersonalSkill2: "Відповідальність",
    resumePersonalSkill3: "Швидке навчання",
    resumePersonalSkill4: "Командна робота",
    resumePersonalSkill5: "Увага до деталей",
    resumeCompetency1: "Розробка full-stack і backend рішень",
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
    contactOpenTo: "Відкритий до: full-time, part-time та проектної роботи (лише remote).",
    
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
    
    // Portfolio Detail Pages - Nomyfy
    nomyfyPageTitle: "Деталі Nomyfy — платформи здоров'я та добробуту",
    nomyfyBreadcrumbCurrent: "Nomyfy",
    nomyfyHeading: "Nomyfy — платформа здоров'я та добробуту",
    nomyfyP1: "Nomyfy — це full‑stack платформа для здоров'я та добробуту, яка допомагає користувачам формувати сталі звички у сфері фітнесу, харчування, сну та ментального здоров'я. Додаток поєднує особисте відстеження показників, аналітику та соціальні функції, щоб підтримувати мотивацію користувачів у довгостроковій перспективі.",
    nomyfyP2: "Користувачі можуть фіксувати вагу, тренування, харчування, сон та настрій, а потім переглядати прогрес через інтерактивні дашборди та графіки. Платформа включає соціальні челенджі, групи та стрічку спільноти, де користувачі можуть ділитися результатами, підтримувати один одного та змагатися у дружніх цілях.",
    nomyfyLi1: "Централізоване відстеження ваги, тренувань, харчування, сну та ментального здоров'я з аналітикою.",
    nomyfyLi2: "Соціальні функції: челенджі, групи, стрічка спільноти та профілі користувачів для підвищення залученості.",
    nomyfyLi3: "Запис до спеціалістів (тренери, дієтологи, лікарі, психологи) з керуванням календарем.",
    nomyfyLi4: "Безпечна аутентифікація з JWT, включно з входом через Google та Facebook.",
    nomyfyLi5: "Масштабована архітектура на базі ASP.NET Core 8, React 19, SQL Server, Redis, MinIO, Docker, Stripe, EF Core та Clean Architecture.",
    nomyfyP3: "Мої обов'язки включали проєктування та реалізацію backend REST API в ASP.NET Core, налаштування схем бази даних і запитів з EF Core та SQL Server, інтеграцію зовнішніх сервісів (провайдери аутентифікації, Stripe, сховище) та співпрацю з frontend-розробниками і дизайнерами для створення цілісного користувацького досвіду. Проєкт демонструє мою здатність будувати production‑рівень full‑stack додатків, працювати в команді та застосовувати чисту архітектуру і принципи SOLID на реальному проєкті.",

    // Portfolio Detail Pages - Cukolini
    cukoliniPageTitle: "Деталі Cukolini Graphs",
    cukoliniBreadcrumbCurrent: "Cukolini Graphs",
    cukoliniHeading: "Cukolini Graphs — система управління графіками роботи",
    cukoliniP1: "Full‑stack веб-додаток для автоматизованого формування графіків роботи з урахуванням побажань співробітників. Побудований на ASP.NET Core MVC та демонструє архітектуру рівня підприємства, патерни проєктування та складну бізнес-логіку.",
    cukoliniP2: "Система автоматизує створення графіків роботи з урахуванням побажань співробітників, вимог філій та бізнес-правил. Підтримує декілька філій, рольову модель доступу та інтелектуальні алгоритми розподілу змін, які адаптуються до різних стратегій залежно від дня тижня.",
    cukoliniLi1: "Автоматизоване формування графіків за допомогою алгоритмів, що враховують побажання співробітників, вимоги філій та стратегії по днях тижня.",
    cukoliniLi2: "Система керування побажаннями співробітників, де вони можуть подавати свої уподобання щодо графіка, які враховуються при автоматичному формуванні.",
    cukoliniLi3: "Підтримка кількох філій з незалежними вимогами до розкладів.",
    cukoliniLi4: "Рольова модель доступу з повною аутентифікацією та авторизацією на базі ASP.NET Core Identity.",
    cukoliniLi5: "Функціональність Undo/Redo з використанням патерну Command і збереженою історією операцій керування філіями.",
    cukoliniLi6: "Архітектура рівня підприємства з реалізацією патернів Strategy, Command та Repository і використанням DI-контейнера Autofac.",
    cukoliniP3: "Мої обов'язки включали проєктування та реалізацію full‑stack MVC-додатку, розробку складних алгоритмів планування із численними обмеженнями, впровадження патернів (Strategy, Command, Repository), налаштування схем бази даних за допомогою міграцій Entity Framework Core та створення адаптивного інтерфейсу з Bootstrap і кастомним CSS. Проєкт демонструє мою здатність створювати production‑готові додатки з чистою архітектурою, принципами SOLID та підтримуваною кодовою базою.",

    // Portfolio Detail Pages - Ann's Decor
    annsdecorPageTitle: "Деталі Ann's Decor",
    annsdecorBreadcrumbCurrent: "Ann's Decor",
    annsdecorHeading: "Ann's Decor — сайт бізнесу з декору подій",
    annsdecorP1: "Розробив адаптивний бізнес-сайт для компанії з декору подій та флористики. Налаштував шаблон BootstrapMade Kelly, щоб створити багатосторінковий сайт з демонстрацією послуг, портфоліо та відгуків клієнтів.",
    annsdecorP2: "Сайт має сучасний, елегантний дизайн із плавними анімаціями, інтерактивними галереями та повністю функціональною контактною формою. Завдяки підходу mobile-first сайт забезпечує чудовий користувацький досвід на всіх типах пристроїв.",
    annsdecorLi1: "Багатосторінкова навігація (Головна, Про нас, Галерея, Послуги, Контакти) з плавним скролом та анімованими секціями.",
    annsdecorLi2: "Фільтрована галерея портфоліо з фільтрацією за категоріями за допомогою Isotope.js та переглядом зображень у лайтбоксі GLightbox.",
    annsdecorLi3: "Карусель відгуків на базі Swiper.js з адаптивними брейкпоінтами та автопрокруткою.",
    annsdecorLi4: "Контактна форма з валідацією в реальному часі, форматуванням номера телефону, перевіркою домену email та backend-інтеграцією на PHP з PHPMailer.",
    annsdecorLi5: "Адаптивний дизайн на Bootstrap 5.3.3 з кастомними CSS-змінними для темізації та підходом mobile-first.",
    annsdecorLi6: "Інтерактивні елементи: липкий хедер, анімовані секції з AOS (Animate On Scroll) та валідація форм із візуальним зворотним зв'язком.",
    annsdecorP3: "Мої обов'язки включали кастомізацію шаблону BootstrapMade Kelly, реалізацію адаптивних макетів на Bootstrap 5.3.3, інтеграцію JavaScript‑бібліотек (AOS, Swiper.js, GLightbox, Isotope.js), розробку контактної форми з backend‑частиною на PHP та PHPMailer, створення кастомних стилів за допомогою CSS‑змінних та забезпечення кросбраузерної сумісності. Проєкт демонструє мої навички у frontend‑розробці, кастомізації шаблонів, адаптивному дизайні, валідації форм, інтеграції JavaScript та принципах UI/UX.",
    templateLabel: "Шаблон",
    websiteLabel: "Веб‑сайт замовника",
    clientLabel: "Клієнт",

    // Generic details label
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

