import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center px-4 py-10">
      <title>Contact Us</title>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-yellow-400 mb-6"
      >
        Contact Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-gray-300 max-w-xl mb-10"
      >
        Got questions, suggestions, or just want to say hello? We’d love to hear
        from you! Fill out the form below and we’ll get back to you soon.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent successfully!");
        }}
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full bg-gray-700 text-gray-100"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full bg-gray-700 text-gray-100"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            placeholder="Write your message..."
            className="textarea textarea-bordered w-full bg-gray-700 text-gray-100"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-warning w-full text-black font-semibold"
        >
          Send Message
        </button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 text-gray-400 text-sm"
      >
        Or email us directly at{" "}
        <a
          href="mailto:support@gamehub.com"
          className="text-yellow-400 underline"
        >
          support@gamehub.com
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
