import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, IconButton, Typography, Divider } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {

        maxWidth: 350,
        height: "450px",
        margin: "10px 20px",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "100%",
            margin: "10px 20px",
            height: "100%"
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
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    content: {
        minHeight: 90
    }
}));

const PopularDestinations = (props) => {
    const classes = useStyles();
    return (

        // <Grid spacing="1" container lg={4} justify="center" alignItems="center" >
        <Card raised className={classes.root}>
            <CardActionArea>
                <CardHeader title={props.item.title} subheader={props.item.subheader} classes={{ title: classes.title, subheader: classes.subheader }} />
                <CardMedia className={classes.media} image={props.item.imageUrl} />
                <CardContent className={classes.content}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider />
            <CardActions disableSpacing >
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
        // </Grid>


    )
}

export default PopularDestinations;