import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom'

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import Login from '../Login/Login';
import { AuthContext } from '../../store/Context';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
function Header() {
  const {userName} = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span >{ userName ? "" : 'login'}</span>
          {userName ? "" : <hr />}
        </div>
        {userName && <span className='avatar'  >A</span>}
        {userName && <span className='logout' onClick={()=>{
          signOut(auth).then(()=>{
            navigate('/login')
          })
        }} >LogOut</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
