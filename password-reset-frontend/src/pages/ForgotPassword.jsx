import React, { useState } from 'react';
import API from '../services/api';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      const res = await API.post('/auth/forgot-password', { email });
      setMessage(res.data.message || 'Reset link sent successfully.');
    } catch (err) {
      setError(err.response?.data?.message || 'Error sending reset link. Try again.');
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">

        <h2 className="mb-3">Forgot Password</h2>
        <p>Enter your email address and we will send you a password reset link.</p>

        {/* Success Message */}
        {message && <div className="alert alert-success">{message}</div>}

        {/* Error Message */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Send Reset Link
          </button>
        </form>

      </div>
    </div>
  );
}
