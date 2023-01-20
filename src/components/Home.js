import React from "react";

function Home({ currentUser }) {
  return (
    <main>
      <h3>Welcome {currentUser || "All Dogs!"}</h3>
    </main>
  );
}

export default Home;
