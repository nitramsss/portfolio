import { FlipWords } from "./Flipwords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Modern", "Secure", "Fast", "Scalable"];
  return (
    <div className="absolute inset-0 z-10 pt-20 text-center rounded-3xl">
      {/* Mobile view */}
      <div className="text-center md:hidden align-middle">
        <motion.h1
          className="font-medium text-md text-2xl text-neutral-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Hey, I'm Jude
        </motion.h1>
        <motion.p
          className="font-bold text-4xl text-neutral-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          Building
        </motion.p>
        <div>
          <FlipWords words={words} className="font-black text-5xl text-white" />
        </div>
        <motion.p
          className="font-bold text-4xl text-neutral-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          Web Applications
        </motion.p>
      </div>

      {/* Desktop view */}
      <div className="z-10 hidden md:flex flex-col align-middle justify-center text-center px-10">
        <motion.h1
          className="font-medium text-5xl text-neutral-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Hey, I'm Jude
        </motion.h1>
        <motion.p
          className="font-bold text-5xl text-neutral-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          A Software Developer
        </motion.p>
        <motion.p
          className="font-bold text-5xl text-neutral-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          Dedicated to Crafting
        </motion.p>
        <div>
          <FlipWords words={words} className="font-black text-9xl text-white" />
        </div>
        <motion.p
          className="font-bold text-6xl text-neutral-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          Solutions
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
