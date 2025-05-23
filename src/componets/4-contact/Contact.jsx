import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnmiation from "../../aniamtion/done.json";
import contactAnmiation from "../../aniamtion/contact.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("meogwown");

  return (
    <section className="contact-us section__container" id="contact">
      <p className="section__subheader">Contact Us</p>

      <p className="section__header">
        Bringing your vision to life — <span>with passion.</span>
      </p>

      <div className="flex" style={{ marginTop: "2rem " }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              style={{ textTransform: "none" }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "14px" }}>
            <label htmlFor="message">Your Message</label>
            <textarea
              required
              name="message"
              id="message"
              style={{ textTransform: "none" }}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="btn" type="submit" disabled={state.submitting}>
            Submit
          </button>

          {state.succeeded && (
            <div className="done">
              <Lottie
                loop={false}
                animationData={doneAnmiation}
                className="lottie-done"
                style={{ height: 37 }}
              />
              <span>Your message has been sent successfully</span>
            </div>
          )}
        </form>

        <div className="animation">
          <Lottie
            animationData={contactAnmiation}
            className="contact-aniamtion"
            style={{ height: 355 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
