import React, { useState } from "react";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="home-container" style={{ display: "flex" }}>
      <div style={{ width: "100%" }} onClick={showSidebar}>
        <p>home page</p>
      </div>
    </div>
  );
};

export default Home;
