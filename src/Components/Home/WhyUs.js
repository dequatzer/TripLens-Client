import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PanToolIcon from '@material-ui/icons/PanTool';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import FaceIcon from '@material-ui/icons/Face';
import ExposureZeroIcon from '@material-ui/icons/ExposureZero';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "transparent",
        color: "white",
        padding: 0
    },
    container: {
        margin: "100px auto",
        // paddingLeft: "50px",
        // border: "1px solid red",
        maxWidth: "1280px",
        [theme.breakpoints.down("md")]: {
            margin: "10px auto",
            width: "80%"
        }
    },

    item: {
        margin: "35px 0",
        display: "flex",
        direction: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "10px",
        [theme.breakpoints.down("xs")]: {
            margin: "10px 0",

        },
        [theme.breakpoints.down("md")]: {
            margin: "20px 0",

        }
    },

    iconStyles: {
        fontSize: "3rem",
        padding: "0",
        marginRight: "20px",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1rem",
            padding: "0px",
            margin: "0px"
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "2.2rem",
            padding: "0px",
            margin: "0px 5px"
        }
    },

    h2: {
        fontSize: "2rem",
        textAlign: "left",
        [theme.breakpoints.down('xs')]: {
            fontSize: "0.9rem"
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "1.2rem"
        }
    }
}));

const WhyUs = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={0}>

            <Grid container className={classes.container}>
                <Grid item xs={12} md={6} className={classes.item}>
                    <AttachMoneyIcon className={classes.iconStyles} color="secondary" />
                    <Typography variant="h2" className={classes.h2}>
                        Best price in the market
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className={classes.item}>
                    <PanToolIcon className={classes.iconStyles} color="secondary" />
                    <Typography variant="h2" className={classes.h2}>
                        Leading Travel Agency in Jharkhand
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className={classes.item}>
                    <AssignmentTurnedInIcon className={classes.iconStyles} color="secondary" />
                    <Typography variant="h2" className={classes.h2} >
                        Highly Customizable packages
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className={classes.item}>
                    <ExposureZeroIcon className={classes.iconStyles} color="secondary" />
                    <Typography variant="h2" className={classes.h2} >
                        Zero Cancellation upto 24 hours
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className={classes.item}>
                    <FaceIcon className={classes.iconStyles} color="secondary" />
                    <Typography variant="h2" className={classes.h2} >
                        Professonal Trip Guides
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className={classes.item}>
                    <AccessTimeIcon className={classes.iconStyles} color="secondary" />
                    <Typography variant="h2" className={classes.h2}>
                        24 x 7 Cusotmer Services
                    </Typography>
                </Grid>
            </Grid>

        </Paper>
    )
}

export default WhyUs;