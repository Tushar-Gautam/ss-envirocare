import { Mail, MapPin, Phone } from "lucide-react";
import "./style.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-section__bg">
        <div className="contact-section__blob contact-section__blob--1" />
        <div className="contact-section__blob contact-section__blob--2" />
      </div>

      <div className="container">
        <header className="about-section__header">
          <h2 className="about-section__title animate-fade-up">Get in Touch</h2>
          <p className="content-block">
            Have questions about our e-waste recycling services? We're here to
            help.
          </p>
        </header>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form">
            <div className="contact-form__glass" />
            <form className="relative">
              <div className="form-group">
                <input type="text" id="name" className="form-input" required />
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  required
                />
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
              </div>

              <div className="form-group">
                <input type="tel" id="phone" className="form-input" />
                <label htmlFor="phone" className="form-label">
                  Phone Number (Optional)
                </label>
              </div>

              <div className="form-group">
                <textarea id="message" className="form-textarea" required />
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-card__glass" />
              <div className="info-card__content">
                <Phone className="info-card__icon" />
                <h3 className="info-card__title">Phone</h3>
                <p className="info-card__text">+91-9654463036</p>
                <p className="info-card__text">Mon - Sat, 9am - 7pm IST</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card__glass" />
              <div className="info-card__content">
                <Mail className="info-card__icon" />
                <h3 className="info-card__title">Email</h3>
                <p className="info-card__text">ms.dir@ssenvirocare.in</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card__glass" />
              <div className="info-card__content">
                <MapPin className="info-card__icon" />
                <h3 className="info-card__title">Location</h3>
                <p className="info-card__text">
                  84, Lane 3A, Marudhar Nagar, Ajmer Road
                </p>
                <p className="info-card__text">
                  {" "}
                  Jaipur ,Rajasthan,India (302021)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="map-container">
          <div className="map-container__glass" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043435559!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
