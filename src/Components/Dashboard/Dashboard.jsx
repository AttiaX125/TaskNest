import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (

        <div className="col-md-9 prim">
          <h1 className='fw-bold'>Dashboard</h1>
          <div className="top">
            <div className="container">
               <div className="row">  
              <div className="col-md-4">
                <div className="row bg-white ms-3 rounded-2 p-2">
                  <div className="col-md-4 d-flex align-items-center ">
                    <i className='fa-regular fa-calendar-check h1 p-2 rounded-1 text-white bg-info'></i>
                  </div>
                  <div className="col-md-8">
                    <h1>10</h1>
                    <h5>Total Tasks</h5>
                  </div>
                </div>
                </div>   
              <div className="col-md-4">
                <div className="row bg-white ms-3 rounded-2 p-3">
                  <div className="col-md-4 d-flex align-items-center ">
                    <i className='fa-solid fa-check  h1 p-2 rounded-1 text-white comTasks'></i>
                  </div>
                  <div className="col-md-8">
                    <h1>10</h1>
                    <h5>Completed Tasks</h5>
                  </div>
                </div>
                </div>   
              <div className="col-md-4">
                <div className="row bg-white ms-3 me-3 rounded-2 p-3">
                  <div className="col-md-4 d-flex align-items-center">
                    <i className="fa-solid fa-hourglass-end h1 p-2 rounded-1 text-white pendingBox "></i>
                  </div>
                  <div className="col-md-8">
                    <h1>10</h1>
                    <h5>Pending Tasks</h5>
                  </div>
                </div>
                </div>      
            </div>
            </div>
          </div>
          <div className="bodyTasks">
            <h3>Tasks</h3>
          </div>
        </div>
  );
}
