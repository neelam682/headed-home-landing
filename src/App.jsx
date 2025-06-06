import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const goldGradient = "linear-gradient(90deg, #FFD700, #D4AF37, #B8860B)";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  // Scroll shadow for navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate on mount
  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  }, [controls]);

  // 3D parallax on mouse move for image container
  const [parallax, setParallax] = useState({ rotateX: 0, rotateY: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateX = ((clientY - centerY) / centerY) * 10;
    const rotateY = ((clientX - centerX) / centerX) * 10;
    setParallax({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setParallax({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05071A] via-[#0A0E2D] to-[#131A40] text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 transition-shadow duration-500 ${scrolled ? "shadow-2xl bg-[#05071A]/95 backdrop-blur-md" : "bg-transparent"
          }`}
      >
        {/* Animated SVG Logo */}
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="flex items-center space-x-3 cursor-pointer select-none"
          aria-label="headed home logo"
          role="img"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gold stroke-current"
          >
            <motion.path
              d="M4 24 L24 4 L44 24 L24 44 Z"
              stroke="#D4AF37"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
          <span className="text-3xl font-bold tracking-wide text-gold drop-shadow-lg select-none">
            headed home
          </span>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#b29727", color: "#05071A" }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-gold text-gold px-7 py-3 rounded-md font-semibold shadow-lg transition-colors duration-300"
        >
          Join Waitlist
        </motion.button>
      </nav>

      {/* Hero Section */}
      <main className="pt-28 px-8 md:px-24 flex flex-col md:flex-row items-center gap-20 max-w-7xl mx-auto">
        {/* Left Text Block */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          className="md:w-1/2 max-w-xl space-y-10 bg-black bg-opacity-30 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-gold/40"
        >
          <h1 className="text-6xl font-serif font-extrabold leading-tight tracking-tight drop-shadow-lg">
            This life is{" "}
            <span className="text-gold neon-glow">temporary</span>, <br />
            but how we live in it <br />
            <span className="text-gold neon-glow">will take us home.</span>
          </h1>
          <p className="text-gray-300 text-lg tracking-wide leading-relaxed">
            headed home is redefining Muslim-inspired fashion — made with
            faith, integrity, and unmatched quality for those who seek purpose.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-6"
            aria-label="Email subscription form"
          >
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              className="flex-grow rounded-lg px-6 py-4 bg-black bg-opacity-40 placeholder-gray-400 text-white focus:outline-none focus:ring-4 focus:ring-gold/70 transition"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, backgroundColor: "#b29727", color: "#05071A" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-black rounded-lg px-10 py-4 font-semibold shadow-lg transition-colors duration-300"
            >
              Get Early Access
            </motion.button>
          </form>
        </motion.section>

        {/* Right Hero Image with 3D parallax */}
        <motion.section
          className="md:w-1/2 max-w-xl perspective-800"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${parallax.rotateX}deg) rotateY(${parallax.rotateY}deg)`,
            transition: "transform 0.1s ease-out",
          }}
          aria-label="Person wearing modern clothing"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
            alt="Person wearing modern clothing"
            loading="lazy"
            className="rounded-3xl shadow-2xl object-cover w-full h-[480px] md:h-[580px] cursor-pointer"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.3, duration: 1 } }}
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
        </motion.section>
      </main>

      {/* Our Story Section */}
      <motion.section
        className="max-w-5xl mx-auto mt-40 px-8 text-center space-y-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-serif font-extrabold text-gold drop-shadow-xl neon-glow">
          Our Story
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
          Born from the desire to unite faith and fashion, headed home
          represents a movement of identity, purpose, and timeless style.
          Our designs honor tradition while embracing the future — built for
          those who walk their own path with dignity and conviction.
        </p>
      </motion.section>

      {/* Footer */}
      <footer className="mt-48 py-12 border-t border-gray-700 text-gray-500 text-center text-sm select-none">
        &copy; {new Date().getFullYear()} headed home — Crafted with care & faith.
      </footer>

      <style jsx>{`
        .text-gold {
          background: ${goldGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .neon-glow {
          text-shadow:
            0 0 6px #d4af37,
            0 0 12px #d4af37,
            0 0 18px #b8860b,
            0 0 24px #d4af37,
            0 0 30px #ffd700;
        }
        .perspective-800 {
          perspective: 800px;
        }
      `}</style>
    </div>
  );
}
