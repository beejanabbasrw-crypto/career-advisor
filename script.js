/**
 * ===================================================================
 * ONE-STOP PERSONALIZED CAREER & EDUCATION ADVISOR
 * Master Client-Side Application Engine (script.js)
 * 
 * Features:
 *  - 9 Detailed Career Profiles & Educational Pathways
 *  - Multi-Factor Heuristic Recommendation Scoring Algorithm
 *  - 16-Question Multi-Domain Aptitude & Interest Assessment
 *  - Dynamic Educational Roadmaps (School -> Job)
 *  - Interactive Skill Mastery Tracker with LocalStorage Persistence
 *  - Student Dashboard with Live Readiness Analytics
 * ===================================================================
 */

// ===================================================================
// 1. CAREER KNOWLEDGE BASE (9 Comprehensive Career Pathways)
// ===================================================================
const CAREER_DATABASE = {
  "software-developer": {
    id: "software-developer",
    name: "Software Developer",
    category: "Engineering & Systems",
    icon: "💻",
    tagline: "Build scalable software, robust backend architectures, and desktop applications.",
    description: "Software developers create, test, and optimize software systems and computer applications that solve complex real-world challenges.",
    demand: "Very High • High Growth",
    requiredSkills: ["Data Structures & Algorithms", "Python", "Java", "Object-Oriented Programming (OOP)", "System Design", "Git & GitHub", "REST APIs", "SQL"],
    recommendedSubjects: ["Computer Science", "Mathematics", "Operating Systems", "Database Management", "Data Structures"],
    learningPath: "Programming Fundamentals (Python/Java) → Data Structures & Algorithms (LeetCode) → Object-Oriented Design → SQL & Relational Databases → Building Full Stack Apps → Open Source Contributions.",
    educationRoadmap: [
      {
        stage: "School / Intermediate",
        badge: "Foundation",
        title: "Strong Foundation in Math & Logic",
        desc: "Complete 10+2 with Physics, Chemistry, and Mathematics (PCM). Learn introductory programming in Python or C++.",
        items: ["Master calculus, discrete logic, and algebra", "Build simple console games or arithmetic calculators", "Participate in coding clubs or hackathons"]
      },
      {
        stage: "Undergraduate Degree",
        badge: "Degree",
        title: "B.Tech / B.E in Computer Science, BCA, or B.Sc IT",
        desc: "Pursue a 3 or 4-year degree in Computer Science, Information Technology, or Computer Applications.",
        items: ["Master Operating Systems, Computer Networks, and DBMS", "Maintain a strong academic CGPA (> 7.5)", "Engage in competitive programming"]
      },
      {
        stage: "Core Skills",
        badge: "Technical",
        title: "DSA, OOP, and Modern Tech Stacks",
        desc: "Deep-dive into Data Structures, Algorithm analysis, clean code architecture, and version control.",
        items: ["Practice 150+ DSA problems on LeetCode/HackerRank", "Master Git workflows, branching, and pull requests", "Learn design patterns (Factory, Singleton, MVC)"]
      },
      {
        stage: "Hands-on Projects",
        badge: "Portfolio",
        title: "Build Production-Ready Applications",
        desc: "Create 3+ complete projects to showcase your ability to architect software from scratch.",
        items: ["Project 1: Distributed Task Management System with Auth", "Project 2: CLI Developer Tool or File Parser", "Project 3: Real-Time Chat Engine using WebSockets"]
      },
      {
        stage: "Internship & Exposure",
        badge: "Experience",
        title: "Industry Internships & Open Source",
        desc: "Gain real-world experience through software internships and open-source contributions.",
        items: ["Contribute to open-source repositories on GitHub", "Complete a 3-6 month software development internship", "Prepare for technical coding interviews"]
      },
      {
        stage: "Career Launch / Higher Studies",
        badge: "Milestone",
        title: "SDE-1 / Software Engineer or M.S. in CS",
        desc: "Start your career as a Junior Software Engineer or pursue Master's studies in Computer Science.",
        items: ["Join a tech startup or enterprise as SDE-1", "Transition towards Senior Developer / Tech Lead", "Optional: Master of Science (MS / M.Tech) in CS"]
      }
    ],
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: "Beginner" },
      { name: "Data Structures (Arrays, Linked Lists, Trees)", level: "Beginner" },
      { name: "Advanced Algorithms (Graph Theory, DP)", level: "Intermediate" },
      { name: "Relational Databases & SQL Optimization", level: "Intermediate" },
      { name: "Git Version Control & CI/CD Basics", level: "Intermediate" },
      { name: "System Design & Microservices Architecture", level: "Advanced" },
      { name: "Unit Testing & Test-Driven Development (TDD)", level: "Intermediate" },
      { name: "Concurrency & Multi-Threading", level: "Advanced" }
    ],
    nextSteps: [
      "Practice 3 LeetCode problems on Arrays and HashMaps this week.",
      "Initialize a GitHub profile and push your first clean OOP repository.",
      "Build a RESTful API with SQLite or PostgreSQL database persistence."
    ],
    salaryRange: "Entry: ₹6 - 12 LPA ($75k - $105k) • Senior: ₹24 - 50+ LPA ($145k - $220k)",
    certifications: ["AWS Certified Developer - Associate","Oracle Certified Java SE Professional","Meta Back-End Developer Certificate"],
    topCompanies: ["Google","Microsoft","Amazon","Adobe","Salesforce","Atlassian"],
    freeResources: [{"title":"CS50: Introduction to Computer Science","provider":"Harvard University","url":"https://cs50.harvard.edu/"},{"title":"NeetCode 150 (Data Structures & Algorithms)","provider":"NeetCode.io","url":"https://neetcode.io/"},{"title":"The Odin Project (Full Stack Open Source)","provider":"The Odin Project","url":"https://www.theodinproject.com/"}]
  },

  "ai-engineer": {
    id: "ai-engineer",
    name: "AI Engineer",
    category: "Artificial Intelligence & Deep Tech",
    icon: "🤖",
    tagline: "Build neural networks, machine learning models, and intelligent AI agents.",
    description: "AI Engineers design, train, and deploy machine learning and deep learning models that enable machines to think, see, hear, and automate decisions.",
    demand: "Exponential Growth • High Compensation",
    requiredSkills: ["Python", "PyTorch / TensorFlow", "Linear Algebra & Calculus", "Scikit-Learn", "Prompt Engineering & LLMs", "MLOps", "Model Deployment"],
    recommendedSubjects: ["Mathematics", "Statistics", "Computer Science", "Artificial Intelligence", "Deep Learning"],
    learningPath: "Python & Scientific Libraries (NumPy, Pandas) → Applied Mathematics (Linear Algebra, Calculus) → Classical Machine Learning → Deep Learning & Transformers → LLMs & Prompt Engineering → MLOps.",
    educationRoadmap: [
      {
        stage: "School / Intermediate",
        badge: "Foundation",
        title: "Excellence in Mathematics & Python",
        desc: "Complete 10+2 with strong scores in Advanced Mathematics, Calculus, and Statistics.",
        items: ["Deeply understand matrices, vectors, and derivatives", "Learn Python programming syntax and basic math scripting", "Experiment with simple decision tree classifiers"]
      },
      {
        stage: "Undergraduate Degree",
        badge: "Degree",
        title: "B.Tech in AI & Data Science or CS with AI Specialization",
        desc: "Obtain an undergraduate degree focused on Artificial Intelligence, Data Science, or Computer Science.",
        items: ["Study Probability, Discrete Mathematics, and Optimization", "Complete coursework in Neural Networks and Machine Learning", "Participate in Kaggle student machine learning competitions"]
      },
      {
        stage: "Core Skills",
        badge: "Technical",
        title: "PyTorch, Deep Learning & LLM Frameworks",
        desc: "Build mastery over tensor operations, backpropagation, and transformer architectures.",
        items: ["Master PyTorch or TensorFlow for neural networks", "Learn LangChain, LlamaIndex, and Vector Databases (Pinecone/Chroma)", "Understand model fine-tuning (LoRA, QLoRA)"]
      },
      {
        stage: "Hands-on Projects",
        badge: "Portfolio",
        title: "End-to-End AI & GenAI Systems",
        desc: "Showcase deployed models solving real-world domain problems.",
        items: ["Project 1: RAG Question-Answering Chatbot over Custom PDFs", "Project 2: Computer Vision Medical Image Classifier", "Project 3: Time-Series Stock or Weather Forecaster"]
      },
      {
        stage: "Internship & Research",
        badge: "Experience",
        title: "AI Research or ML Engineering Internship",
        desc: "Work with AI labs, startups, or data science teams building production pipelines.",
        items: ["Publish a student research paper or technical blog post", "Gain experience with Docker, FastAPI, and model serving", "Compete on Kaggle to earn medals and rank"]
      },
      {
        stage: "Career Launch / Higher Studies",
        badge: "Milestone",
        title: "Associate AI Engineer or M.S. in Machine Learning",
        desc: "Launch your career deploying LLMs and models, or pursue specialized graduate research.",
        items: ["Join an enterprise AI division or generative AI startup", "Grow into Machine Learning Architect or Research Scientist", "Optional: Pursue M.S. or Ph.D. in Artificial Intelligence"]
      }
    ],
    skills: [
      { name: "Python for Data Science (NumPy, Pandas)", level: "Beginner" },
      { name: "Linear Algebra & Probability Theory", level: "Beginner" },
      { name: "Classical Machine Learning (Scikit-Learn)", level: "Intermediate" },
      { name: "Deep Learning with PyTorch or TensorFlow", level: "Intermediate" },
      { name: "Natural Language Processing (Transformers)", level: "Intermediate" },
      { name: "Prompt Engineering & RAG Architecture", level: "Advanced" },
      { name: "MLOps & Model Deployment (FastAPI, Docker)", level: "Advanced" },
      { name: "Vector Databases & Embeddings", level: "Advanced" }
    ],
    nextSteps: [
      "Complete Andrew Ng's Machine Learning specialization or equivalent course.",
      "Build and train a convolutional neural network on the CIFAR-10 image dataset.",
      "Create a working LangChain AI bot with retrieval capabilities."
    ],
    salaryRange: "Entry: ₹8 - 16 LPA ($90k - $125k) • Senior: ₹28 - 65+ LPA ($170k - $270k)",
    certifications: ["TensorFlow Developer Certificate","AWS Certified Machine Learning - Specialty","DeepLearning.AI Deep Learning Specialization"],
    topCompanies: ["OpenAI","NVIDIA","Google DeepMind","Meta AI","Microsoft","Anthropic"],
    freeResources: [{"title":"Deep Learning Specialization by Andrew Ng","provider":"Coursera / DeepLearning.AI","url":"https://www.deeplearning.ai/"},{"title":"Practical Deep Learning for Coders","provider":"Fast.ai","url":"https://course.fast.ai/"},{"title":"Hugging Face NLP & Transformers Course","provider":"Hugging Face","url":"https://huggingface.co/learn"}]
  },

  "data-scientist": {
    id: "data-scientist",
    name: "Data Scientist",
    category: "Data & Analytics",
    icon: "📊",
    tagline: "Turn raw datasets into strategic predictions, business metrics, and insights.",
    description: "Data scientists use statistical modeling, data wrangling, machine learning, and visualization to discover hidden trends that power business decisions.",
    demand: "High Demand • Strategic Roles",
    requiredSkills: ["Python / R", "Advanced SQL", "Statistics & Hypothesis Testing", "Pandas & Data Wrangling", "Data Visualization (Tableau/PowerBI)", "Predictive Modeling"],
    recommendedSubjects: ["Statistics", "Mathematics", "Database Management", "Economics / Business Analytics", "Data Mining"],
    learningPath: "SQL & Data Extraction → Data Wrangling with Pandas → Exploratory Data Analysis (EDA) → Statistical Inference & A/B Testing → Machine Learning Models → Business Dashboards & Storytelling.",
    educationRoadmap: [
      {
        stage: "School / Intermediate",
        badge: "Foundation",
        title: "Mathematics, Statistics & Analytical Thinking",
        desc: "Excel in high school mathematics with an emphasis on probability, distributions, and statistics.",
        items: ["Learn spreadsheet data analysis (Microsoft Excel / Google Sheets)", "Understand standard deviations, normal distributions, and variance", "Explore basic Python syntax"]
      },
      {
        stage: "Undergraduate Degree",
        badge: "Degree",
        title: "B.Sc Data Science, B.Tech CS, B.Stat, or B.Com Analytics",
        desc: "Enroll in a quantitatively rigorous degree combining computation and statistical theory.",
        items: ["Master SQL queries, joins, window functions, and indexing", "Learn exploratory data analysis and statistical significance testing", "Complete capstone analytics research projects"]
      },
      {
        stage: "Core Skills",
        badge: "Technical",
        title: "Data Manipulation, Modeling & Visualization",
        desc: "Become proficient in transforming messy datasets into crisp visual stories.",
        items: ["Master Pandas, Seaborn, and Matplotlib in Python", "Learn Business Intelligence tools like Tableau or Power BI", "Master regression, clustering, and classification algorithms"]
      },
      {
        stage: "Hands-on Projects",
        badge: "Portfolio",
        title: "Real-World Business Analytics Portfolios",
        desc: "Analyze publicly available datasets and present strategic findings.",
        items: ["Project 1: Customer Churn Prediction and Retention Strategy", "Project 2: E-commerce Product Recommendation Engine", "Project 3: Interactive COVID / Economic Indicator Dashboard"]
      },
      {
        stage: "Internship & Real Data",
        badge: "Experience",
        title: "Data Analyst / Business Intelligence Intern",
        desc: "Work with real enterprise relational databases and stakeholder presentations.",
        items: ["Perform A/B testing analysis for marketing campaigns", "Collaborate with product teams to define key performance indicators (KPIs)", "Create automated executive reporting pipelines"]
      },
      {
        stage: "Career Launch / Higher Studies",
        badge: "Milestone",
        title: "Junior Data Scientist or M.S. in Data Analytics",
        desc: "Advance into predictive analytics, algorithmic optimization, or data team leadership.",
        items: ["Join a fintech, healthcare, or e-commerce analytics team", "Advance into Senior Data Scientist or Analytics Manager", "Optional: Master's in Business Analytics or Applied Statistics"]
      }
    ],
    skills: [
      { name: "Advanced SQL & Database Querying", level: "Beginner" },
      { name: "Data Wrangling with Pandas & NumPy", level: "Beginner" },
      { name: "Exploratory Data Analysis (EDA) & Plotting", level: "Beginner" },
      { name: "Inferential Statistics & Hypothesis Testing", level: "Intermediate" },
      { name: "Predictive Machine Learning (Supervised/Unsupervised)", level: "Intermediate" },
      { name: "Business Intelligence Dashboards (Tableau/PowerBI)", level: "Intermediate" },
      { name: "Feature Engineering & Data Preprocessing", level: "Advanced" },
      { name: "Big Data Processing (Apache Spark / PySpark)", level: "Advanced" }
    ],
    nextSteps: [
      "Master SQL window functions and complex multi-table joins on SQLZoo or LeetCode.",
      "Publish an Exploratory Data Analysis notebook on Kaggle with clean visualizations.",
      "Build an interactive Tableau public dashboard analyzing an open dataset."
    ],
    salaryRange: "Entry: ₹7 - 14 LPA ($85k - $115k) • Senior: ₹25 - 52+ LPA ($150k - $235k)",
    certifications: ["Google Data Analytics Professional Certificate","IBM Data Science Professional Certificate","Microsoft Azure Data Scientist Associate"],
    topCompanies: ["Netflix","Uber","Amazon","Spotify","JPMorgan Chase","Airbnb"],
    freeResources: [{"title":"Kaggle Micro-Courses (Python, Pandas, ML)","provider":"Kaggle","url":"https://www.kaggle.com/learn"},{"title":"StatQuest with Josh Starmer (Statistics & ML)","provider":"YouTube","url":"https://statquest.org/"},{"title":"MIT OCW: Computational Thinking & Data Science","provider":"MIT OpenCourseWare","url":"https://ocw.mit.edu/"}]
  },

  "cybersecurity-analyst": {
    id: "cybersecurity-analyst",
    name: "Cybersecurity Analyst",
    category: "Security & Defense",
    icon: "🛡️",
    tagline: "Defend computer networks, shield sensitive data, and stop cyber adversaries.",
    description: "Cybersecurity analysts monitor, protect, and defend computer systems and networks from data breaches, ransomware attacks, and security vulnerabilities.",
    demand: "Critical Need • High Job Security",
    requiredSkills: ["Networking (TCP/IP, OSI)", "Linux Administration", "Vulnerability Scanning", "SIEM Tools (Splunk)", "Ethical Hacking basics", "Incident Response", "OWASP Top 10"],
    recommendedSubjects: ["Computer Networks", "Operating Systems", "Information Security", "Cryptography", "Network Defense"],
    learningPath: "Networking Fundamentals (CompTIA Network+) → Linux CLI & Security Configuration → Security Principles (CompTIA Security+) → Penetration Testing (Wireshark/Metasploit) → SIEM & Threat Hunting → Certified Ethical Hacker.",
    educationRoadmap: [
      {
        stage: "School / Intermediate",
        badge: "Foundation",
        title: "Computer Networks & Operating Systems Curiosity",
        desc: "Complete 10+2 with Computer Science or Mathematics. Learn how internet protocols function.",
        items: ["Understand how routers, IP addresses, and DNS servers communicate", "Install Linux (Ubuntu / Kali) in a virtual machine (VirtualBox)", "Learn basic command-line commands and file permissions"]
      },
      {
        stage: "Undergraduate Degree",
        badge: "Degree",
        title: "B.Tech in Cybersecurity / IT, B.Sc Cyber Forensics, or BCA",
        desc: "Pursue a degree focusing on network defense, cryptography, and digital forensics.",
        items: ["Study packet analysis, firewall architectures, and IDS/IPS", "Learn the fundamentals of symmetric and asymmetric cryptography", "Participate in Capture-The-Flag (CTF) challenges (TryHackMe, OverTheWire)"]
      },
      {
        stage: "Core Skills",
        badge: "Technical",
        title: "Threat Analysis, Ethical Hacking & SIEM",
        desc: "Build practical hands-on defense and ethical penetration testing capabilities.",
        items: ["Analyze traffic packets with Wireshark", "Scan network vulnerabilities using Nmap and Nessus", "Learn SIEM log analysis using Splunk or Elastic Security"]
      },
      {
        stage: "Hands-on Projects",
        badge: "Portfolio",
        title: "Security Labs & Incident Playbooks",
        desc: "Demonstrate hands-on defensive configurations and penetration audit reports.",
        items: ["Project 1: Home Security Lab with Active Directory & SIEM logging", "Project 2: Web Vulnerability Audit (OWASP Top 10) on DVWA", "Project 3: Automated Python Network Port Scanner & Alert System"]
      },
      {
        stage: "Internship & Certifications",
        badge: "Experience",
        title: "SOC Analyst Intern & CompTIA Security+",
        desc: "Work in a Security Operations Center (SOC) monitoring and mitigating alerts.",
        items: ["Earn the CompTIA Security+ or CEH (Certified Ethical Hacker) certification", "Perform live triage of simulated malware incidents", "Contribute vulnerability writeups on TryHackMe"]
      },
      {
        stage: "Career Launch / Higher Studies",
        badge: "Milestone",
        title: "SOC Tier 1 Analyst / Security Engineer",
        desc: "Advance into offensive security (Red Team) or defensive architecture (Blue Team).",
        items: ["Join a corporate cyber defense team or security consultancy", "Prepare for advanced certifications like OSCP or CISSP", "Transition to Penetration Tester, Incident Responder, or CISO"]
      }
    ],
    skills: [
      { name: "Computer Networking (TCP/IP, Subnets, DNS)", level: "Beginner" },
      { name: "Linux CLI & System Administration", level: "Beginner" },
      { name: "Network Packet Analysis with Wireshark", level: "Intermediate" },
      { name: "Vulnerability Scanning (Nmap, Nessus)", level: "Intermediate" },
      { name: "OWASP Top 10 Web Security Flaws", level: "Intermediate" },
      { name: "SIEM & Log Monitoring (Splunk / ELK)", level: "Advanced" },
      { name: "Cryptography & Public Key Infrastructure", level: "Advanced" },
      { name: "Incident Response & Forensic Triage", level: "Advanced" }
    ],
    nextSteps: [
      "Complete the 'Pre-Security' and 'Complete Beginner' pathways on TryHackMe.",
      "Set up a local VirtualBox environment with Kali Linux and Metasploitable.",
      "Study for and schedule the CompTIA Security+ examination."
    ],
    salaryRange: "Entry: ₹6 - 13 LPA ($80k - $110k) • Senior: ₹24 - 48+ LPA ($145k - $220k)",
    certifications: ["CompTIA Security+","Certified Ethical Hacker (CEH)","OffSec Certified Professional (OSCP)"],
    topCompanies: ["Palo Alto Networks","CrowdStrike","Cisco","Cloudflare","Mandiant","Deloitte"],
    freeResources: [{"title":"TryHackMe: Pre-Security & Beginner Paths","provider":"TryHackMe","url":"https://tryhackme.com/"},{"title":"OverTheWire: Bandit Linux Security Wargame","provider":"OverTheWire","url":"https://overthewire.org/"},{"title":"OWASP Top 10 Web Application Security","provider":"OWASP Foundation","url":"https://owasp.org/"}]
  },

  "web-developer": {
    id: "web-developer",
    name: "Web Developer",
    category: "Full Stack & Web",
    icon: "🌐",
    tagline: "Craft modern, interactive, and responsive web applications for millions of users.",
    description: "Web developers build dynamic client-side user experiences and secure server-side backends that power modern web platforms and SaaS products.",
    demand: "Massive Demand • Freelance & Corporate",
    requiredSkills: ["HTML5", "CSS3 / Modern CSS", "JavaScript (ES6+)", "React.js / Vue.js", "Node.js & Express", "RESTful APIs", "MongoDB / PostgreSQL", "Responsive Design"],
    recommendedSubjects: ["Web Technologies", "Computer Science", "Database Systems", "User Interface Design", "Software Engineering"],
    learningPath: "Semantic HTML & Responsive CSS → Modern JavaScript Fundamentals → Frontend Frameworks (React.js) → Backend Services (Node.js & Express) → Database Integration → Full Stack Deployment (Vercel/Render).",
    educationRoadmap: [
      {
        stage: "School / Intermediate",
        badge: "Foundation",
        title: "HTML, CSS & Creative Web Logic",
        desc: "Learn the core markup and styling rules that form the backbone of the internet.",
        items: ["Build static personal portfolio pages using pure HTML and CSS", "Master Flexbox, CSS Grid, and media queries for responsive mobile layouts", "Learn basic JavaScript syntax for DOM manipulation"]
      },
      {
        stage: "Undergraduate Degree",
        badge: "Degree",
        title: "B.Tech CS / IT, BCA, or B.Sc Computer Science",
        desc: "Complete an undergraduate degree or rigorous practical software engineering training.",
        items: ["Learn Database Management Systems (relational and non-relational)", "Master asynchronous JavaScript (Promises, async/await, Fetch API)", "Understand browser rendering engines and HTTP request cycles"]
      },
      {
        stage: "Core Skills",
        badge: "Technical",
        title: "React.js, Node.js & Full-Stack Architecture",
        desc: "Specialize in the MERN or modern full-stack TypeScript ecosystem.",
        items: ["Master React component state, hooks, and routing", "Build RESTful APIs with Node.js, Express, and JWT authentication", "Connect relational (PostgreSQL) or NoSQL (MongoDB) databases"]
      },
      {
        stage: "Hands-on Projects",
        badge: "Portfolio",
        title: "Deploy 3 Production Full-Stack Web Apps",
        desc: "Create full-stack web applications with authentication, databases, and responsive UI.",
        items: ["Project 1: E-Commerce Store with Shopping Cart & Payment Gateway", "Project 2: Real-Time Collaborative Task Board (like Trello)", "Project 3: Interactive Student Career Advisory Web Portal"]
      },
      {
        stage: "Internship & Freelancing",
        badge: "Experience",
        title: "Web Developer Internship / Freelance Projects",
        desc: "Work on live commercial websites, client deliverables, and team Git repos.",
        items: ["Deliver real websites for local businesses or university clubs", "Optimize Core Web Vitals, Lighthouse performance scores, and SEO", "Collaborate on GitHub with pull requests and code reviews"]
      },
      {
        stage: "Career Launch / Higher Studies",
        badge: "Milestone",
        title: "Full-Stack Web Developer",
        desc: "Join high-growth tech companies or launch independent software ventures.",
        items: ["Secure a position as Frontend, Backend, or Full-Stack Web Developer", "Grow into Senior Full-Stack Engineer or Engineering Lead", "Optional: Specialize in Cloud-Native architectures or Next.js"]
      }
    ],
    skills: [
      { name: "Semantic HTML5 & Responsive CSS3", level: "Beginner" },
      { name: "Modern JavaScript (ES6+, DOM, Async/Await)", level: "Beginner" },
      { name: "CSS Frameworks (Tailwind CSS / Bootstrap)", level: "Beginner" },
      { name: "React.js (Components, Hooks, State Management)", level: "Intermediate" },
      { name: "Node.js & Express.js REST API Development", level: "Intermediate" },
      { name: "MongoDB & PostgreSQL Database Integration", level: "Intermediate" },
      { name: "User Authentication (JWT, OAuth, Cookies)", level: "Advanced" },
      { name: "Web Performance Optimization & Deployment (CI/CD)", level: "Advanced" }
    ],
    nextSteps: [
      "Build a mobile-responsive portfolio website and host it on GitHub Pages or Vercel.",
      "Build a dynamic CRUD application in React connecting to a backend database.",
      "Learn TypeScript fundamentals to write robust, scalable web code."
    ],
    salaryRange: "Entry: ₹5 - 10 LPA ($65k - $95k) • Senior: ₹18 - 38+ LPA ($125k - $185k)",
    certifications: ["Meta Front-End Developer Certificate","Meta Back-End Developer Certificate","OpenJS Node.js Application Developer"],
    topCompanies: ["Shopify","Vercel","Automattic","Stripe","HubSpot","Zomato"],
    freeResources: [{"title":"The Odin Project (Full Stack JavaScript)","provider":"The Odin Project","url":"https://www.theodinproject.com/"},{"title":"Full Stack Open (React, Node, GraphQL)","provider":"University of Helsinki","url":"https://fullstackopen.com/en/"},{"title":"MDN Web Docs Comprehensive Tutorials","provider":"Mozilla MDN","url":"https://developer.mozilla.org/"}]
  },

  "cloud-engineer": {
    id: "cloud-engineer",
    name: "Cloud Engineer",
    category: "Infrastructure & DevOps",
    icon: "☁️",
    tagline: "Design, deploy, scale, and automate cloud infrastructure and serverless systems.",
    description: "Cloud Engineers build and manage scalable cloud architectures (AWS, Azure, GCP), automated CI/CD deployment pipelines, and containerized microservices.",
    demand: "High Growth • Enterprise Priority",
    requiredSkills: ["AWS / Azure / GCP", "Linux Administration", "Docker Containers", "Kubernetes", "Infrastructure as Code (Terraform)", "CI/CD Pipelines", "Networking & Security"],
    recommendedSubjects: ["Cloud Computing", "Computer Networks", "Operating Systems", "Distributed Systems", "Software Engineering"],
    learningPath: "Linux & Networking Foundations → Major Cloud Provider (AWS/Azure) → Containerization with Docker → Orchestration with Kubernetes → Infrastructure as Code (Terraform) → CI/CD Automation.",
    educationRoadmap: [
      {
        stage: "School / Intermediate",
        badge: "Foundation",
        title: "Computing, Servers & Networking Basics",
        desc: "Complete 10+2 with Computer Science or Mathematics. Learn how web servers and the cloud operate.",
        items: ["Learn basic client-server communication and IP routing", "Understand cloud vs. on-premises server differences", "Learn bash scripting and basic Linux commands"]
      },
      {
        stage: "Undergraduate Degree",
        badge: "Degree",
        title: "B.Tech in Computer Science / IT / Cloud Technology",
        desc: "Enroll in an engineering degree with coursework in distributed computing and networking.",
        items: ["Study Operating Systems, Virtualization, and Computer Architecture", "Explore Free Tier accounts on Amazon Web Services (AWS) or Google Cloud", "Automate system configuration using shell scripts"]
      },
      {
        stage: "Core Skills",
        badge: "Technical",
        title: "Containers, Orchestration & Cloud Services",
        desc: "Master cloud provisioning, containerized environments, and serverless compute.",
        items: ["Learn core AWS services: EC2, S3, RDS, IAM, VPC, Lambda", "Package microservices into Docker images", "Deploy container clusters using Kubernetes (K8s)"]
      },
      {
        stage: "Hands-on Projects",
        badge: "Portfolio",
        title: "Automated Cloud Deployments & IaC",
        desc: "Build automated, resilient, and multi-region infrastructure setups.",
        items: ["Project 1: Auto-Scaling Web Application on AWS with Elastic Load Balancer", "Project 2: Infrastructure as Code (IaC) setup using Terraform", "Project 3: Automated GitHub Actions CI/CD pipeline deploying to Docker Hub"]
      },
      {
        stage: "Internship & Certifications",
        badge: "Experience",
        title: "Cloud Ops Intern & AWS Solutions Architect",
        desc: "Obtain recognized cloud credentials and support enterprise cloud infrastructure.",
        items: ["Pass the AWS Certified Solutions Architect - Associate exam", "Intern with a DevOps or Cloud Operations team", "Implement cost-optimization and security monitoring on cloud instances"]
      },
      {
        stage: "Career Launch / Higher Studies",
        badge: "Milestone",
        title: "Cloud Engineer / DevOps Engineer",
        desc: "Drive cloud migrations, high-availability setups, and Site Reliability Engineering (SRE).",
        items: ["Join an enterprise IT or SaaS company as an Associate Cloud Engineer", "Transition into Senior DevOps Architect or SRE Specialist", "Optional: Master of Science in Distributed Cloud Systems"]
      }
    ],
    skills: [
      { name: "Linux Command Line & Shell Scripting", level: "Beginner" },
      { name: "Cloud Core Concepts (Compute, Storage, Networking)", level: "Beginner" },
      { name: "AWS Core Services (EC2, S3, IAM, VPC, RDS)", level: "Intermediate" },
      { name: "Docker Containerization & Multi-Stage Builds", level: "Intermediate" },
      { name: "CI/CD Pipelines (GitHub Actions / GitLab CI)", level: "Intermediate" },
      { name: "Kubernetes Pod Management & Helm Charts", level: "Advanced" },
      { name: "Infrastructure as Code with Terraform", level: "Advanced" },
      { name: "Cloud Monitoring & Logging (Prometheus, CloudWatch)", level: "Advanced" }
    ],
    nextSteps: [
      "Open an AWS Free Tier account and launch an EC2 instance hosting a web server.",
      "Containerize an existing project with Docker and push it to Docker Hub.",
      "Study for the AWS Certified Solutions Architect - Associate credential."
    ],
    salaryRange: "Entry: ₹7 - 14 LPA ($85k - $115k) • Senior: ₹26 - 55+ LPA ($155k - $240k)",
    certifications: ["AWS Certified Solutions Architect - Associate","Certified Kubernetes Administrator (CKA)","Google Cloud Associate Cloud Engineer"],
    topCompanies: ["Amazon AWS","Microsoft Azure","Google Cloud","IBM","Red Hat","Oracle"],
    freeResources: [{"title":"AWS Skill Builder Cloud Essentials","provider":"Amazon Web Services","url":"https://explore.skillbuilder.aws/"},{"title":"Docker & Kubernetes for Beginners","provider":"FreeCodeCamp","url":"https://www.freecodecamp.org/"},{"title":"KodeKloud DevOps & Cloud Prerequisites","provider":"KodeKloud","url":"https://kodekloud.com/"}]
  },

  "ui-ux-designer": {
    id: "ui-ux-designer",
    name: "UI/UX Designer",
    category: "Design & User Experience",
    icon: "🎨",
    tagline: "Design intuitive interfaces, interactive wireframes, and delightful digital user journeys.",
    description: "UI/UX Designers conduct user research, create wireframes, test usability, and design polished visual interfaces that make software intuitive and delightful to use.",
    demand: "High Demand • Creative & Tech Blend",
    requiredSkills: ["Figma", "User Research & Personas", "Wireframing & Prototyping", "Design Systems & Component Libraries", "Usability Testing", "Information Architecture", "Color Theory & Typography"],
    recommendedSubjects: ["Human-Computer Interaction", "Design & Arts", "Web Technologies", "Cognitive Psychology", "Communication"],
    learningPath: "Visual Design & Typography Rules → User Research & Empathy Mapping → Wireframing & Information Architecture → Mastering Figma Components → High-Fidelity Prototyping → Usability Testing & Design Systems.",
    educationRoadmap: [
      {
        stage: "School / Intermediate",
        badge: "Foundation",
        title: "Visual Arts, Psychology & Digital Tools",
        desc: "Foster visual aesthetics, empathy for human problems, and layout composition.",
        items: ["Study color harmonies, typography hierarchies, and visual balance", "Experiment with graphic tools like Canva, Photoshop, or Illustrator", "Observe pain points in apps you use every day"]
      },
      {
        stage: "Undergraduate Degree",
        badge: "Degree",
        title: "B.Des (Design), B.Voc UI/UX, B.Tech CS, or B.Sc Multimedia",
        desc: "Pursue a design or computer science degree emphasizing human-centered design.",
        items: ["Learn Human-Computer Interaction (HCI) principles and Gestalt laws", "Master qualitative user interviews and heuristic evaluation", "Build an online Behance or Dribbble design portfolio"]
      },
      {
        stage: "Core Skills",
        badge: "Technical",
        title: "Figma Mastery, Prototyping & Design Systems",
        desc: "Master industry standard UI/UX design tools and systematic component architectures.",
        items: ["Master Figma auto-layout, variants, interactive components, and tokens", "Create clickable high-fidelity prototypes for mobile and desktop", "Construct comprehensive design systems with responsive guidelines"]
      },
      {
        stage: "Hands-on Projects",
        badge: "Portfolio",
        title: "Case Studies & Redesign Projects",
        desc: "Write detailed design case studies demonstrating your problem-solving thought process.",
        items: ["Project 1: Redesign of a Confusing Banking or University Student Portal", "Project 2: Mobile Health & Wellness Habit Tracker with Onboarding Flow", "Project 3: E-Commerce Product Catalog Design System in Figma"]
      },
      {
        stage: "Internship & Freelancing",
        badge: "Experience",
        title: "Product Design Intern / Agency Apprentice",
        desc: "Collaborate closely with product managers and frontend software engineers.",
        items: ["Conduct live moderated usability tests with actual users", "Hand off Figma design tokens and assets to frontend developers", "Refine portfolio based on senior design critique"]
      },
      {
        stage: "Career Launch / Higher Studies",
        badge: "Milestone",
        title: "Product Designer / UI/UX Specialist",
        desc: "Lead product aesthetics, user journey optimization, and UX research.",
        items: ["Join a tech product company as an Associate Product Designer", "Advance into Senior UX Researcher or Head of Product Design", "Optional: Master of Design (M.Des) or HCI abroad"]
      }
    ],
    skills: [
      { name: "Visual Design Fundamentals (Typography, Color, Spacing)", level: "Beginner" },
      { name: "User Research, Empathy Maps & Personas", level: "Beginner" },
      { name: "Information Architecture & User Flow Mapping", level: "Beginner" },
      { name: "Low-Fidelity & High-Fidelity Wireframing", level: "Intermediate" },
      { name: "Mastering Figma (Auto Layout, Variants, Components)", level: "Intermediate" },
      { name: "Interactive Micro-Interactions & Prototyping", level: "Intermediate" },
      { name: "Usability Testing & Heuristic Evaluation", level: "Advanced" },
      { name: "Building Scalable Design Systems", level: "Advanced" }
    ],
    nextSteps: [
      "Select a confusing app you use, identify 3 UX pain points, and sketch a wireframe redesign.",
      "Complete the official Figma tutorial series on Auto Layout and Components.",
      "Publish your first comprehensive UI/UX case study on Behance or Notion."
    ],
    salaryRange: "Entry: ₹5 - 11 LPA ($65k - $95k) • Senior: ₹20 - 42+ LPA ($130k - $190k)",
    certifications: ["Google UX Design Professional Certificate","Nielsen Norman Group UX Master Certified","Interaction Design Foundation (IxDF) Certificate"],
    topCompanies: ["Apple","Airbnb","Figma","Canva","Adobe","Swiggy"],
    freeResources: [{"title":"Figma Academy & Official Tutorials","provider":"Figma","url":"https://www.figma.com/resources/learn-design/"},{"title":"Laws of UX (Psychology Principles)","provider":"Jon Yablonski","url":"https://lawsofux.com/"},{"title":"Degreeless Design Curated Curriculum","provider":"Degreeless.design","url":"https://degreeless.design/"}]
  },

  "electronics-engineer": {
    id: "electronics-engineer",
    name: "Electronics Engineer",
    category: "Hardware & IoT",
    icon: "⚡",
    tagline: "Design electronic circuits, microcontrollers, embedded systems, and smart IoT devices.",
    description: "Electronics Engineers create, test, and manufacture hardware circuits, microcontrollers, sensors, robotics, and embedded software that power modern hardware devices.",
    demand: "Steady Demand • Hardware & EV Boom",
    requiredSkills: ["Circuit Design & Simulation", "Embedded C / C++", "Microcontrollers (Arduino, ESP32, STM32)", "PCB Design (KiCad/Eagle)", "Sensors & Actuators", "IoT Protocols (MQTT, I2C, SPI)", "Hardware Debugging"],
    recommendedSubjects: ["Analog & Digital Electronics", "Signals & Systems", "Microprocessors", "VLSI Design", "Physics & Mathematics"],
    learningPath: "Circuit Theory & Analog Electronics → Digital Logic & Microprocessors → Embedded C Programming → Microcontroller Interfacing (Arduino/ESP32) → PCB Schematic & Layout → Smart IoT & Robotics Projects.",
    educationRoadmap: [
      {
        stage: "School / Intermediate",
        badge: "Foundation",
        title: "Strong Base in Physics & Electricity",
        desc: "Excel in 10+2 Physics, Electromagnetism, Current Electricity, and Mathematics.",
        items: ["Understand Ohm's law, semiconductors, diodes, and logic gates", "Build small breadboard circuits with LEDs, resistors, and capacitors", "Experiment with hobby starter kits like Arduino Uno"]
      },
      {
        stage: "Undergraduate Degree",
        badge: "Degree",
        title: "B.Tech / B.E in Electronics & Communication (ECE) or Electrical (EEE)",
        desc: "Pursue an engineering degree covering analog circuits, digital signal processing, and microcontrollers.",
        items: ["Master circuit simulation software (Proteus, LTspice)", "Study 8051, ARM Cortex, and RISC-V architectures", "Complete hardware lab projects in sensor interfacing and communication"]
      },
      {
        stage: "Core Skills",
        badge: "Technical",
        title: "Embedded C, Microcontrollers & PCB Layout",
        desc: "Learn to program hardware controllers and fabricate printed circuit boards.",
        items: ["Master Embedded C and C++ for bare-metal programming", "Learn PCB schematic capture and trace routing using KiCad or Altium", "Interface peripherals via I2C, SPI, and UART communication buses"]
      },
      {
        stage: "Hands-on Projects",
        badge: "Portfolio",
        title: "Fabricate Functional Smart Hardware",
        desc: "Build and test physical hardware prototypes with embedded logic.",
        items: ["Project 1: IoT Smart Agriculture Monitor with ESP32 & MQTT Cloud", "Project 2: Autonomous Obstacle-Avoiding Robot with Ultrasonic Sensors", "Project 3: Digital Oscilloscope or Smart Watch using STM32 & OLED"]
      },
      {
        stage: "Internship & Labs",
        badge: "Experience",
        title: "Hardware / Embedded Systems Intern",
        desc: "Gain experience in hardware debugging, soldering, and firmware testing.",
        items: ["Intern with an automotive, robotics, or semiconductor firm", "Master hardware debugging using digital multimeters and oscilloscopes", "Explore embedded Real-Time Operating Systems (FreeRTOS)"]
      },
      {
        stage: "Career Launch / Higher Studies",
        badge: "Milestone",
        title: "Embedded Systems / Electronics Hardware Engineer",
        desc: "Design electronics for consumer devices, electric vehicles, robotics, or VLSI chips.",
        items: ["Join semiconductor, hardware, or automotive engineering teams", "Advance into VLSI Design Engineer or Firmware Architect", "Optional: Master's in Embedded Systems, Robotics, or VLSI"]
      }
    ],
    skills: [
      { name: "Basic Circuit Theory & Analog Components", level: "Beginner" },
      { name: "Digital Logic Design & Truth Tables", level: "Beginner" },
      { name: "Embedded C / C++ Programming", level: "Intermediate" },
      { name: "Arduino & ESP32 Microcontroller Interfacing", level: "Intermediate" },
      { name: "Communication Protocols (UART, SPI, I2C, MQTT)", level: "Intermediate" },
      { name: "PCB Schematic & Layout Design (KiCad)", level: "Intermediate" },
      { name: "Oscilloscope & Multimeter Hardware Debugging", level: "Advanced" },
      { name: "Real-Time Operating Systems (FreeRTOS)", level: "Advanced" }
    ],
    nextSteps: [
      "Order or simulate an ESP32 microcontroller kit and blink an LED using FreeRTOS.",
      "Design your first 2-layer PCB in KiCad and generate the Gerber fabrication files.",
      "Build an IoT sensor node that streams temperature data to a cloud dashboard."
    ],
    salaryRange: "Entry: ₹5 - 11 LPA ($70k - $100k) • Senior: ₹20 - 45+ LPA ($135k - $200k)",
    certifications: ["IPC Certified PCB Designer (CID)","ARM Accredited Engineer (AAE)","IEEE Electronic Design Certification"],
    topCompanies: ["Intel","Qualcomm","Texas Instruments","AMD","Tesla","Bosch"],
    freeResources: [{"title":"Arduino Project Hub & Tutorials","provider":"Arduino","url":"https://projecthub.arduino.cc/"},{"title":"All About Circuits Electronic Textbooks","provider":"AllAboutCircuits","url":"https://www.allaboutcircuits.com/textbook/"},{"title":"MIT OCW: Circuits and Electronics 6.002","provider":"MIT OpenCourseWare","url":"https://ocw.mit.edu/"}]
  },

  "business-entrepreneurship": {
    id: "business-entrepreneurship",
    name: "Business / Entrepreneurship",
    category: "Management & Strategy",
    icon: "🚀",
    tagline: "Drive business strategy, launch startups, manage products, and lead teams.",
    description: "Business strategists and entrepreneurs discover market opportunities, analyze finances, build product roadmaps, and lead organizations to sustainable commercial growth.",
    demand: "Dynamic Opportunities • Leadership Track",
    requiredSkills: ["Business Strategy", "Product Management (Agile/Scrum)", "Financial Modeling & Unit Economics", "Market Research", "Digital Marketing", "Public Speaking & Pitching", "Team Leadership"],
    recommendedSubjects: ["Economics", "Business Studies", "Marketing Management", "Financial Accounting", "Communication & Psychology"],
    learningPath: "Principles of Business & Economics → Market Research & Customer Discovery → Financial Statements & Unit Economics → Agile Product Management → Go-To-Market & Growth Strategy → Startup Pitching & Venture Leadership.",
    educationRoadmap: [
      {
        stage: "School / Intermediate",
        badge: "Foundation",
        title: "Commerce, Economics & Leadership Initiatives",
        desc: "Develop foundational awareness of markets, economics, business law, and public speaking.",
        items: ["Excel in Business Studies, Economics, and Accountancy / Math", "Lead school clubs, debate teams, or organize school events", "Read foundational business books (Zero to One, Lean Startup)"]
      },
      {
        stage: "Undergraduate Degree",
        badge: "Degree",
        title: "BBA, B.Com, BMS, or B.Tech with Entrepreneurship",
        desc: "Pursue a degree combining management principles, finance, and technical understanding.",
        items: ["Study Financial Accounting, Marketing Strategy, and Organizational Behavior", "Participate in college business plan and case study competitions", "Join the university entrepreneurship cell (E-Cell) and incubators"]
      },
      {
        stage: "Core Skills",
        badge: "Technical",
        title: "Product Management, Financial Models & Growth",
        desc: "Master business frameworks, sprint management, and data-backed decision making.",
        items: ["Master Excel modeling, cash flow forecasts, and DCF valuations", "Learn Agile sprint planning and Jira for product delivery", "Execute digital marketing campaigns and analyze customer acquisition cost (CAC)"]
      },
      {
        stage: "Hands-on Projects",
        badge: "Portfolio",
        title: "Business Plans & Live Product Pilots",
        desc: "Build, validate, and present viable commercial business proposals.",
        items: ["Project 1: Comprehensive Business Plan & Investor Pitch Deck for a Tech Startup", "Project 2: Market Feasibility Study & Competitor Matrix for a Local Venture", "Project 3: Launch a Micro E-commerce Brand or Content Business with Live Revenue"]
      },
      {
        stage: "Internship & Operations",
        badge: "Experience",
        title: "Founder's Office Intern / Associate Product Manager",
        desc: "Work directly alongside startup founders or corporate business analysts.",
        items: ["Conduct customer discovery interviews to validate problem-solution fit", "Manage cross-functional communications between engineering and sales", "Track product metrics: Retention, Net Promoter Score, LTV, and CAC"]
      },
      {
        stage: "Career Launch / Higher Studies",
        badge: "Milestone",
        title: "Startup Founder, Associate PM, or MBA",
        desc: "Launch your own venture or join an enterprise on an executive leadership trajectory.",
        items: ["Incorporate your startup and pitch for angel / seed venture funding", "Or join as an Associate Product Manager (APM) / Management Consultant", "Optional: Pursue an MBA from a premier global business school"]
      }
    ],
    skills: [
      { name: "Business Model Canvas & Value Proposition Design", level: "Beginner" },
      { name: "Market Research & Competitor Benchmarking", level: "Beginner" },
      { name: "Public Speaking & Pitch Deck Presentation", level: "Beginner" },
      { name: "Financial Modeling & Unit Economics in Excel", level: "Intermediate" },
      { name: "Agile & Scrum Product Management Methodologies", level: "Intermediate" },
      { name: "Digital Marketing, SEO & Customer Acquisition", level: "Intermediate" },
      { name: "Negotiation, Contracting & Deal Closing", level: "Advanced" },
      { name: "Fundraising, Investor Relations & Cap Tables", level: "Advanced" }
    ],
    nextSteps: [
      "Formulate a 1-page Business Model Canvas for a problem you face in your daily life.",
      "Conduct 5 customer discovery interviews to validate your problem hypothesis.",
      "Build a clean 10-slide pitch deck following Guy Kawasaki's 10/20/30 rule."
    ],
    salaryRange: "Entry: ₹6 - 13 LPA ($75k - $110k) • Senior / Founder: ₹25 - 60+ LPA ($150k - $250k+)",
    certifications: ["Google Project Management Certificate","Certified Scrum Product Owner (CSPO)","Y Combinator Startup School Certificate"],
    topCompanies: ["McKinsey & Company","Bain & Company","High-Growth Startups","Venture Capital Funds","Product Studios"],
    freeResources: [{"title":"Y Combinator Startup School","provider":"Y Combinator","url":"https://www.startupschool.org/"},{"title":"Stanford eCorner Entrepreneurial Talks","provider":"Stanford University","url":"https://ecorner.stanford.edu/"},{"title":"Strategyzer: Business Model Canvas","provider":"Strategyzer","url":"https://www.strategyzer.com/canvas"}]
  }
};

