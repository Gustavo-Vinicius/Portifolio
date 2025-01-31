import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pt-BR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  'en': {
    // About
    'aboutMe': 'About Me',
    'aboutDescription1': 'I am currently a Software Developer II at Localiza&Co, where I apply my expertise in C# and .NET to create robust APIs, efficiently integrating them with databases such as SQL Server and Sybase. In my constant pursuit of excellence in back-end development, my work stands out for the high performance and reliability of the solutions I deliver.',
    'aboutDescription2': 'As a Software Engineering student at UNOPAR, I am always updating my skills, which include advanced architectural patterns and microservice optimization. My commitment to quality and my passion for technology motivate me to develop projects that not only meet, but exceed expectations.',
    
    // Hero
    'name': 'Gustavo Vinicius',
    'role': 'Backend Developer',
    'description': 'Backend Developer with expertise in C# and Node.js, passionate about building scalable and high-performance solutions, focusing on clean architecture and best development practices.',
    'contactMe': 'Contact Me',
    'viewProjects': 'View Projects',
    'downloadCV': 'Download CV',
    
    // Skills
    'technicalExpertise': 'Technical Expertise',
    'backendDevelopment': 'Backend Development',
    'backendTechnologies': 'C#, .NET Core, ASP.NET, Web API, Entity Framework, Node.js, TypeScript, JavaScript',
    'database': 'Database',
    'databaseTechnologies': 'SQL Server, PostgreSQL, MongoDB, Redis',
    'architecture': 'Architecture',
    'architectureTechnologies': 'Microservices, REST APIs, SOLID, Design Patterns',
    'devops': 'DevOps',
    'devopsTechnologies': 'Azure, GitLab, GitHub, CI/CD, Docker',
    
    // Experience
    'professionalExperience': 'Professional Experience',
    'present': 'Present',
    'remote': 'Remote',
    
    // Localiza
    'localizaRole': 'Software Developer II',
    'localizaDate': 'Sep 2024 - Present',
    'localizaLocation': 'Belo Horizonte, Minas Gerais, Brazil - Remote',
    'localizaDescription': 'Development and maintenance of backend systems in C#, focusing on creating and implementing robust APIs using the .NET ecosystem. Integration with SQL Server and Sybase databases, ensuring high performance and reliability. Experience in:\n\n• Language: C#\n• Data Persistence: EntityFramework and Dapper\n• Patterns and Architectures: CQRS (MediatR), Repository Pattern, Unit Of Work, Clean Architecture, Clean Code, Object-Oriented Programming (OOP), and Microservices',
    
    // Radinfo
    'radinfoRole': '.NET Backend Developer',
    'radinfoDate': 'Oct 2021 - Sep 2024',
    'radinfoLocation': 'Araguaína, Tocantins, Brazil',
    'radinfoDescription': 'Led software development and maintenance of backend systems in C#, creating and implementing APIs using .NET. Integration with SQL Server and PostgreSQL databases. Experience in:\n\n• Language: C#\n• Data Persistence: EntityFramework and Dapper\n• Patterns and Architectures: CQRS (MediatR), Repository Pattern, Unit Of Work, Clean Architecture, Clean Code, Object-Oriented Programming (OOP), and Microservices\n• Microservices: Design and development, Communication using RESTful APIs and message brokers (RabbitMQ and Kafka)\n• APIs using Swagger\n• Message Brokers: RabbitMQ and Kafka\n• Testing: Unit Tests with xUnit, Moq, and Bogus\n• Databases: SQL Server and PostgreSQL\n• Version Control: Git (GitHub/GitLab)\n• Authentication: JWT implementation\n• Agile Methodologies: Scrum and Kanban\n• Hosting: IIS (Internet Information Services)',
    'radinfoAchievement1': 'Developed a third-party integration API, facilitating automation of previously manual and time-consuming processes, reducing execution time by 50%',
    'radinfoAchievement2': 'Created banking reconciliation applications integrating with Stone and Safra Pay platforms, improving financial control and reducing processing errors by 30%',
    'radinfoAchievement3': 'Optimized REST APIs performance, reducing response time by 30% through architecture and code improvements, ensuring faster and more reliable service for end users',
    
    // LACA
    'lacaRole': 'C# Backend Developer',
    'lacaDate': 'Apr 2023 - Jan 2024',
    'lacaLocation': 'Remote',
    'lacaDescription': 'Software development and maintenance of backend systems in C#, creating implementations and bug fixes in APIs. Developed robust web applications using:\n\n• C#\n• ASP.NET Core\n• APIs using Swagger\n• SQL Server\n• Entity Framework Core\n• Dapper\n• Git Flow\n• Redis\n• RabbitMQ\n• Scrum/Kanban\n• JWT Authentication\n• Azure',
    
    // Projects
    'featuredProjects': 'Featured Projects',
    'project1Title': 'Library Management API',
    'project1Description': 'A comprehensive library management system built with .NET 6, featuring book tracking, user management, and loan processing capabilities.',
    'project2Title': 'Gym Management API',
    'project2Description': 'A Node.js API built with SOLID principles for gym management, featuring check-ins, user profiles, and metrics tracking.',
    'project3Title': 'Blood Donation System API',
    'project3Description': 'A .NET Core API for managing blood donations, featuring donor registration, donation tracking, and inventory management.',
    
    // Contact
    'getInTouch': 'Get In Touch',
    
    // Footer
    'allRightsReserved': 'All rights reserved',
  },
  'pt-BR': {
    // About
    'aboutMe': 'Sobre Mim',
    'aboutDescription1': 'Atualmente sou Desenvolvedor de Software II na Localiza&Co, onde aplico minha expertise em C# e .NET para criar APIs robustas, integrando-as eficientemente com bancos de dados como SQL Server e Sybase. Em minha constante busca pela excelência no desenvolvimento back-end, meu trabalho se destaca pela alta performance e confiabilidade das soluções que entrego.',
    'aboutDescription2': 'Como estudante de Engenharia de Software na UNOPAR, estou sempre atualizando minhas habilidades, que incluem padrões arquiteturais avançados e otimização de microsserviços. Meu compromisso com a qualidade e minha paixão por tecnologia me motivam a desenvolver projetos que não apenas atendem, mas superam as expectativas.',
    
    // Hero
    'name': 'Gustavo Vinicius',
    'role': 'Desenvolvedor Backend',
    'description': 'Desenvolvedor Backend com experiência em C# e Node.js, apaixonado por construir soluções escaláveis ​​e de alto desempenho, com foco em arquitetura limpa e melhores práticas de desenvolvimento.',
    'contactMe': 'Contato',
    'viewProjects': 'Projetos',
    'downloadCV': 'Baixar CV',
    
    // Skills
    'technicalExpertise': 'Experiência Técnica',
    'backendDevelopment': 'Desenvolvimento Backend',
    'backendTechnologies': 'C#, .NET Core, ASP.NET, Web API, Entity Framework, Node.js, TypeScript, JavaScript',
    'database': 'Banco de Dados',
    'databaseTechnologies': 'SQL Server, PostgreSQL, MongoDB, Redis',
    'architecture': 'Arquitetura',
    'architectureTechnologies': 'Microsserviços, APIs REST, SOLID, Padrões de Projeto',
    'devops': 'DevOps',
    'devopsTechnologies': 'Azure, GitLab, GitHub, CI/CD, Docker',
    
    // Experience
    'professionalExperience': 'Experiência Profissional',
    'present': 'Presente',
    'remote': 'Remoto',
    
    // Localiza
    'localizaRole': 'Desenvolvedor de Software II',
    'localizaDate': 'Set 2024 - Presente',
    'localizaLocation': 'Belo Horizonte, Minas Gerais, Brasil - Remoto',
    'localizaDescription': 'Desenvolvo e faço a manutenção de sistemas back-end em C#, com ênfase na criação e implementação de APIs robustas utilizando o ecossistema .NET. Minha atuação inclui a integração eficiente com bancos de dados, como SQL Server e Sybase, garantindo alta performance e confiabilidade nas soluções entregues.\n\nPossuo experiência nas seguintes áreas:\n\n• Linguagem: C#\n• Persistência de Dados: EntityFramework e Dapper\n• Padrões e Arquiteturas: CQRS (MediatR), Padrão Repository, Unit Of Work, Arquitetura Limpa, Código Limpo, Programação Orientada a Objetos (POO) e Microserviços',
    
    // Radinfo
    'radinfoRole': 'Desenvolvedor Back End .NET',
    'radinfoDate': 'Out 2021 - Set 2024',
    'radinfoLocation': 'Araguaína, Tocantins, Brasil',
    'radinfoDescription': 'Atuei no desenvolvimento de software e manutenção de sistemas back-end em C#, realizando criações e implementações de APIs utilizando .NET. Também faço a integração com bancos de dados SQL Server e PostgreSQL.\n\nPossuo experiência nas seguintes áreas:\n\n• Linguagem: C#\n• Persistência de Dados: EntityFramework e Dapper\n• Padrões e Arquiteturas: CQRS (MediatR), Padrão Repository, Unit Of Work, Arquitetura Limpa, Código Limpo, Programação Orientada a Objetos (POO) e Microserviços\n• Microserviços: Design e desenvolvimento de microserviços, Comunicação entre microserviços utilizando RESTful APIs e mensagerias (RabbitMQ e Kafka)\n• APIs utilizando Swagger\n• Mensagerias: RabbitMQ e Kafka\n• Testes: Testes Unitários com xUnit, Moq e Bogus\n• Bancos de Dados: SQL Server e PostgreSQL\n• Controle de Versão: Git (GitHub/GitLab)\n• Autenticação: Implementação de autenticação com JWT\n• Metodologias ágeis: Scrum e Kanban\n• Hospedagem: Servidor IIS (Internet Information Services)',
    'radinfoAchievement1': 'Desenvolvi uma API de integração com sistemas de terceiros, facilitando a automação de processos que antes eram manuais e demorados, reduzindo o tempo de execução em 50%',
    'radinfoAchievement2': 'Criei aplicações de conciliação bancária integrando com as plataformas Stone e Safra Pay, o que aprimorou o controle financeiro e reduziu erros de processamento em 30%',
    'radinfoAchievement3': 'Otimizei o desempenho de APIs REST, reduzindo o tempo de resposta em 30% através de melhorias na arquitetura e no código, garantindo um serviço mais rápido e confiável para os usuários finais',
    
    // LACA
    'lacaRole': 'Desenvolvedor Back End C#',
    'lacaDate': 'Abr 2023 - Jan 2024',
    'lacaLocation': 'Remoto',
    'lacaDescription': 'Atuando no desenvolvimento de software e manutenção de sistemas back-end em C#, criando implementações e resoluções de bugs em APIs. Desenvolvi aplicações web robustas utilizando as seguintes tecnologias:\n\n• C#\n• ASP.NET Core\n• APIs utilizando Swagger\n• SQL Server\n• Entity Framework Core\n• Dapper\n• Git Flow\n• Redis\n• RabbitMQ\n• Scrum/Kanban\n• Autenticação JWT\n• Azure',
    
    // Projects
    'featuredProjects': 'Projetos em Destaque',
    'project1Title': 'API de Gerenciamento de Biblioteca',
    'project1Description': 'Um sistema completo de gerenciamento de biblioteca construído com .NET 6, com recursos de rastreamento de livros, gerenciamento de usuários e processamento de empréstimos.',
    'project2Title': 'API de Gerenciamento de Academia',
    'project2Description': 'Uma API Node.js construída com princípios SOLID para gerenciamento de academia, com recursos de check-ins, perfis de usuários e acompanhamento de métricas.',
    'project3Title': 'API Sistema de Doação de Sangue',
    'project3Description': 'Uma API .NET Core para gerenciamento de doações de sangue, com recursos de cadastro de doadores, acompanhamento de doações e gestão de estoque.',
    
    // Contact
    'getInTouch': 'Entre em Contato',
    
    // Footer
    'allRightsReserved': 'Todos os direitos reservados',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}