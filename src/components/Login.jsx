import "./Login.css";

export default function LoginPage({ onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="login-box">
        <div className="login-heading">
          <h2>LOGIN TO BOTIGA</h2>
          <button className="close-button" onClick={onClose}>
            ✖
          </button>
        </div>
        <form className="login-form">
          <div className="form-inputs">
            <input type="email" placeholder="Enter your email" required />
            <input type="password" placeholder="Enter your password" required />
            <button className="submit-button" type="submit">
              Login
            </button>
          </div>
          <p className="forgot-password">Forgot password?</p>
        </form>
        <p className="register-link">
          If you don&apos;t have an account, <a href="#">Please, Register</a>
        </p>
      </div>
    </div>
  );
}
