import React from 'react';
import { JourneyItem, Project, Skill } from './types';

// Icons
export const IconGitHub = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const IconLinkedIn = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>LinkedIn</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const IconTwitter = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>Twitter</title>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

export const IconInstagram = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <title>Instagram</title>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const IconFacebook = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <title>Facebook</title>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

export const FolderIcon = ({ className = "w-10 h-10" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
);

export const InformaticaIcon = ({ className = "w-12 h-12" }) => (
    <div className={`${className} flex items-center justify-center bg-gray-700 rounded-md`}>
        <span className="text-white font-bold text-lg">I</span>
    </div>
);

export const IconVirginiaTech = ({ className = "" }) => (
    <img src="/vtlogo.png" alt="Virginia Tech" className={className} />
);

export const IconZS = ({ className = "" }) => (
    <img src="/zslogo.png" alt="ZS Associates" className={className} />
);

export const IconMITWPU = ({ className = "" }) => (
    <img src="/mitwpu.jpeg" alt="MIT World Peace University" className={className} />
);

export const IconJava = ({ className = "w-10 h-10" }) => (
  <img src="/java.png" alt="Java" className={className} />
);

export const IconAWS = ({ className = "w-10 h-10" }) => (
  <img src="/aws.png" alt="AWS" className={className} />
);

export const IconAzure = ({ className = "w-10 h-10" }) => (
  <img src="/azure.png" alt="Azure" className={className} />
);

export const IconAA = ({ className = "w-10 h-10" }) => (
  <img src="/aa.png" alt="Advanced Analytics" className={className} />
);

// App Data
export const email = 'mandarmenjoge@gmail.com';

export const socialMedia = [
  { name: 'GitHub', url: 'https://github.com/mandarmenjoge', icon: <IconGitHub /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mandar-menjoge', icon: <IconLinkedIn /> },
  { name: 'Instagram', url: 'https://instagram.com/mandar.menjoge', icon: <IconInstagram /> },
  { name: 'Twitter', url: 'https://x.com/mandarmenjoge', icon: <IconTwitter /> },
  { name: 'Facebook', url: 'https://www.facebook.com/mandar.menjoge/', icon: <IconFacebook /> },
];

export const navLinks = [
  { name: 'About', url: '#about' },
  { name: 'Journey', url: '#journey' },
  { name: 'Projects', url: '#projects' },
  { name: 'Skills', url: '#skills' },
  { name: 'Publications', url: '#publications' },
  { name: 'Certifications', url: '#certifications' },
  { name: 'Location', url: '#location' },
  { name: 'Contact', url: '#contact' },
];

export const journey: JourneyItem[] = [
  {
    type: 'Experience',
    title: 'Web Application Developer',
    organization: 'Virginia Tech',
    period: 'May 2025 - Present',
    description: [
      'Designing a full-stack web platform to help CS faculty and students organize articles, case studies, and discussions.',
      'Planning to use Next.js, Node.js, and MongoDB for a scalable, user-friendly web application.',
      'Exploring integration with OpenAI API to auto-suggest tags and summarize uploaded content.',
    ],
    logo: <IconVirginiaTech />, 
    link: 'https://www.vt.edu',
  },
  {
    type: 'Education',
    title: 'Masters, Computer Science & Applications',
    organization: 'Virginia Tech',
    period: 'Aug 2024 - May 2026',
    description: [
        'Pursuing advanced studies in computer science, focusing on software development and data engineering principles.',
        'Relevant Coursework: Data Structures & Algorithms, Database Systems, Software Engineering.'
    ],
    logo: <IconVirginiaTech />, 
    link: 'https://www.vt.edu',
    milestones: [
      'Working for CS Department as a Web Developer'
    ]
  },
  {
    type: 'Experience',
    title: 'Business Technology Solutions Associate',
    organization: 'ZS Associates',
    period: 'July 2022 - July 2024',
    description: [
      'Enhanced data accessibility for 900K+ patients by collaborating on features for a pharma finance legacy system.',
      'Integrated 15+ pharma datasets into Snowflake via Informatica IICS, cutting pipeline processing time by 15%.',
      'Redesigned SQL-based data warehouses with advanced indexing and partitioning, reducing query latency by 10%.',
      'Delivered actionable sales insights using PySpark, SQL, and Power BI dashboards, boosting operational efficiency by 12%.',
    ],
    logo: <IconZS />, 
    link: 'https://www.zs.com',
  },
  {
    type: 'Education',
    title: 'Bachelor of Technology, Computer Science',
    organization: 'MIT World Peace University',
    period: 'July 2019 - June 2022',
    description: [
        'Built a strong foundation in computer science fundamentals, software engineering, and database management.',
        'Completed a capstone project on "Survey Report: Twitter Sentimental Analysis".'
    ],
    logo: <IconMITWPU />,
    link: 'https://mitwpu.edu.in/',
    milestones: [
      'Class Representative (2020–2022)',
      'Internship Coordinator for CS Department',
      'Placement Coordinator for CS Department'
    ]
  },
  {
    type: 'Education',
    title: 'Diploma in Engineering, Information Technology',
    organization: 'MIT World Peace University',
    period: 'Aug 2016 - May 2019',
    description: [
      'Gained early, hands-on experience in IT fundamentals, programming, and network concepts.'
    ],
    logo: <IconMITWPU />,
    link: 'https://mitwpu.edu.in/',
    milestones: [
      'Academic Topper for 2016-17 and 2017-18',
      "Asst. Treasurer in IT Student's Association, later promoted to President"
    ]
  }
];

export const projects: Project[] = [
    {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include dark/light theme, command palette navigation, Firebase visitor counter, and smooth animations.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Firebase'],
        githubUrl: 'https://github.com/mandar-1005/portfolio',
        liveUrl: 'https://portfolio-fced2.web.app'
    },
    {
        title: 'TimeAway.ai',
        description: 'A web application for time management and productivity tracking. Built with TypeScript and modern web technologies to help users optimize their daily schedules and work efficiency.',
        tags: ['TypeScript', 'JavaScript', 'CSS', 'Web Development'],
        githubUrl: 'https://github.com/mandar-1005/timeaway.ai'
    },
    {
        title: 'Bookstore React Application',
        description: 'A comprehensive bookstore management system built with Java and React. Features include book inventory management, user authentication, and a modern web interface for browsing and purchasing books.',
        tags: ['Java', 'React', 'HTML', 'Full-Stack'],
        githubUrl: 'https://github.com/mandar-1005/Bookstore-React'
    },
    {
        title: 'Ducky AI',
        description: 'An AI-powered application built with Python and Jupyter notebooks. Features machine learning models for data analysis and intelligent decision-making processes.',
        tags: ['Python', 'Jupyter Notebook', 'Machine Learning', 'AI'],
        githubUrl: 'https://github.com/mandar-1005/Ducky-AI'
    },
    {
        title: 'Faculty Content Platform',
        description: 'A full-stack web platform for CS faculty and students to organize articles, case studies, and discussions by concepts and domains. Built for Virginia Tech Computer Science Department.',
        tags: ['Next.js', 'Node.js', 'MongoDB', 'OpenAI API', 'Tailwind CSS', 'Virginia Tech'],
        note: 'Repository not publicly available (organization project)'
    },
    {
        title: 'Pharma Data Warehouse Modernization',
        description: 'Led the redesign of SQL-based data warehouses, implementing advanced indexing and partitioning to reduce query latency and enable faster decision-making. Built for ZS Associates pharmaceutical clients.',
        tags: ['SQL', 'Snowflake', 'Informatica', 'PySpark', 'Power BI', 'ZS Associates'],
        note: 'Repository not publicly available (professional project)'
    }
];

// Skill categories
export const skillCategories = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Python', slug: 'python', link: 'https://www.python.org/' },
            { name: 'Java', slug: 'java', isDark: true, link: 'https://www.oracle.com/java/', customIconUrl: '/java.png' },
            { name: 'C', slug: 'c', isDark: true, link: 'https://en.cppreference.com/w/c' },
            { name: 'C++', slug: 'cplusplus', isDark: true, link: 'https://isocpp.org/' },
            { name: 'SQL', slug: 'mysql', link: 'https://www.mysql.com/' },
            { name: 'JavaScript', slug: 'javascript', link: 'https://developer.mozilla.org/docs/Web/JavaScript' },
        ]
    },
    {
        title: 'Frameworks & Libraries',
        skills: [
            { name: 'Spring Boot', slug: 'springboot', link: 'https://spring.io/projects/spring-boot' },
            { name: 'Hibernate', slug: 'hibernate', link: 'https://hibernate.org/' },
            { name: 'React', slug: 'react', link: 'https://react.dev/' },
            { name: 'Angular', slug: 'angular', link: 'https://angular.io/' },
            { name: 'Node.js', slug: 'nodedotjs', link: 'https://nodejs.org/' },
            { name: 'Next.js', slug: 'nextdotjs', isDark: true, link: 'https://nextjs.org/' },
            { name: 'TypeScript', slug: 'typescript', link: 'https://www.typescriptlang.org/' },
            { name: 'Tailwind CSS', slug: 'tailwindcss', link: 'https://tailwindcss.com/' },
        ]
    },
    {
        title: 'Developer Tools & Cloud',
        skills: [
            { name: 'Git', slug: 'git', link: 'https://git-scm.com/' },
            { name: 'Docker', slug: 'docker', link: 'https://www.docker.com/' },
            { name: 'Kubernetes', slug: 'kubernetes', link: 'https://kubernetes.io/' },
            { name: 'Azure', slug: 'azure', link: 'https://azure.microsoft.com/', customIconUrl: '/azure.png' },
            { name: 'AWS', slug: 'amazonwebservices', isDark: true, link: 'https://aws.amazon.com/', customIconUrl: '/aws.png' },
            { name: 'Jenkins', slug: 'jenkins', link: 'https://www.jenkins.io/' },
        ]
    },
    {
        title: 'Data & Analytics',
        skills: [
            { name: 'Databricks', slug: 'databricks', link: 'https://databricks.com/' },
            { name: 'Snowflake', slug: 'snowflake', link: 'https://www.snowflake.com/' },
            { name: 'Hadoop', slug: 'apachehadoop', link: 'https://hadoop.apache.org/' },
            { name: 'Informatica', slug: 'informatica', link: 'https://www.informatica.com/' },
            { name: 'Kafka', slug: 'apachekafka', link: 'https://kafka.apache.org/' },
            { name: 'PySpark', slug: 'apachespark', link: 'https://spark.apache.org/docs/latest/api/python/' },
            { name: 'MongoDB', slug: 'mongodb', link: 'https://www.mongodb.com/' },
            { name: 'Data Science', slug: 'jupyter', link: 'https://jupyter.org/' },
        ]
    },
    {
        title: 'Other Technologies',
        skills: [
            { name: 'ETL', slug: 'apacheairflow', link: 'https://airflow.apache.org/' },
            { name: 'Agile', slug: 'jira', link: 'https://www.atlassian.com/software/jira' },
            { name: 'Marketing Analytics', slug: 'googleanalytics', link: 'https://analytics.google.com/' },
            { name: 'Advanced Analytics', slug: 'tableau', link: 'https://www.tableau.com/', customIconUrl: '/aa.png' },
            { name: 'OpenAI API', slug: 'openai', link: 'https://platform.openai.com/docs/api-reference' },
        ]
    }
];

