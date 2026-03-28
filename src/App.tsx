import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  // State to toggle between Login and Register views
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    console.log(isLogin ? "Logging in..." : "Registering...", data);
    alert(isLogin ? `Welcome back!` : "Registration Successful!");
  };

  return (
    <div className="portal-container">
      {/* Visual Header using your existing logos */}
      <div className="hero-mini">
        <img src={viteLogo} className="logo vite" alt="Vite logo" width="50" />
        <img src={reactLogo} className="logo react" alt="React logo" width="50" />
      </div>

      <div className="form-card">
        <div className="form-header">
          <button 
            type="button"
            className={isLogin ? "active" : ""} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            type="button"
            className={!isLogin ? "active" : ""} 
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="portal-form">
          <h2>{isLogin ? "Portal Login" : "Create Account"}</h2>
          <p className="subtitle">
            {isLogin ? "Enter your credentials" : "Join the community today"}
          </p>

          {!isLogin && (
            <div className="input-group">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" name="fullname" placeholder="John Doe" required />
            </div>
          )}

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="name@email.com" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="submit-btn">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>

          {isLogin && (
            <div className="form-footer">
              <a href="#forgot">Forgot password?</a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;