import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    Palette: {
        primary: "#D32F2F",
        secondary: "#00BCD1",
        error: "#E64A19"
    },
    typography: {
        fontFamily: "Roboto"
    },
    shape: {
        borderRadius: 4,
        backgroundColor: "#7B1FA2",
        textColor: "#FFFFFF",
        border: "#CCCCCC"
    }
});

export default theme;