import { Download, Github, Linkedin } from "lucide-react";
import HeroButton from "../../lib/HeroButton";

export default function Hero() {
  return (
    <section id="home" className="mb-32 mt-8 p-20">
      <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full">
        Lahore, Pakistan
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
        Hello, I&apos;m Muhammad Haris. <br />
        MERN Stack Developer.
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-8">
        Motivated developer with a strong foundation in frontend and backend
        technologies. Experienced in building responsive web applications using
        React.js, Node.js, and Tailwind CSS. Passionate about creating
        pixel-perfect UI/UX and optimizing application performance.
      </p>
      <div className="flex flex-wrap gap-4">
        {/* the Black Button */}
        <HeroButton text="Contact Me" href="#contact" isPrimary={true} />

        <HeroButton
          text="Download CV"
          href="https://drive.google.com/file/d/19m6Yx7Q-UEdsKgvYmiv7dF1sQY5WpOxz/view?usp=sharing"
          icon={Download}
        />
        <HeroButton
          text="Github"
          href="https://github.com/httpsharis"
          icon={Github}
        />
        <HeroButton
          text="LinkedIn"
          href="https://linkedin.com/in/devharis"
          icon={Linkedin}
        />
      </div>
    </section>
  );
}
