import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, IconButton, Typography, Grid, Divider } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import DateRangeIcon from '@material-ui/icons/DateRange';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        maxWidth: 600,
        height: 320,
        margin: "10px 0",
        [theme.breakpoints.down('sm')]: {
            maxWidth: 400,
            height: "auto",
            flexDirection: "column",

        }
    },
    title: {
        fontFamily: 'Josefin Sans',
        fontSize: "1.1rem",
        fontWeight: "bold",
        color: "#F57C00"
        // ...theme.typography,
    },
    subheader: {
        fontFamily: 'Bad Script',
        fontSize: "1.1rem",
        fontWeight: "bold"
    },
    media: {
        height: "100%",
        paddingTop: '56.25%', // 16:9
        width: 300,
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    content: {
        minHeight: 140
    },
    footerContent: {
        display: "flex",
        direction: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
}))

const TrendingPackages = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction="row" justify="space-evenly" alignItems="center">
                <Grid item>
                    <Card raised className={classes.root}>
                        <div>
                            <CardMedia className={classes.media} image={props.item.imageUrl} />
                        </div>
                        <div>
                            <CardHeader title={props.item.title} subheader={props.item.subheader} classes={{ title: classes.title, subheader: classes.subheader }} />
                            <Divider />
                            <CardContent className={classes.content}>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {props.item.description}
                                </Typography>
                            </CardContent>
                            <Divider />
                            <CardContent className={classes.footerContent}>
                                <IconButton>
                                    <Typography variant="h3">
                                        <DateRangeIcon /> : {props.item.dateRange}
                                    </Typography>
                                </IconButton>
                                <IconButton>
                                    <Typography variant="h3">
                                        <AttachMoneyIcon /> : {props.item.cost}
                                    </Typography>
                                </IconButton>
                            </CardContent>
                        </div>

                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default TrendingPackages;