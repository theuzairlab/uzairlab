# The Uzair's Lab

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features beautiful animations, interactive elements, and a clean, professional design.

## 🌟 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Fully Responsive**: Works perfectly on all devices
- **Interactive Elements**: Particle animations and dynamic content
- **Dark Mode Support**: Automatic and manual theme switching
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Ready**: Built-in SEO optimization with Next.js

## 🚀 Live Demo

[Visit The Uzair's Lab](https://theuzairlab.vercel.app)

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: 
  - [Framer Motion](https://www.framer.com/motion/)
  - [React-tsParticles](https://particles.js.org/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: 
  - [Lucide React](https://lucide.dev/)
  - [React Icons](https://react-icons.github.io/react-icons/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/theuzairlab.git
   cd theuzairlab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

### Images

Add your images to the `public` directory and update the image paths in the components:

- Profile picture: `public/uzair-1.jpeg`
- Logo: Update in `components/Navbar.tsx`
- Other assets: Add to `public` directory

## 📱 Responsive Breakpoints

The site is fully responsive with the following breakpoints:

- **Mobile**: < 390px
- **Small Tablets**: < 550px
- **Tablets**: < 766px
- **Small Desktop**: < 1100px
- **Large Desktop**: < 1270px

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: {...},
  secondary: {...},
  // Add your custom colors
}
```

### Animations

Customize animations in `globals.css`:

```css
@keyframes moveText {...}
@keyframes floatImage {...}
```

## 📂 Project Structure

For detailed project structure and architecture information, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Uzair Ullah**
- Website: [theuzairlab.vercel.app](https://theuzairlab.vercel.app)
- LinkedIn: [@uzairullah](https://linkedin.com/in/uzairullah)
- GitHub: [@Uzairmalik1](https://github.com/Uzairmalik1)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- All other open-source contributors

## 📞 Contact

For any queries or collaboration opportunities:
- Email: uzairullah397@gmail.com
- LinkedIn: [Uzair Ullah](https://linkedin.com/in/uzairullah)

---

Made with ❤️ by Uzair Ullah
