import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import logo from './imgs/logo.svg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import { BusinessCenter, Message } from '@mui/icons-material';
// import dp from './imgs/profile.png'
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';




function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>

        <div className="header__left">
            <img src={logo} alt="" />

            <div className="header__search">
                <SearchIcon />
                <input placeholder='Search' type="text" />
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title = 'Home'/>
            <HeaderOption Icon={PeopleIcon} title = 'My Network' />
            <HeaderOption Icon={BusinessCenter} title = 'Jobs' />
            <HeaderOption Icon={Message} title = 'Messaging' />
            <HeaderOption Icon={PeopleIcon} title = 'Notifications' />
            <HeaderOption avatar={true} title = 'me' onClick={logoutOfApp} />


        </div>
    </div>
  )
}

export default Header