// ===================================================================
// 2. CAREER ASSESSMENT QUESTIONS (16 Questions across 8 Domains)
// ===================================================================
const ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    domain: "Programming",
    icon: "💻",
    question: "When you encounter a tedious, repetitive manual task on a computer, what is your first instinct?",
    options: [
      { text: "Write a script or automated program to solve it in seconds.", weights: { "software-developer": 15, "web-developer": 10 } },
      { text: "Look for patterns in the data to see if a model can predict the output.", weights: { "data-scientist": 12, "ai-engineer": 10 } },
      { text: "Check whether there is a secure, authenticated tool that solves it safely.", weights: { "cybersecurity-analyst": 14, "cloud-engineer": 10 } },
      { text: "Organize a workflow or delegate it across team members systematically.", weights: { "business-entrepreneurship": 15 } }
    ]
  },
  {
    id: 2,
    domain: "Artificial Intelligence",
    icon: "🤖",
    question: "Which of these futuristic technologies excites your imagination the most?",
    options: [
      { text: "Autonomous self-driving cars, humanoid robots, and generative AI agents.", weights: { "ai-engineer": 16, "software-developer": 8 } },
      { text: "Interactive, lightning-fast web applications and creative interactive experiences.", weights: { "web-developer": 14, "ui-ux-designer": 10 } },
      { text: "Microchips, drones, and smart sensor-enabled hardware devices.", weights: { "electronics-engineer": 16 } },
      { text: "Predicting stock market trends, customer behaviors, and economic shifts.", weights: { "data-scientist": 14, "business-entrepreneurship": 10 } }
    ]
  },
  {
    id: 3,
    domain: "Cybersecurity",
    icon: "🛡️",
    question: "How do you feel when you read about a major corporate data breach or password leak?",
    options: [
      { text: "Curious to uncover the exact flaw the hacker exploited and how to patch it.", weights: { "cybersecurity-analyst": 16, "software-developer": 8 } },
      { text: "Worried about the company's server infrastructure and cloud network isolation.", weights: { "cloud-engineer": 15, "cybersecurity-analyst": 10 } },
      { text: "Interested in the economic damages, brand reputation impact, and executive response.", weights: { "business-entrepreneurship": 14 } },
      { text: "Concerned about how user trust and interface safety notices should be designed.", weights: { "ui-ux-designer": 14 } }
    ]
  },
  {
    id: 4,
    domain: "Data Science",
    icon: "📊",
    question: "When faced with an important decision, what gives you the highest confidence?",
    options: [
      { text: "Hard numerical evidence, statistical graphs, and historical trends.", weights: { "data-scientist": 16, "ai-engineer": 10 } },
      { text: "Testing a live prototype with real users and observing their behavioral reactions.", weights: { "ui-ux-designer": 14, "web-developer": 10 } },
      { text: "Calculating the return on investment (ROI), risks, and market upside.", weights: { "business-entrepreneurship": 16 } },
      { text: "Validating the structural logic and code execution rigorously.", weights: { "software-developer": 14 } }
    ]
  },
  {
    id: 5,
    domain: "Electronics & Hardware",
    icon: "⚡",
    question: "If you had a free weekend with a maker toolkit, what would you love building?",
    options: [
      { text: "A smart IoT gadget with sensors, breadboards, and microcontroller programming.", weights: { "electronics-engineer": 16 } },
      { text: "A personal portfolio web app with sleek animations and responsive layouts.", weights: { "web-developer": 15, "ui-ux-designer": 10 } },
      { text: "A neural network that recognizes handwriting or classifies audio.", weights: { "ai-engineer": 15 } },
      { text: "A home server with secure VPN, firewall rules, and containerized apps.", weights: { "cloud-engineer": 14, "cybersecurity-analyst": 12 } }
    ]
  },
  {
    id: 6,
    domain: "Business & Management",
    icon: "🚀",
    question: "In a student group project, which responsibility feels most natural to you?",
    options: [
      { text: "Pitching the final presentation, defining milestones, and keeping everyone aligned.", weights: { "business-entrepreneurship": 16 } },
      { text: "Writing the core logic and making sure the underlying engine doesn't crash.", weights: { "software-developer": 15 } },
      { text: "Designing the visual slide deck, brand identity, and user interface.", weights: { "ui-ux-designer": 15 } },
      { text: "Setting up the cloud repository, shared server, and automated builds.", weights: { "cloud-engineer": 14, "software-developer": 8 } }
    ]
  },
  {
    id: 7,
    domain: "Design & User Experience",
    icon: "🎨",
    question: "When you open an app with cluttered buttons and ugly colors, what is your reaction?",
    options: [
      { text: "Frustrated! I immediately envision a cleaner layout with better visual hierarchy.", weights: { "ui-ux-designer": 16, "web-developer": 10 } },
      { text: "I wonder if the underlying code is equally messy and disorganized.", weights: { "software-developer": 12 } },
      { text: "I wonder if poor UX is causing the company to lose valuable paying customers.", weights: { "business-entrepreneurship": 12, "data-scientist": 8 } },
      { text: "I check the app permissions and network requests to make sure it isn't shady.", weights: { "cybersecurity-analyst": 12 } }
    ]
  },
  {
    id: 8,
    domain: "Communication & Leadership",
    icon: "🗣️",
    question: "How do you prefer explaining a complicated concept to someone else?",
    options: [
      { text: "With clean diagrams, visual metaphors, and intuitive user examples.", weights: { "ui-ux-designer": 14, "business-entrepreneurship": 10 } },
      { text: "With step-by-step algorithms, pseudo-code, and technical breakdowns.", weights: { "software-developer": 14, "cloud-engineer": 8 } },
      { text: "With charts, statistical correlations, and data comparisons.", weights: { "data-scientist": 14 } },
      { text: "Through storytelling, emphasizing the business benefits and practical vision.", weights: { "business-entrepreneurship": 16 } }
    ]
  },
  {
    id: 9,
    domain: "Programming Logic",
    icon: "🧩",
    question: "How do you tackle a complex puzzle or math riddle you've never seen before?",
    options: [
      { text: "Break it down into smaller sub-problems and test each logical component.", weights: { "software-developer": 15, "ai-engineer": 10 } },
      { text: "Look for statistical patterns and try calculating probabilities.", weights: { "data-scientist": 15 } },
      { text: "Think of edge cases where the puzzle assumptions could be broken or bypassed.", weights: { "cybersecurity-analyst": 14 } },
      { text: "Draw a visual diagram or flowchart to visualize the entire problem space.", weights: { "ui-ux-designer": 12, "software-developer": 8 } }
    ]
  },
  {
    id: 10,
    domain: "Artificial Intelligence Depth",
    icon: "🧠",
    question: "If you were given access to an ultra-fast supercomputing cluster, what would you train?",
    options: [
      { text: "A multi-modal deep learning model that converts spoken ideas into working code.", weights: { "ai-engineer": 16 } },
      { text: "A high-frequency algorithmic trading system analyzing millions of transactions.", weights: { "data-scientist": 14, "software-developer": 8 } },
      { text: "A distributed container grid capable of serving 10 million concurrent web requests.", weights: { "cloud-engineer": 16, "web-developer": 10 } },
      { text: "A cryptographic cracker and zero-day vulnerability simulation engine.", weights: { "cybersecurity-analyst": 15 } }
    ]
  },
  {
    id: 11,
    domain: "Cybersecurity Defense",
    icon: "🔒",
    question: "What area of digital security and privacy interests you the most?",
    options: [
      { text: "Ethical hacking, finding vulnerabilities, and penetration testing.", weights: { "cybersecurity-analyst": 16 } },
      { text: "Securing cloud environments, IAM roles, and encrypted VPC networks.", weights: { "cloud-engineer": 15, "cybersecurity-analyst": 10 } },
      { text: "Creating secure, user-friendly authentication and seamless passwordless logins.", weights: { "web-developer": 12, "ui-ux-designer": 10 } },
      { text: "Developing hardware-level cryptographic chips and secure firmware.", weights: { "electronics-engineer": 14 } }
    ]
  },
  {
    id: 12,
    domain: "Data Science Patterns",
    icon: "📈",
    question: "You are given a database with 500,000 customer shopping records. What is your first goal?",
    options: [
      { text: "Perform clustering to discover customer archetypes and hidden purchasing habits.", weights: { "data-scientist": 16, "ai-engineer": 10 } },
      { text: "Design an interactive, beautiful executive dashboard with filterable charts.", weights: { "data-scientist": 12, "ui-ux-designer": 10 } },
      { text: "Formulate a new pricing and subscription product strategy based on the numbers.", weights: { "business-entrepreneurship": 15 } },
      { text: "Optimize the database schema with indexes for millisecond query performance.", weights: { "software-developer": 14, "cloud-engineer": 10 } }
    ]
  },
  {
    id: 13,
    domain: "Electronics & Physical Computing",
    icon: "🔬",
    question: "How do you feel about working with physical electronic components and wiring?",
    options: [
      { text: "Excited! I love assembling circuits, soldering, and seeing LEDs and motors react.", weights: { "electronics-engineer": 18 } },
      { text: "I prefer working in software and abstract code rather than physical hardware.", weights: { "software-developer": 12, "web-developer": 12 } },
      { text: "I'm fascinated by the cloud systems that receive sensor data from IoT devices.", weights: { "cloud-engineer": 14, "data-scientist": 8 } },
      { text: "I'm interested in the commercial viability of launching new hardware consumer gadgets.", weights: { "business-entrepreneurship": 14 } }
    ]
  },
  {
    id: 14,
    domain: "Business Strategy",
    icon: "💼",
    question: "In your view, what is the single biggest reason why promising tech startups fail?",
    options: [
      { text: "Building something customers don't actually need without validating the market.", weights: { "business-entrepreneurship": 16, "ui-ux-designer": 10 } },
      { text: "Poor software architecture that fails to scale when traffic increases.", weights: { "software-developer": 12, "cloud-engineer": 12 } },
      { text: "Failing to interpret customer usage metrics and ignoring data indicators.", weights: { "data-scientist": 14 } },
      { text: "A severe security vulnerability that leads to a catastrophic customer data breach.", weights: { "cybersecurity-analyst": 14 } }
    ]
  },
  {
    id: 15,
    domain: "Design Aesthetics",
    icon: "✨",
    question: "What makes a software product truly delightful for you to interact with?",
    options: [
      { text: "Smooth micro-animations, consistent typography, and effortless navigation.", weights: { "ui-ux-designer": 16, "web-developer": 10 } },
      { text: "Instantaneous sub-second load times and zero lag or downtime.", weights: { "cloud-engineer": 14, "software-developer": 12 } },
      { text: "Smart intelligent autocomplete and predictive suggestions powered by AI.", weights: { "ai-engineer": 14 } },
      { text: "A clear pricing model, transparent terms, and immediate business value.", weights: { "business-entrepreneurship": 14 } }
    ]
  },
  {
    id: 16,
    domain: "Communication & Team Dynamics",
    icon: "🤝",
    question: "When two teammates strongly disagree on a technical approach, how do you resolve it?",
    options: [
      { text: "Gather empirical benchmark data and make an objective decision based on metrics.", weights: { "data-scientist": 14, "software-developer": 10 } },
      { text: "Facilitate a structured discussion, evaluate trade-offs, and reach a consensus.", weights: { "business-entrepreneurship": 16 } },
      { text: "Conduct a rapid user test with wireframes to see what users find easiest.", weights: { "ui-ux-designer": 14 } },
      { text: "Audit both approaches against industry security and scalability standards.", weights: { "cloud-engineer": 12, "cybersecurity-analyst": 12 } }
    ]
  }
];

