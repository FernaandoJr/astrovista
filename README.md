<div align="center">

![AstroVista](https://github.com/user-attachments/assets/74564f36-a574-4f84-91d0-a7c98a29a14f)

# 🌌 AstroVista

_Explore the cosmos through NASA's eyes_

[![GitHub License](https://img.shields.io/github/license/fernaandojr/astrovista?style=for-the-badge&color=blue)](https://github.com/FernaandoJr/AstroVista/blob/main/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/fernaandojr/astrovista?style=for-the-badge&color=green)](https://github.com/FernaandoJr/AstroVista/graphs/contributors)
[![Discord](https://img.shields.io/discord/1299024051510968423?style=for-the-badge&logo=discord&logoColor=ffffff&color=%235865F2&label=Discord)](https://discord.gg/kkeKKeASaW)
[![GitHub deployments](https://img.shields.io/github/deployments/fernaandojr/astrovista/production?style=for-the-badge&label=Deploy%20Status)](https://github.com/FernaandoJr/AstroVista/deployments)
[![GitHub repo size](https://img.shields.io/github/repo-size/fernaandojr/astrovista?style=for-the-badge&color=orange)](https://github.com/FernaandoJr/AstroVista)
[![GitHub Repo stars](https://img.shields.io/github/stars/fernaandojr/astrovista?style=for-the-badge&color=yellow)](https://github.com/FernaandoJr/AstroVista/stargazers)

[**🚀 Live Demo**](https://astrovista.vercel.app/) • [**📖 About**](https://astrovista.vercel.app/about) • [**💬 Discord**](https://discord.gg/kkeKKeASaW) • [**🐛 Report Bug**](https://github.com/FernaandoJr/AstroVista/issues)

</div>

---

## ✨ About AstroVista

**AstroVista** is a modern, full-stack web application that brings the wonders of space directly to your screen. Built with cutting-edge technologies, it leverages NASA's Astronomy Picture of the Day (APOD) API to deliver a comprehensive archive of astronomical imagery and scientific content dating back to 1995.

This project showcases a complete enterprise-grade architecture with automated data synchronization, advanced search capabilities, and a beautiful, responsive user interface designed for astronomy enthusiasts and space lovers worldwide.

> **Note**: This project welcomes contributions and improvements from the community. While it's no longer fully open-source, developers are encouraged to contribute, suggest features, and help make AstroVista even better!

---

## 🎯 Key Features

<div align="center">

### 🌠 **Complete NASA APOD Archive**

Access our comprehensive database containing every NASA Astronomy Picture of the Day since 1995, with advanced search capabilities and detailed scientific explanations.

### 🔍 **Advanced Search & Filtering**

Powerful search tools to explore the archive by date, media type, keywords, and more. Find specific images or discover new cosmic wonders with ease.

### 📱 **Modern Responsive Design**

Beautiful, accessible interface that works seamlessly across all devices, featuring dark/light mode support and smooth animations.

### 🤖 **Automated Data Sync**

Background services automatically fetch and store new APOD content, ensuring the archive is always up-to-date without manual intervention.

### 🔐 **User Authentication**

Secure authentication system powered by Better Auth, enabling personalized experiences and future features like favorites and collections.

### ⚡ **High Performance**

Built with modern technologies for optimal performance, featuring server-side rendering, efficient caching, and optimized database queries.

</div>

---

## 🛠️ Technology Stack

<div align="center">

### **Frontend**

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.10-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.18.1-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### **Backend**

![Hono](https://img.shields.io/badge/Hono-4.8.2-FF6600?style=for-the-badge&logo=hono&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-6.13.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### **Development & Tooling**

![Turbo](https://img.shields.io/badge/Turborepo-2.5.6-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-9.0.0-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

</div>

---

## 🏗️ Architecture

AstroVista is built as a modern monorepo using **Turborepo** for efficient development and deployment:

```
astrovista/
├── apps/
│   ├── web/          # Next.js frontend application
│   └── server/       # Hono API server with Prisma
├── packages/
│   ├── shared/       # Shared types, services, and utilities
│   ├── ui/           # Reusable UI components
│   ├── eslint-config/# Shared ESLint configurations
│   └── typescript-config/ # Shared TypeScript configurations
└── ...
```

### **Key Architectural Features:**

- 🔄 **Monorepo Structure**: Efficient code sharing and development workflow
- 🌐 **API-First Design**: RESTful API with proper rate limiting and error handling
- 🗄️ **Database Layer**: MongoDB with Prisma ORM for type-safe database operations
- ⏰ **Background Jobs**: Automated APOD fetching using node-cron
- 🔒 **Security**: Rate limiting, CORS protection, and secure authentication
- 📦 **Modular Design**: Shared packages for maximum code reusability

---

## 🚀 Quick Start

### **Prerequisites**

- **Node.js** 18+
- **pnpm** 9.0.0+
- **MongoDB** database (local or cloud)
- **NASA API Key** (optional - defaults to DEMO_KEY)

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/FernaandoJr/AstroVista.git
   cd AstroVista
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment setup**

   Create `.env.local` in the root directory:

   ```bash
   # NASA API Configuration
   NASA_API_KEY=your_nasa_api_key_here
   # Or use the default public key: DEMO_KEY

   # Database Configuration
   DATABASE_URL="your_mongodb_connection_string"

   # API Configuration
   CORS_ORIGIN="http://localhost:3000"
   ```

   Create `.env.local` in `apps/web/`:

   ```bash
   NEXT_PUBLIC_API_URL="http://localhost:3001"
   ```

4. **Database setup**

   ```bash
   # Generate Prisma client
   pnpm db:generate

   # Push database schema
   pnpm db:push
   ```

5. **Start development servers**

   ```bash
   # Start all services
   pnpm dev

   # Or start individually:
   pnpm dev:web     # Frontend (port 3000)
   pnpm dev:server  # Backend (port 3001)
   ```

6. **Access the application**
   - 🌐 **Frontend**: http://localhost:3000
   - 🔧 **API**: http://localhost:3001
   - 📊 **Database Studio**: `pnpm db:studio`

---

## 📚 API Documentation

### **Base URL**

```
Production: https://your-api-domain.com
Development: http://localhost:3001
```

### **Main Endpoints**

| Method | Endpoint        | Description               | Rate Limit |
| ------ | --------------- | ------------------------- | ---------- |
| `GET`  | `/apods`        | Get latest APOD           | -          |
| `GET`  | `/apods/all`    | Get all APODs             | 1 req/min  |
| `GET`  | `/apods/search` | Search APODs with filters | -          |
| `GET`  | `/apods/random` | Get random APOD           | -          |
| `GET`  | `/apods/:date`  | Get APOD by date          | -          |

### **Search Parameters**

- `q`: Search query string
- `mediaType`: Filter by 'image' or 'video'
- `startDate` / `endDate`: Date range filtering
- `sort`: Sort order ('asc' or 'desc')
- `page` / `perPage`: Pagination controls

---

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### **How to Contribute**

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation as needed
4. **Test your changes**
   ```bash
   pnpm build
   pnpm check-types
   ```
5. **Commit and push**
   ```bash
   git commit -m "feat: add amazing feature"
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### **Development Guidelines**

- 📝 **Code Style**: Follow the established ESLint and Prettier configurations
- 🧪 **Testing**: Ensure your changes don't break existing functionality
- 📖 **Documentation**: Update relevant documentation for new features
- 🔒 **Security**: Follow security best practices for any new code
- ♿ **Accessibility**: Maintain accessibility standards in UI components

---

## 🗺️ Roadmap

### **Upcoming Features**

- 🌟 **Personal Collections**: Save and organize favorite APODs
- 🔍 **Enhanced Search**: AI-powered content recommendations
- 🌍 **Internationalization**: Multi-language support
- 🚀 **Mars Rover Photos**: Integration with Mars Rover APIs
- 📱 **Mobile App**: React Native mobile application
- 🎨 **Advanced Filtering**: More granular search options
- 📊 **Analytics Dashboard**: Usage statistics and insights
- 🔔 **Notifications**: Daily APOD notifications

### **Technical Improvements**

- ⚡ **Performance**: Enhanced caching and CDN integration
- 🔐 **Security**: Advanced authentication features
- 📈 **Scalability**: Microservices architecture migration
- 🧪 **Testing**: Comprehensive test coverage
- 📱 **PWA**: Progressive Web App features

---

## 📊 Project Stats

<div align="center">

![GitHub language count](https://img.shields.io/github/languages/count/fernaandojr/astrovista?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/fernaandojr/astrovista?style=for-the-badge&color=blue)
![GitHub code size](https://img.shields.io/github/languages/code-size/fernaandojr/astrovista?style=for-the-badge&color=green)
![GitHub last commit](https://img.shields.io/github/last-commit/fernaandojr/astrovista?style=for-the-badge&color=red)

</div>

---

## 💬 Community & Support

<div align="center">

### **Join Our Community**

[![Discord](https://img.shields.io/badge/Discord-Join_Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/kkeKKeASaW)
[![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/FernaandoJr/AstroVista/discussions)

**Get Help & Connect**

- 💬 **Discord**: Real-time chat and community support
- 🐛 **Issues**: Bug reports and feature requests
- 💡 **Discussions**: General questions and ideas
- 📧 **Email**: For private inquiries

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

- 🚀 **NASA**: For providing the incredible APOD API
- 🌟 **Contributors**: Everyone who has contributed to this project
- 🎨 **Design Inspiration**: Modern space exploration websites
- 📚 **Open Source**: The amazing open-source community

---

<div align="center">

### **Made with ❤️ by [FernaandoJr](https://github.com/FernaandoJr)**

_Exploring the universe, one picture at a time_ 🌌

[![GitHub followers](https://img.shields.io/github/followers/fernaandojr?style=social)](https://github.com/FernaandoJr)
[![Twitter Follow](https://img.shields.io/twitter/follow/fernaandojr?style=social)](https://twitter.com/fernaandojr)

---

**⭐ If you find AstroVista helpful, please consider giving it a star!**

</div>
