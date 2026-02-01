# Gym Website Template

A modern, stylish gym website built with React, TypeScript, and Express. Features smooth animations, a contact form, and a fully responsive design.

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Express.js, Node.js
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, shadcn/ui
- **Forms**: React Hook Form with Zod validation
- **Routing**: Wouter

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
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
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

## 🚀 Deploying to Vercel

### Prerequisites for Vercel Deployment

1. A [Vercel account](https://vercel.com/signup)

### Deployment Steps

#### Method 1: Deploy via Vercel CLI

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

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
