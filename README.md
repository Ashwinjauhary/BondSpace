<div align="center">

<img src="https://img.shields.io/badge/version-1.0.0-ff69b4?style=for-the-badge&logo=github" alt="version"/>
<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
<img src="https://img.shields.io/badge/Capacitor-6-1E88E5?style=for-the-badge&logo=capacitor" alt="Capacitor"/>
<img src="https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js" alt="Node.js"/>
<img src="https://img.shields.io/badge/PostgreSQL-blue?style=for-the-badge&logo=postgresql" alt="PostgreSQL"/>
<img src="https://img.shields.io/badge/Socket.IO-realtime-010101?style=for-the-badge&logo=socket.io" alt="Socket.IO"/>
<img src="https://img.shields.io/badge/Love%20Guru-AI%20Powered-ff69b4?style=for-the-badge&logo=sparkles" alt="AI"/>

# 💖 BondSpace

### *Your Private Digital Universe for Two*

> **BondSpace** is a full-stack relationship super-app built for couples and close friends. It provides a private, end-to-end encrypted, and highly gamified space to chat, play games, share moments, plan futures, and grow together.

[**✨ Download Android APK**](https://ashwinjauhary.github.io/BondSpace-Release/docs/) · [**📖 Architecture**](#%EF%B8%8F-architecture) · [**🐛 Report Bug**](../../issues) · [**💡 Request Feature**](../../issues)

---

</div>

## 🌟 What is BondSpace?

BondSpace goes beyond traditional messaging apps, offering a **complete relationship companion ecosystem** natively for Android and Web.

- 🔒 **End-to-End Encrypted Chat** with libsodium NaCl encryption & disappearing messages
- 📍 **Real-time Mutual Location Sharing** via interactive Leaflet maps with consent controls
- 🎮 **20+ Relationship Mini-Games** powered by real-time Socket.IO to strengthen your bond
- 🌳 **Bond Tree** — a living visual timeline tracking your relationship milestones
- 🤖 **Love Guru** — your private AI relationship guide & automated date planner
- 🏆 **Gamification** — earn Love XP, level up, and unlock stickers, themes, & profile frames in the Arena Store
- 💌 **Digital Love Letters** — time-locked and encrypted emotional capsules
- 🖼️ **Shared Gallery** with Cloudinary-powered cloud storage
- 🌍 **Community Spaces** for anonymous 1-on-1 chats and group discussions (e.g., Long Distance Love)
- 📱 **Native Android App** wrapped in Capacitor 6 with **Over-The-Air (OTA) Auto-Updates**

---

## ⚡ Next-Level Features

<details>
<summary>📱 <strong>Native Android App & OTA Auto-Updates</strong></summary>

The Next.js 16 frontend is packaged into a high-performance **Android APK** using **Capacitor 6**. 

- 🔄 **Silent OTA Updates:** Built with a custom background update engine. Whenever new code is pushed to the `main` branch, a GitHub Action automatically bundles the web assets, uploads them to GitHub Releases, and the Android App silently downloads and applies the new bundle on launch without requiring an App Store manual update.
- 🦄 **Premium UI:** Designed with modern, sleek Glassmorphism elements, neon gradients, and a futuristic dark mode aesthetic.
</details>

<details>
<summary>💬 <strong>Secure & Rich Chat</strong></summary>

- 🔐 **End-to-End Encryption** using `libsodium` (NaCl crypto)
- 💨 **Disappearing Messages** with configurable TTL
- 🎤 **Voice Notes** support
- 🖼️ **Image & Video sharing** via Cloudinary CDN
- ❤️ **Emoji Reactions** & **Threaded Replies**
- 📌 **Pinned Messages** and sticker support
</details>

<details>
<summary>📍 <strong>Mutual Location Sharing</strong></summary>

- 🌍 Real-time location via **Socket.IO + Leaflet Maps**
- ✅ **Mutual consent** required — both partners must authorize tracking via an in-app prompt.
- 🏠 **"Reached Home" alerts** and battery level tracking.
</details>

<details>
<summary>🎮 <strong>20+ Love-Themed Games</strong></summary>

Includes 20 unique games designed for couples: *Truth or Dare*, *Who Knows Me Better*, *Story Builder*, *Love Bingo*, *Compatibility Test*, and 15 more. 
Real-time gameplay is handled via strict **Socket.IO rooms** and state caching in **Redis**.
</details>

<details>
<summary>🤖 <strong>Love Guru AI & Smart Planner</strong></summary>

- 🧠 **Love Guru** — AI relationship advisor for conflict resolution and emotional support.
- 📅 **AI Date Planner** — generates custom, personalized date ideas based on couple habits.
- 📈 **Relationship Health Score** — tracks Communication, Trust, Interaction, Activity, and Bond Strength.
</details>

<details>
<summary>🏆 <strong>Gamification & Love Arena Store</strong></summary>

- ⭐ **Love XP** earned from: check-ins, games, chat streaks, and activities.
- 🛒 **Love Arena Store** — spend XP to unlock:
  - Custom Sticker Packs 🎉
  - Profile Frames 🖼️
  - App Themes 🎨
</details>

<details>
<summary>🌍 <strong>Community & Anonymous Spaces</strong></summary>

- 🧑‍🤝‍🧑 **Anonymous 1-on-1 Chat** — private matching outside your couple space for advice.
- 💬 **Group communities**: Coding Couples, Long Distance Love, Marriage Planning.
</details>

---

## 🏗️ Architecture

BondSpace utilizes a modern monorepo-style setup across multiple services:

```
bondspace/
├── frontend/                   # Next.js 16 (React 19) + Capacitor 6 Mobile
│   ├── android/                # Native Android App Configuration
│   ├── src/
│   │   ├── app/                # Next.js App Router (Chat, Games, AI, Location)
│   │   ├── components/         # Reusable styling & Glassmorphism UI
│   │   └── store/              # Zustand global state (XP, User, Auth)
│   ├── next.config.ts          # Static export configuration for mobile ('output: export')
│   └── capacitor.config.ts     # Mobile packaging constraints
│
├── backend/                    # Express.js 5 API & Socket.IO Server
│   ├── src/
│   │   ├── routes/             # Authentication, Game Engine, Real-time APIs
│   │   ├── db/                 # PostgreSQL schema & queries (20+ Tables)
│   │   └── socket/             # Live Location & Game State logic
│
└── bondspace-release/          # Submodule: GH Pages Landing Website & OTA Bundles
    └── docs/                   # Premium Landing Page with Direct APK Downloads
```

---

## 🛠️ Complete Tech Stack

| Domain | Technology |
|---|---|
| **Mobile Application** | Capacitor 6 (Android native wrapper for web bundle) |
| **Frontend Framework** | Next.js 16 (App Router), React 19, TypeScript |
| **Styling & UI** | Tailwind CSS v4, Framer Motion, Glassmorphism design |
| **State Management** | Zustand |
| **Backend API** | Node.js 18+, Express.js 5 |
| **Databases** | PostgreSQL (Primary), Redis (Ephemeral Game State & Sockets) |
| **Real-time Engine** | Socket.IO (Chat, Games, Live Location) |
| **Security & Crypto** | JWT Auth, bcryptjs, libsodium-wrappers (E2E messaging) |
| **Media & Storage** | Cloudinary CDN (Images, Videos, Albums) |
| **Mapping** | Leaflet + React-Leaflet |
| **CI/CD Pipeline** | GitHub Actions (Automated Android Builds, Web Exports, OTA ZIP releases) |

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js** v18+ | **PostgreSQL** v14+ | **Redis** v7+
- A **Cloudinary** Account for media parsing.
- Access to an LLM provider for the **Love Guru AI** module.

### 1. Clone the Repository
```bash
git clone --recurse-submodules https://github.com/Ashwinjauhary/bondspace.git
cd bondspace
```

### 2. Environment Variables Setup
Create `.env` inside `backend/`:
```env
PORT=5005
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/bondspace
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_super_secret_jwt_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLIENT_URL=http://localhost:3000
```
Create `.env.local` inside `frontend/`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5005
NEXT_PUBLIC_SOCKET_URL=http://localhost:5005
```

### 3. Database Initialization & Dependency Install
```bash
# Setup the PostgreSQL schema
cd backend
psql -d bondspace -f src/db/schema.sql

# Install all dependencies (frontend & backend)
cd ..
npm run install:all
```

### 4. Run Development Servers
```bash
# Runs both frontend (3000) and backend (5005) concurrently
npm run dev
```

---

## ☁️ CI/CD & OTA Release Pipeline

BondSpace is designed for continuous delivery directly to mobile users:

1. A developer commits code to the `main` branch.
2. The GitHub Action `.github/workflows/mobile-release.yml` triggers.
3. The Next.js frontend is compiled to static HTML (`output: export`).
4. The workflow bundles the static website into `bundle.zip` and builds a fresh Android APK.
5. `bundle.zip` and `app-debug.apk` are uploaded to the GitHub Repository's `Releases` section under the tag `latest-bundle`.
6. When an Android user opens BondSpace on their phone, the `OTABootstrap.tsx` component transparently queries the GitHub release, downloads the newer ZIP file, unarchives it natively, and updates the application logic over the air.

---

<div align="center">

Made with ❤️ for every couple on Earth

**BondSpace** — *Because every love story deserves its own universe.*

</div>
