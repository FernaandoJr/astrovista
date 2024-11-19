
![astrovista-banner](https://github.com/user-attachments/assets/ad5f5d61-066a-45e4-a13d-bdbe17045da0)

[**AstroVista**](https://astrovista.vercel.app/about) is a modern, open-source web app that brings you the wonders of the cosmos! Using NASA's Astronomy Picture of the Day (APOD) API, AstroVista fetches and displays breathtaking astronomical images daily, accompanied by detailed descriptions. Whether you're an amateur stargazer or a seasoned astronomer, this app lets you explore the universe one picture at a time.

---

## ✨ Features

- 🌠 **Daily Astronomy Pictures**: Fetches the latest astronomy images from NASA's APOD API.
- 🛰 **NASA API Integration**: Seamlessly pulls data directly from NASA's resources.
- 🖼 **Beautiful UI**: Crafted with modern design principles to give users a smooth and aesthetic experience.
- 🎨 **Dark Mode**: Automatically switches to dark mode for stargazing-friendly viewing.
- 💡 **Interactive Descriptions**: Learn more about each picture with informative and engaging details.

---

## 🚀 Technologies Used

AstroVista is built using cutting-edge technologies to ensure both performance and developer productivity:

<div align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,tailwind,typescript,react,mongodb">
  <br/>
  <br/>
</div>

- **Next.js**: A powerful React framework for server-side rendering, dynamic routing, and API handling.
- **Tailwind CSS**: For styling with a utility-first CSS approach, ensuring a sleek and responsive design.
- **TypeScript**: Adds static type-checking to JavaScript for improved developer experience and code reliability.
- **React**: The core UI library that powers the interactive components of the app.
- **[shadcn](https://ui.shadcn.com)**: A collection of beautifully designed and accessible UI components, enabling a faster UI development process.
- **[Acetertinity](https://ui.aceternity.com/)**: Custom UI toolset that provides unique and dynamic widgets, perfect for enhancing user engagement.

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

3. Get your NASA API key or using the default public key `DEMO_KEY` by signing up [here](https://api.nasa.gov/), then create a `.env.local` file in the root of your project and add the API Key and the Mongodb connection:

   ```bash
   NEXT_PUBLIC_NASA_API_KEY=your_nasa_api_key
   MONGODB_APOD_URI="mongodb+srv://user:1f9xBDol8GP9ipQM@astrovistacluster.jggvb.mongodb.net/Apod?retryWrites=true&w=majority"
   ```

4. Run the building and the development script:

   ```bash
   npm run bd
   ```

5. Open your browser and navigate to `http://localhost:3000` to explore AstroVista on your machine!

---

## 📸 Usage

Once the app is running, you'll be able to:

1. View the Astronomy Picture of the Day on the home screen.
2. Click on images to learn more about their origin, the celestial bodies they depict, and more!
3. Use the dark mode toggle for late-night stargazing.
4. Enjoy the responsive design on both desktop and mobile.

---

## 🤝 Contributing

We welcome contributions from the open-source community! Here's how you can get started:

1. **Fork the repository** on GitHub.
2. **Clone your forked repo** locally:

   ```bash
   git clone https://github.com/your-username/AstroVista.git
   ```

3. **Create a new branch** for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**, ensuring your code follows best practices.
5. **Test your changes** locally to make sure everything works as expected.
6. **Commit and push** your changes to your forked repository:

   ```bash
   git commit -m "Add feature: your-feature-name"
   git push origin feature/your-feature-name
   ```

7. Submit a **pull request** to the main repository with a clear description of your changes.

---

## 🪐 Future Plans

- Implementing a user favorite system to save and categorize favorite images
- Adding a community forum for discussions about astronomy and space exploration
- Developing an educational section with resources for students and teachers
- Creating a mobile app version for on-the-go cosmic exploration
- Adding a Gallery page, where you can search by date and explore the entire APOD archive

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
