import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Create from './Pages/Create';
import { AuthContext } from './store/Context';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Components/firebase/config';
import Posts from './Components/Posts/Posts';
import ItemStore from './Components/ProductDetails';
import ViewPost from './Pages/ViewPost';


function App() {
  const {userName,setUserName} = useContext(AuthContext)


 useEffect(()=>{
    onAuthStateChanged(auth,(data)=>{
      //console.log(data)//
      setUserName(data)
     
    
    
  
     
    })
  })
  return (
    <div className='app'>
        <ItemStore>
        <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/view' element={<ViewPost />} />
        </Routes>
      </Router>
      </ItemStore>
      

    </div>
  );
}

export default App;
