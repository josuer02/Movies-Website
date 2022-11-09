import { Route, Routes} from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Cartelera from "./pages/Cartelera";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Promociones from "./pages/Promociones";
import Proximamente from "./pages/Proximamente";
import { Register } from "./pages/Register";
import { Reservas } from "./pages/Reservas";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home/*" element={<Home />} />
        <Route path="cartelera/*" element={<Cartelera />} />
        <Route path="promociones/*" element={<Promociones />} />
        {/* <Route path="servicios/*" element={<Servicios />} /> */}
        <Route path="register/*" element={<Register />} />
        <Route path="proximamente/*" element={<Proximamente />} />
        <Route path="login/*" element={<Login />} />
        <Route path="reservas/*" element={<Reservas />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
