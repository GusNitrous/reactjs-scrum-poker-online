import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
        borderRadius: 4,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: 60,
        height: 90,
        margin: 10,
        padding: 0
    },
    score: {
        height: "100%",
        minWidth: "100%",
    },
}));
