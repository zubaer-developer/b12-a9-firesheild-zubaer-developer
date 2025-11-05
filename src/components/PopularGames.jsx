import { NavLink, useLoaderData } from "react-router";

const PopularGames = () => {
  const gamesData = useLoaderData();

  return (
    <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-center mb-8">
        <h1 className="text-pink-500 text-5xl font-medium bg-pink-50 px-4 py-1 rounded-lg inline-block mb-4">
          🔥 Popular Games
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {gamesData.slice(0, 8).map((game) => (
          <div key={game.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-600">Rating: ⭐ {game.ratings}</p>
              <p className="text-sm text-gray-600">
                Stock: {game.availableQuantity}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-emerald-600">{game.category}</p>
              <p className="text-sm text-gray-600">Dev: {game.developer}</p>
            </div>
            <NavLink
              to={`/gamesDetail/${game.id}`}
              className="w-full h-10 flex justify-center items-center font-bold mt-4 bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              View More
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
