import { useLoaderData, NavLink } from "react-router";

const AllGames = () => {
  const gamesData = useLoaderData();

  // Sort all games by rating (high → low)
  const sortedGames = [...gamesData].sort((a, b) => b.ratings - a.ratings);

  return (
    <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 py-16">
      <title>All Games</title>

      <div className="flex justify-center mb-8">
        <h1 className="text-4xl font-bold text-pink-500 bg-pink-50 px-4 py-1 rounded-lg inline-block">
          All Popular Games
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedGames.map((game) => (
          <div key={game.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              Rating: ⭐ {game.ratings}
            </p>
            <p className="text-emerald-600 mb-2">{game.category}</p>
            <p className="text-sm text-gray-600 mb-4">Dev: {game.developer}</p>
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

export default AllGames;
