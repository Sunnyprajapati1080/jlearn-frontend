import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const handleSignUp = async (e) => {
    e.preventDefault()
    const res = await fetch(`http://localhost:8000/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name:e.target.name.value,email: e.target.email.value, password: e.target.password.value })
    })
    const resjson = await res.json()
    if(resjson.token!==undefined && resjson.token!=="" && resjson.token!==null){
    localStorage.setItem("token",resjson.token)
    navigate("/Home")
  }else{
    try {
      alert(resjson.errors[0].msg)
    } catch {
      alert(resjson.error)

    }
  }
  }
  return (
<div className="mx-auto h-[92.7vh] bg-blue-500 flex justify-center items-center w-full">
  <form onSubmit={handleSignUp}>
    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">Sign Up</h1>
        <div>
          <label htmlFor="username" className="block mb-1 text-gray-600 font-semibold">Username</label>
          <input id="username" type="text" name='name' required className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
          <input id="email" type="email" name='email' required className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="Password" className="block mb-1 text-gray-600 font-semibold">Password</label>
          <input id="Password" type="Password" name='password' required className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      <button className="mt-4 w-full bg-blue-500 text-indigo-100 py-2 rounded-md text-lg tracking-wide">SignUp</button>
      <p className='my-2'>if you already have an account: <Link to="/SignIn" className='text-blue-600'>Sign In</Link></p>
    </div>
  </form>
</div>
  )
}

export default SignUp
