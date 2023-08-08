import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <div className="container">
  <div className="row justify-content-center mt-5">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">Register</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          </form>
          <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Register