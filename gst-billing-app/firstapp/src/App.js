import './App.css';
// import Form from './components/Form';
// import Login from './components/Login';
// import Navbar from './components/Navbar';
// import Textarea from './components/Textarea';
import { Routes, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { reducers } from "./redux/reducers/"
import { applyMiddleware ,createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import Routers from './route/routes';


function App() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
  <>
  <Provider store={store}>
    {/* <Navbar/> */}
    <BrowserRouter>
    <Routers/>
     {/* <Routes>
        <Route path="/" element={<Form heading="SignUp"/>} />
        <Route path="login" element={<Login heading="Login"/>} />
        <Route path="textarea" element={<Textarea heading="Enter the text to analyze below"/>} />
     </Routes> */}
     </BrowserRouter>
  </Provider>
    </>

    // <>
    // <Navbar/>
    // {/* <Form name="NikitaAgarwal" city="Jaipur"/> */}
    
    // <div className='container my-3'>
    // <Form/>
    // <Textarea heading="Enter the text to analyze below"/>
    // </div>
    // <Login/>
    // </>
  );
}

export default App;
