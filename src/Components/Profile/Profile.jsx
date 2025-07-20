import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
export default function Profile() {

  return (
    <>
      <div className="prim min-vh-100">
        <div className="mx-5">
          <h1 className='fw-bold mt-3 p-2 mb-4'>Profile</h1>
          <div className="ay7aga">
            <form action="">
              <label htmlFor="pofileName">Name:</label>
              <input className='form-control p-3 mb-4' type="text" name='pofileName' id='pofileName'  disabled/>
              <label htmlFor="profileEmail">Email:</label>
              <input className='form-control p-3 mb-4'  type="text" name='profileEmail' id='profileEmail'  disabled/>
              <button className='btn btn-info w-50'>Edite Profile</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
   
}
