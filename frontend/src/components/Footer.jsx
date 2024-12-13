import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-success text-white py-2 ">
      <div className="container">
        <div className="row">
          {/* Logo and About Section */}
          <div className="col-md-6 mb-4">
            <Link to="/" className="text-white text-decoration-none">
              <h4 className="fw-bold"> BiteBuddy</h4>
            </Link>
            <p className="mt-2 text-white"> 
              Delicious food delivered at your doorstep.
            </p>
          </div>

          {/* Impressive Text Section */}
          <div className="col-md-6 mb-4">
            <h5 className="text-white">Why Choose Us?</h5>
            <p className="mt-2 text-white">
              At BiteBuddy,  we believe in bringing joy to every meal. With a
              commitment to quality ingredients, exceptional service, and
              lightning-fast delivery, we transform your dining experience. 
              Savor the flavors of happiness with every bite!
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: "2px solid white", backgroundColor: "white", margin: "1rem 0" }} />


        {/* Bottom Section */}
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-white">© 2024  BiteBuddy, Inc. All rights reserved.</span>
          <div>
            <Link to="/privacy" className="text-white text-decoration-none">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="text-white text-decoration-none">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
