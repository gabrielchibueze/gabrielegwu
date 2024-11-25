import { createTheme } from "@mui/material/styles";

// Customize the theme globally
const theme = createTheme({
  palette: {
    primary: {
      main: "#002138",
    },
    secondary: {
      main: "#002138",
    },
    error: {
      main: "#f73206",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff", // Background color for TextField
          "& .MuiInputBase-root": {
            // height: "40px", // Set height for inputs
            borderRadius: "0px", // Rounded corners for inputs
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              // borderColor: "#002138", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              // borderColor: "#002138", // Border color on focus
              // borderRadius: "8px", // Border radius on focus
            },
          },
          "& input::placeholder": {
            opacity: 0, // Hide placeholder highlight
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff", // Set background for Select dropdown
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px", // Rounded corners for Select
            "&.Mui-focused fieldset": {
              // borderColor: "#002138", // Border color on focus for Select
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: "normal", // Apply normal margin for FormControl
          // backgroundColor: "var(--foreground)", // Set background for FormControl
        },
      },
    },
  },
});

export default theme;
