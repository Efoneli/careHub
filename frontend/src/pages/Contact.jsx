import React, { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_SUBJECT":
      return { ...state, subject: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_SUBMITTED":
      return { ...state, submitted: action.payload };
    default:
      return state;
  }
};

const Contact = () => {
  const [state, dispatch] = useReducer(formReducer, {
    message: "",
    email: "",
    subject: "",
    submitted: null,
    error: { email: "", subject: "", message: "" },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempError = { email: "", subject: "", message: "" };
    if (!state.email) tempError.email = "Email is required";
    if (!state.subject) tempError.subject = "Subject is required";
    if (!state.message) tempError.message = "Message is required";
    dispatch({ type: "SET_ERROR", payload: tempError });
    if (state.email && state.subject && state.message && !tempError.email && !tempError.subject && !tempError.message) {
      console.log(`Email: ${state.email}`);
      console.log(`Subject: ${state.subject}`);
      console.log(`Message: ${state.message}`);
      dispatch({ type: "SET_EMAIL", payload: "" });
      dispatch({ type: "SET_SUBJECT", payload: "" });
      dispatch({ type: "SET_MESSAGE", payload: "" });
      dispatch({ type: "SET_SUBMITTED", payload: true });
      setTimeout(() => {
        dispatch({ type: "SET_SUBMITTED", payload: false });
      }, 3000);
    }
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={state.email}
              onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
              className="form__input mt-1"
            />
            {state.error.email && <p style={{ color: "red" }}>{state.error.email}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={state.subject}
              onChange={(e) => dispatch({ type: "SET_SUBJECT", payload: e.target.value })}
              className="form__input mt-1"
            />
            {state.error.subject && <p style={{ color: "red" }}>{state.error.subject}</p>}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>

            <textarea
              rows="6"
              type="text"
              id="message"
              value={state.message}
              onChange={(e) => dispatch({ type: "SET_MESSAGE", payload: e.target.value })}
              className="form__input mt-1"
            />
            {state.error.message && <p style={{ color: "red" }}>{state.error.message}</p>}
            <button type="submit" className="btn rounded sm:w-fit mb-5">Submit</button>
          </div>
        </form>
        {state.submitted === true && (
  <div className={`bg-green-100 border text-center border-green-400 text-green-700 px-4 py-3 rounded relative animate-fade-in`} role="alert">
    <strong className="font-bold">Success!</strong>
    <span className="block sm:inline"> Your feedback has been submitted. We appreciate your input and will look into your issue promptly. Thank you for helping us improve our services.</span>
  </div>
)}

      </div>
    </section>
  );
};

export default Contact;
