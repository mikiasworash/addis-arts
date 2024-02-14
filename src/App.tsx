import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-black">
      <Header />
      <Toaster />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
