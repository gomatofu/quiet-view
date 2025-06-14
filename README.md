# Quiet View

> Six windows. One quiet world.

A minimalist web application that provides a peaceful way to watch live cameras from six cities around the world, accompanied by optional lo-fi music for a contemplative experience.

## ✨ Features

- **Live City Views**: Real-time camera feeds from 6 cities: Tokyo, New York, London, Paris, Sydney, and São Paulo
- **Real-time Clocks**: Local time display for each city with timezone abbreviations
- **Lo-Fi Music Toggle**: Optional ambient music for a relaxing atmosphere
- **Minimalist Design**: Clean, distraction-free interface with dark theme
- **Responsive Layout**: Works seamlessly across desktop, tablet, and mobile devices
- **Zero Distractions**: No ads, no clutter, just peaceful observation

## 🎯 Philosophy

Quiet View is designed as a digital window to the world, promoting mindfulness and global connection through simplicity. Watch the present moment unfold across different time zones and cultures, with gentle music and no distractions.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gomatofu/quiet-view.git
cd quiet-view
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

The project uses a carefully crafted design system with:

- **Color Palette**: Dark theme with zinc-based colors and teal accents
- **Typography**: Clean, readable fonts with multiple weight variations
- **Spacing**: Consistent spacing scale for visual harmony
- **Components**: Reusable UI components built with shadcn/ui

## 📱 Components

- **LiveGrid**: Main grid displaying 6 city camera feeds
- **Clock**: Real-time clock component with timezone support
- **LoFiToggle**: Music toggle with visual feedback
- **FooterPoem**: Inspirational text section

## 🌍 Supported Cities

| City | Country | Timezone |
|------|---------|----------|
| Tokyo | Japan | Asia/Tokyo (JST) |
| New York | USA | America/New_York (EST) |
| London | UK | Europe/London (GMT) |
| Paris | France | Europe/Paris (CET) |
| Sydney | Australia | Australia/Sydney (AEDT) |
| São Paulo | Brazil | America/Sao_Paulo (BRT) |

## 🚀 SEO & Performance

The project includes comprehensive SEO optimizations:

- **Structured Data**: JSON-LD markup for better search engine understanding
- **Open Graph**: Optimized social media sharing with custom OG image
- **PWA Ready**: Web app manifest for mobile installation
- **Performance**: Optimized images, compression, and caching headers
- **Accessibility**: ARIA labels, focus management, and semantic HTML
- **Analytics Ready**: Google Analytics integration (set `NEXT_PUBLIC_GA_ID`)

### Environment Variables

Create a `.env.local` file with:

```bash
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console verification (optional)
NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code
```

## 🔧 Development

### Project Structure

```
quiet-view/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and design tokens
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Main page component
├── components/         # React components
│   ├── Clock.tsx       # Time display component
│   ├── FooterPoem.tsx  # Footer text component
│   ├── LiveGrid.tsx    # Main grid component
│   ├── LoFiToggle.tsx  # Music toggle component
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions
└── public/             # Static assets
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎵 Music Attribution

Lo-fi music stream provided by [Lofi Cafe](https://lofi.cafe/). The music toggle allows users to add ambient background music to enhance the contemplative experience.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need support, please open an issue on GitHub.

---

*"Watch the present moment unfold across cities. With gentle music. No distractions. Just now."*
