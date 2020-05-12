
import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        height: "70vh",
        background: props => props.item.image_url,
        ...theme.typography.alexBrushFonts,
        color: "#fff",
        fontFamily: "Bad Script",
        textAlign: "center",
        paddingTop: "10%",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.2em"
        }
    }
}))

function CarouselItem(props) {
    const classes = useStyles(props);

    return (
        <div>
            <Paper square elevation={1} className={classes.paperStyle} >
                <h2>{props.item.title}</h2>
                <p>{props.item.sub_title}</p>
            </Paper>
        </div>

    )
}

export default CarouselItem;