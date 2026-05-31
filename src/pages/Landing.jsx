import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame/PhoneFrame';
import Button from '../components/Button/Button';
import './Landing.css';

/**
 * Landing Page
 * The first screen users see - "Welcome to PopX"
 * Contains two CTA buttons: Create Account & Login
 * Content is positioned at the bottom of the screen.
 */
function Landing() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <div className="landing" id="landing-page">
        {/* Top spacer to push content down */}
        <div className="landing__spacer" />

        {/* Bottom content area */}
        <div className="landing__content">
          <h1 className="landing__title" id="landing-title">
            Welcome to PopX
          </h1>
          <p className="landing__subtitle" id="landing-subtitle">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <div className="landing__buttons">
            <Button
              variant="primary"
              onClick={() => navigate('/signup')}
              id="btn-create-account"
            >
              Create Account
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate('/login')}
              id="btn-login"
            >
              Already Registered? Login
            </Button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export default Landing;
