# One-Stop Personalized Career & Education Advisor

A modern, student-centric academic and career advisory web application designed to help learners discover suitable career pathways and customized education roadmaps based on their interests, skills, academic performance, favorite subjects, and long-term career goals.

Built with **pure HTML5, CSS3, and Vanilla JavaScript (ES6+)** with **zero external frameworks and no server-side database requirements**. All user data, assessment inputs, and skill checklist progress persist locally in the user's browser using `LocalStorage`.

---

## 📁 Project Structure

```text
one-stop-career-advisor/
├── index.html            # Landing / Home page with platform overview & career showcase
├── profile.html          # Student profile setup form with validation & field selection
├── assessment.html       # 16-question multi-domain career aptitude quiz
├── recommendations.html  # Algorithmic career matches with fit scores & rationale
├── roadmap.html          # 6-stage education roadmap & interactive skill checklist
├── dashboard.html        # Central student readiness dashboard with analytics
├── style.css             # Modern, responsive design system with animations
├── script.js             # Core logic: recommendation algorithm, storage & UI controllers
└── README.md             # Project documentation & presentation guide
```

---

## 🌟 Key Features

1. **Intelligent Student Profiling (`profile.html`):**
   - Collects student name, current education level, academic stream, percentage/CGPA, favorite subjects, existing skills, personal interests, preferred field, and ultimate career goal.
   - Built-in form validation for required fields and existing profile auto-population.
   - Includes an instant **Reset Profile** feature with confirmation modal.

2. **16-Question Multi-Domain Assessment (`assessment.html`):**
   - Evaluates situational problem-solving instincts across **8 core technical & professional domains**:
     - 💻 **Programming** (Logic, debugging, algorithmic thinking)
     - 🤖 **Artificial Intelligence** (Machine learning, automation, neural networks)
     - 🛡️ **Cybersecurity** (Defenses, vulnerability testing, risk management)
     - 📊 **Data Science** (Statistical patterns, data pipelines, predictive metrics)
     - ⚡ **Electronics & Hardware** (Circuits, microcontrollers, embedded IoT)
     - 💼 **Business & Management** (Strategy, venture finance, market growth)
     - 🎨 **Design & User Experience** (Wireframing, UX heuristics, visual aesthetics)
     - 🗣️ **Communication & Leadership** (Consensus building, stakeholder persuasion)
   - Real-time question progress counter, answered count indicator, and visual progress bar.

3. **Dynamic Multi-Factor Recommendation Algorithm (`recommendations.html`):**
   - Calculates personalized match scores (0–100%) for 9 high-growth career tracks.
   - Highlights the **#1 Ranked Career Match** in a rich showcase card.
   - Displays alternate strong matches with match percentages, required skills, and learning paths.
   - Automatically generates personalized explanations explaining *why* a career suits the student by citing their specific subjects and skills.
   - One-click button to print/save recommendations as a PDF report.

4. **Visual 6-Stage Education Roadmap (`roadmap.html`):**
   - Dynamically adapts based on the selected career pathway:
     ```text
     1. School / Intermediate (Foundation)
        ↓
     2. Undergraduate Degree (Academic Specialization)
        ↓
     3. Core Skills (Deep Technical & Algorithmic Competencies)
        ↓
     4. Hands-on Projects (Portfolio-Ready Applications)
        ↓
     5. Professional Internship (Industry Experience)
        ↓
     6. Higher Studies / Industry Placement (Long-term Mastery)
     ```
   - Allows students to switch between any of the 9 career pathways anytime.

5. **Interactive Skill Mastery Tracker (`roadmap.html` & `dashboard.html`):**
   - Lists essential skills categorized by difficulty: `Beginner`, `Intermediate`, and `Advanced`.
   - Students can check off skills as they learn them; completion percentages update in real time.
   - Saves progress persistently in `LocalStorage`.

6. **Student Readiness Dashboard (`dashboard.html`):**
   - Displays student name, target career badge, fit percentage, and personal career ambition.
   - Live skill mastery meter with completed competency chips.
   - Actionable milestone checklist guiding the student on their next immediate steps.

---

## 🎯 9 Supported Career Pathways

| Career Pathway | Primary Category | Core Technologies / Focus |
| :--- | :--- | :--- |
| **Software Developer** | Engineering & Systems | DSA, Python, Java, OOP, System Design, SQL, Git |
| **AI Engineer** | Machine Intelligence | PyTorch, TensorFlow, Linear Algebra, NLP, Computer Vision, MLOps |
| **Data Scientist** | Analytics & Prediction | Python, Statistics, SQL, Pandas, Scikit-learn, Power BI, EDA |
| **Cybersecurity Analyst** | Security & Defense | Network Security, Linux, Ethical Hacking, Wireshark, SIEM, Cryptography |
| **Web Developer** | Frontend & Full Stack | HTML5, CSS3, JavaScript, React, Node.js, REST APIs, Databases |
| **Cloud Engineer** | Infrastructure & DevOps | AWS/Azure, Docker, Kubernetes, Linux, Terraform, CI/CD Pipelines |
| **UI/UX Designer** | Design & Product | Figma, User Research, Wireframing, Prototyping, Design Systems, Usability |
| **Electronics Engineer** | Hardware & Embedded | Embedded C/C++, PCB Design, Microcontrollers (ESP32/Arduino), IoT |
| **Business & Entrepreneurship** | Strategy & Ventures | Business Modeling, Financial Forecasting, Product Strategy, Leadership |

