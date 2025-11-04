import React from "react";
import Banner from "../components/Banner";
import PopularGames from "../components/PopularGames";

const HomePage = () => {
  return (
    <div>
      <title>Home-Page</title>
      {/* Banner Section */}
      <Banner></Banner>

      {/* Popular game section */}
      <PopularGames></PopularGames>

      {/* NewsLetter Section */}
    </div>
  );
};

export default HomePage;
