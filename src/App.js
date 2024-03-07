import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateShop from "./pages/CreateShop";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-shop" element={<CreateShop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
