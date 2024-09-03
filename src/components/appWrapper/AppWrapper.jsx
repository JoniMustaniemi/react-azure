import PropTypes from "prop-types";
import "./appwrapper.scss";

const AppWrapper = ({ children }) => {
  return <div className="appWrapper">{children}</div>;
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
