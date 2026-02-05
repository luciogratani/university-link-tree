# 🔗 LinkTree Profile

Mobile-first profile page built with Next.js, React, TypeScript, and Radix UI.

## ✨ Features

- 📱 Mobile-first responsive design
- 🎨 Dark/Light mode toggle
- 🔗 Social links (Instagram, Facebook, Custom)
- 🗺️ Google Maps integration
- 📞 Direct contact buttons (Phone, WhatsApp)
- ⚡ Smooth animations and transitions
- 📊 Vercel Analytics ready

## 🛠️ Tech Stack

- **Framework:** Next.js 14+
- **Language:** TypeScript
- **UI Components:** Radix UI
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Theme:** next-themes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/tuo-username/linktree-profile.git

# Navigate to the project
cd linktree-profile

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Configuration

Edit the profile data in `app/page.tsx`:
```typescript
const PROFILE = {
  hours: "your business hours",
}

const LINKS = [
  { name: "Instagram", url: "https://...", icon: Instagram },
  // Add more links...
]

const LOCATION = {
  address: "Your address",
  lat: 40.716080737244596,
  lng: 8.564947312850702,
}

const CONTACTS = {
  phone: "+39 ...",
  whatsapp: "+39 ...",
}
```

## 📊 Analytics Setup

Add Vercel Analytics:
```bash
npm i @vercel/analytics
```

Already integrated in the code!

## 🚢 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tuo-username/linktree-profile)

Or manually:

1. Push to GitHub
2. Import on [Vercel](https://vercel.com/new)
3. Deploy!

## 📄 License

MIT License - feel free to use this project!

## 🙏 Acknowledgments

Built with [v0.dev](https://v0.dev) and Claude.ai