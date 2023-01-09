import React from "react";
import { Routes, Route } from "react-router-dom";
import { mockedCategories, mockFooterData } from "./api";
import CurrentPage from "./pages/CurrentPage";

function App() {
  return (
    <Routes>
      {mockedCategories.map((item, index) => (
        <Route
          key={index}
          path={`/categories${item.path}`}
          element={<CurrentPage item={item} />}
        />
      ))}
      {mockFooterData.map((item, index) => {
        return (
          <>
            <Route
              key={index}
              path={item.path}
              element={<CurrentPage item={item} />}
            />
          </>
        );
      })}
    </Routes>
  );
}

export default App;
