import PhoneFrame from '../components/PhoneFrame/PhoneFrame';
import './Profile.css';

/**
 * Profile Page
 * "Account Settings" page displaying:
 * - User avatar with camera icon overlay
 * - Name & email
 * - Bio/description text
 * - Dashed separator
 */
function Profile() {
  return (
    <PhoneFrame>
      <div className="profile" id="profile-page">
        {/* Page Title */}
        <h1 className="profile__title" id="profile-title">
          Account Settings
        </h1>

        {/* Profile Card */}
        <div className="profile__card" id="profile-card">
          {/* User Info Row */}
          <div className="profile__user-row">
            {/* Avatar with camera icon */}
            <div className="profile__avatar-wrapper">
              <img
                src="/avatar.png"
                alt="Marry Doe's profile photo"
                className="profile__avatar"
                id="profile-avatar"
              />
              {/* Camera edit icon */}
              <div className="profile__camera-icon" id="profile-camera-btn">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* User Details */}
            <div className="profile__user-info">
              <h2 className="profile__name" id="profile-name">Marry Doe</h2>
              <p className="profile__email" id="profile-email">Marry@Gmail.Com</p>
            </div>
          </div>

          {/* Bio / Description */}
          <p className="profile__bio" id="profile-bio">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>

          {/* Dashed Separator */}
          <div className="profile__separator" />
        </div>

        {/* Empty space below (matching screenshot) */}
        <div className="profile__empty-area" />
      </div>
    </PhoneFrame>
  );
}

export default Profile;
