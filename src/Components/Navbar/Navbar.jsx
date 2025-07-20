import React from 'react'
import { Link } from 'react-router-dom'
import Tasks from '../Tasks/Tasks'

export default function Navbar() {
  return (
    <>
            <div className=" sidebar min-vh-100 d-flex flex-column text-white p-4">
          <Link to="/dashboard" className=" mb-4 text-white text-decoration-none d-flex align-items-center">
            <i className="fas fa-check-square me-2 h2"></i> <span className='h2'>TaskNest</span>
          </Link>

          <div className="line mb-4"></div>

          <ul className="list-unstyled ps-0">
            <li className="mb-3">
              <Link to="/dashboard" className="d-flex align-items-center text-white text-decoration-none py-2 px-3 rounded hover-bg">
                <i className="fa-solid fa-gauge-high me-3"></i>
                <span className="h5 mb-0">Dashboard</span>
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/tasks" className="d-flex align-items-center text-white text-decoration-none py-2 px-3 rounded hover-bg">
                <i className="fas fa-check-square me-3"></i>
                <span className="h5 mb-0">Tasks</span>
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/profile" className="d-flex align-items-center text-white text-decoration-none py-2 px-3 rounded hover-bg">
                <i className="fas fa-user me-3"></i>
                <span className="h5 mb-0">Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/logout" className="d-flex align-items-center text-white text-decoration-none py-2 px-3 rounded hover-bg">
                <i className="fas fa-sign-out-alt me-3"></i>
                <span className="h5 mb-0">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
    </>
  )
}