// ===================================================================
// 3. STORAGE MANAGER (LocalStorage Client Database with In-Memory Safe Fallback)
// ===================================================================
const Storage = {
  KEYS: {
    PROFILE: "careerAdvisor_profile",
    ASSESSMENT: "careerAdvisor_assessment",
    RECOMMENDATIONS: "careerAdvisor_recommendations",
    SELECTED_CAREER: "careerAdvisor_selectedCareer",
    SKILL_PROGRESS: "careerAdvisor_skill_progress"
  },
  _memory: {},
  _checked: false,
  _supported: false,

  isSupported() {
    if (this._checked) return this._supported;
    this._checked = true;
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const testKey = "__ca_test__";
        window.localStorage.setItem(testKey, "1");
        window.localStorage.removeItem(testKey);
        this._supported = true;
      }
    } catch (e) {
      console.warn("LocalStorage access restricted; activating resilient in-memory storage fallback.", e);
      this._supported = false;
    }
    return this._supported;
  },

  getItem(key) {
    if (this.isSupported()) {
      try {
        const val = window.localStorage.getItem(key);
        if (val !== null) return val;
      } catch (e) {}
    }
    return this._memory[key] || null;
  },

  setItem(key, val) {
    this._memory[key] = val;
    if (this.isSupported()) {
      try {
        window.localStorage.setItem(key, val);
        return true;
      } catch (e) {}
    }
    return true;
  },

  removeItem(key) {
    delete this._memory[key];
    if (this.isSupported()) {
      try {
        window.localStorage.removeItem(key);
      } catch (e) {}
    }
  },

  getProfile() {
    try {
      const data = this.getItem(this.KEYS.PROFILE);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  saveProfile(profile) {
    try {
      profile.updatedAt = new Date().toISOString();
      return this.setItem(this.KEYS.PROFILE, JSON.stringify(profile));
    } catch (e) {
      return false;
    }
  },

  getAssessment() {
    try {
      const data = this.getItem(this.KEYS.ASSESSMENT);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  saveAssessment(assessment) {
    try {
      assessment.completedAt = new Date().toISOString();
      return this.setItem(this.KEYS.ASSESSMENT, JSON.stringify(assessment));
    } catch (e) {
      return false;
    }
  },

  getRecommendations() {
    try {
      const data = this.getItem(this.KEYS.RECOMMENDATIONS);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  saveRecommendations(recs) {
    try {
      return this.setItem(this.KEYS.RECOMMENDATIONS, JSON.stringify(recs));
    } catch (e) {
      return false;
    }
  },

  getSelectedCareer() {
    return this.getItem(this.KEYS.SELECTED_CAREER) || "software-developer";
  },

  setSelectedCareer(careerId) {
    this.setItem(this.KEYS.SELECTED_CAREER, careerId);
  },

  getSkillProgress(careerId) {
    try {
      const allProgress = JSON.parse(this.getItem(this.KEYS.SKILL_PROGRESS) || "{}");
      return allProgress[careerId] || {};
    } catch (e) {
      return {};
    }
  },

  toggleSkill(careerId, skillName) {
    try {
      const allProgress = JSON.parse(this.getItem(this.KEYS.SKILL_PROGRESS) || "{}");
      if (!allProgress[careerId]) {
        allProgress[careerId] = {};
      }
      allProgress[careerId][skillName] = !allProgress[careerId][skillName];
      this.setItem(this.KEYS.SKILL_PROGRESS, JSON.stringify(allProgress));
      return allProgress[careerId][skillName];
    } catch (e) {
      return false;
    }
  },

  resetAllData() {
    this.removeItem(this.KEYS.PROFILE);
    this.removeItem(this.KEYS.ASSESSMENT);
    this.removeItem(this.KEYS.RECOMMENDATIONS);
    this.removeItem(this.KEYS.SELECTED_CAREER);
    this.removeItem(this.KEYS.SKILL_PROGRESS);
  }
};

// ===================================================================
// 4. RECOMMENDATION ALGORITHM ENGINE
// ===================================================================
/**
 * The recommendation algorithm calculates a tailored score (0-100%) for each
 * of the 9 career pathways based on three weighted pillars:
 *
 * 1. STUDENT PROFILE FACTORS (Weight ~40%):
 *    - Branch/Stream alignment: CS/IT students get natural boost in software, data, cloud, and AI.
 *    - Academic Performance: High grades boost analytical/data/systems tracks.
 *    - Favorite Subjects: Matching subjects directly reward aligned careers (+8 pts).
 *    - Student's Existing Skills: Direct reward to aligned careers (+10 pts).
 *    - Student's Personal Interests: Direct reward to aligned careers (+8 pts).
 *    - Expressed Preferred Career Field: +25 pts boost to the chosen domain.
 *
 * 2. CAREER ASSESSMENT APTITUDE QUIZ (Weight ~60%):
 *    - 16 multiple-choice questions assessing instinctive reactions across 8 domains.
 *    - Each answer adds weighted points to 1 or 2 matching careers.
 *
 * 3. NORMALIZATION & PERSONALIZED EXPLANATION GENERATION:
 *    - Raw scores are mapped onto an intuitive 45% - 98% percentage scale.
 *    - Each recommendation includes a dynamically generated explanation
 *      citing the user's specific subjects, skills, and assessment strengths.
 */
function calculateRecommendations(profile, assessmentAnswers) {
  // Initialize raw score tallies for each of the 9 careers
  const rawScores = {};
  const careerKeys = Object.keys(CAREER_DATABASE);
  careerKeys.forEach(key => {
    rawScores[key] = 20; // baseline foundation score
  });

  // Track matched reasons for explainability
  const matchedFactors = {};
  careerKeys.forEach(key => {
    matchedFactors[key] = {
      skills: [],
      subjects: [],
      interests: [],
      assessmentPoints: 0
    };
  });

  // -------------------------------------------------------------
  // PILLAR 1: PROFILE INFLUENCE
  // -------------------------------------------------------------
  if (profile) {
    const stream = (profile.branch || "").toLowerCase();
    const preferred = (profile.preferredField || "").toLowerCase();
    const academicScore = parseFloat(profile.academicScore) || 75;

    // Stream & Branch alignment (Comprehensive mapping across 28+ Academic Disciplines)
    if (stream.includes("ai") || stream.includes("data science") || stream.includes("machine learning")) {
      rawScores["ai-engineer"] += 28;
      rawScores["data-scientist"] += 26;
      rawScores["software-developer"] += 16;
      rawScores["cloud-engineer"] += 14;
      matchedFactors["ai-engineer"].streamMatch = `your specialization in ${profile.branch}`;
      matchedFactors["data-scientist"].streamMatch = `your specialization in ${profile.branch}`;
    } else if (stream.includes("mechatronic") || stream.includes("robot") || stream.includes("mechanical") || stream.includes("automobile") || stream.includes("aerospace") || stream.includes("aeronautical")) {
      rawScores["electronics-engineer"] += 26;
      rawScores["software-developer"] += 16;
      rawScores["data-scientist"] += 14;
      rawScores["cloud-engineer"] += 12;
      matchedFactors["electronics-engineer"].streamMatch = `your engineering foundation in ${profile.branch}`;
      matchedFactors["software-developer"].streamMatch = `your technical problem solving in ${profile.branch}`;
    } else if (stream.includes("bio") || stream.includes("health") || stream.includes("pharma") || stream.includes("medical") || stream.includes("life science")) {
      rawScores["data-scientist"] += 26;
      rawScores["ai-engineer"] += 20;
      rawScores["software-developer"] += 12;
      matchedFactors["data-scientist"].streamMatch = `your domain background in ${profile.branch}`;
      matchedFactors["ai-engineer"].streamMatch = `your life science training in ${profile.branch}`;
    } else if (stream.includes("finan") || stream.includes("fintech") || stream.includes("econ") || stream.includes("account")) {
      rawScores["business-entrepreneurship"] += 26;
      rawScores["data-scientist"] += 24;
      rawScores["cybersecurity-analyst"] += 14;
      matchedFactors["business-entrepreneurship"].streamMatch = `your analytical acumen in ${profile.branch}`;
      matchedFactors["data-scientist"].streamMatch = `your quantitative training in ${profile.branch}`;
    } else if (stream.includes("civil") || stream.includes("architec") || stream.includes("construct") || stream.includes("infra")) {
      rawScores["business-entrepreneurship"] += 22;
      rawScores["ui-ux-designer"] += 18;
      rawScores["cloud-engineer"] += 14;
      matchedFactors["business-entrepreneurship"].streamMatch = `your systems planning skills in ${profile.branch}`;
      matchedFactors["ui-ux-designer"].streamMatch = `your spatial design background in ${profile.branch}`;
    } else if (stream.includes("computer") || stream.includes("it") || stream.includes("cse") || stream.includes("software") || stream.includes("bca") || stream.includes("mca")) {
      rawScores["software-developer"] += 20;
      rawScores["web-developer"] += 18;
      rawScores["ai-engineer"] += 16;
      rawScores["data-scientist"] += 14;
      rawScores["cloud-engineer"] += 18;
      rawScores["cybersecurity-analyst"] += 16;
      matchedFactors["software-developer"].streamMatch = `your academic curriculum in ${profile.branch}`;
      matchedFactors["cloud-engineer"].streamMatch = `your computing background in ${profile.branch}`;
    } else if (stream.includes("electronic") || stream.includes("electrical") || stream.includes("ece") || stream.includes("eee") || stream.includes("telecom")) {
      rawScores["electronics-engineer"] += 28;
      rawScores["cybersecurity-analyst"] += 14;
      rawScores["cloud-engineer"] += 14;
      rawScores["software-developer"] += 12;
      matchedFactors["electronics-engineer"].streamMatch = `your core circuit and hardware curriculum in ${profile.branch}`;
    } else if (stream.includes("commerce") || stream.includes("business") || stream.includes("bba") || stream.includes("b.com") || stream.includes("management")) {
      rawScores["business-entrepreneurship"] += 28;
      rawScores["data-scientist"] += 16;
      rawScores["ui-ux-designer"] += 12;
      matchedFactors["business-entrepreneurship"].streamMatch = `your business foundation in ${profile.branch}`;
    } else if (stream.includes("math") || stream.includes("stat") || stream.includes("physic") || stream.includes("pure science")) {
      rawScores["data-scientist"] += 26;
      rawScores["ai-engineer"] += 24;
      rawScores["software-developer"] += 16;
      rawScores["electronics-engineer"] += 12;
      matchedFactors["data-scientist"].streamMatch = `your deep mathematical foundation in ${profile.branch}`;
      matchedFactors["ai-engineer"].streamMatch = `your quantitative problem solving in ${profile.branch}`;
    } else if (stream.includes("art") || stream.includes("design") || stream.includes("multimedia") || stream.includes("graphic") || stream.includes("vfx") || stream.includes("animat")) {
      rawScores["ui-ux-designer"] += 28;
      rawScores["web-developer"] += 16;
      rawScores["business-entrepreneurship"] += 12;
      matchedFactors["ui-ux-designer"].streamMatch = `your visual design and creative background in ${profile.branch}`;
    } else if (stream.includes("psych") || stream.includes("cognit") || stream.includes("media") || stream.includes("journal") || stream.includes("humanit") || stream.includes("communicat")) {
      rawScores["ui-ux-designer"] += 24;
      rawScores["business-entrepreneurship"] += 20;
      rawScores["web-developer"] += 12;
      matchedFactors["ui-ux-designer"].streamMatch = `your behavioral research insights in ${profile.branch}`;
      matchedFactors["business-entrepreneurship"].streamMatch = `your communication acumen in ${profile.branch}`;
    } else if (stream.includes("pcm") || stream.includes("non-med")) {
      rawScores["software-developer"] += 14;
      rawScores["ai-engineer"] += 14;
      rawScores["electronics-engineer"] += 14;
      matchedFactors["software-developer"].streamMatch = `your strong 10+2 science & mathematics preparation`;
    } else if (stream.includes("pcb")) {
      rawScores["data-scientist"] += 16;
      rawScores["ai-engineer"] += 14;
      matchedFactors["data-scientist"].streamMatch = `your 10+2 science and biological foundations`;
    }

    // Academic performance factor (Analytical tracks benefit from strong scores)
    if (academicScore >= 80) {
      rawScores["ai-engineer"] += 10;
      rawScores["data-scientist"] += 10;
      rawScores["software-developer"] += 8;
      rawScores["electronics-engineer"] += 8;
    }

    // Favorite Subjects mapping
    const subjects = profile.favoriteSubjects || [];
    subjects.forEach(subj => {
      const s = subj.toLowerCase();
      if (s.includes("math") || s.includes("algebra")) {
        rawScores["ai-engineer"] += 8;
        rawScores["data-scientist"] += 8;
        rawScores["software-developer"] += 6;
        matchedFactors["ai-engineer"].subjects.push(subj);
        matchedFactors["data-scientist"].subjects.push(subj);
      }
      if (s.includes("computer") || s.includes("coding")) {
        rawScores["software-developer"] += 8;
        rawScores["web-developer"] += 8;
        matchedFactors["software-developer"].subjects.push(subj);
        matchedFactors["web-developer"].subjects.push(subj);
      }
      if (s.includes("physics") || s.includes("electronic")) {
        rawScores["electronics-engineer"] += 10;
        matchedFactors["electronics-engineer"].subjects.push(subj);
      }
      if (s.includes("design") || s.includes("art")) {
        rawScores["ui-ux-designer"] += 10;
        matchedFactors["ui-ux-designer"].subjects.push(subj);
      }
      if (s.includes("business") || s.includes("economic") || s.includes("commerce")) {
        rawScores["business-entrepreneurship"] += 10;
        matchedFactors["business-entrepreneurship"].subjects.push(subj);
      }
      if (s.includes("statistic")) {
        rawScores["data-scientist"] += 10;
        matchedFactors["data-scientist"].subjects.push(subj);
      }
      if (s.includes("bio") || s.includes("life science")) {
        rawScores["data-scientist"] += 10;
        rawScores["ai-engineer"] += 8;
        matchedFactors["data-scientist"].subjects.push(subj);
      }
      if (s.includes("mech") || s.includes("cad")) {
        rawScores["electronics-engineer"] += 10;
        rawScores["software-developer"] += 6;
        matchedFactors["electronics-engineer"].subjects.push(subj);
      }
      if (s.includes("psych") || s.includes("behavior")) {
        rawScores["ui-ux-designer"] += 10;
        rawScores["business-entrepreneurship"] += 6;
        matchedFactors["ui-ux-designer"].subjects.push(subj);
      }
    });

    // Student Skills mapping
    const skills = profile.skills || [];
    skills.forEach(skill => {
      const sk = skill.toLowerCase();
      if (sk.includes("python") || sk.includes("java") || sk.includes("c++") || sk.includes("coding") || sk.includes("problem")) {
        rawScores["software-developer"] += 10;
        rawScores["ai-engineer"] += 8;
        matchedFactors["software-developer"].skills.push(skill);
      }
      if (sk.includes("web") || sk.includes("html") || sk.includes("javascript")) {
        rawScores["web-developer"] += 12;
        matchedFactors["web-developer"].skills.push(skill);
      }
      if (sk.includes("data") || sk.includes("sql") || sk.includes("analytics")) {
        rawScores["data-scientist"] += 12;
        rawScores["ai-engineer"] += 8;
        matchedFactors["data-scientist"].skills.push(skill);
      }
      if (sk.includes("design") || sk.includes("ui") || sk.includes("figma") || sk.includes("creative")) {
        rawScores["ui-ux-designer"] += 12;
        matchedFactors["ui-ux-designer"].skills.push(skill);
      }
      if (sk.includes("security") || sk.includes("network") || sk.includes("linux")) {
        rawScores["cybersecurity-analyst"] += 12;
        rawScores["cloud-engineer"] += 8;
        matchedFactors["cybersecurity-analyst"].skills.push(skill);
      }
      if (sk.includes("public speaking") || sk.includes("leadership") || sk.includes("marketing") || sk.includes("business")) {
        rawScores["business-entrepreneurship"] += 12;
        matchedFactors["business-entrepreneurship"].skills.push(skill);
      }
      if (sk.includes("robotics") || sk.includes("circuits") || sk.includes("arduino")) {
        rawScores["electronics-engineer"] += 12;
        matchedFactors["electronics-engineer"].skills.push(skill);
      }
      if (sk.includes("cad") || sk.includes("solidworks") || sk.includes("3d")) {
        rawScores["electronics-engineer"] += 10;
        rawScores["ui-ux-designer"] += 8;
        matchedFactors["electronics-engineer"].skills.push(skill);
      }
      if (sk.includes("bio") || sk.includes("lab")) {
        rawScores["data-scientist"] += 12;
        rawScores["ai-engineer"] += 8;
        matchedFactors["data-scientist"].skills.push(skill);
      }
      if (sk.includes("finan") || sk.includes("valuation") || sk.includes("model")) {
        rawScores["business-entrepreneurship"] += 12;
        rawScores["data-scientist"] += 10;
        matchedFactors["business-entrepreneurship"].skills.push(skill);
      }
    });

    // Student Interests mapping
    const interests = profile.interests || [];
    interests.forEach(interest => {
      const it = interest.toLowerCase();
      if (it.includes("ai") || it.includes("intelligence") || it.includes("machine")) {
        rawScores["ai-engineer"] += 12;
        matchedFactors["ai-engineer"].interests.push(interest);
      }
      if (it.includes("app") || it.includes("software") || it.includes("building")) {
        rawScores["software-developer"] += 10;
        rawScores["web-developer"] += 8;
        matchedFactors["software-developer"].interests.push(interest);
      }
      if (it.includes("hack") || it.includes("security") || it.includes("threat")) {
        rawScores["cybersecurity-analyst"] += 14;
        matchedFactors["cybersecurity-analyst"].interests.push(interest);
      }
      if (it.includes("visual") || it.includes("aesthetic") || it.includes("drawing")) {
        rawScores["ui-ux-designer"] += 12;
        matchedFactors["ui-ux-designer"].interests.push(interest);
      }
      if (it.includes("trend") || it.includes("analyz") || it.includes("dataset")) {
        rawScores["data-scientist"] += 12;
        matchedFactors["data-scientist"].interests.push(interest);
      }
      if (it.includes("hardware") || it.includes("gadget") || it.includes("device")) {
        rawScores["electronics-engineer"] += 14;
        matchedFactors["electronics-engineer"].interests.push(interest);
      }
      if (it.includes("leader") || it.includes("team") || it.includes("startup") || it.includes("finance")) {
        rawScores["business-entrepreneurship"] += 12;
        matchedFactors["business-entrepreneurship"].interests.push(interest);
      }
    });

    // Preferred Career Field Direct Priority Boost
    if (preferred) {
      if (preferred.includes("software")) rawScores["software-developer"] += 25;
      if (preferred.includes("ai") || preferred.includes("intelligence")) rawScores["ai-engineer"] += 25;
      if (preferred.includes("data")) rawScores["data-scientist"] += 25;
      if (preferred.includes("cyber") || preferred.includes("security")) rawScores["cybersecurity-analyst"] += 25;
      if (preferred.includes("web")) rawScores["web-developer"] += 25;
      if (preferred.includes("cloud")) rawScores["cloud-engineer"] += 25;
      if (preferred.includes("design") || preferred.includes("ui")) rawScores["ui-ux-designer"] += 25;
      if (preferred.includes("electronic") || preferred.includes("hardware")) rawScores["electronics-engineer"] += 25;
      if (preferred.includes("business") || preferred.includes("strategy") || preferred.includes("entrepreneur")) rawScores["business-entrepreneurship"] += 25;
    }
  }

  // -------------------------------------------------------------
  // PILLAR 2: ASSESSMENT QUESTIONS INFLUENCE
  // -------------------------------------------------------------
  if (assessmentAnswers) {
    ASSESSMENT_QUESTIONS.forEach(q => {
      const selectedIndex = assessmentAnswers[q.id];
      if (selectedIndex !== undefined && q.options[selectedIndex]) {
        const weights = q.options[selectedIndex].weights;
        for (const [careerId, pts] of Object.entries(weights)) {
          if (rawScores[careerId] !== undefined) {
            rawScores[careerId] += pts;
            matchedFactors[careerId].assessmentPoints += pts;
          }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // PILLAR 3: NORMALIZATION & RANKING
  // -------------------------------------------------------------
  // Find highest raw score to scale relative percentages between 45% and 98%
  let maxScore = 0;
  careerKeys.forEach(key => {
    if (rawScores[key] > maxScore) maxScore = rawScores[key];
  });
  if (maxScore === 0) maxScore = 100;

  const rankedCareers = careerKeys.map(key => {
    const raw = rawScores[key];
    // Formula: scales highest to ~95-98%, runners up proportional
    const matchPercentage = Math.min(98, Math.max(42, Math.round((raw / maxScore) * 96)));

    // Generate personalized "Why it suits you" explanation text
    const career = CAREER_DATABASE[key];
    const factors = matchedFactors[key];
    let whyReason = `Matches your academic trajectory and performance in our multi-domain assessment.`;

    const highlightParts = [];
    if (factors.streamMatch) {
      highlightParts.push(factors.streamMatch);
    }
    if (factors.skills.length > 0) {
      highlightParts.push(`your background in ${factors.skills.slice(0, 2).join(" & ")}`);
    }
    if (factors.subjects.length > 0) {
      highlightParts.push(`your favorite subject ${factors.subjects[0]}`);
    }
    if (factors.interests.length > 0) {
      highlightParts.push(`your passion for ${factors.interests[0].toLowerCase()}`);
    }

    if (highlightParts.length > 0) {
      whyReason = `Strongly aligns with ${highlightParts.join(", ")}. Your assessment aptitude score demonstrated natural affinity for ${career.category.toLowerCase()}.`;
    } else if (factors.assessmentPoints > 15) {
      whyReason = `Your assessment responses showed exceptional affinity and problem-solving intuition suited for ${career.category.toLowerCase()}.`;
    }

    return {
      ...career,
      matchPercentage,
      rawScore: raw,
      whySuit: whyReason
    };
  });

  // Sort descending by match percentage
  rankedCareers.sort((a, b) => b.matchPercentage - a.matchPercentage);

  return rankedCareers;
}

// ===================================================================
// 5. TOAST NOTIFICATION SYSTEM
// ===================================================================
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${type === "success" ? "✓" : type === "warning" ? "⚠" : "ℹ"}</span><span>${message}</span>`;
  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add("show"), 10);

  // Remove after 3.5s
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ===================================================================
// 6. SHARED NAVBAR & UI INITIALIZATION
// ===================================================================
function initNavbar() {
  const profile = Storage.getProfile();
  const navUserBadge = document.getElementById("nav-user-badge");
  if (navUserBadge) {
    if (profile && profile.name) {
      navUserBadge.innerHTML = `<span>👤</span> ${profile.name.split(" ")[0]}`;
      navUserBadge.style.display = "inline-flex";
    } else {
      navUserBadge.innerHTML = `<span>👤</span> Guest Student`;
    }
  }

  // Mobile menu toggle
  const toggleBtn = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
}

// ===================================================================
// 7. PROFILE PAGE CONTROLLER (profile.html)
// ===================================================================
function initProfilePage() {
  const form = document.getElementById("profile-form");
  if (!form) return;

  const existingProfile = Storage.getProfile();

  // Populate existing data if available
  if (existingProfile) {
    if (document.getElementById("student-name")) document.getElementById("student-name").value = existingProfile.name || "";
    if (document.getElementById("education-level")) document.getElementById("education-level").value = existingProfile.educationLevel || "";
    if (document.getElementById("branch-stream")) document.getElementById("branch-stream").value = existingProfile.branch || "";
    if (document.getElementById("academic-score")) document.getElementById("academic-score").value = existingProfile.academicScore || "";
    if (document.getElementById("career-goal")) document.getElementById("career-goal").value = existingProfile.careerGoal || "";

    // Checkboxes: Subjects
    (existingProfile.favoriteSubjects || []).forEach(subj => {
      const cb = document.querySelector(`input[name="subjects"][value="${subj}"]`);
      if (cb) cb.checked = true;
    });

    // Checkboxes: Skills
    (existingProfile.skills || []).forEach(skill => {
      const cb = document.querySelector(`input[name="skills"][value="${skill}"]`);
      if (cb) cb.checked = true;
    });

    // Checkboxes: Interests
    (existingProfile.interests || []).forEach(interest => {
      const cb = document.querySelector(`input[name="interests"][value="${interest}"]`);
      if (cb) cb.checked = true;
    });

    // Radio: Preferred Field
    if (existingProfile.preferredField) {
      const radio = document.querySelector(`input[name="preferredField"][value="${existingProfile.preferredField}"]`);
      if (radio) radio.checked = true;
    }
  }

  // Form submission handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("student-name");
    const eduLevel = document.getElementById("education-level");
    const branch = document.getElementById("branch-stream");
    const score = document.getElementById("academic-score");
    const goal = document.getElementById("career-goal");

    // Validation
    let isValid = true;

    [nameInput, eduLevel, branch, score].forEach(input => {
      if (!input.value.trim()) {
        input.classList.add("error");
        isValid = false;
      } else {
        input.classList.remove("error");
      }
    });

    if (!isValid) {
      showToast("Please complete all required fields highlighted in red.", "warning");
      return;
    }

    // Collect multi-select pills
    const favoriteSubjects = Array.from(document.querySelectorAll('input[name="subjects"]:checked')).map(cb => cb.value);
    const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(cb => cb.value);
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value);
    const preferredRadio = document.querySelector('input[name="preferredField"]:checked');
    const preferredField = preferredRadio ? preferredRadio.value : "";

    const profileData = {
      name: nameInput.value.trim(),
      educationLevel: eduLevel.value,
      branch: branch.value.trim(),
      academicScore: score.value.trim(),
      favoriteSubjects,
      skills,
      interests,
      preferredField,
      careerGoal: goal.value.trim()
    };

    Storage.saveProfile(profileData);

    // Re-calculate recommendations if assessment is already taken
    const assessment = Storage.getAssessment();
    if (assessment && assessment.answers) {
      const recs = calculateRecommendations(profileData, assessment.answers);
      Storage.saveRecommendations(recs);
      if (recs.length > 0) {
        Storage.setSelectedCareer(recs[0].id);
      }
    }

    showToast("Profile saved successfully! Redirecting to Career Assessment...", "success");

    setTimeout(() => {
      window.location.href = "assessment.html";
    }, 1200);
  });

  // Reset button trigger
  const resetBtn = document.getElementById("reset-profile-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      openResetModal();
    });
  }
}

// ===================================================================
// 8. ASSESSMENT QUIZ CONTROLLER (assessment.html)
// ===================================================================
let currentQuestionIndex = 0;
let userAnswers = {};

function initAssessmentPage() {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  // Check if student profile exists; advise if not
  const profile = Storage.getProfile();
  const alertBanner = document.getElementById("profile-check-banner");
  if (!profile && alertBanner) {
    alertBanner.style.display = "block";
  }

  // Load existing answers if available
  const existingAssessment = Storage.getAssessment();
  if (existingAssessment && existingAssessment.answers) {
    userAnswers = existingAssessment.answers;
  }

  renderQuestion();
  updateQuizProgress();

  // Navigation listeners
  const nextBtn = document.getElementById("quiz-next-btn");
  const prevBtn = document.getElementById("quiz-prev-btn");
  const submitBtn = document.getElementById("quiz-submit-btn");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        updateQuizProgress();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        updateQuizProgress();
      }
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      finishAssessment();
    });
  }
}

function renderQuestion() {
  const q = ASSESSMENT_QUESTIONS[currentQuestionIndex];
  if (!q) return;

  const card = document.getElementById("active-question-card");
  if (!card) return;

  let optionsHtml = "";
  q.options.forEach((opt, idx) => {
    const isSelected = userAnswers[q.id] === idx;
    optionsHtml += `
      <div class="quiz-option ${isSelected ? "selected" : ""}" data-qid="${q.id}" data-idx="${idx}" onclick="selectAnswer(${q.id}, ${idx})">
        <div class="quiz-option-radio"></div>
        <div class="quiz-option-text">${opt.text}</div>
      </div>
    `;
  });

  card.innerHTML = `
    <div class="question-domain-badge">${q.icon} Domain: ${q.domain}</div>
    <div class="question-text">${q.id}. ${q.question}</div>
    <div class="quiz-options">
      ${optionsHtml}
    </div>
  `;

  // Explicitly attach event listeners to handle any security restrictions on inline handlers
  card.querySelectorAll(".quiz-option").forEach(elem => {
    elem.addEventListener("click", () => {
      const qid = parseInt(elem.getAttribute("data-qid"), 10);
      const idx = parseInt(elem.getAttribute("data-idx"), 10);
      selectAnswer(qid, idx);
    });
  });

  // Update button visibility
  const prevBtn = document.getElementById("quiz-prev-btn");
  const nextBtn = document.getElementById("quiz-next-btn");
  const submitBtn = document.getElementById("quiz-submit-btn");

  if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;

  if (currentQuestionIndex === ASSESSMENT_QUESTIONS.length - 1) {
    if (nextBtn) nextBtn.style.display = "none";
    if (submitBtn) submitBtn.style.display = "inline-flex";
  } else {
    if (nextBtn) nextBtn.style.display = "inline-flex";
    if (submitBtn) submitBtn.style.display = "none";
  }
}

function selectAnswer(questionId, optionIndex) {
  userAnswers[questionId] = optionIndex;
  renderQuestion();
  updateQuizProgress();
}

function updateQuizProgress() {
  const total = ASSESSMENT_QUESTIONS.length;
  const answeredCount = Object.keys(userAnswers).length;
  const currentStep = currentQuestionIndex + 1;

  const textElem = document.getElementById("quiz-progress-text");
  const countElem = document.getElementById("quiz-answered-count");
  const fillElem = document.getElementById("quiz-progress-fill");

  if (textElem) textElem.textContent = `Question ${currentStep} of ${total}`;
  if (countElem) countElem.textContent = `${answeredCount} of ${total} answered`;
  if (fillElem) {
    const pct = Math.round((answeredCount / total) * 100);
    fillElem.style.width = `${pct}%`;
  }
}

function finishAssessment() {
  const total = ASSESSMENT_QUESTIONS.length;
  const answeredCount = Object.keys(userAnswers).length;

  if (answeredCount < total) {
    const unanswered = [];
    for (let i = 1; i <= total; i++) {
      if (userAnswers[i] === undefined) unanswered.push(i);
    }
    showToast(`Please answer all questions before submitting. Unanswered: #${unanswered.slice(0, 4).join(", ")}...`, "warning");
    return;
  }

  // Save assessment
  Storage.saveAssessment({ answers: userAnswers });

  // Calculate recommendations
  const profile = Storage.getProfile();
  const recommendations = calculateRecommendations(profile, userAnswers);
  Storage.saveRecommendations(recommendations);

  // Set the top 1 career as the active default for roadmap & dashboard
  if (recommendations && recommendations.length > 0) {
    Storage.setSelectedCareer(recommendations[0].id);
  }

  showToast("Assessment complete! Generating your personalized recommendations...", "success");

  setTimeout(() => {
    window.location.href = "recommendations.html";
  }, 1000);
}

// ===================================================================
// 9. RECOMMENDATIONS PAGE CONTROLLER (recommendations.html)
// ===================================================================
function initRecommendationsPage() {
  const container = document.getElementById("recommendations-container");
  if (!container) return;

  let recs = Storage.getRecommendations();
  const emptyPrompt = document.getElementById("rec-empty-state");

  // Fallback: If no recommendations saved yet, generate from profile or baseline
  if (!recs || recs.length === 0) {
    const profile = Storage.getProfile();
    const assessment = Storage.getAssessment();
    recs = calculateRecommendations(profile, assessment ? assessment.answers : {});
    if (emptyPrompt) {
      if (!profile && (!assessment || !assessment.answers)) {
        emptyPrompt.style.display = "block";
      } else {
        emptyPrompt.style.display = "none";
        Storage.saveRecommendations(recs);
      }
    }
  } else {
    if (emptyPrompt) emptyPrompt.style.display = "none";
  }

  const topRec = recs[0];
  const secondaryRecs = recs.slice(1);

  // Top Recommendation Card
  const topContainer = document.getElementById("top-recommendation-container");
  if (topContainer) {
    topContainer.innerHTML = `
      <div class="top-recommendation-card">
        <div class="top-rec-badge">★ #1 Ranked Career Match</div>
        
        <div class="top-rec-header">
          <div class="top-rec-title-group">
            <div class="top-rec-icon">${topRec.icon}</div>
            <div>
              <h2 class="top-rec-name">${topRec.name}</h2>
              <div class="top-rec-category">${topRec.category} • ${topRec.demand}</div>
            </div>
          </div>
          <div class="match-score-badge">
            <span>${topRec.matchPercentage}%</span>
            <span style="font-size: 0.85rem; font-weight: 500;">Match Score</span>
          </div>
        </div>

        <div class="top-rec-reason">
          <strong>Why this career suits you:</strong> ${topRec.whySuit}
        </div>

        <div class="top-rec-details-grid">
          <div class="top-detail-block">
            <div class="top-detail-heading">🛠️ Key Required Skills</div>
            <div class="tag-cloud">
              ${topRec.requiredSkills.map(s => `<span class="tag-item">${s}</span>`).join("")}
            </div>
          </div>

          <div class="top-detail-block">
            <div class="top-detail-heading">📚 Recommended Subjects</div>
            <div class="tag-cloud">
              ${topRec.recommendedSubjects.map(s => `<span class="tag-item">${s}</span>`).join("")}
            </div>
          </div>

          <div class="top-detail-block">
            <div class="top-detail-heading">🗺️ Suggested Learning Path</div>
            <p style="font-size: 0.85rem; color: #e0e7ff; line-height: 1.5;">${topRec.learningPath}</p>
          </div>

          <div class="top-detail-block" style="grid-column: 1 / -1;">
            <div class="top-detail-heading">💰 Industry Compensation & Top Employers</div>
            <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; font-size: 0.9rem;">
              <div><strong style="color: #6ee7b7;">Salary:</strong> ${topRec.salaryRange || "Competitive Industry Standard"}</div>
              <div><strong style="color: #93c5fd;">Employers:</strong> ${(topRec.topCompanies || []).join(", ") || "Global Enterprises"}</div>
              <div><strong style="color: #fde047;">Certifications:</strong> ${(topRec.certifications || []).join(", ") || "Technical Portfolio"}</div>
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn btn-success" onclick="selectAndGoToRoadmap('${topRec.id}')">
            Set as My Career Goal & View Education Roadmap →
          </button>
          <button class="btn btn-secondary" onclick="openComparisonModal('${topRec.id}')">
            ⚖️ Compare Path
          </button>
          <button class="btn btn-secondary" onclick="openShareModal()">
            🔗 Direct Link
          </button>
          <button class="btn btn-secondary" onclick="window.print()">
            🖨️ Print / Save Report
          </button>
        </div>
      </div>
    `;
  }

  // Secondary Recommendations Grid
  const secondaryContainer = document.getElementById("secondary-recommendations-grid");
  if (secondaryContainer) {
    let gridHtml = "";
    secondaryRecs.forEach((career, idx) => {
      gridHtml += `
        <div class="rec-card">
          <div>
            <div class="rec-card-header">
              <div class="rec-card-title-wrap">
                <div class="rec-card-icon">${career.icon}</div>
                <div>
                  <h3 class="rec-card-name">${career.name}</h3>
                  <span style="font-size: 0.775rem; color: var(--text-muted);">${career.category}</span>
                </div>
              </div>
              <span class="rec-score-pill">${career.matchPercentage}% Match</span>
            </div>

            <p class="rec-card-reason">${career.whySuit}</p>

            <div class="rec-card-section-title">Required Skills</div>
            <div class="tag-cloud rec-card-tags">
              ${career.requiredSkills.slice(0, 5).map(s => `<span class="tag-item light">${s}</span>`).join("")}
            </div>

            <div class="rec-card-section-title">Learning Path Preview</div>
            <div class="rec-card-path">${career.learningPath}</div>
          </div>

          <div class="rec-card-actions" style="display: flex; gap: 0.5rem; margin-top: auto;">
            <button class="btn btn-outline-primary btn-sm" style="flex: 1;" onclick="selectAndGoToRoadmap('${career.id}')">
              Explore Roadmap →
            </button>
            <button class="btn btn-secondary btn-sm" onclick="openComparisonModal('${topRec.id}', '${career.id}')" title="Compare with top match">
              ⚖️ Compare
            </button>
          </div>
        </div>
      `;
    });
    secondaryContainer.innerHTML = gridHtml;
  }
}

function selectAndGoToRoadmap(careerId) {
  Storage.setSelectedCareer(careerId);
  window.location.href = "roadmap.html";
}

// ===================================================================
// 10. ROADMAP PAGE CONTROLLER (roadmap.html)
// ===================================================================
function initRoadmapPage() {
  const container = document.getElementById("roadmap-container");
  if (!container) return;

  // Check URL query parameters (e.g., roadmap.html?career=ai-engineer)
  let targetCareerId = null;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get("career");
    if (param && CAREER_DATABASE[param]) {
      targetCareerId = param;
    }
  } catch (e) {}

  if (!targetCareerId) {
    targetCareerId = Storage.getSelectedCareer();
  }
  if (!CAREER_DATABASE[targetCareerId]) {
    targetCareerId = "software-developer";
  }

  Storage.setSelectedCareer(targetCareerId);

  const selector = document.getElementById("roadmap-career-select");
  if (selector) {
    selector.innerHTML = Object.values(CAREER_DATABASE).map(c => `
      <option value="${c.id}" ${c.id === targetCareerId ? "selected" : ""}>
        ${c.icon} ${c.name}
      </option>
    `).join("");

    selector.addEventListener("change", (e) => {
      Storage.setSelectedCareer(e.target.value);
      renderCareerRoadmap(e.target.value);
    });
  }

  renderCareerRoadmap(targetCareerId);
}

function renderCareerRoadmap(careerId) {
  const career = CAREER_DATABASE[careerId];
  if (!career) return;

  // Header info
  const titleElem = document.getElementById("roadmap-title");
  const descElem = document.getElementById("roadmap-desc");
  if (titleElem) titleElem.textContent = `${career.icon} Education & Skill Roadmap for ${career.name}`;
  if (descElem) descElem.textContent = career.description;

  // 1. Education Roadmap (School -> College -> Skills -> Projects -> Internship -> Job)
  const timelineContainer = document.getElementById("education-timeline");
  if (timelineContainer) {
    timelineContainer.innerHTML = career.educationRoadmap.map((stage, idx) => `
      <div class="timeline-item">
        <div class="timeline-marker">${idx + 1}</div>
        <div class="timeline-card">
          <span class="timeline-step-badge">${stage.stage} • ${stage.badge}</span>
          <h3 class="timeline-card-title">${stage.title}</h3>
          <p class="timeline-card-desc">${stage.desc}</p>
          <ul class="timeline-items-list">
            ${stage.items.map(it => `<li>${it}</li>`).join("")}
          </ul>
        </div>
      </div>
    `).join("");
  }

  // 2. Skill Mastery Tracker
  renderSkillTracker(careerId);

  // 3. Curated Free Resources, Certifications & Industry Outlook
  const resourcesContainer = document.getElementById("career-resources-section");
  if (resourcesContainer) {
    resourcesContainer.innerHTML = `
      <div class="card" style="margin-top: 2.5rem; background: white; border-radius: var(--radius-xl); padding: 2.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 0.5rem;">
          <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
            <span>📚</span> Verified Free Learning Resources & Tutorials
          </h3>
          <button class="btn btn-secondary btn-sm" onclick="openShareModal()">
            <span>🔗</span> Direct Share Link
          </button>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
          Top-rated free courses, guided projects, and documentation to master ${career.name} without paid subscriptions.
        </p>

        <div class="resources-grid">
          ${(career.freeResources || []).map(r => `
            <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-card">
              <div>
                <div class="resource-provider">${r.provider} ↗</div>
                <div class="resource-title">${r.title}</div>
              </div>
              <span style="font-size: 0.8rem; color: var(--primary); font-weight: 600; margin-top: 0.5rem;">Start Free Learning →</span>
            </a>
          `).join("")}
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin-top: 2rem; padding-top: 1.75rem; border-top: 1px solid var(--border-color);">
          <div style="background: var(--bg-subtle); padding: 1.25rem; border-radius: var(--radius-md);">
            <div style="font-size: 0.775rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">💰 Compensation Outlook</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #059669; margin-top: 0.35rem;">${career.salaryRange || "Competitive Industry Standards"}</div>
          </div>
          <div style="background: var(--bg-subtle); padding: 1.25rem; border-radius: var(--radius-md);">
            <div style="font-size: 0.775rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">🎖️ Recommended Certifications</div>
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin-top: 0.35rem;">${(career.certifications || []).join(" • ") || "Standard Industry Portfolio"}</div>
          </div>
          <div style="background: var(--bg-subtle); padding: 1.25rem; border-radius: var(--radius-md);">
            <div style="font-size: 0.775rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">🏢 Top Hiring Companies</div>
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin-top: 0.35rem;">${(career.topCompanies || []).join(" • ") || "Global Tech Employers"}</div>
          </div>
        </div>
      </div>
    `;
  }
}

function renderSkillTracker(careerId) {
  const career = CAREER_DATABASE[careerId];
  const listContainer = document.getElementById("skills-checklist");
  if (!career || !listContainer) return;

  const progress = Storage.getSkillProgress(careerId);
  const totalSkills = career.skills.length;
  let completedCount = 0;

  listContainer.innerHTML = career.skills.map(skill => {
    const isCompleted = !!progress[skill.name];
    if (isCompleted) completedCount++;

    const badgeClass = skill.level === "Beginner" ? "badge-beginner" : skill.level === "Intermediate" ? "badge-intermediate" : "badge-advanced";
    const safeName = skill.name.replace(/'/g, "\\'");

    return `
      <div class="skill-item ${isCompleted ? "completed" : ""}" data-career="${careerId}" data-skill="${encodeURIComponent(skill.name)}" onclick="handleSkillToggle('${careerId}', '${safeName}')">
        <div class="skill-checkbox"></div>
        <div class="skill-info">
          <div class="skill-name">${skill.name}</div>
        </div>
        <span class="skill-level-badge ${badgeClass}">${skill.level}</span>
      </div>
    `;
  }).join("");

  listContainer.querySelectorAll(".skill-item").forEach(elem => {
    elem.addEventListener("click", () => {
      const cid = elem.getAttribute("data-career");
      const sname = decodeURIComponent(elem.getAttribute("data-skill"));
      handleSkillToggle(cid, sname);
    });
  });

  // Update progress bar
  const pct = Math.round((completedCount / totalSkills) * 100);
  const pctElem = document.getElementById("skill-progress-pct");
  const countElem = document.getElementById("skill-completed-count");
  const fillElem = document.getElementById("skill-progress-fill");

  if (pctElem) pctElem.textContent = `${pct}%`;
  if (countElem) countElem.textContent = `${completedCount} of ${totalSkills} mastered`;
  if (fillElem) fillElem.style.width = `${pct}%`;
}

function handleSkillToggle(careerId, skillName) {
  const newState = Storage.toggleSkill(careerId, skillName);
  renderSkillTracker(careerId);
  showToast(newState ? `Mastered: ${skillName}!` : `Marked as pending: ${skillName}`, newState ? "success" : "info");
}

// ===================================================================
// 11. STUDENT DASHBOARD CONTROLLER (dashboard.html)
// ===================================================================
function initDashboardPage() {
  const container = document.getElementById("dashboard-container");
  if (!container) return;

  const profile = Storage.getProfile();
  const recs = Storage.getRecommendations();
  const selectedCareerId = Storage.getSelectedCareer();
  const activeCareer = CAREER_DATABASE[selectedCareerId] || CAREER_DATABASE["software-developer"];

  // Populate User Info
  const nameElem = document.getElementById("dash-user-name");
  const levelElem = document.getElementById("dash-user-level");
  const goalElem = document.getElementById("dash-user-goal");
  const careerBadgeElem = document.getElementById("dash-career-badge");

  if (nameElem) nameElem.textContent = profile ? profile.name : "Guest Student";
  if (levelElem) {
    levelElem.textContent = profile ? `${profile.educationLevel} • ${profile.branch}` : "Profile not completed yet";
  }
  if (goalElem) {
    goalElem.textContent = profile && profile.careerGoal ? `"${profile.careerGoal}"` : "Set your career goal in the profile";
  }
  if (careerBadgeElem) {
    careerBadgeElem.textContent = `${activeCareer.icon} Target: ${activeCareer.name}`;
  }

  // Calculate Match Score for selected career
  let matchScore = 85;
  if (recs && recs.length > 0) {
    const found = recs.find(r => r.id === selectedCareerId);
    if (found) matchScore = found.matchPercentage;
  }
  const matchElem = document.getElementById("dash-match-score");
  if (matchElem) matchElem.textContent = `${matchScore}%`;

  // Skill Progress for active career
  const progress = Storage.getSkillProgress(selectedCareerId);
  const totalSkills = activeCareer.skills.length;
  let completedSkills = [];
  let pendingSkills = [];

  activeCareer.skills.forEach(skill => {
    if (progress[skill.name]) {
      completedSkills.push(skill.name);
    } else {
      pendingSkills.push(skill.name);
    }
  });

  const pct = Math.round((completedSkills.length / totalSkills) * 100);

  const progPctElem = document.getElementById("dash-progress-pct");
  const progCountElem = document.getElementById("dash-progress-count");
  const progFillElem = document.getElementById("dash-progress-fill");

  if (progPctElem) progPctElem.textContent = `${pct}%`;
  if (progCountElem) progCountElem.textContent = `${completedSkills.length} of ${totalSkills} completed`;
  if (progFillElem) progFillElem.style.width = `${pct}%`;

  // Mastered Skills Chips
  const masteredContainer = document.getElementById("dash-mastered-skills");
  if (masteredContainer) {
    if (completedSkills.length > 0) {
      masteredContainer.innerHTML = completedSkills.map(s => `
        <span class="chip-done">✓ ${s}</span>
      `).join("");
    } else {
      masteredContainer.innerHTML = `<span style="font-size: 0.85rem; color: var(--text-muted);">No skills marked as completed yet. Visit the <a href="roadmap.html">Roadmap</a> to track your skills.</span>`;
    }
  }

  // Recommended Next Steps
  const nextStepsContainer = document.getElementById("dash-next-steps");
  if (nextStepsContainer) {
    nextStepsContainer.innerHTML = activeCareer.nextSteps.map((step, i) => `
      <div class="next-step-item">
        <div class="next-step-icon">${i + 1}</div>
        <div class="next-step-content">
          <h4>Actionable Milestone #${i + 1}</h4>
          <p>${step}</p>
        </div>
      </div>
    `).join("");
  }

  // Reset button trigger
  const resetBtn = document.getElementById("dash-reset-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      openResetModal();
    });
  }
}

// ===================================================================
// 12. RESET MODAL CONTROLLER
// ===================================================================
function openResetModal() {
  let modal = document.getElementById("reset-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "reset-modal";
    modal.className = "modal-backdrop";
    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-icon">⚠️</div>
        <h3 class="modal-title">Reset Profile & Progress?</h3>
        <p class="modal-text">This will erase your saved profile details, assessment scores, and marked skill checklist from LocalStorage. You can start afresh anytime.</p>
        <div class="modal-actions">
          <button class="btn btn-secondary" onclick="closeResetModal()">Cancel</button>
          <button class="btn btn-danger-outline" onclick="confirmResetData()">Confirm Reset</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  setTimeout(() => modal.classList.add("open"), 10);
}

function closeResetModal() {
  const modal = document.getElementById("reset-modal");
  if (modal) {
    modal.classList.remove("open");
  }
}

function confirmResetData() {
  Storage.resetAllData();
  closeResetModal();
  showToast("All profile and career data successfully reset!", "success");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

// ===================================================================
// 13. GLOBAL APP BOOTSTRAPPER & SCOPE EXPORTS
// ===================================================================
// Attach core functions to window to guarantee accessibility across all environments
if (typeof window !== "undefined") {
  window.selectAnswer = selectAnswer;
  window.handleSkillToggle = handleSkillToggle;
  window.selectAndGoToRoadmap = selectAndGoToRoadmap;
  window.openResetModal = openResetModal;
  window.closeResetModal = closeResetModal;
  window.confirmResetData = confirmResetData;
  window.showToast = showToast;
  window.Storage = Storage;
  window.CAREER_DATABASE = CAREER_DATABASE;
}

function bootApplication() {
  checkAndImportDirectShareLink();
  try {
    initNavbar();

    // Modern, refined UI micro-interactions and stream selector chips
    initModernUIEffects();
    initBranchChips();

    // DOM-based detection (100% resilient across all URLs, file://, localhost, and clean rewrite routes)
    if (document.getElementById("profile-form")) {
      initProfilePage();
    }
    if (document.getElementById("quiz-container")) {
      initAssessmentPage();
    }
    if (document.getElementById("recommendations-container")) {
      initRecommendationsPage();
    }
    if (document.getElementById("roadmap-container")) {
      initRoadmapPage();
    }
    if (document.getElementById("dashboard-container")) {
      initDashboardPage();
    }

    // Pathname fallback check
    const path = (window.location.pathname || "").toLowerCase();
    if (path.includes("profile") && !document.getElementById("profile-form")) {
      initProfilePage();
    } else if (path.includes("assessment") && !document.getElementById("active-question-card")) {
      initAssessmentPage();
    } else if (path.includes("recommend") && !document.getElementById("top-recommendation-container")) {
      initRecommendationsPage();
    } else if (path.includes("roadmap") && !document.getElementById("education-timeline")) {
      initRoadmapPage();
    } else if (path.includes("dashboard") && !document.getElementById("dash-user-name")) {
      initDashboardPage();
    }
  } catch (err) {
    console.error("Application boot error:", err);
  }
}

// Execute immediately if DOM is already parsed, or register event listener
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootApplication);
  } else {
    bootApplication();
  }
}


// ===================================================================
// 14. DEMO PERSONAS ENGINE (Instant 1-Click Profile Presets)
// ===================================================================
const DEMO_PERSONAS = {
  ai: {
    name: "Anya Sharma",
    educationLevel: "Undergraduate (B.Tech / B.E)",
    branch: "Computer Science & AI",
    academicScore: "91%",
    favoriteSubjects: ["Computer Science", "Mathematics", "Statistics"],
    skills: ["Python", "SQL", "Git & GitHub"],
    interests: ["Artificial Intelligence & ML", "Data Analytics & Trends"],
    preferredField: "Artificial Intelligence",
    careerGoal: "Architect foundational neural networks and autonomous AI systems at an AI research institute."
  },
  software: {
    name: "David Chen",
    educationLevel: "Undergraduate (BCA / B.Sc Computer Science)",
    branch: "Information Technology",
    academicScore: "86%",
    favoriteSubjects: ["Computer Science", "Mathematics"],
    skills: ["Java", "C++", "SQL", "Git & GitHub", "HTML & CSS"],
    interests: ["Web & App Building"],
    preferredField: "Software Development",
    careerGoal: "Architect high-performance distributed backend architectures and resilient microservices."
  },
  design: {
    name: "Elena Rostova",
    educationLevel: "Undergraduate (B.Sc / B.Com / BBA / B.A)",
    branch: "Multimedia & Digital Arts",
    academicScore: "84%",
    favoriteSubjects: ["Graphic Design", "English & Communication"],
    skills: ["UI Design & Figma"],
    interests: ["Visual Design & Aesthetics"],
    preferredField: "UI/UX Design",
    careerGoal: "Design world-class human-centered design systems and digital interfaces used by millions worldwide."
  },
  cyber: {
    name: "Marcus Vance",
    educationLevel: "Undergraduate (B.Tech / B.E)",
    branch: "Computer Systems & Cybersecurity",
    academicScore: "85%",
    favoriteSubjects: ["Computer Science", "Physics"],
    skills: ["Linux & Networking", "Python"],
    interests: ["Cybersecurity & Ethical Hacking", "Cloud Infrastructure"],
    preferredField: "Cybersecurity",
    careerGoal: "Lead a global Threat Intelligence & Incident Response team safeguarding critical enterprise infrastructure."
  },
  business: {
    name: "Rohan Patel",
    educationLevel: "Undergraduate (B.Sc / B.Com / BBA / B.A)",
    branch: "Commerce & Business Administration",
    academicScore: "87%",
    favoriteSubjects: ["Business Studies", "Economics", "English & Communication"],
    skills: ["Public Speaking & Leadership", "Data Analysis"],
    interests: ["Startups & Venture Finance"],
    preferredField: "Business & Entrepreneurship",
    careerGoal: "Found and scale a high-impact technology startup solving sustainable supply-chain challenges."
  },
  robotics: {
    name: "Siddharth Verma",
    educationLevel: "Undergraduate (B.Tech / B.E)",
    branch: "Mechatronics & Robotics Engineering",
    academicScore: "88%",
    favoriteSubjects: ["Electronics", "Mathematics", "Computer Science"],
    skills: ["Robotics & Arduino", "C++", "Python", "Linux & Networking"],
    interests: ["Robotics & Hardware", "Artificial Intelligence & ML"],
    preferredField: "Electronics & Hardware Engineering",
    careerGoal: "Design autonomous robotic systems and intelligent edge hardware controllers."
  },
  biotech: {
    name: "Dr. Priya Nair",
    educationLevel: "Postgraduate (M.Tech / MCA / M.Sc / MBA)",
    branch: "Biotechnology & Bioinformatics",
    academicScore: "89%",
    favoriteSubjects: ["Statistics", "Computer Science", "Mathematics", "Biology"],
    skills: ["Python", "Data Analysis", "SQL", "Bioinformatics & Lab Tools"],
    interests: ["Data Analytics & Trends", "Artificial Intelligence & ML"],
    preferredField: "Data Science",
    careerGoal: "Lead computational genomics and predictive bioinformatics analytics at a premier health research institution."
  },
  fintech: {
    name: "Zainab Al-Mansoor",
    educationLevel: "Undergraduate (B.Sc / B.Com / BBA / B.A)",
    branch: "Finance & FinTech",
    academicScore: "92%",
    favoriteSubjects: ["Economics", "Statistics", "Mathematics"],
    skills: ["Data Analysis", "Python", "SQL", "Public Speaking & Leadership", "Financial Modeling"],
    interests: ["Startups & Venture Finance", "Data Analytics & Trends"],
    preferredField: "Business & Entrepreneurship",
    careerGoal: "Build next-generation algorithmic FinTech products and digital financial infrastructure."
  },
  mechanical: {
    name: "Carlos Mendez",
    educationLevel: "Undergraduate (B.Tech / B.E)",
    branch: "Mechanical & Automotive Engineering",
    academicScore: "85%",
    favoriteSubjects: ["Physics", "Mathematics", "Electronics", "Mechanical Engineering"],
    skills: ["Robotics & Arduino", "C++", "CAD & 3D Modeling"],
    interests: ["Robotics & Hardware", "Cloud Infrastructure"],
    preferredField: "Electronics & Hardware Engineering",
    careerGoal: "Pioneer smart electric vehicle architectures and connected automotive telemetry systems."
  }
};

function loadDemoPersona(personaKey) {
  const persona = DEMO_PERSONAS[personaKey];
  if (!persona) return;

  Storage.saveProfile(persona);

  // Generate synthetic high-affinity assessment answers for the chosen persona
  const sampleAnswers = {};
  for (let i = 1; i <= 16; i++) {
    if (personaKey === "ai") sampleAnswers[i] = (i % 2 === 0) ? 1 : 0;
    else if (personaKey === "design") sampleAnswers[i] = 3;
    else if (personaKey === "cyber") sampleAnswers[i] = 2;
    else if (personaKey === "business" || personaKey === "fintech") sampleAnswers[i] = 1;
    else if (personaKey === "robotics" || personaKey === "mechanical") sampleAnswers[i] = (i % 3 === 0) ? 2 : 0;
    else if (personaKey === "biotech") sampleAnswers[i] = (i % 2 === 0) ? 0 : 1;
    else sampleAnswers[i] = 0;
  }
  Storage.saveAssessment({ answers: sampleAnswers });

  const recs = calculateRecommendations(persona, sampleAnswers);
  Storage.saveRecommendations(recs);
  if (recs && recs.length > 0) {
    Storage.setSelectedCareer(recs[0].id);
  }

  showToast(`Loaded persona: ${persona.name}! Redirecting to Dashboard...`, "success");
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 900);
}

// ===================================================================
// 15. DIRECT SHAREABLE LINK & PROFILE PORTABILITY ENGINE
// ===================================================================
function generateDirectShareLink() {
  const profile = Storage.getProfile();
  const assessment = Storage.getAssessment();
  const selectedCareer = Storage.getSelectedCareer();
  const skillProgress = Storage.getSkillProgress(selectedCareer);

  const payload = {
    p: profile,
    a: assessment ? assessment.answers : null,
    c: selectedCareer,
    s: skillProgress,
    v: 1
  };

  const jsonStr = JSON.stringify(payload);
  const encoded = btoa(encodeURIComponent(jsonStr));

  const url = new URL(window.location.href);
  url.searchParams.set("share", encoded);
  return url.toString();
}

function checkAndImportDirectShareLink() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const shareParam = urlParams.get("share");
    if (!shareParam) return false;

    const jsonStr = decodeURIComponent(atob(shareParam));
    const data = JSON.parse(jsonStr);

    if (data && data.p) {
      Storage.saveProfile(data.p);
      if (data.a) {
        Storage.saveAssessment({ answers: data.a });
        const recs = calculateRecommendations(data.p, data.a);
        Storage.saveRecommendations(recs);
      }
      if (data.c) {
        Storage.setSelectedCareer(data.c);
      }
      if (data.s) {
        const allProgress = JSON.parse(Storage.getItem(Storage.KEYS.SKILL_PROGRESS) || "{}");
        allProgress[data.c] = data.s;
        Storage.setItem(Storage.KEYS.SKILL_PROGRESS, JSON.stringify(allProgress));
      }

      showToast(`Direct link loaded! Welcome, ${data.p.name || "Student"}!`, "success");
      return true;
    }
  } catch (e) {
    console.warn("Could not import direct share link", e);
  }
  return false;
}

function openShareModal() {
  let modal = document.getElementById("share-link-modal");
  const directUrl = generateDirectShareLink();

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "share-link-modal";
    modal.className = "modal-backdrop";
    modal.innerHTML = `
      <div class="modal-dialog" style="max-width: 560px;">
        <div class="modal-icon" style="color: var(--primary);">🔗</div>
        <h3 class="modal-title">Shareable Student Advisor Link</h3>
        <p class="modal-text">
          Any student or teacher can open this direct link on any browser or device to instantly view your customized recommendations, roadmap, and dashboard without logging in!
        </p>

        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem;">
          <input type="text" id="share-link-input" class="form-input" readonly style="font-size: 0.85rem; background: var(--bg-subtle);">
          <button class="btn btn-primary" onclick="copyDirectShareLink()">Copy Link</button>
        </div>

        <div style="border-top: 1px solid var(--border-color); padding-top: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary btn-sm" onclick="exportProfileJSON()">📥 Export JSON</button>
            <label class="btn btn-secondary btn-sm" style="margin: 0; cursor: pointer;">
              📤 Import JSON
              <input type="file" id="json-import-file" accept=".json" style="display: none;" onchange="importProfileJSON(this)">
            </label>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="closeShareModal()">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const input = document.getElementById("share-link-input");
  if (input) input.value = directUrl;

  setTimeout(() => modal.classList.add("open"), 10);
}

function closeShareModal() {
  const modal = document.getElementById("share-link-modal");
  if (modal) modal.classList.remove("open");
}

function copyDirectShareLink() {
  const input = document.getElementById("share-link-input");
  if (input) {
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value).then(() => {
      showToast("Direct shareable link copied to clipboard!", "success");
    }).catch(() => {
      document.execCommand("copy");
      showToast("Link copied to clipboard!", "success");
    });
  }
}

function exportProfileJSON() {
  const profile = Storage.getProfile();
  const assessment = Storage.getAssessment();
  const recs = Storage.getRecommendations();
  const selectedCareer = Storage.getSelectedCareer();
  const skillProgress = Storage.getSkillProgress(selectedCareer);

  const exportData = {
    exportedAt: new Date().toISOString(),
    profile,
    assessment,
    recommendations: recs,
    selectedCareer,
    skillProgress
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `career_advisor_${(profile && profile.name ? profile.name.replace(/\s+/g, "_").toLowerCase() : "profile")}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Profile successfully exported as JSON file!", "success");
}

function importProfileJSON(fileInput) {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.profile) Storage.saveProfile(data.profile);
      if (data.assessment) Storage.saveAssessment(data.assessment);
      if (data.recommendations) Storage.saveRecommendations(data.recommendations);
      if (data.selectedCareer) Storage.setSelectedCareer(data.selectedCareer);
      if (data.skillProgress) {
        const all = JSON.parse(Storage.getItem(Storage.KEYS.SKILL_PROGRESS) || "{}");
        all[data.selectedCareer || "software-developer"] = data.skillProgress;
        Storage.setItem(Storage.KEYS.SKILL_PROGRESS, JSON.stringify(all));
      }
      showToast("Profile imported successfully! Reloading...", "success");
      setTimeout(() => window.location.reload(), 800);
    } catch (err) {
      showToast("Invalid profile JSON file format.", "warning");
    }
  };
  reader.readAsText(file);
}

