import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SideBarForm from './components/form-sidebar/SideBarForm';
//----components----
import Loader from './components/loader/Loader';
const Home = React.lazy(() => import("./components/home/Home"));



function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<Loader/>}>
            <Home/>
          </React.Suspense>}
        />
      </Routes>
      <SideBarForm/>
    </div>
  );
}

export default App;
