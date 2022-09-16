import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import  Post  from './pages/Post';
import Header from './components/Header.jsx';
import './app.css';



function App() {
  return (
    <div className="App">

    <Header/>
    
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/post/:id' element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;
