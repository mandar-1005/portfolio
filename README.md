# Mandar Menjoge's Portfolio

A modern, interactive portfolio website for Mandar Menjoge, showcasing skills, experience, and projects.  
Built with React, TypeScript, Tailwind CSS, and a suite of modern web technologies.

---

## 🚀 Features

- **Modern UI/UX**: Responsive, dark/light theme, beautiful animations, and custom branding.
- **Hero Section**: Animated terminal-style intro with dynamic typing.
- **About Section**: Animated self-introduction with typing effect.
- **Journey Timeline**: Visual timeline of education and experience, with milestone toggles.
- **Projects Gallery**: Clickable project cards with tags, notes, and links to code or live demos.
- **Skills Cloud**: Categorized, icon-based skills grid with floating animated icons.
- **Publications & Certifications**: Academic work and credentials with modern card layouts.
- **Contact Form**: EmailJS-powered contact form with animated terminal prompt.
- **Location Status**: Shows your current status (Available/Busy) with admin-only toggle, persisted in Firebase Firestore.
- **Visitor Counter**: Real-time unique visitor tracking using Firebase Firestore.
- **Command Palette**: Quick navigation and actions using the kbar library (Cmd/Ctrl + K).
- **Social Links**: Modern social media icons and links.
- **Resume**: View and download resume (not tracked in git, only deployed locally).
- **Accessibility**: Keyboard navigation, focus rings, and accessible modals.
- **No Horizontal Scroll**: Layout is locked to vertical scrolling only.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
- **State & Animations**: React hooks, custom hooks, Tailwind transitions, Headless UI modals
- **Backend/Cloud**: Firebase Firestore (visitor counter, status), Firebase Analytics
- **UI Libraries**: kbar (command palette), @headlessui/react (modals)
- **Email**: EmailJS (contact form)
- **Icons**: SimpleIcons, custom SVGs, and PNGs
- **Deployment**: Netlify, Firebase Hosting

---

## 📁 Project Structure

- `components/sections/` — Main page sections (Hero, About, Journey, Projects, Skills, etc.)
- `components/` — Shared UI components (Header, Footer, Socials, Email, FloatingIcons, etc.)
- `public/` — Static assets (images, logos, resume.pdf)
- `constants.tsx` — Data for projects, journey, skills, social links, etc.
- `firebase.ts` — Firebase config and Firestore setup
- `.env` — Local environment variables (admin password, etc.)

---

## 🔒 Security & Privacy

- **Admin-only status toggle**: Only you can change your "Available/Busy" status (password stored in `.env`, never in git).
- **Resume privacy**: `public/resume.pdf` is in `.gitignore` and not pushed to GitHub. Add it locally before deploying.
- **Sensitive keys**: All API keys and secrets are kept in `.env` and not committed.

---

## 📝 How to Run Locally

1. **Clone the repo**  
   `git clone https://github.com/mandar-1005/portfolio.git`
2. **Install dependencies**  
   `npm install`
3. **Add your `.env` file**  
   ```
   VITE_ADMIN_PASSWORD=your_password_here
   ```
4. **Add your resume** (optional, for local testing)  
   Place `resume.pdf` in the `public/` directory.
5. **Start the dev server**  
   `npm run dev`
6. **Build for production**  
   `npm run build`

---

## 🌐 Deployment

- **Netlify**: Deploy from local to include private files (like resume.pdf) using Netlify CLI:
  ```
  netlify deploy --prod
  ```
- **Firebase Hosting**:  
  ```
  npm run build
  firebase deploy
  ```

---

## 📦 Notable Libraries

- `react`, `react-dom`
- `vite`
- `tailwindcss`
- `@headlessui/react`
- `kbar`
- `firebase`
- `@emailjs/browser`

---

## 🙏 Credits

- [Mandar Menjoge](https://github.com/mandar-1005)
- Inspired by modern developer portfolio best practices

---

**Feel free to fork, customize, and use as your own portfolio!**
