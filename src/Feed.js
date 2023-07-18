import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import { CalendarMonth, CalendarViewDay, Image, Subscriptions } from '@mui/icons-material'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'


function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }


  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            
            <div className="feed__input">
                <Avatar src={user.photoUrl} > {user.email[0]} </Avatar>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={Image} title="Photo" color='#70B5F9' />
                <InputOption Icon={Subscriptions} title="Video" color='#E7a33e' />
                <InputOption Icon={CalendarMonth} title="Event" color='#70B5F9' />
                <InputOption Icon={CalendarViewDay} title="Write article" color='#70B5F9' />
            </div>
        </div> 

        {/* Posts */}
        <FlipMove>
            {posts.map(({ id, data: {name, description, message, photoUrl } }) => (
            <Post 
                key = {id}
                name= {name}
                description= {description}
                message = {message}
                photoUrl= {photoUrl}
            />
            ))}
        </FlipMove>
        
    </div>
  )
}

export default Feed