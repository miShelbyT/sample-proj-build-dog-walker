import React from "react";

function Home({ currentUser }) {
  return (
    <div>
      <h3>Welcome {currentUser || "All Dogs!"}</h3>
    </div>
  );
}

export default Home;
