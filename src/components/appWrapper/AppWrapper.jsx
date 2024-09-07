import PropTypes from "prop-types";
import { Box } from "@mui/material";

const AppWrapper = ({ children }) => {
  return <Box>{children}</Box>;
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
