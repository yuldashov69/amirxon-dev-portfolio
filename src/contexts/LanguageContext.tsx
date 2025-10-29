import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ru' | 'uz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_greeting: "Hi, I'm",
    hero_title: "17-year-old Frontend Developer",
    hero_description: "I craft beautiful and responsive web experiences using modern technologies",
    hero_cta: "View My Work",
    hero_contact: "Get in Touch",
    about_title: "About Me",
    about_description: "I'm a passionate frontend developer with a love for creating elegant and efficient web applications. I specialize in modern JavaScript frameworks and responsive design.",
    skills_title: "Technical Skills",
    projects_title: "Featured Projects",
    project_view: "View Project",
    contact_title: "Get In Touch",
    contact_description: "Have a project in mind or just want to chat? Feel free to reach out!",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_message: "Your Message",
    contact_send: "Send Message",
    footer_rights: "All rights reserved",
    footer_built: "Built with passion and code",
  },
  ru: {
    nav_home: "Главная",
    nav_about: "О себе",
    nav_projects: "Проекты",
    nav_contact: "Контакты",
    hero_greeting: "Привет, я",
    hero_title: "17-летний Frontend разработчик",
    hero_description: "Я создаю красивые и адаптивные веб-интерфейсы используя современные технологии",
    hero_cta: "Мои работы",
    hero_contact: "Связаться",
    about_title: "Обо мне",
    about_description: "Я увлеченный frontend разработчик с любовью к созданию элегантных и эффективных веб-приложений. Специализируюсь на современных JavaScript фреймворках и адаптивном дизайне.",
    skills_title: "Технические навыки",
    projects_title: "Избранные проекты",
    project_view: "Посмотреть проект",
    contact_title: "Связаться со мной",
    contact_description: "Есть проект или просто хотите поболтать? Не стесняйтесь обращаться!",
    contact_name: "Ваше имя",
    contact_email: "Ваш Email",
    contact_message: "Ваше сообщение",
    contact_send: "Отправить сообщение",
    footer_rights: "Все права защищены",
    footer_built: "Создано с любовью и кодом",
  },
  uz: {
    nav_home: "Bosh sahifa",
    nav_about: "Men haqimda",
    nav_projects: "Loyihalar",
    nav_contact: "Aloqa",
    hero_greeting: "Salom, men",
    hero_title: "17 yoshli Frontend dasturchi",
    hero_description: "Men zamonaviy texnologiyalar yordamida chiroyli va moslashuvchan veb-interfeyslar yarataman",
    hero_cta: "Ishlarimni ko'rish",
    hero_contact: "Bog'lanish",
    about_title: "Men haqimda",
    about_description: "Men nafis va samarali veb-ilovalar yaratishni yaxshi ko'radigan frontend dasturchiman. Zamonaviy JavaScript freymvorklari va moslashuvchan dizaynda ixtisoslashganman.",
    skills_title: "Texnik ko'nikmalar",
    projects_title: "Tanlangan loyihalar",
    project_view: "Loyihani ko'rish",
    contact_title: "Men bilan bog'laning",
    contact_description: "Loyihangiz bormi yoki shunchaki suhbatlashmoqchimisiz? Bemalol murojaat qiling!",
    contact_name: "Ismingiz",
    contact_email: "Email manzilingiz",
    contact_message: "Xabaringiz",
    contact_send: "Xabar yuborish",
    footer_rights: "Barcha huquqlar himoyalangan",
    footer_built: "Muhabbat va kod bilan yaratilgan",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
