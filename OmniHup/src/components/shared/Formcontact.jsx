import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

// import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function ContactForm() {
  return (
    /* contact start */
    <section className="containerr">
      <div className="container">
        <div className="form-container me-5">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                required
              />
              <hr />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter a valid email address"
                required
              />
              <hr />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea id="message" required></textarea>
              <hr />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="info-container ms-5">
          <h3>Call Us</h3>
          <p>
            {" "}
            <FontAwesomeIcon icon={faPhoneVolume} size="1x" color="#007bff" /> 1
            (234) 567-891
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faPhoneVolume} size="1x" color="#007bff" /> 1
            (234) 5678-910
          </p>
          <h3>Location</h3>
          <p>121 Rock Street, 21 Avenue,</p>
          <p>New York, NY 92103-9000</p>
          <h3>Social</h3>
          <div className="social-icons">
            <a href="#">
              <i classNameName="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i classNameName="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i classNameName="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    /* contact end */
  );
}

export default ContactForm;
