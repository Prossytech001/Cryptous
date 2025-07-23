import React from 'react';
import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ReferralSection = ({ referralCode, user }) => {
  const referralLink = `${window.location.origin}/signup?ref=${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied!');
  };

  const encodedMessage = encodeURIComponent(`Join this investment platform and earn rewards! Use my referral link: ${referralLink}`);

  return (
    <div className="referral-section">
      <h3>Affiliate</h3>
      <p>Share your referral link and earn rewards for each signup!</p>

      <div className="referral-box">
        <input type="text" readOnly value={referralLink} className="referral-input" />
        <button onClick={copyToClipboard} className="copy-btn">
          <FaCopy /> 
        </button>
      </div>

      <div className="social-share">
        <a
          href={`https://api.whatsapp.com/send?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp iconshare"
        >
          <FaWhatsapp /> 
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="facebook iconshare"
        >
          <FaFacebook /> 
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="twitter iconshare"
        >
          <FaTwitter /> 
        </a>
      </div>
    </div>
  );
};

export default ReferralSection;
