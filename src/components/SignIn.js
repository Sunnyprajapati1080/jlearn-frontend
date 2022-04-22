import jsCookie from 'js-cookie'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    const res = await fetch(`http://localhost:8000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: e.target.email.value, password: e.target.password.value })
    })
    const resjson = await res.json()
    if (resjson.token !== undefined) {
      localStorage.setItem("token", resjson.token)
      jsCookie.set("token",resjson.token)
      navigate("/Home")
    }
    else {
      alert(resjson.error)
    }
  }
  return (
    <div className="h-[92.7vh] bg-blue-500 flex justify-center items-center w-full">
      <form onSubmit={handleLogin}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">Sign In</h1>
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
              <input id="email" type="email" name='email' className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-gray-600 font-semibold">Password</label>
              <input id="password" type="password" name='password' className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
            </div>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Sign In</button>
          <p className='my-2'>if you don't have an account: <Link to="/SignUp" className='text-blue-600'>Sign Up</Link></p>
        </div>
      </form>
    </div>
  )
}

export default SignIn
