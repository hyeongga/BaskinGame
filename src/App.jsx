import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

function App() {
  const [point, setPoint] = useState(5);
  const [myPoint, setMyPoint] = useState(0);
  const [addPoint, setAdd] = useState();
  // useEffect(() => {
  //   setAdd([...point, point]);
  // }, [point]);

  return (
    <AppContext.Provider
      value={{ point, setPoint, myPoint, setMyPoint, addPoint, setAdd }}
    >
      <div className="bg-red-200 grid grid-rows-[50px_minmax(100px,auto)] h-screen">
        <Header />
        <div className="grid grid-cols-2 w-full ">
          <GameBoard />
          <GameResult />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
