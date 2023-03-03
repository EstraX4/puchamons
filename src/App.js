import logo from "./logo.svg";
import Catalogo from "./components/Catalogo/Catalogo";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Routes, Route, Navigate, createBrowserRouter } from "react-router-dom";
import Layaut from "./pages/Layaut";
import Catolegue from "./pages/Catolegue";
import Datos from "./pages/Datos";
import Inicio from "./pages/Inicio";
import Router from "./routes";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layaut/>}>
//         <Route path="datos" element={<Datos/>} />
//         <Route path="/" element={<Inicio/>} />
//         <Route path="catologue" element={<Catolegue/>} />
//         <Route path="*" element={<Inicio/>} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

function App() {
  

  return <>
  <Router />
  </>;
}
export default App;
