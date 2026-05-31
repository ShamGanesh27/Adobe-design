import './PhoneFrame.css';

/**
 * PhoneFrame Component
 * Wraps page content in a mobile phone-like container
 * centered on the webpage, matching the design screenshots.
 */
function PhoneFrame({ children }) {
  return (
    <div className="phone-frame" id="phone-frame">
      <div className="phone-frame__content">
        {children}
      </div>
    </div>
  );
}

export default PhoneFrame;
