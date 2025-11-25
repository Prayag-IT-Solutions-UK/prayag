# Prayag IT Solutions - Website

A modern, responsive static website built with React, TypeScript, and Vite for Prayag IT Solutions.

## Features

- **Home Page** with:
  - Hero section with chat integration via n8n backend
  - What we build section
  - Why Prayag section
  - Our integrations
  - Our process
  - A note from the founder

- **About Us Page** with:
  - Our story
  - Vision & Mission
  - CTA button

- **Products Page** with:
  - WhatsApp AI Agent details

- **Services Page** with:
  - AI agents & automations
  - Web applications
  - Mobile app applications
  - Cloud solutions
  - Custom software build
  - CTA button

- **Contact Us Page** with:
  - Contact form
  - CTA button

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Prayag-IT-Solutions
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your n8n webhook URL:
```
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/chat
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

Preview the production build:
```bash
npm run preview
```

## Chat Integration

The chat widget in the hero section integrates with n8n backend. To set it up:

1. Create a webhook in your n8n instance
2. Configure the webhook to handle chat messages
3. Add the webhook URL to your `.env` file as `VITE_N8N_WEBHOOK_URL`

The chat widget expects the n8n webhook to:
- Accept POST requests with JSON body: `{ message: string, conversationId: string }`
- Return JSON response: `{ response: string }` or `{ message: string }`

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── home/         # Home page components
│   ├── Layout.tsx    # Main layout with navigation
│   └── ChatWidget.tsx # Chat integration component
├── pages/            # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Products.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── App.tsx           # Main app component with routing
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Customization

- Update colors in `src/index.css` (CSS variables)
- Modify content in respective page/component files
- Update contact information in `src/components/Layout.tsx` and `src/pages/Contact.tsx`

## License

Copyright © 2024 Prayag IT Solutions. All rights reserved.

