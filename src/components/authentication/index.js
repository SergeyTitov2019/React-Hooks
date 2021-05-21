import React, {useState, useRef, useEffect} from 'react'
import {Link, NavLink} from "react-router-dom";
import useFetch from '../../hooks/use-fetch'

const Authentication = (props) => {
	const isLoging = props.match.path === '/login'
	const pageTitle = isLoging ? 'Sign in' : 'Sign up'
	const descriptionLink = isLoging ? '/register' : '/login'
	const descriptionText = isLoging ? 'Need an account' : 'Have an account?'
	
	const apiUrl = isLoging ? '/users/login' : '/user'
	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [userName, setUsername] = useState('')
	
	const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)
	
	console.log("useFetch:", response, isLoading, error)
	// console.log("data:", email, userName)
	
	
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('data:', email, password)
		
		const user = isLoging
			? {email, password}
			: {email, password, userName}
			
		doFetch({
			method: "post",
			data: {
				user: {
					email: "test1999@ddd.com",
					password: "Qwerty123",
					username:"sergei"
				}
				
				// user
			}
		})
	}
	
	
	return (
		<div className='auth-page'>
			
			<div className='container page'>
				<div className='row'>
					<div className='col-md-6 offset-md-3 col-xs-12'>
						<h1 className='text-xs-center'>{pageTitle}</h1>
						<p className='text-xs-center'>
							<Link to={descriptionLink}>{descriptionText}</Link>
						</p>
						<form onSubmit={handleSubmit}>
							{!isLoging && (
								<fieldset>
									<fieldset className='form-group'>
										<input type='text'
													 className='form-control form-control-lg'
													 placeholder='Username'
													 value={userName}
													 onChange={e => setUsername(e.target.value)}
										/>
									</fieldset>
								</fieldset>
							)}
							<fieldset>
								<fieldset className='form-group'>
									<input type='email'
												 className='form-control form-control-lg'
												 placeholder='Email'
										// ref={ emailRef }
												 value={email}
												 onChange={e => setEmail(e.target.value)}
									/>
								</fieldset>
							</fieldset>
							<fieldset>
								<fieldset className='form-group'>
									<input type='password'
												 className='form-control form-control-lg'
												 placeholder='Password'
												 value={password}
												 onChange={e => setPassword(e.target.value)}
									/>
								</fieldset>
								<button
									className='btn btn-lg btn-outline-primary pull-xs-right'
									type='submit'
									disabled={isLoading}
								>
									{pageTitle}
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Authentication;