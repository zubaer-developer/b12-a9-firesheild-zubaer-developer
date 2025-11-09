import { NavLink, useLoaderData } from "react-router";

const PopularGames = () => {
  const gamesData = useLoaderData();

  //  Sort games by rating (highest first)
  const sortedGames = [...gamesData].sort((a, b) => b.ratings - a.ratings);

  //  Take only top 4 for homepage
  const topGames = sortedGames.slice(0, 4);

  return (
    <div data-aos="fade-up" className="max-w-7xl mx-auto py-16">
      {/*  Section Title */}
      <div className="flex justify-center mb-8">
        <h1 className="text-pink-500 text-5xl font-medium bg-pink-50 px-4 py-1 rounded-lg inline-block mb-4">
          Popular Games
        </h1>
      </div>

      {/*  Top 4 Games */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topGames.map((game) => (
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
              <p className="text-emerald-600">{game.category}</p>
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

      {/*  All Games Button */}
      <div className="flex justify-center mt-12">
        <NavLink
          to="/allGames"
          className="bg-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors"
        >
          View All Games →
        </NavLink>
      </div>
    </div>
  );
};

export default PopularGames;
