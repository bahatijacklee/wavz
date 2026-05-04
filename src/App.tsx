import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard/Dashboard";
import ArtistProfile from "./components/artist/ArtistProfile";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/artist/:slug" element={<ArtistProfile />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
