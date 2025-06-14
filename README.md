# ⚠️ REPOSITORY ARCHIVED ⚠️

> **IMPORTANT NOTICE:** This repository has been archived and moved to the official AstroVista organization on GitHub.
>
> **New Organization:** [https://github.com/AstroVista](https://github.com/AstroVista)
>
> Please go to the new repository for the latest version, to submit issues, or to contribute to the project.

![AstroVista](https://github.com/user-attachments/assets/74564f36-a574-4f84-91d0-a7c98a29a14f)


![GitHub License](https://img.shields.io/github/license/fernaandojr/astrovista?style=flat&link=https%3A%2F%2Fgithub.com%2FFernaandoJr%2FAstroVista%2Fblob%2Fmain%2FLICENSE&label=License)
![GitHub contributors](https://img.shields.io/github/contributors/fernaandojr/astrovista?label=Contributors)
[![Discord](https://img.shields.io/discord/1299024051510968423?style=flat&logo=discord&logoColor=ffffff&color=%235865F2&label=Discord)](https://discord.gg/kkeKKeASaW)
![GitHub deployments](https://img.shields.io/github/deployments/fernaandojr/astrovista/production?label=Deploy%20Status)
![GitHub repo size](https://img.shields.io/github/repo-size/fernaandojr/astrovista?label=Repo%20Size)
![GitHub forks](https://img.shields.io/github/forks/fernaandojr/astrovista?style=flat&label=Forks&color=%23172B4D)
![GitHub Repo stars](https://img.shields.io/github/stars/fernaandojr/astrovista?style=flat&label=Repo%20Stars&color=%23FFE200)

[**AstroVista**](https://astrovista.vercel.app/about) is a modern, open-source web app built Using NASA's Astronomy Picture of the Day (APOD) API, AstroVista fetches and displays images daily about astronomy.

---

## ✨ Features

- 🌠 **Daily Astronomy Pictures**: Fetches the latest astronomy images from NASA's APOD API.
- 🛰 **NASA API Integration**: Seamlessly pulls data directly from NASA's resources.
- 🎨 **Dark Mode**: Automatically switches to dark mode while viewing.

---

## 🚀 Technologies Used

<div align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,tailwind,typescript,react,mongodb">
  <br/>
  <br/>
</div>

---

## 🛠️ Installation

To run AstroVista locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/FernaandoJr/AstroVista.git
   cd AstroVista
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Get your NASA API key or using the default public key `DEMO_KEY` by signing up [here](https://api.nasa.gov/), then create a `.env.local` file in the root of your project and add the API Key and the MongoDB connection string:

   ```bash
   NEXT_PUBLIC_NASA_API_KEY=your_nasa_api_key
   MONGODB_APOD_URI="mongodb+srv://user:1f9xBDol8GP9ipQM@astrovistacluster.jggvb.mongodb.net/Apod?retryWrites=true&w=majority"
   NEXT_PUBLIC_BASE_URL="https://astrovista.vercel.app"
   ```

4. Run the building and the development script:

   ```bash
   npm run bd
   ```

5. Open your browser and navigate to `http://localhost:3000` to explore AstroVista locally!

---

## 🤝 Contributing

We welcome contributions from the open-source community! Here's how you can get started:

1. **Fork the repository** on GitHub.
2. **Clone your forked repo** locally:

   ```bash
   git clone https://github.com/FernaandoJr/AstroVista.git
   ```

3. **Create a new branch** for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**, ensuring your code follows best practices.
5. **Test your changes** run `npm run build` locally and make sure everything works as expected.
6. **Commit and push** your changes to your forked repository:

   ```bash
   git commit -m "Add feature: your-feature-name"
   git push origin feature/your-feature-name
   ```

7. Submit a **pull request** to the main repository with a clear description of your changes.

---

## 🪐 Future Plans

- Implementing a user favorite system to save and categorize favorite images.
- Add filters in the gallery section, allowing the user to filter by a specific date or media type.
- Internalization by changing automatically to the user current device language.
- Mars Hover Photos NASA API implementation

---

## 💬 Get in Touch

If you have any questions, feel free to reach out via [GitHub Issues](https://github.com/FernaandoJr/AstroVista/issues). We’d love to hear your thoughts or ideas for future improvements!

---

## 🌌 Join Our Official Discord Server!

🔗 [Join the AstroVista Discord Server](https://discord.gg/TDYA7StNJ6)

We look forward to seeing you there and exploring the universe together!

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

#### Made with ❤️ by FernaandoJr and the AstroVista Contributors
