# Gym Website Template

A modern, stylish gym website built with React, TypeScript, and Express. Features smooth animations, interactive components, multiple pages with proper routing, and a fully responsive design.

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Express.js, Node.js
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, shadcn/ui
- **Forms**: React Hook Form with Zod validation
- **Routing**: Wouter (lightweight React router)

## 🏗️ Architecture

### Multi-Page Application

The website is organized as a **multi-page application** with proper routing:

#### **Pages:**

- `/` - Home page with hero, about, testimonials, schedule, gallery, contact
- `/programs` - Dedicated programs page with detailed program information
- `/pricing` - Membership plans with enrollment flow
- `/blog` - Blog listing with full article reading experience

#### **Benefits of Multi-Page Structure:**

✅ Better performance (lazy loading)  
✅ SEO friendly (individual page URLs)  
✅ Shareable links to specific sections  
✅ Clean code organization  
✅ Professional web architecture  
✅ Browser history and navigation

### Smart Navigation

The navbar intelligently switches between:

- **Scroll links** - When on home page (smooth scrolling to sections)
- **Page links** - When navigating between different pages
- **Responsive** - Mobile-friendly hamburger menu

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd gym-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Project

### Development Mode

Start the development server with hot reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5000` (or the port specified by your environment).

### Production Mode

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
gym-template/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   │   ├── ui/      # shadcn/ui components
│   │   │   ├── Navbar.tsx     # Smart navigation component
│   │   │   └── SectionHeading.tsx
│   │   ├── pages/       # Page components (routes)
│   │   │   ├── Home.tsx        # Landing page
│   │   │   ├── Programs.tsx    # Programs showcase
│   │   │   ├── Pricing.tsx     # Membership plans
│   │   │   ├── BlogPage.tsx    # Blog articles
│   │   │   └── not-found.tsx   # 404 page
│   │   ├── hooks/       # Custom React hooks
│   │   │   ├── use-contact.ts
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   └── lib/         # Utilities and helpers
│   ├── public/          # Static assets
│   └── index.html       # HTML template
├── server/              # Backend Express server
│   ├── index.ts         # Server entry point
│   └── routes.ts        # API routes
├── shared/              # Shared code between client and server
│   ├── schema.ts        # Form validation schemas
│   └── routes.ts        # API route definitions
└── script/              # Build scripts
```

## ✨ Features

### 🏠 Home Page

- **Hero Section** - Eye-catching header with CTA buttons
- **About Section** - Animated statistics counter
- **Testimonials** - Member reviews with ratings
- **Success Stories** - Before/after transformations with stats
- **Class Schedule** - Weekly timetable with all classes
- **Gallery** - Facility photos with hover effects
- **FAQ** - Collapsible frequently asked questions
- **Contact Form** - Working contact form with validation

### 💪 Programs Page

- **Program Cards** - 6 detailed fitness programs
- **Interactive Modals** - Click to view full program details
- **Program Information:**
  - Duration & schedule
  - Skill level requirements
  - Instructor credentials
  - Key benefits list
  - Pricing information
- **Enrollment CTA** - Direct enrollment buttons

### 💰 Pricing Page

- **3 Membership Tiers** - Basic, Elite, Pro
- **Feature Comparison** - Clear lists of what's included
- **Interactive Enrollment** - Full signup flow with modal
- **Enrollment Form:**
  - Personal information collection
  - Date picker for start date
  - Payment method selection
  - Form validation
- **Membership FAQs** - Common pricing questions

### 📚 Blog Page

- **Article Grid** - Categorized fitness articles
- **Full Article View** - Click to read complete articles
- **Rich Content** - Formatted text with headings, lists, images
- **Article Metadata** - Author, date, read time, category tags
- **Mock Articles:**
  - Exercise guides
  - Nutrition tips
  - Training science

### 🎨 UI/UX Features

- **Responsive Design** - Optimized for all screen sizes
- **Smooth Animations** - Framer Motion page transitions
- **Dark Theme** - Modern dark mode design with neon accents
- **Interactive Elements:**
  - Hover effects on cards
  - Animated counters
  - Modal dialogs
  - Form validation feedback
- **Free Trial Modal** - Floating CTA for trial signups
- **Live Chat Widget** - Mock chat interface (bottom right)
- **BMI Calculator** - Interactive fitness tool

## 🔄 Navigation Features

The navbar intelligently adapts based on the current page:

- **On Home Page:** Uses smooth scroll links to sections
- **On Other Pages:** Uses standard page navigation
- **Mobile Responsive:** Hamburger menu with full navigation
- **Active States:** Highlights current page/section
  ├── shared/ # Shared code between client and server
  │ ├── schema.ts # Form validation schemas
  │ └── routes.ts # API route definitions
  └── script/ # Build scripts

````

## 🚀 Deploying to Vercel

### Prerequisites for Vercel Deployment

1. A [Vercel account](https://vercel.com/signup)

### Deployment Steps

#### Method 1: Deploy via Vercel CLI

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
````

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   vercel
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

#### Method 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import project in Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect the framework settings

3. **Configure build settings**

   Vercel should auto-detect these settings, but verify:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

4. **Deploy**

   Click "Deploy" and Vercel will build and deploy your application.

### Important Vercel Configuration

Create a `vercel.json` file in the root directory to configure the deployment:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": null,
  "outputDirectory": "dist/public"
}
```

### Post-Deployment

1. **Verify deployment**
   - Visit your Vercel URL
   - Test the contact form
   - Check all page sections load correctly

2. **Monitor logs**

   ```bash
   vercel logs
   ```

3. **Set up custom domain** (optional)
   - Go to Vercel project settings
   - Navigate to "Domains"
   - Add your custom domain

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript

## 📧 Features

- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion for page transitions and scroll reveals
- **Contact Form**: Fully functional contact form with validation
- **Form Validation**: Client-side and server-side validation with Zod
- **Modern UI**: Built with Radix UI and Tailwind CSS
- **Type Safety**: Full TypeScript support across the stack

## � Troubleshooting

### Build Failures

- Clear the build cache: `rm -rf dist node_modules && npm install`
- Check Node.js version compatibility

### Vercel Deployment Issues

- Check build logs in Vercel dashboard
- Verify all dependencies are properly installed

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions, please open an issue on GitHub or contact us through the website's contact form.
