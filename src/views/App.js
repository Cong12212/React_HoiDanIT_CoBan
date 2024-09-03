import logo from './logo.svg';
import './App.scss';
import '../nav/Nav.js'
import Ccomponent from '../example/Ccomponent';
import ListTodo from '../Todo/ListTodo';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../nav/Nav.js';
import Home from '../example/Home.js'
import ListUsers from '../Users/ListUsers.js';
import DetailUser from '../Users/DetailUser.js';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/about" element={<Ccomponent />} />
            <Route path="/user" element={<ListUsers />} />
            <Route path="/user/:id" element={<DetailUser />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </BrowserRouter >
  );
}

export default App;
