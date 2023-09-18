import { Grid, Typography, createTheme } from "@mui/material";

const font = "Google Sans"

const theme = createTheme({
  typography: {
    fontFamily: font,
  }
})

function Catatan() {
  return (
    <Grid
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <Grid
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <Typography
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.25rem",
              md: "2.5rem",
              lg: "3rem",
              xl: "3.25rem",
            },
            marginBottom: "2rem",
            fontWeight: "bold",
            fontFamily: font,
          }}
          className="lg:text-5xl bg-sky-400 text-4xl dark:bg-gray-900 text-black dark:text-white">
          Coming Soon 🚧
        </Typography>
        <p className="text-black dark:text-white text-lg mb-8 text-center">We're working hard to bring you something amazing. Stay tuned!</p>
      </Grid>
    </Grid>
  );
}

export default Catatan;
