# LEV GROUP — Building Maintenance & Property Management

[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![i18next](https://img.shields.io/badge/i18next-Multilingual-26A69A?logo=i18next&logoColor=white)](https://www.i18next.com/)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?logo=vercel&logoColor=white)](https://lev-group.vercel.app/)

A multilingual corporate landing page for **LEV GROUP**, a real estate, building maintenance, and facility management company operating in Southern Israel (Ashdod).

🔗 **Live Demo:** [https://lev-group.vercel.app/](https://lev-group.vercel.app/)

---

## ✨ Key Features

- **Multilingual Support (`i18next` & `react-i18next`)** — Instant client-side language switching across 4 languages:
  - 🇮🇱 **Hebrew (`he`)** — Default language
  - 🇬🇧 **English (`en`)**
  - 🇫🇷 **French (`fr`)**
  - 🇷🇺 **Russian (`ru`)**
- **Smooth Scroll & Entrance Animations (`framer-motion`)** — Animated hero entrance, staggered service cards, and viewport-triggered contact reveals.
- **Comprehensive Facility Services Showcase (`ServicesSection`)** — Interactive grid covering Gardening, Security, Renovation, Cleaning, Investments, Billing, and Ambient Scenting with `react-icons`.
- **Direct WhatsApp & Social Channels (`HeroSection` & `ContactSection`)** — One-click WhatsApp contact (`+972 52-438-8967`), direct phone/email links, Google Maps location link (K Towers, Ashdod), Facebook, and Instagram.
- **SEO & Accessibility Ready** — Includes Open Graph / Twitter meta tags, JSON-LD `LocalBusiness` structured data schema, UserWay Accessibility Widget integration, a dedicated Hebrew Accessibility Declaration (`/accessibility.html`), and `localStorage`-persisted Cookie Consent management.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **UI Library** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 6](https://vite.dev/) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Internationalization (i18n)** | [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/) |
| **Styling & Icons** | Scoped CSS Modules (`*.module.css`), [React Icons](https://react-icons.github.io/react-icons/), Google Fonts (`Manrope`, `@fontsource/anton`) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
LevGroup/
├── public/
│   ├── images/                      # Public static media & backgrounds
│   ├── accessibility.html           # Accessibility declaration page (Hebrew)
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── LanguageSwitcher/        # Multi-language selector (HE / EN / FR / RU)
│   │   ├── HeroSection/             # Animated hero banner, custom SVG logo & WhatsApp CTA
│   │   ├── ServicesSection/         # Animated grid of property management services
│   │   ├── ServiceCard/             # Individual service card with icon & localized title
│   │   ├── ContactSection/          # Contact links, address, socials & accessibility link
│   │   ├── Header/                  # Header component & styles
│   │   └── CookiesConsent.jsx       # Cookie consent banner with localStorage persistence
│   ├── data/
│   │   └── services.js              # Service definitions with localized titles & icons
│   ├── locales/                     # Translation dictionaries (en.json, he.json, fr.json, ru.json)
│   ├── App.jsx                      # Root application component
│   ├── App.css                      # Global styles
│   ├── i18n.js                      # i18next initialization & language configuration
│   └── main.jsx                     # React DOM entrypoint
├── index.html                       # SEO meta tags, JSON-LD LocalBusiness schema & UserWay widget
├── eslint.config.js                 # ESLint configuration
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
| `npm run build` | Builds the production bundle into `dist/` |
| `npm run preview` | Locally previews the production build |

---

## 👤 Author

**Ilya** — [@ilyajavadeveloper](https://github.com/ilyajavadeveloper)