---

## 🧠 How the Recommendation Algorithm Works

The recommendation engine in `script.js` uses a weighted heuristic scoring model that combines student background with situational aptitude. It avoids arbitrary static results and genuinely recalculates based on student input.

### Scoring Formula Breakdown:

$$\text{Final Score} = \text{Baseline Score (20)} + \text{Pillar 1 Points (Profile)} + \text{Pillar 2 Points (Assessment)}$$

#### 1. Pillar 1: Student Profile Attributes (~40% Weight)
* **Academic Stream Alignment (+10 to +28 points):** For example, Computer Science/IT students receive natural weighting in Software, AI, Cloud, and Data, while Commerce students receive strong alignment in Business/Startups.
* **Academic Score / CGPA (+8 to +10 points):** Higher academic performance awards points to heavily analytical, mathematical, and research-driven pathways (AI, Data Science, Software).
* **Favorite Subjects (+6 to +10 points per match):** Subjects like Mathematics and Statistics directly boost AI and Data Science; Physics and Electronics boost Electronics Engineering; Graphic Design boosts UI/UX.
* **Current Skills (+8 to +12 points per match):** Programming languages, design tools, or networking skills directly award points to the respective tracks.
* **Personal Interests (+8 to +14 points per match):** Explicit interests in hardware, hacking, venture building, or machine learning add significant weight.
* **Preferred Career Field (+25 points boost):** Rewards the student's stated aspiration with a direct priority boost.

#### 2. Pillar 2: 16-Question Situational Assessment (~60% Weight)
* Each question presents 4 realistic scenarios.
* When a student selects an option, predefined weights (ranging from 10 to 18 points) are added to 1 or 2 matching career tracks.
* Answers in the Programming domain boost Software & Web Development; AI questions boost AI Engineering; Cybersecurity questions boost Cybersecurity Analyst, etc.

#### 3. Pillar 3: Normalization & Explainability
* **Relative Normalization:** Raw scores are scaled relative to the highest-scoring career using the formula:
  $$\text{Match Percentage} = \min\left(98, \max\left(42, \text{round}\left(\frac{\text{Raw Score}}{\text{Max Raw Score}} \times 96\right)\right)\right)$$
* **Dynamic Rationale Generation:** The engine synthesizes a personalized explanation string (e.g., *"Strongly aligns with your background in Python & SQL, your favorite subject Mathematics, and your passion for artificial intelligence & neural nets"*).

---

## 💾 LocalStorage Client-Side Schema

All data is stored purely in the client's browser under isolated keys:

| Key | Description | Example Content |
| :--- | :--- | :--- |
| `careerAdvisor_profile` | Student demographic & academic data | `{ name: "Alex", educationLevel: "Undergraduate...", branch: "CSE", favoriteSubjects: [...], skills: [...], careerGoal: "..." }` |
| `careerAdvisor_assessment` | Recorded question answers | `{ answers: { 1: 0, 2: 1, 3: 2, ... }, completedAt: "2026-09-09T..." }` |
| `careerAdvisor_recommendations`| Ranked careers with match scores | Array of 9 career objects sorted by `matchPercentage` descending |
| `careerAdvisor_selectedCareer` | Currently active career track ID | `"software-developer"`, `"ai-engineer"`, etc. |
| `careerAdvisor_skill_progress` | Toggled skill completion states | `{ "software-developer": { "Python": true, "Git & GitHub": true } }` |

---

## 🚀 How to Run the Website Locally

Since the project uses purely standard **HTML5, CSS3, and JavaScript**, you do not need to install `npm`, `node_modules`, Python, or any web framework. You can run it directly in any modern web browser (Chrome, Edge, Firefox, Safari).

### Method 1: The 1-Click Windows Launcher (Easiest)

Simply double-click **`run.bat`** in the `one-stop-career-advisor` folder, or run:

```powershell
.\run.bat
```

* Automatically detects Node.js, starts the local web server, and opens your default browser at `http://localhost:3000`!
* If Node is not available, it automatically launches `index.html` in your browser.

### Method 2: Direct Node.js Server (`server.js`)

Run our built-in, zero-dependency server:

```powershell
node "C:\Users\raqee\one-stop-career-advisor\server.js"
```

* Zero dependencies (pure Node.js standard library).
* Auto-resolves clean URLs (e.g., `/profile`, `/assessment`, `/roadmap`).
* Automatically pops open your browser at **`http://localhost:3000`**.

### Method 3: Direct Browser Launch (`file://`)

Launch directly without any server:

```powershell
Start-Process "C:\Users\raqee\one-stop-career-advisor\index.html"
```

