import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => {
    return {
        root: {
            flexGrow: 1,
            width: '100%'
        },
        mainContent: {
            paddingTop: 25
        },
        gridItem: {
            margin: "auto",
            flexGrow: 1
        },
        playgroundBlock: {
            paddingTop: '25px',
            // justifyContent: "top",
            // maxWidth: '350px'
        },
        dashboardBlock: {
            justifyContent: "top",
        }
    }
});
