import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [profilePic, setProfilePic] = useState('')
	const dispatch = useDispatch()

	const loginToApp = (e) => {
		e.preventDefault()

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						profileUrl: userAuth.user.photoURL,
					})
				)
			})
			.catch((error) => alert(error))
	}

	// Register
	const register = () => {
		if (!name) {
			return alert('Your full name is required for registration')
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							})
						)
					})
			})
			.catch((error) => alert(error.message))
	}

	return (
		<div className="login">
			<div className="register__card">
				<h1>Join Tapin</h1>
				<form>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Full name required if registering"
						type="text"
					/>

					<h4>Email</h4>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Email address'
						type="email"
					/>

					<h4>Password</h4>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Password'
						type="password"
					/>

					<input
						value={profilePic}
						onChange={(e) => setProfilePic(e.target.value)}
						placeholder="Profile pic url"
						type="text"
					/>

					<button type="submit" onClick={loginToApp}>
						Sign in
					</button>
				</form>
				<div className='reg'>
					<p>
                        Not a member?
                    </p>
					<div className="login__register" onClick={register}>
						Register now
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
