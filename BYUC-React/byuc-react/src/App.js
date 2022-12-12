import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './site/Home';
import Login from './site/Login';
import Perfil from './site/Perfil';
import MisProductos from './site/MisProductos';
import AddProducto from './site/AddProducto';
import Resultados from './site/Resultados';
import UnProducto from './site/UnProducto';
import Carrito from './site/Carrito';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
// import UnProducto from './site/UnProducto';


function App() {
  return (
      <Router>
      <Header></Header>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/perfil' element={<Perfil/>} />
          <Route path='/mis-productos' element={<MisProductos/>} />
          <Route path='/agregar-producto' element={<AddProducto/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/resultados' element={<Resultados/>} />
          <Route path='/producto' element={<UnProducto/>} />
          <Route path='/carrito' element={<Carrito/>} />
      </Routes>
      <Footer></Footer>
      </Router>
      
  );
  }

// function App() {
//   return (
//     <div className="App">
      
//       <Home></Home> 
      
//     </div>
//   );
// }

export default App;