### Method 4: Node.js `npx serve`

```powershell
npx serve "C:\Users\raqee\one-stop-career-advisor"
```

---

## ⚡ New Features & Direct Link Portability

1. **🚀 Cinematic Website Launch Animation & Experience:**
   - Futuristic intro sequence featuring telemetry boot countdown, orbital gyroscopic rings, glowing SVG vessel with booster flame pulse, real-time readiness counter (0% &rarr; 100%), and hypersonic liftoff!
   - Integrated with an interactive HTML5 Canvas cosmic starfield with warp-speed streaks, lens flare flash, and celebratory confetti burst upon entrance.
   - Built-in Web Audio API sound synthesizer with telemetry bleeps and triumphant liftoff chime (no external audio files required, zero lag).
   - "⚡ Skip Launch" button for instantaneous access and "🚀 Launch" button in the Hero section and Navbar to replay on demand.
   - Accessible at any time via direct parameter: `http://localhost:3000/index.html?launch=true`.

2. **🔗 Universal Direct Shareable Links (`?share=...`):**
   - Students can generate a direct URL encoding their entire profile, quiz answers, and skill progress.
   - Any student, classmate, mentor, or teacher who clicks that link on ANY device or computer will immediately load the student's customized advisor state without needing a database login or server account.

2. **⚡ 1-Click Instant Demo Personas:**
   - Evaluators and students can test the full advisor pipeline in 1 second by clicking any of the pre-built student personas:
     - 🤖 **Anya Sharma** — AI & Machine Learning Enthusiast (91%)
     - 💻 **David Chen** — Full Stack & Systems Software Developer (86%)
     - 🎨 **Elena Rostova** — UI/UX Product Designer & Visual Artist (84%)
     - 🛡️ **Marcus Vance** — Cybersecurity Defense & Systems Analyst (85%)
     - 💼 **Rohan Patel** — Tech Startup Founder & Product Strategist (87%)

3. **⚖️ Interactive Career Comparison Matrix:**
   - Compare any two career pathways side-by-side (Category, Compensation/Salary Outlook, Core Technical Skills, Recommended Degree, Certifications, and Top Employers).

4. **📚 Curated Free Learning Resources & Certifications:**
   - Each career pathway features direct links to top-tier free learning platforms (Harvard CS50, DeepLearning.AI, The Odin Project, Kaggle, TryHackMe, FreeCodeCamp, Figma Academy).

5. **📥 JSON Profile Backup & Portability:**
   - Full Export to `.json` and Import from `.json` capabilities so students can backup and restore their career data anytime.

6. **🌐 Direct Links Directory (Universal Access):**
   - **Local Web Direct Link:** `http://localhost:3000`
   - **Local Network / Wi-Fi Direct Link:** `http://10.187.26.224:3000` (Open on any phone or laptop on same Wi-Fi)
   - **1-Click Public Link Script:** Double click `create-public-link.bat` to get an instant worldwide HTTPS URL!



## 🎓 College Viva & Demonstration Guide

If you are presenting this project for a college assignment, capstone presentation, or viva voce, here is an effective walkthrough to follow:

### 1. Presentation Outline:
1. **Introduction (1 min):** State the objective—bridging the gap between a student's current academic standing and high-growth industry careers by providing customized education roadmaps and skill tracking.
2. **Architecture (1 min):** Emphasize that it is a **100% client-side, zero-latency single-platform architecture** utilizing HTML5 semantic markup, modular CSS3 styling, and JavaScript LocalStorage for zero-setup portability.
3. **Live Demonstration (3 mins):**
   - Open `index.html` and highlight the clean modern UI and feature overview.
   - Go to `profile.html` and fill in sample student information (e.g., Computer Science, CGPA 8.5, Favorite subject: Mathematics, Skills: Python).
   - Advance to `assessment.html` and walk through a couple of the 16 multi-domain questions.
   - Click Submit and show `recommendations.html`. Point out that the scores are genuinely calculated and the "Why this career suits you" text explains the rationale.
   - Click "Set as My Career Goal & View Education Roadmap" to show the 6-stage roadmap on `roadmap.html`.
   - Check off 2 or 3 skills in the Interactive Skill Checklist and watch the completion percentage rise.
   - Switch to `dashboard.html` to show the persisted readiness percentage, mastered competency chips, and next steps.
   - Refresh the browser or open another tab to prove data persistence via `LocalStorage`.
   - Demonstrate the **Reset All Data** modal to show clean state management.
4. **Addressing Viva Questions:**
   - *Q: Why didn't you use React or Angular?*  
     *A: Demonstrating strong mastery of core web fundamentals (HTML5, CSS3 Grid/Flexbox, ES6+ JavaScript, DOM manipulation) provides a solid engineering foundation with zero dependency bloat.*
   - *Q: How does the recommendation system prevent biased results?*  
     *A: It uses an orthogonal multi-domain model where 16 questions assess distinct competencies, ensuring students with creative, managerial, or hardware instincts are routed to suitable tracks alongside traditional software roles.*
