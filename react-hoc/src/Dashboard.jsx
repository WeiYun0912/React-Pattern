import withAuth from "./withAuth";
import withStyles from "./withStyles";

const Dashboard = (props) => {
  return <div {...props}>Dashboard</div>;
};

const DashboardWithAuth = withStyles(withAuth(Dashboard));

export default DashboardWithAuth;
