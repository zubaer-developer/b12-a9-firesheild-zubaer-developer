import React from "react";
import Banner from "../components/Banner";
import PopularGames from "../components/PopularGames";
import NewsLetter from "../components/NewsLetter";

const HomePage = () => {
  return (
    <div>
      <title>Game Hub</title>
      {/* Banner Section */}
      <Banner></Banner>

      {/* Popular game section */}
      <PopularGames></PopularGames>

      {/* NewsLetter Section */}
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default HomePage;
