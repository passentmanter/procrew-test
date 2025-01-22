import React from "react";

import "./App.css";

import proCrewLogo from "./assets/procrew-logo.png";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  return (
    <div className="App min-h-screen h-fit">
      <header className="App-header h-[10vh] flex items-center justify-center xxs:my-1 sm:my-2 xl:my-0 ">
        <img src={proCrewLogo} alt="proCrew Logo m-auto " />
      </header>
      <Home />
    </div>
  );
};

export default App;
