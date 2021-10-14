import React from 'react';

const Header = () => {
  return (
    <header>
      <section className="container main-hero-container">
        <div className="row">
          <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column ">
            <h1 className="display-2">
              online payment made <br /> easy for you.
            </h1>
            <p className="main-hero-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, placeat. Veritatis eveniet saepe sequi,
              exercitationem ad magnam. Nostrum, at aspernatur?
            </p>
            <h3>Get Early Access For You</h3>
            <div className="input-group mt-3">
              <input
                type="text"
                className="rounded-pill w-50 me-3 p-2 form-control-text"
                placeholder="Enter Your Email"
              />

              <div className="input-group-button">Get It Now</div>
            </div>
          </div>
          {/* main header right side */}

          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
            <img src="./images/hero1.jpg" alt="hero1" className="img-fluid" />
            <img
              src="./images/hero4.jpg"
              alt="hero4"
              className="img-fluid main-hero-img2"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
