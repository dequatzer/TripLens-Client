import { createMuiTheme } from '@material-ui/core/styles';

const darkPrimaryColor = "#F57C00";
const PrimaryColor = "#FF9800";
const lightPrimaryColor = "#FFE0B2";

const textPrimaryColor = "#212121";
const accentColor = "#FF9800";
const primaryTextColor = "#212121";
const secondaryTextColor = "#757575";
// const dividerColor = "#BDBDBD";

export default createMuiTheme({
    palette: {
        common: {
            darkOrange: `${darkPrimaryColor}`,
            darkBackGround: `${textPrimaryColor}`,
            secondaryTextColor: `${secondaryTextColor}`,
            accentColor: `${accentColor}`,
            primaryColor: `${primaryTextColor}`,
            lightPrimaryColor: `${lightPrimaryColor}`
        },
        primary: {
            //main: `${darkPrimaryColor}`
            main: "#fff"
        },
        secondary: {
            main: `${darkPrimaryColor}`
        }
    },
    typography: {
        fontFamily: 'Josefin Sans',
        color: `${textPrimaryColor}`,
        fontSize: 14,
        tab: {
            //fontFamily: "Abel",
            //fontFamily: "Lobster",
            //fontFamily: 'Bad Script',
            //fontFamily: 'Londrina Shadow',
            //fontFamily: "Emilys Candy",
            //fontFamily: "Jua",
            //fontFamily: "Mouse Memoirs",
            //fontFamily: "Jost",
            //fontFamily: "Bangers",
            // fontFamily: "Bebas Neue",
            //fontFamily: "Rammetto One",
            //fontSize: "1rem",
            textTransform: "none",
            fontFamily: 'Josefin Sans',
            fontWeight: 700,
            color: `${textPrimaryColor}`
        },
        h1: {
            fontSize: "2rem",
            fontWeight: "bold",
            padding: "10px 0",
            marginTop: "20px",
            marginBottom: "50px",
            // color: `${darkPrimaryColor}`
        },
        h2: {
            fontSize: "1.3rem",
            fontWeight: "bold",


        },

        h3: {
            fontSize: "0.8rem",
            color: `${PrimaryColor}`,
            fontWeight: "bold"
        },
        alexBrushFonts: {
            fontFamily: "Alex Brush",
            fontSize: "2rem",
            textTransform: "none",
            fontWeight: "bold",
        }


    },
    mixins: {
        toolbar: {
            minHeight: "35px"
        }
    }
});
