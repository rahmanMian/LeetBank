import React, { useState } from 'react';
import logo from '../img/logo.png'; // Adjust the path as per your folder structure
import image1 from '../img/image1.png';
import image2 from '../img/image2.png';
import image3 from '../img/image3.png';
import './loginPage.css'; // Adjust the path as per your folder structure

export const LoginPage = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);
  const [activeBullet, setActiveBullet] = useState(1);
  const [inputFocus, setInputFocus] = useState({});

  const handleFocus = (index) => {
    setInputFocus({ ...inputFocus, [index]: true });
  };

  const handleBlur = (index, value) => {
    if (value !== "") return;
    setInputFocus({ ...inputFocus, [index]: false });
  };

  const handleToggle = () => {
    setSignUpMode(!isSignUpMode);
  };

  const moveSlider = (index) => {
    setActiveBullet(index);
  };

  return (
    <main className={isSignUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form autoComplete="off" className="sign-in-form">
              <div className="logo">
                <img src={logo} alt="LeetBank" />
                <h2>LeetBank</h2>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registered yet?</h6>
                <button type="button" className="toggle" onClick={handleToggle}>
                  Sign up
                </button>
              </div>

              <div className="actual-form">
                <div className={`input-wrap ${inputFocus[1] ? "active" : ""}`}>
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    placeholder= "Email"
                    autoComplete="off"
                    onFocus={() => handleFocus(1)}
                    onBlur={(e) => handleBlur(1, e.target.value)}
                    required
                  />
                </div>

                <div className={`input-wrap ${inputFocus[2] ? "active" : ""}`}>
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    placeholder="Password"
                    autoComplete="off"
                    onFocus={() => handleFocus(2)}
                    onBlur={(e) => handleBlur(2, e.target.value)}
                    required
                  />
                </div>

                <input type="submit" value="Sign In" className="sign-btn" />

                <p className="text">
                  Forgotten your password or your login details?
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>

            <form autoComplete="off" className="sign-up-form">
              <div className="logo">
                <img src={logo} alt="LeetBank" />
                <h2>LeetBank</h2>
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <button type="button" className="toggle" onClick={handleToggle}>
                  Sign in
                </button>
              </div>

              <div className="actual-form">
                <div className={`input-wrap ${inputFocus[3] ? "active" : ""}`}>
                  <input
                    type="text"
                    minLength="4"
                    placeholder="Email"
                    className="input-field"
                    autoComplete="off"
                    onFocus={() => handleFocus(3)}
                    onBlur={(e) => handleBlur(3, e.target.value)}
                    required
                  />

                </div>

                <div className={`input-wrap ${inputFocus[4] ? "active" : ""}`}>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="Password"
                    autoComplete="off"
                    onFocus={() => handleFocus(4)}
                    onBlur={(e) => handleBlur(4, e.target.value)}
                    required
                  />
                </div>

                <div className={`input-wrap ${inputFocus[5] ? "active" : ""}`}>
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    onFocus={() => handleFocus(5)}
                    onBlur={(e) => handleBlur(5, e.target.value)}
                    required
                  />
                </div>

                <input type="submit" value="Sign Up" className="sign-btn" />

                <p className="text">
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img
                src={image1}
                className={`image img-1 ${activeBullet === 1 ? "show" : ""}`}
                alt="Create your own courses"
              />
              <img
                src={image2}
                className={`image img-2 ${activeBullet === 2 ? "show" : ""}`}
                alt="Customize as you like"
              />
              <img
                src={image3}
                className={`image img-3 ${activeBullet === 3 ? "show" : ""}`}
                alt="Invite students to your class"
              />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div
                  className="text-group"
                  style={{ transform: `translateY(${-(activeBullet - 1) * 2.2}rem)` }}
                >
                  <h2>Create your own courses</h2>
                  <h2>Customize as you like</h2>
                  <h2>Invite students to your class</h2>
                </div>
              </div>

              <div className="bullets">
                <span
                  className={activeBullet === 1 ? "active" : ""}
                  data-value="1"
                  onClick={() => moveSlider(1)}
                ></span>
                <span
                  className={activeBullet === 2 ? "active" : ""}
                  data-value="2"
                  onClick={() => moveSlider(2)}
                ></span>
                <span
                  className={activeBullet === 3 ? "active" : ""}
                  data-value="3"
                  onClick={() => moveSlider(3)}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};


