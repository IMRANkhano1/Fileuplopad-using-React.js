
import './App.css';
import Fileupload from './components/Fileupload';
import{BrowserRouter,Routes,Route}from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Fileupload/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
