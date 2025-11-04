import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import { FaStar } from "react-icons/fa";

const GamesDetail = () => {
  const { id } = useParams();
  const gamesData = useLoaderData();
  const game = gamesData.find((p) => p.id == id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <title>{game.title}</title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-50 p-8 rounded-xl">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full h-[400px] object-contain rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{game.title}</h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold">{game.ratings}</span>
            </div>
          </div>

          <div className="space-y-4 text-gray-600">
            <p>
              <span className="font-semibold">Category:</span> {game.category}
            </p>
            <p>
              <span className="font-semibold">Download Link:</span>{" "}
              {game.downloadLink}
            </p>
            <p>
              <span className="font-semibold">Developer:</span> {game.developer}
            </p>
          </div>

          <p className="text-lg text-gray-700">{game.description}</p>

          <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Features & Benefits */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Why Choose {game.title}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-emerald-50 rounded-xl">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">
              Quality Assured
            </h3>
            <p className="text-gray-600">
              Premium materials and rigorous testing ensure long-lasting
              durability and safety.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Educational Value
            </h3>
            <p className="text-gray-600">
              Designed to promote learning, creativity, and skill development in
              children.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-xl">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">
              Customer Satisfaction
            </h3>
            <p className="text-gray-600">
              Backed by positive reviews and our commitment to customer
              happiness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesDetail;
