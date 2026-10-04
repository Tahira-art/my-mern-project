
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google Login Successful");
    console.log(credentialResponse);

    if (credentialResponse.credential) {
      sessionStorage.setItem(
        "googleCredential",
        credentialResponse.credential
      );
    }

    navigate("/home");
  };

  const handleGoogleError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="login-page">

      {/* Background */}
      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>
      <div className="background-circle circle-three"></div>

      <div className="background-grid"></div>

      {/* Login Card */}
      <div className="login-card">

        {/* Logo */}
        <div className="login-logo">
          <span>✦</span>
        </div>

        {/* Welcome */}
        <div className="login-welcome">
          WELCOME BACK
        </div>

        {/* Heading */}
        <h1 className="login-title">
          Sign in to
          <br />
          <span>your account.</span>
        </h1>

        {/* Description */}
        <p className="login-description">
          Continue your journey with a secure
          and simple Google sign-in.
        </p>

        {/* Google Login */}
        <div className="google-login-container">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            theme="outline"
            size="large"
            shape="pill"
            text="continue_with"
            width="320"
          />
        </div>

        {/* Divider */}
        <div className="login-divider">
          <span></span>
          <p>SECURE LOGIN</p>
          <span></span>
        </div>

        {/* Security */}
        <div className="security-info">

          <div className="security-icon">
            ✓
          </div>

          <div>
            <strong>Secure authentication</strong>

            <p>
              Your account is protected by Google.
            </p>
          </div>

        </div>

        {/* Terms */}
        <p className="login-terms">
          By continuing, you agree to our{" "}
          <span>Terms of Service</span>
          {" "}and{" "}
          <span>Privacy Policy</span>.
        </p>

      </div>

      {/* Bottom text */}
      <div className="login-bottom">
        <span className="bottom-dot"></span>
        Secure · Simple · Beautiful
      </div>

    </div>
  );
}

export default Login;

