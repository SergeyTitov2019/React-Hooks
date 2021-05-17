import React, { useState, useRef, useEffect } from 'react'
import {Link, NavLink} from "react-router-dom";


const Authentication = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const emailRef = useRef(null)
	
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('data:',email, password)
	}
	
	useEffect(() => {
		console.log('effect was triggered')
	}, [])
	return (
		<div className='auth-page'>
			
			<div className='container page'>
				<div className='row'>
					<div className='col-md-6 offset-md-3 col-xs-12'>
						<h1 className='text-xs-center'>Sign in</h1>
						<p className='text-xs-center'>
							<Link to='register'>Need an account</Link>
						</p>
						<form
							onSubmit={ handleSubmit }
						>
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
								>
									Sign in
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