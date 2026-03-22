export const content = {
  hu: {
    nav: {
      projects: 'Projektek',
      about: 'Rólam',
      stack: 'Tech Stack',
      contact: 'Kapcsolat',
    },

    hero: {
      name: 'Hersics Előd',
      tagline: 'IT szakember fejlesztési, adatelemzési és rendszerüzemeltetési tapasztalattal.',
      roles: ['Full-stack fejlesztő', 'Adatelemző', 'IT Support'],
      cta_projects: 'Projektjeim',
      cta_contact: 'Kapcsolat',
      scroll: 'Görgess le',
    },

    projects: {
      label: 'Projektek',
      heading: 'Amiken dolgoztam',
      items: [
        {
          id: 'bookit',
          title: 'Online időpontfoglaló rendszer',
          description:
            'Webes időpontfoglaló rendszer kisvállalkozások számára. Az ügyfelek egyszerűen foglalhatnak online, a szolgáltatók pedig átlátható felületen kezelhetik a foglalásokat és a kapcsolódó adatokat.',
          stack: ['Next.js 15', 'ASP.NET Core', 'PostgreSQL', 'Docker', 'Entity Framework'],
          github: 'https://github.com/AdeeloD/thesis-appointment-booking-system',
          demo: null,
          tag: 'BSc szakdolgozat',
        },
        {
          id: 'meowmentor',
          title: 'Meow Mentor',
          description:
            'Mobilalkalmazás macskatartók számára, amellyel nyomon követhetők az egészségügyi adatok, az oltások és a napi gondozással kapcsolatos információk.',
          stack: ['React Native', 'Firebase', 'Expo', 'JavaScript'],
          github: 'https://github.com/AdeeloD/meowmentor',
          demo: null,
          tag: 'Személyes projekt',
        },
        {
          id: 'pdfanswer',
          title: 'PDFanswer',
          description:
            'AI-alapú dokumentum chatbot, amely lehetővé teszi PDF fájlok feltöltését és természetes nyelvű kérdezést a tartalmukból. RAG architektúrán alapul, OCR támogatással szkennelt dokumentumokhoz.',
          stack: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Groq API', 'Docker'],
          github: 'https://github.com/AdeeloD/pdfanswer',
          demo: 'https://pdfanswer-production.up.railway.app',
          tag: 'Személyes projekt',
        },
      ],
      github_btn: 'GitHub',
      demo_btn: 'Demo',
    },

    about: {
      label: 'Rólam',
      heading: 'Ki vagyok?',
      learned: {
        title: '📚 Amit eddig megtanultam',
        text:
          'A Dunaújvárosi Egyetemen gazdaságinformatika szakon tanultam, ahol a fejlesztés mellett adatkezelési és rendszerszemléleti alapokat is szereztem. Megtanultam, hogyan épül fel egy alkalmazás az adatbázistól és a backend logikától egészen a frontend felületig.',
      },
      improving: {
        title: '🚀 Amiben most fejlődöm',
        text:
          'Jelenleg a konténerizáció és az üzemeltetés világa foglalkoztat a legjobban, ezért mélyebben tanulom a Docker és a Kubernetes használatát. Emellett Pythonban is szeretnék magabiztosabb lenni, főleg adatelemzés és gépi tanulás területen, például Pandas, NumPy és Pytorch  használatával.',
      },
      looking: {
        title: '🎯 Amit keresek',
        text:
          'Olyan fejlesztői, adatelemzői vagy IT-s szerepkört keresek, ahol valódi feladatokon dolgozhatok, van lehetőség tanulni a csapattól, és hosszú távon is fejlődhetek szakmailag.',
      },
    },

    stack: {
      label: 'Technológiák',
      heading: 'Eszközök, amelyekkel dolgozom',
      note: 'Olyan technológiák, amelyeket projektjeimben és a gyakorlatban is használtam.',
    },

    contact: {
      label: 'Kapcsolat',
      heading: 'Dolgozzunk együtt',
      text: 'Ha szívesen dolgoznál velem, keress az alábbi elérhetőségek egyikén.',
      email: 'elod.hersics12@gmail.com',
      github: 'https://github.com/AdeeloD',
    },

    footer: {
      text: 'Hersics Előd',
    },
  },

  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      stack: 'Tech Stack',
      contact: 'Contact',
    },

    hero: {
      name: 'Előd Hersics',
      tagline: 'IT professional with a focus on software development, data analysis, and reliable systems.',
      roles: ['Full-stack Developer', 'Data Analyst', 'IT Support'],
      cta_projects: 'View Projects',
      cta_contact: 'Contact Me',
      scroll: 'Scroll down',
    },

    projects: {
      label: 'Projects',
      heading: 'Selected Work',
      items: [
        {
          id: 'bookit',
          title: 'Online Booking System',
          description:
            'A web-based booking system built for small businesses. Clients can schedule appointments online, while service providers can manage bookings and related data through a clear interface.',
          stack: ['Next.js 15', 'ASP.NET Core', 'PostgreSQL', 'Docker', 'Entity Framework'],
          github: 'https://github.com/AdeeloD/thesis-appointment-booking-system',
          demo: null,
          tag: 'BSc Thesis',
        },
        {
          id: 'meowmentor',
          title: 'Meow Mentor',
          description:
            'A mobile app for cat owners designed to keep track of health-related information, vaccinations, and everyday care in one place.',
          stack: ['React Native', 'Firebase', 'Expo', 'JavaScript'],
          github: 'https://github.com/AdeeloD/meowmentor',
          demo: null,
          tag: 'Personal Project',
        },
        {
          id: 'pdfanswer',
          title: 'PDFanswer',
          description:
            'An AI-powered document chatbot that lets you upload PDF files and ask questions about their content in natural language. Built on a RAG architecture with OCR support for scanned documents.',
          stack: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Groq API', 'Docker'],
          github: 'https://github.com/AdeeloD/pdfanswer',
          demo: 'https://pdfanswer-production.up.railway.app',
          tag: 'Personal Project',
        },
      ],
      github_btn: 'GitHub',
      demo_btn: 'Demo',
    },

    about: {
      label: 'About',
      heading: 'Who I Am',
      learned: {
        title: '📚 What I’ve learned so far',
        text:
          'I studied Business Information Technology at the University of Dunaújváros, where I built a strong foundation in software development, data handling, and system-oriented thinking. I learned how applications come together from database design and backend logic to frontend implementation.',
      },
      improving: {
        title: '🚀 What I’m focusing on now',
        text:
          'At the moment, I’m deepening my knowledge of containerization and system operations, with a strong focus on Docker and Kubernetes. I’m also developing my Python skills further, especially in data analysis and machine learning, with tools like Pandas, NumPy and PyTorch.',
      },
      looking: {
        title: '🎯 What I’m looking for',
        text:
          'I’m looking for a role in software development, data analysis, or IT operations where I can work on meaningful tasks, learn from experienced colleagues, and continue growing professionally.',
      },
    },

    stack: {
      label: 'Tech Stack',
      heading: 'Tools I Work With',
      note: 'These are technologies I’ve used in real projects and practical environments.',
    },

    contact: {
      label: 'Contact',
      heading: 'Let’s Work Together',
      text: 'Feel free to reach out through any of the following channels.',
      email: 'elod.hersics12@gmail.com',
      github: 'https://github.com/AdeeloD',
    },

    footer: {
      text: 'Előd Hersics',
    },
  },
}

export const techStack = [
  { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'C#', icon: 'SiCsharp', color: '#239120' },
  { name: 'Python', icon: 'SiPython', color: '#3776AB' },
  { name: 'React', icon: 'SiReact', color: '#61DAFB' },
  { name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' },
  { name: '.NET', icon: 'SiDotnet', color: '#512BD4' },
  { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
  { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
  { name: 'Git', icon: 'SiGit', color: '#F05032' },
  { name: 'Linux', icon: 'SiLinux', color: '#FCC624' },
]