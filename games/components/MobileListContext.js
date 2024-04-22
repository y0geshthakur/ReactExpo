import React, { createContext, useState } from 'react';

export const GamesListContext = createContext();

export const GamesListProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  return (
    <GamesListContext.Provider value={{ games, setGames }}>
      {children}
    </GamesListContext.Provider>
  );
};
