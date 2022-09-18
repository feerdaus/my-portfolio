import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Paper sx={{ bgcolor: "primary.light", width: "400px", height: "400px" }}>
        <Box bgcolor="secondary.main" width="50%" height="50%" mx="auto">
          my name is feer
        </Box>
        <Button variant="contained">Hello World</Button>
      </Paper>
    </>
  );
};

export default Home;
