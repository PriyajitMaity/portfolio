import { useState } from "react";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/Theme-provider";
import HomePage from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/Not-found";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*/**" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
