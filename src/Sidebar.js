import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import bg2 from './imgs/bg2.jpg'
// import dp from './imgs/profile.png'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {
    const user = useSelector(selectUser)

  return (
    <div className='sidebar'>

        <div className="sidebar__top">

            <img src={bg2} alt="" />
            <Avatar className='sidebar__avatar' src={user.photoUrl}>
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>

        </div>

        <div className="sidebar__stats">

            <div className="sidebar__stat">

                <p>Who's viewed your profile</p>
                <p className='sidebar__statNumber'>10</p>

            </div>

            <div className="sidebar__stat">

                <p>Connections</p>
                <p className='sidebar__statNumber'>400</p>

            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Groups</p>
            <p>Events</p>
            <p>Followed Hashtags</p>
        </div>
    </div>
  )
}

export default Sidebar