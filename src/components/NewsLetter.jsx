import { useState } from "react";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email.");
      return;
    }

    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 p-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Gamehub!</h1>
        <p className="text-lg text-gray-600">
          Stay connected with the latest gaming news, updates, and special
          offers.
        </p>
      </div>

      {/* Newsletter Section */}
      <div className="bg-base-100 shadow-xl p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Join Our Newsletter
        </h2>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-primary w-full">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
