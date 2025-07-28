# Pakistan Independence Day 2025 - Lucky Draw & Mystery Boxes Website

A professional, creative Independence Day-themed website for Lucky Draw tickets and Mystery Boxes with manual payment system and upload proof functionality.

## 🎯 Features

- **Hero Section**: Stunning Pakistan Independence Day themed banner with call-to-action buttons
- **Lucky Draw Prizes**: Display of attractive prizes including iPhone 15 Pro, Samsung Galaxy Watch, and ₨50,000 voucher
- **Mystery Box Offers**: Three different mystery boxes (₨500, ₨1000, ₨1500) with detailed descriptions
- **Payment Form**: Complete form with file upload for payment proof
- **Enhanced Ticket System**: Auto-generates unique ticket numbers
- **Responsive Design**: Mobile-first design that works on all devices
- **Pakistan Theme**: Green and white color scheme with patriotic elements
- **Interactive Elements**: Smooth animations, hover effects, and transitions

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom Pakistan-themed styles
- **UI Components**: shadcn/ui components
- **Icons**: Lucide React icons
- **Animations**: Framer Motion and custom CSS animations

## 📁 Project Structure

```
independence-day-website/
├── public/
├── src/
│   ├── assets/
│   │   ├── minar-e-pakistan.jpg
│   │   ├── pakistan-independence-banner.jpg
│   │   └── pakistan-flag-festive.jpg
│   ├── components/
│   │   └── ui/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── dist/ (production build)
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- pnpm package manager

### Local Development

1. **Clone or download the project**
2. **Install dependencies**:
   ```bash
   cd independence-day-website
   pnpm install
   ```
3. **Start development server**:
   ```bash
   pnpm run dev
   ```
4. **Open browser**: Navigate to `http://localhost:5173`

### Production Build

```bash
pnpm run build
```

The production files will be generated in the `dist/` folder.

## 🌐 Deployment Instructions

### Option 1: Vercel (Recommended)

#### Method A: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project directory**:
   ```bash
   cd independence-day-website
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - Project name: `independence-day-website` (or your preferred name)
   - In which directory is your code located? `./`
   - Want to override the settings? `N`

5. **Production deployment**:
   ```bash
   vercel --prod
   ```

#### Method B: Vercel Dashboard

1. **Visit**: [vercel.com](https://vercel.com)
2. **Sign up/Login** with GitHub, GitLab, or Bitbucket
3. **Import Project**:
   - Click "New Project"
   - Import from Git repository or upload the project folder
4. **Configure**:
   - Framework Preset: Vite
   - Root Directory: `./`
   - Build Command: `pnpm run build`
   - Output Directory: `dist`
5. **Deploy**: Click "Deploy"

### Option 2: Netlify

1. **Visit**: [netlify.com](https://netlify.com)
2. **Sign up/Login**
3. **Deploy**:
   - Drag and drop the `dist` folder to Netlify dashboard
   - Or connect Git repository for automatic deployments
4. **Configure**:
   - Build command: `pnpm run build`
   - Publish directory: `dist`

### Option 3: GitHub Pages

1. **Create GitHub repository**
2. **Push code to repository**
3. **Install gh-pages**:
   ```bash
   pnpm add -D gh-pages
   ```
4. **Add deploy script to package.json**:
   ```json
   {
     "scripts": {
       "deploy": "pnpm run build && gh-pages -d dist"
     }
   }
   ```
5. **Deploy**:
   ```bash
   pnpm run deploy
   ```

### Option 4: Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```
2. **Login**:
   ```bash
   firebase login
   ```
3. **Initialize**:
   ```bash
   firebase init hosting
   ```
4. **Configure**:
   - Public directory: `dist`
   - Single-page app: `Yes`
5. **Deploy**:
   ```bash
   pnpm run build
   firebase deploy
   ```

## 🔧 Customization

### Payment Information

Update the payment details in `src/App.jsx`:

```jsx
<CardDescription>
  Send payment to: <strong>EasyPaisa: YOUR-NUMBER</strong> or <strong>JazzCash: YOUR-NUMBER</strong>
</CardDescription>
```

### Contact Information

Update contact details in the Contact & Support section:

```jsx
// WhatsApp
<p className="text-green-100">+92 3XX-XXXXXXX</p>

// Email
<p className="text-green-100">support@independenceday2025.pk</p>

// Phone
<p className="text-green-100">042-XXXXXXXX</p>
```

### Prizes

Modify the prizes in the Lucky Draw Prizes section:

```jsx
<p className="text-2xl font-bold text-green-600 mb-2">iPhone 15 Pro</p>
<p className="text-gray-600">Latest model with all accessories</p>
```

### Mystery Box Contents

Update mystery box descriptions and pricing:

```jsx
<CardDescription className="text-3xl font-bold text-green-600">₨500</CardDescription>
```

## 📱 Mobile Responsiveness

The website is fully responsive and includes:

- Mobile-first design approach
- Responsive grid layouts
- Touch-friendly buttons and forms
- Optimized images for different screen sizes
- Smooth scrolling and navigation

## 🎨 Design Features

### Color Scheme
- **Primary Green**: #01411C (Pakistan flag green)
- **Secondary Green**: #0F5132
- **White**: #FFFFFF
- **Accent Colors**: Various shades of green for depth

### Animations
- Flag waving animation
- Sparkle effects on hero section
- Hover effects on cards and buttons
- Smooth transitions throughout

### Typography
- Clean, readable fonts
- Proper hierarchy with headings
- Responsive text sizing

## 🔒 Security Considerations

- Form validation on frontend
- File upload restrictions (images only)
- No sensitive data stored in frontend
- HTTPS recommended for production

## 📊 Performance

- Optimized images
- Minified CSS and JavaScript
- Lazy loading where applicable
- Fast loading times

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**: Ensure all dependencies are installed with `pnpm install`
2. **Images not loading**: Check that images are in the `src/assets/` folder
3. **Styling issues**: Verify Tailwind CSS is properly configured
4. **Form not working**: Check browser console for JavaScript errors

### Support

For technical support or customization requests, contact the development team.

## 📄 License

This project is created for Pakistan Independence Day 2025 celebrations. All rights reserved.

---

**Created with ❤️ for Pakistan Independence Day 2025**

