import { createTheme } from '@mui/material';
import { Colors } from "./tokens";

export const theme = createTheme({

    palette: {
        text: {
            primary: Colors.text.primary,
            secondary: Colors.text.secondary,
        },
        primary: {
            main: Colors.background.primary,
            
        },
        secondary: {
            main: Colors.background.secondary
        }
    },  
    components: {
        MuiButton: {
            styleOverrides: {
                colorPrimary: Colors.button.primary,
                colorInfo: Colors.button.danger,
                sizeSmall: '24px',
                contained: {
                    fontSize: "14px",
                    fontWeight: 400,
                },

                root: {
                    boxShadow: "none"
                },  

                containedPrimary: {
                    color: "white",
                    backgroundColor: Colors.button.primary
                },
                containedSecondary: {
                    
                    color: Colors.button.primary,
                    backgroundColor: Colors.button.default
                },
                sizeMedium: "36px",
                sizeLarge: "48px"
            }
        },
       
    },
    typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
        fontWeightLight: "400",
        fontWeightRegular: "500",
        fontWeightMedium: "600",
        fontWeightBold: "700",
    

        h1: {
            fontSize: "24px"
        },
        h2: {
            fontSize: "18px"
        },
        h3: {
            fontSize: "16px"
        },
        h4: {
            fontSize: "14px"
        },
        h5: {
            fontSize: "12px"
        }
    }
})