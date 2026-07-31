import { createTheme } from "@mui/material";

const tema = createTheme({
    palette:{
        primary:{
            main: "#EEC429",
            //contrastText: "",

        },
        white:{
            main: "#fff"

        }
        
    },

    typography: {
        allVariants : {
            color: "#fff"
        }
    }

});

export default tema;