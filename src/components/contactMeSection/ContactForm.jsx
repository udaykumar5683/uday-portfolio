import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    // Clear messages when user starts typing
    if (success) setSuccess("");
    if (error) setError("");
    if (showPopup) setShowPopup(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (success) setSuccess("");
    if (error) setError("");
    if (showPopup) setShowPopup(false);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
    if (success) setSuccess("");
    if (error) setError("");
    if (showPopup) setShowPopup(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess("");
    setError("");

    emailjs
      .sendForm(
        "service_8ez0aei", // Your service ID
        "template_f5t16pi", // Your template ID
        form.current,
        "QY6zQqJBK3iFV1-ar" // Your public key
      )
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message sent successfully! I'll get back to you soon.");
          setShowPopup(true);
          setIsLoading(false);
          
          // Auto hide popup after 3 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError("Failed to send message. Please try again or contact me directly.");
          setIsLoading(false);
        }
      );
  };

  return (
    <div>
      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-4 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
              <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon!</p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-cyan hover:bg-darkCyan text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-red-500 mb-4 p-3 bg-red-100 rounded-lg">
          {error}
        </p>
      )}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 focus:outline-none focus:ring-2 focus:ring-cyan"
          value={name}
          onChange={handleName}
          disabled={isLoading}
        />
        
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 focus:outline-none focus:ring-2 focus:ring-cyan"
          value={email}
          onChange={handleEmail}
          disabled={isLoading}
        />
        
        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Your Message"
          required
          className="rounded-lg bg-lightBrown p-2 focus:outline-none focus:ring-2 focus:ring-cyan resize-vertical min-h-[120px]"
          value={message}
          onChange={handleMessage}
          disabled={isLoading}
        />
        
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl transition-all duration-500 ${
            isLoading
              ? "bg-gray-500 cursor-not-allowed"
              : "hover:bg-darkCyan bg-cyan"
          }`}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;