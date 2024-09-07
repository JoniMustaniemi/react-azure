import { Box, Button, Typography } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

const LoginOverlay = () => {
  const { login } = useAuth();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        width: "100%",
        padding: "5%",
        display: "flex",
        justifySelf: "center",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: "50% 2rem",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ marginBottom: "10%" }}>
          Log in to continue
        </Typography>
        <Button variant="contained" color="primary" onClick={login}>
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginOverlay;
