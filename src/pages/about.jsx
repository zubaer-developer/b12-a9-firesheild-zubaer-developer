import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-yellow-400 mb-4"
      >
        About GameHub
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-2xl text-center leading-relaxed text-lg text-gray-300"
      >
        Welcome to{" "}
        <span className="text-yellow-400 font-semibold">GameHub</span> — your
        go-to online game library for discovering the most exciting indie games!
        Our goal is to support passionate developers and connect them with
        enthusiastic players.
        <br />
        <br />
        Explore new worlds, find your next favorite game, and be part of a
        community that celebrates creativity in gaming.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8"
      >
        <button className="btn btn-warning text-black font-semibold">
          Explore Games
        </button>
      </motion.div>
    </div>
  );
};

export default About;