// Legacy skills array for backward compatibility
export const skills: Skill[] = [
    // Web
    { name: 'React', slug: 'react' },
    { name: 'Next.js', slug: 'nextdotjs', isDark: true },
    { name: 'Node.js', slug: 'nodedotjs' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'CSS3', slug: 'css3' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    // Languages
    { name: 'Python', slug: 'python' },
    { name: 'Java', slug: 'java', isDark: true, customIconUrl: '/java.png' },
    { name: 'PySpark', slug: 'apachespark' },
    // Data & Databases
    { name: 'MySQL', slug: 'mysql' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'Snowflake', slug: 'snowflake' },
    { name: 'Databricks', slug: 'databricks' },
    // DevOps & Cloud
    { name: 'AWS', slug: 'amazonwebservices', isDark: true, customIconUrl: '/aws.png' },
    { name: 'Azure', slug: 'azure', customIconUrl: '/azure.png' },
    { name: 'Docker', slug: 'docker' },
    { name: 'Jenkins', slug: 'jenkins' },
    // Other
    { name: 'Advanced Analytics', slug: 'tableau', customIconUrl: '/aa.png' },
    { name: 'OpenAI API', slug: 'openai' },
    { name: 'Informatica', slug: 'informatica' },
];

export const floatingIconsList: Skill[] = [
  // Flatten all skills from categories for floating icons
  ...skillCategories.flatMap(category => category.skills).filter(s => s.slug !== 'informatica'),
  { name: 'HTML5', slug: 'html5' },
  { name: 'GitHub', slug: 'github', isDark: true },
  { name: 'Vue.js', slug: 'vuedotjs' },
  { name: 'Figma', slug: 'figma' },
  { name: 'Svelte', slug: 'svelte' },
  { name: 'Firebase', slug: 'firebase' },
  { name: 'Vite', slug: 'vite' },
  { name: 'ESLint', slug: 'eslint' },
  { name: 'Prettier', slug: 'prettier' },
];

// Publications data
export const publications = [
  {
    title: 'Twitter Sentimental Analysis',
    authors: 'Mandar Menjoge, Mazhar Sayyad, Vedant Bhawalkar, Jainam Gosaliya',
    journal: 'International Journal of Advance Research, Ideas and Innovations in Technology (IJARIIT)',
    date: 'April 2019',
    abstract: 'This paper presents the effectiveness of linguistic features to identify the sentiment of Twitter messages using the apache storm framework. We calculate the effectiveness of present lexical resources and features that capture information about the informal and creative language used in microblogging. In the past few years, there has been a huge growth in the use of microblogging platforms such as Twitter. Influenced by intensification, companies, and media organizations are increasingly seeking ways to excavate Twitter information about what people think and feel about their products and services. Here we download Twitter messages for a particular hashtag and carry out sentiment analysis i.e. to find a positive, negative or neutral sense of that tweet using apache storm framework. Each hashtag may have 1000 of comments and new comments are added every minute, in order to handle so many live tweets we are using apache storm framework.',
    link: 'https://www.ijariit.com/manuscripts/v5i2/V5I2-1396.pdf',
    keywords: ['Sentiment Analysis', 'Apache Storm Framework', 'Preprocessing', 'NLP', 'K-means Clustering', 'Porter Stemming Algorithm']
  }
];

// Certifications data
export const certifications = [
  {
    title: 'Microsoft Technology Associate: Windows Operating System Fundamentals (MTA)',
    issuer: 'Microsoft',
    issued: 'Feb 2021',
    credentialId: 'wMe4B-Hay6',
    link: 'https://www.credly.com/badges/99bff78a-b289-4ff7-beb2-54ef98d1e08b',
  },
  {
    title: 'AWS Fundamentals Specialization',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Jul 2020',
    credentialId: '8YHJD2N7GK6E',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/8YHJD2N7GK6E',
  },
  {
    title: 'Google IT Automation with Python Specialization',
    issuer: 'Google',
    issued: 'Jul 2020',
    credentialId: '256ead45-e2ab-4c9f-a26b-4829228e5cc6',
    link: 'https://www.credly.com/badges/256ead45-e2ab-4c9f-a26b-4829228e5cc6',
  },
  {
    title: 'Google IT Support Specialization',
    issuer: 'Google',
    issued: 'Jul 2020',
    credentialId: 'MJSBW8DNJVVH',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/MJSBW8DNJVVH',
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan',
    issued: 'Jul 2020',
    credentialId: '6WQ3MQ9BRUWL',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/6WQ3MQ9BRUWL',
  },
];