// ===================================================================
// 16. CAREER COMPARISON MATRIX ENGINE
// ===================================================================
function openComparisonModal(initialCareerA, initialCareerB) {
  let modal = document.getElementById("comparison-modal");
  const careers = Object.values(CAREER_DATABASE);
  const aId = initialCareerA || Storage.getSelectedCareer();
  const bId = initialCareerB || (aId === "software-developer" ? "ai-engineer" : "software-developer");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "comparison-modal";
    modal.className = "modal-backdrop";
    modal.innerHTML = `
      <div class="modal-dialog" style="max-width: 820px; width: 95%; max-height: 90vh; overflow-y: auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <h3 class="modal-title" style="margin: 0; display: flex; align-items: center; gap: 0.5rem;">
            <span>⚖️</span> Side-by-Side Career Comparison
          </h3>
          <button class="btn btn-secondary btn-sm" onclick="closeComparisonModal()">✕ Close</button>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.5rem;">
          <div>
            <label style="font-weight: 600; font-size: 0.85rem; margin-bottom: 0.35rem; display: block;">Career Track A:</label>
            <select id="compare-select-a" class="form-select" onchange="updateComparisonView()">
              ${careers.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-weight: 600; font-size: 0.85rem; margin-bottom: 0.35rem; display: block;">Career Track B:</label>
            <select id="compare-select-b" class="form-select" onchange="updateComparisonView()">
              ${careers.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join("")}
            </select>
          </div>
        </div>

        <div id="comparison-table-content"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const selA = document.getElementById("compare-select-a");
  const selB = document.getElementById("compare-select-b");
  if (selA) selA.value = aId;
  if (selB) selB.value = bId;

  updateComparisonView();
  setTimeout(() => modal.classList.add("open"), 10);
}

function closeComparisonModal() {
  const modal = document.getElementById("comparison-modal");
  if (modal) modal.classList.remove("open");
}

function updateComparisonView() {
  const selA = document.getElementById("compare-select-a");
  const selB = document.getElementById("compare-select-b");
  const container = document.getElementById("comparison-table-content");
  if (!selA || !selB || !container) return;

  const a = CAREER_DATABASE[selA.value];
  const b = CAREER_DATABASE[selB.value];
  if (!a || !b) return;

  container.innerHTML = `
    <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem;">
      <thead>
        <tr style="background: var(--bg-subtle); border-bottom: 2px solid var(--border-color);">
          <th style="padding: 0.75rem; text-align: left; width: 28%;">Comparison Metric</th>
          <th style="padding: 0.75rem; text-align: left; width: 36%;">${a.icon} ${a.name}</th>
          <th style="padding: 0.75rem; text-align: left; width: 36%;">${b.icon} ${b.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 0.75rem; font-weight: 600;">Category & Demand</td>
          <td style="padding: 0.75rem;">${a.category} <br><span style="color: var(--primary); font-weight: 600;">${a.demand}</span></td>
          <td style="padding: 0.75rem;">${b.category} <br><span style="color: var(--primary); font-weight: 600;">${b.demand}</span></td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border-color); background: #fafafa;">
          <td style="padding: 0.75rem; font-weight: 600;">💰 Salary Range</td>
          <td style="padding: 0.75rem; color: #059669; font-weight: 600;">${a.salaryRange || "Competitive"}</td>
          <td style="padding: 0.75rem; color: #059669; font-weight: 600;">${b.salaryRange || "Competitive"}</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 0.75rem; font-weight: 600;">🛠️ Key Skills</td>
          <td style="padding: 0.75rem;">${a.requiredSkills.slice(0, 5).join(", ")}</td>
          <td style="padding: 0.75rem;">${b.requiredSkills.slice(0, 5).join(", ")}</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border-color); background: #fafafa;">
          <td style="padding: 0.75rem; font-weight: 600;">🎓 Best Degree Fit</td>
          <td style="padding: 0.75rem;">${a.educationRoadmap[1] ? a.educationRoadmap[1].title : "Undergraduate"}</td>
          <td style="padding: 0.75rem;">${b.educationRoadmap[1] ? b.educationRoadmap[1].title : "Undergraduate"}</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 0.75rem; font-weight: 600;">🎖️ Certifications</td>
          <td style="padding: 0.75rem;">${(a.certifications || []).join(", ") || "Industry Standard"}</td>
          <td style="padding: 0.75rem;">${(b.certifications || []).join(", ") || "Industry Standard"}</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border-color); background: #fafafa;">
          <td style="padding: 0.75rem; font-weight: 600;">🏢 Top Employers</td>
          <td style="padding: 0.75rem;">${(a.topCompanies || []).join(", ") || "Global Tech"}</td>
          <td style="padding: 0.75rem;">${(b.topCompanies || []).join(", ") || "Global Tech"}</td>
        </tr>
      </tbody>
    </table>

    <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1.5rem;">
      <button class="btn btn-outline-primary btn-sm" onclick="selectAndGoToRoadmap('${a.id}')">View ${a.name} Roadmap &rarr;</button>
      <button class="btn btn-primary btn-sm" onclick="selectAndGoToRoadmap('${b.id}')">View ${b.name} Roadmap &rarr;</button>
    </div>
  `;
}

// ===================================================================
// 17. MODERN HUMAN-DESIGNED UI MOTION & STREAM SELECTOR ENGINE
// ===================================================================

/**
 * Clean, subtle scroll-triggered micro-interactions.
 * Uses native IntersectionObserver for smooth, organic element reveals.
 */
function initModernUIEffects() {
  if (typeof document === "undefined") return;

  const targets = document.querySelectorAll(
    ".step-card, .feature-card, .top-recommendation-card, .stat-box, .share-banner-card, .comparison-table-wrapper"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -30px 0px"
    });

    targets.forEach(el => {
      el.classList.add("reveal-on-scroll");
      observer.observe(el);
    });
  } else {
    targets.forEach(el => el.classList.add("is-revealed"));
  }
}

/**
 * Initializes academic stream quick-select chips in the profile builder.
 * Clicking a stream chip auto-populates the input and gives tactile feedback.
 */
function initBranchChips() {
  const chips = document.querySelectorAll(".branch-chip");
  const branchInput = document.getElementById("branch-stream");
  if (!chips.length || !branchInput) return;

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const branchVal = chip.getAttribute("data-branch") || chip.textContent.trim();
      branchInput.value = branchVal;
      branchInput.dispatchEvent(new Event("input", { bubbles: true }));
      branchInput.dispatchEvent(new Event("change", { bubbles: true }));
      showToast(`Selected stream: ${branchVal}`, "info");
    });
  });

  // Sync active chip state if student types in the text input
  branchInput.addEventListener("input", () => {
    const current = branchInput.value.toLowerCase().trim();
    chips.forEach(chip => {
      const b = (chip.getAttribute("data-branch") || "").toLowerCase();
      if (current && b.includes(current)) {
        chip.classList.add("active");
      } else {
        chip.classList.remove("active");
      }
    });
  });
}

// Backward-compatible fallback stubs (guarantees zero console warnings or breakage)
function startWebsiteLaunchAnimation() {
  const target = document.querySelector(".hero-actions") || document.querySelector("main");
  if (target) target.scrollIntoView({ behavior: "smooth" });
}

function initLaunchAnimation() {}
function skipWebsiteLaunchAnimation() {}
function toggleLaunchAudio() {}
function fireLaunchConfetti() {}

// Attach all new features to window
if (typeof window !== "undefined") {
  window.loadDemoPersona = loadDemoPersona;
  window.generateDirectShareLink = generateDirectShareLink;
  window.checkAndImportDirectShareLink = checkAndImportDirectShareLink;
  window.openShareModal = openShareModal;
  window.closeShareModal = closeShareModal;
  window.copyDirectShareLink = copyDirectShareLink;
  window.exportProfileJSON = exportProfileJSON;
  window.importProfileJSON = importProfileJSON;
  window.openComparisonModal = openComparisonModal;
  window.closeComparisonModal = closeComparisonModal;
  window.updateComparisonView = updateComparisonView;
  window.initLaunchAnimation = initLaunchAnimation;
  window.startWebsiteLaunchAnimation = startWebsiteLaunchAnimation;
  window.skipWebsiteLaunchAnimation = skipWebsiteLaunchAnimation;
  window.toggleLaunchAudio = toggleLaunchAudio;
  window.fireLaunchConfetti = fireLaunchConfetti;
}
