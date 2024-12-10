import React from "react";
import Header, { Posts } from "../components";
import { posts } from "../constants";

const Home = () => {
  return (
    <main>
      <Posts shownPosts={posts} />
    </main>
  );
};

export default Home;
