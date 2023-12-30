import React from "react";
import "./Home.css";
function Home() {
  return (
    <section>
      <div className="home-container">
        <img
          src="https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/medical.jpg"
          alt=""
        />
      </div>

      <div class="overlay">
        <h1>Meet The<br />Best Doctor</h1>
        <p>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
        <div className="home-btn">
            <button className="register-btn">Get started</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
