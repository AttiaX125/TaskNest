// src/Components/BlankLayout/BlankLayout.jsx
import { Outlet } from 'react-router-dom';

export default function BlankLayout() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="auth-container text-center p-4 shadow rounded bg-white" style={{ width: '100%', maxWidth: '450px' }}>
        <div className="mb-4">
          <i className="fas fa-check-square fa-2x text-primary"></i>
          <h2 className="mt-2 mb-0 fw-bold">TaskNest</h2>
          <p className="text-muted small">Your productivity companion</p>
        </div>

        {/* This is where Login or Signup will appear */}
        <Outlet />
      </div>
    </div>
  );
}
