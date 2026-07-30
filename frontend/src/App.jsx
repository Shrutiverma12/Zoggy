import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className='min-h-10 bg-stone-300 text-stone-900'>
        <Navbar />
      </div>
      <main className='px-4 py-8 mx-auto'>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
