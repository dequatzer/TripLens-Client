import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
//import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.darkBackGround,
        width: "100%",
        // height: "50vh",
        display: "flex",
        flexDirection: "column",
        fontSize: "0.7em",
        color: theme.palette.common.darkOrange,
        // border: "1px solid red"
        zIndex: theme.zIndex.modal + 1
    },
    mainContainer: {

        width: "100%",
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start"
        }

    },
    link: {
        color: theme.palette.common.secondaryTextColor,
        fontSize: "0.7rem",
        fontWeight: "bold",
        textDecoration: "none",
        fontFamily: 'Josefin Sans',
        textAlign: "left"
    },
    copyright: {
        color: theme.palette.common.secondaryTextColor,
        fontSize: "0.7rem",
        fontWeight: "bold",
        textDecoration: "none",
        fontFamily: 'Josefin Sans'
    },
    gridItem: {
        margin: "3em",
        //border: "1px solid red",
        minWidth: "8rem",
    }
}))

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Grid container justify="space-evenly" alignItems="flex-start" className={classes.mainContainer}>
                <Grid item className={classes.gridItem} >
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link}>
                            Destinations
                        </Grid>
                        <Grid item className={classes.link}>
                            Most Popular Destinations
                        </Grid>
                        <Grid item className={classes.link}>
                            Family Destinations
                        </Grid>
                        <Grid item className={classes.link}>
                            Honeymoon Destinations
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link}>
                            Packages
                        </Grid>
                        <Grid item className={classes.link}>
                            Trending Packages
                        </Grid>
                        <Grid item className={classes.link}>
                            South India Tours
                        </Grid>
                        <Grid item className={classes.link}>
                            North India Tours
                        </Grid>
                        <Grid item className={classes.link}>
                            Western India Tours
                        </Grid>
                        <Grid item className={classes.link}>
                            Eastern India Tours
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link}>
                            Blogs
                        </Grid>
                        <Grid item className={classes.link}>
                            Top Stories
                        </Grid>
                        <Grid item className={classes.link}>
                            Submit your Stories
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link}>
                            About
                        </Grid>
                        <Grid item className={classes.link}>
                            Learn our History
                        </Grid>
                        <Grid item className={classes.link}>
                            See Our Vision
                        </Grid>
                        <Grid item className={classes.link}>
                            Know Our Mission
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link}>
                            Contact Us
                        </Grid>
                        <Grid item className={classes.link}>
                            Review Us
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link}>
                            Legal
                        </Grid>
                        <Grid item className={classes.link}>
                            Privacy Policy
                        </Grid>
                        <Grid item className={classes.link}>
                            Cookie Policy
                        </Grid>
                        <Grid item className={classes.link}>
                            Terms and Conditions
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} md={12} sm={12} item className={classes.gridItem}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                        <Grid item className={classes.link}>
                            <FacebookIcon />
                        </Grid>
                        <Grid item className={classes.link}>
                            <TwitterIcon />
                        </Grid>
                        <Grid item className={classes.link}>
                            <InstagramIcon />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item className={classes.copyright}>
                    Copyright &copy; 2020 TripLens. All Rights Reserved.
                </Grid>
            </Grid>
        </footer>
    )
}