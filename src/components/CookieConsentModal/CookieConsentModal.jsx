import { useEffect, useState } from "react";
import "./CookieConsentModal.css";
import cookiesimg from "../../../public/treat.png"

const CookieConsentModal = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-modal-overlay">
      <div className="cookie-modal">
           <img src={cookiesimg} alt="" className="cookieimg" />
        <h2>Cookie Consent</h2>
        <p>
          We use cookies to improve your experience and show you relevant content.
          Do you accept our use of cookies?
        </p>
        <div className="cookie-buttons">
          <button className="accept-btn" onClick={handleAccept}>Accept</button>
          <button className="decline-btn" onClick={handleDecline}>Decline</button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentModal;
