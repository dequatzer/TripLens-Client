import React from 'react';
import { Typography, Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 900,
        margin: "0 auto",
        textAlign: "center",
        padding: "30px",
        height: 300,
        // border: "1px solid blue",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            display: "flex",
            flexGrow: 0,
            flexShrink: 0,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 500
        }
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        margin: "20px"
    },
    customerReview: {
        fontFamily: "Bad Script",
        fontSize: "1.4rem",
        fontWeight: "bold",
        marginTop: "10px",
        // border: "1px solid red",
        [theme.breakpoints.down("md")]: {
            paddingBottom: "50px",
            fontSize: "1rem",
            fontWeight: "bold",
        }
    },
    customerName: {
        fontSize: "1.1rem",
        fontWeight: "bold",
        textAlign: "right",
        color: "#F57C00",
        // border: "1px solid green",
        [theme.breakpoints.down("md")]: {
            paddingBottom: "50px"
        }
    }
}))

const CustomerReview = (props) => {
    const classes = useStyles();
    return (

        <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
            <Grid item >
                <Avatar alt="Remy Sharp" src={props.item.imageUrl} className={classes.large} />
            </Grid>
            <Grid item>
                <Typography variant="body1" className={classes.customerReview}>
                    "{props.item.customerReview}"
                    </Typography>
                <Typography variant="h2" className={classes.customerName}>
                    -{props.item.customerName}
                </Typography>
            </Grid>
        </Grid>

    )
}

export default CustomerReview;