import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography, Button, IconButton, SwipeableDrawer } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useMediaQuery, useScrollTrigger, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "0.9em"

    },
    logo: {
        ...theme.typography.alexBrushFonts,
        // color: "#fff"
        color: "#000f08"
    },
    logoPart: {
        ...theme.typography.alexBrushFonts,
        color: "#F57C00"
    },
    logoContainer: {
        marginLeft: "10px",
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto",
        minHeight: "55x",

    },
    tabIndicator: {
        marginBottom: "12px"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "35px",
        minHeight: "55px"
    },
    loginContainer: {
        ...theme.typography.tab,
        marginRight: "0",
        marginLeft: "20px",
        backgroundColor: "#F57C00",
        color: "#212121"
    },
    drawer: {
        backgroundColor: "#eee" //not working   
    },
    drawerIconContainer: {
        marginLeft: "auto",
        // marginRight: "20px"
    },
    drawerIcon: {
        width: "25px",
        height: "25px"
    },
    drawerItem: {
        ...theme.typography.tab,
        width: 200,
        opacity: 0.7
    },
    drawerItemSelected: {
        backgroundColor: "#F57C00 !important",
        "& .MuiListItemText-root": {
            opacity: 1
        }
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}))

export default function Navigation(props) {
    const classes = useStyles();
    const [currentIndex, setActiveIndex] = useState(0);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const handleChange = (e, value) => {
        setActiveIndex(value);
    }

    const routes = [
        { name: "Home", link: "/", activeIndex: 0 },
        { name: "Destinations", link: "/destinations", activeIndex: 1 },
        { name: "Packages", link: "/packages", activeIndex: 2 },
        { name: "Blogs", link: "/blogs", activeIndex: 3 },
        { name: "About", link: "/about", activeIndex: 4 },
        { name: "Contact", link: "/contact", activeIndex: 5 }
    ]


    //This acts like componentDidMount for the functional componenet
    useEffect(() => {

        routes.forEach((route) => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (currentIndex !== route.activeIndex) {
                        setActiveIndex(route.activeIndex)
                    }
                    break;
                default:
                    break;
            }
        })
    }, [currentIndex, routes]);


    const tabs = (
        <Tabs value={currentIndex} onChange={handleChange} classes={{ root: classes.tabContainer, indicator: classes.tabIndicator }}  >
            {routes.map((item, index) => (
                < Tab key={index} disableRipple className={classes.tab} label={item.name} component={RouterLink} to={item.link} />
            ))}
            < Tab className={classes.loginContainer} label="Login" component={RouterLink} to="/login" />
        </Tabs>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => { setOpenDrawer(false) }}
                onOpen={() => { setOpenDrawer(true) }}
                classes={{ paper: classes.drawer }}>
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {
                        routes.map((route, index) => (
                            <ListItem
                                key={index}
                                button
                                divider
                                component={RouterLink}
                                to={route.link}
                                onClick={() => { setOpenDrawer(false); setActiveIndex(route.activeIndex) }}
                                selected={currentIndex === route.activeIndex}
                                classes={{ selected: classes.drawerItemSelected }}
                            >
                                <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
                            </ListItem>
                        ))
                    }
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => { setOpenDrawer(!openDrawer) }}>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    );

    return (

        < React.Fragment >
            <ElevationScroll {...props}>
                <AppBar position="fixed" className={classes.appbar} color="primary" >
                    <Toolbar disableGutters>
                        <Button disableRipple onClick={() => setActiveIndex(0)} className={classes.logoContainer} component={RouterLink} to="/" >
                            {/* <img src={"/images/logo/logo5.png"} alt="logo" className={classes.logo} /> */}
                            <Typography className={classes.logo}>Trip</Typography>
                            <Typography className={classes.logoPart}>Lens</Typography>
                        </Button>
                        {
                            matches ? drawer : tabs
                        }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment >
    )

}