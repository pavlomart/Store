import React from "react";
import { Routes, Route } from "react-router-dom";
import { mockedCategories, mockFooterData } from "./api";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CurrentPage from "./pages/CurrentPage";

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Routes>
          {mockedCategories.map((item, index) => (
            <Route
              key={index}
              path={`/categories${item.path}`}
              element={<CurrentPage item={item} />}
            />
          ))}
          {mockFooterData.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={<CurrentPage item={item} />}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
