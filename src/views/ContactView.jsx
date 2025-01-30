import "./../styles/contactView.css";

export default function ContactView() {
  return (
    <div className="contact-page-container">
      <div>map</div>
      <div className="contact-content">
        <form className="contact-form">
          <h2>Leave Us a Message</h2>
          <div className="form-inputs">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Comment or Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button className=" subumit-button" type="submit">
              Submit
            </button>
          </div>
        </form>

        <div className="contact-details">
          <h2>Our Store</h2>
          <p>501-521 Fashion Ave, New York, NY 10018, USA</p>
          <div className="">
            <h3>Phone:</h3>
            <p>Phone: +1 212 244 2681</p>
          </div>
          <div className="">
            <h3>Email:</h3>
            <p>office@example.org</p>
          </div>
          <div className="">
            <h2>Store Hours</h2>
            <p>Sun: Closed</p>
            <p>Mon to Sat: 10 AM – 5:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
