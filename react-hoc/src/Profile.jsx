import withAuth from "./withAuth";
import withStyles from "./withStyles";

const Profile = (props) => {
  return <div {...props}>Profile</div>;
};

const ProfileWithAuth = withStyles(withAuth(Profile));

export default ProfileWithAuth;
