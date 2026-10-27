# LEV GROUP — Building Maintenance & Property Management

[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![i18next](https://img.shields.io/badge/i18next-Multilingual_%26_RTL-26A69A?logo=i18next&logoColor=white)](https://www.i18next.com/)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?logo=vercel&logoColor=white)](https://lev-group.vercel.app/)

A multilingual corporate landing page for **LEV GROUP**, a real estate, building maintenance, and facility management company operating in Southern Israel (Ashdod).

🔗 **Live Demo:** [https://lev-group.vercel.app/](https://lev-group.vercel.app/)

---

## ✨ Key Features

- **Multilingual Support with Automatic RTL/LTR Switching (`i18next` & `react-i18next`)** — Instant client-side language switching persisted in `localStorage`, dynamically syncing `<html lang="..." dir="rtl|ltr">` across 4 languages:
  - 🇮🇱 **Hebrew (`he`, `RTL`)** — Default language
  - 🇬🇧 **English (`en`, `LTR`)**
  - 🇫🇷 **French (`fr`, `LTR`)**
  - 🇷🇺 **Russian (`ru`, `LTR`)**
- **Sticky Glassmorphic Header (`Header`)** — Smooth-scroll section navigation, accessible keyboard-friendly `LanguageSwitcher` (`Escape` key, ARIA listbox), and quick WhatsApp action.
- **Comprehensive 360° Facility Services Grid (`ServicesSection` & `ServiceCard`)** — 8 core services (Building Systems, Premium Cleaning, Landscaping & Gardening, Security & Monitoring, Renovation & Upgrades, Billing & Accounting, Property & Investments, Ambient Scenting) with localized descriptions and one-click service pre-selection into the inquiry form.
- **Interactive Consultation & Inquiry Form (`ContactSection`)** — Validated contact form that pre-fills from selected service cards and dispatches structured inquiries directly via WhatsApp or Email, alongside K Towers Ashdod office details, working hours, and social links.
- **SEO, Structured Data & Accessibility (`WCAG 2.1 AA` / `IS 5568`)** — Includes Open Graph / Twitter meta tags, JSON-LD `LocalBusiness` schema, UserWay Accessibility Widget integration, dedicated Accessibility Declaration (`/accessibility.html`) and Privacy Policy (`/privacy.html`), and localized Cookie Consent management (`CookiesConsent`).

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **UI Library** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 6](https://vite.dev/) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Internationalization (i18n)** | [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/) |
| **Styling & Icons** | Scoped CSS Modules (`*.module.css`), [React Icons](https://react-icons.github.io/react-icons/), Google Fonts (`Manrope`, `Assistant`) |
| **Code Quality** | [ESLint 9](https://eslint.org/) (Flat Config with `react-hooks` & `react-refresh`) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
LevGroup/
├── public/
│   ├── images/                      # Public static media (Ashdod hero backdrop & brand logo mask)
│   ├── accessibility.html           # Accessibility declaration page (IS 5568 / WCAG 2.1 AA)
│   ├── privacy.html                 # Privacy & cookie policy page
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── Header/                  # Sticky glassmorphic navbar with navigation & CTA
│   │   ├── LanguageSwitcher/        # Accessible language selector (HE / EN / FR / RU)
│   │   ├── HeroSection/             # Animated hero banner, KPI metrics bar & CTAs
│   │   ├── ServicesSection/         # Animated 8-card grid of property management services
│   │   ├── ServiceCard/             # Service card with icon, description & inquiry trigger
│   │   ├── ContactSection/          # Office details, socials & interactive consultation form
│   │   └── CookiesConsent.jsx       # Localized cookie consent banner with localStorage persistence
│   ├── data/
│   │   └── services.js              # 8 facility services with localized titles, descriptions & icons
│   ├── locales/                     # Translation dictionaries (he.json, en.json, fr.json, ru.json)
│   ├── App.jsx                      # Root application component & service selection state
│   ├── App.css                      # Global theme variables & base reset
│   ├── i18n.js                      # i18next setup, localStorage persistence & RTL/LTR DOM sync
│   └── main.jsx                     # React DOM entrypoint
├── index.html                       # SEO meta tags, JSON-LD LocalBusiness schema & UserWay widget
├── eslint.config.js                 # ESLint 9 flat configuration
├── vite.config.js                   # Vite configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18.x`
- **npm** `>= 9.x`

### Installation & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/ilyajavadeveloper/LevGroup.git

# 2. Navigate to the project directory
cd LevGroup

# 3. Install dependencies
npm install

# 4. Start the Vite development server
npm run dev
```

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server with Hot Module Replacement (HMR) |
| `npm run build` | Builds the optimized production bundle into `dist/` |
| `npm run lint` | Runs ESLint static analysis across all `.js` and `.jsx` files |
| `npm run preview` | Locally previews the production build |

---

## 👤 Author

**Ilya** — [@ilyajavadeveloper](https://github.com/ilyajavadeveloper)
