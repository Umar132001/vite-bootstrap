import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Bar from "./components/nevigationBar.jsx";
import MainContent from "./components/mainContent.jsx";
import Footer from "./components/footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Bar />
    <MainContent />
    <Footer />
  </StrictMode>
);
