import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Servicios from "containers/pages/Servicios";
import Nosotros from "containers/pages/Nosotros";
import Contacto from "containers/pages/Contacto";
import Casos from "containers/pages/Casos";
import Carreras from "containers/pages/Carreras";
import Blog from "containers/pages/Blog";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />} />

          <Route path="/" element={<Home />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/carreras" element={<Carreras />} />

          <Route path="/casos" element={<Casos />} />

          <Route path="/contacto" element={<Contacto />} />

          <Route path="/nosotros" element={<Nosotros />} />

          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
