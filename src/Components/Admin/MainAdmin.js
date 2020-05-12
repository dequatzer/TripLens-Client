import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, List, ListItem, ListItemText, ListItemIcon, Button, Drawer, useMediaQuery, useTheme, ListSubheader, Divider, Paper, Collapse } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import HotelIcon from '@material-ui/icons/Hotel';
import DvrIcon from '@material-ui/icons/Dvr';
import FlightIcon from '@material-ui/icons/Flight';
import WorkIcon from '@material-ui/icons/Work';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LayersIcon from '@material-ui/icons/Layers';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ManageHomePage from './ManageHomePage';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(theme => ({
    listContainer: {
        ...theme.typography.tab,
        //  backgroundColor: "#eee",
    },

    drawerPaper: {
        marginTop: "50px"
    },

    btnToggle: {
        width: "100%"
    },

    contentFixed: {
        padding: "50px 30px",
        height: "100vh",
        backgroundColor: "#eee",
    },

    contentDrawer: {
        width: "100%",
        padding: "20px",
        height: "100vh",
        backgroundColor: "#eee",
    },

    listItemText: {
        fontSize: "0.85rem",
        opacity: "0.7"
    },

    nestedListItemText: {
        fontSize: "0.7rem",
        opacity: "0.7"
    },

    listItemIcon: {
        fontSize: "1.2rem",
        opacity: "0.7"
    },

    seletedListItem: {
        backgroundColor: "#FF9800 !important",
        "& .MuiListItemText-root": {
            opacity: 1
        }
    },
    nested: {
        paddingLeft: theme.spacing(5),
        backgroundColor: "#eee"

    },
}));

const MainAdmin = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [toggleDrawer, setToggleDrawer] = useState(false);
    const initialSubMenuState = [false, false, false, false, false, false, false, false, false, false, false];
    const [openSubMenu, setOpenSubMenu] = useState(initialSubMenuState);

    const handleSubMenu = (activeIndex) => {
        setOpenSubMenu((openSubMenu) => {
            openSubMenu[activeIndex] = !openSubMenu[activeIndex];
            return openSubMenu;
        })
    }

    const listItemsArray = [
        {
            name: " Home Page",
            path: "/admin/manage-homepage",
            icon: <HomeIcon className={classes.listItemIcon} />,
            activeIndex: 0,
            hasSubMenu: true,
            subMenu: [
                {
                    subMenuName: "Manage Carousel",
                    path: "/admin/manage-homepage/manage-carousel",
                    icon: <ViewCarouselIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 0
                },
                {
                    subMenuName: "Why Us Section",
                    path: "/admin/manage-homepage/why-us",
                    icon: <LiveHelpIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 1
                }
            ]
        },
        {
            name: " Customers",
            path: "/admin/manage-customers",
            icon: <GroupIcon className={classes.listItemIcon} />,
            activeIndex: 1,
            hasSubMenu: false,
            subMenu: []
        },
        {
            name: " Bookings",
            path: "/admin/manage-bookings",
            icon: <WorkIcon className={classes.listItemIcon} />,
            activeIndex: 2,
            hasSubMenu: false,
            subMenu: []
        },
        {
            name: " Destinations",
            path: "/admin/manage-destinations",
            icon: <LocationOnIcon className={classes.listItemIcon} />,
            activeIndex: 3,
            hasSubMenu: true,
            subMenu: [
                {
                    subMenuName: "Veiw Destinations",
                    path: "/admin/manage-destinations/view-destinations",
                    icon: <VisibilityIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 0
                },
                {
                    subMenuName: "Add Destinations",
                    path: "/admin/manage-destinations/add-destinations",
                    icon: <AddCircleIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 1
                }
            ]
        },
        {
            name: " Cities",
            path: "/admin/manage-cities",
            icon: <LocationCityIcon className={classes.listItemIcon} />,
            activeIndex: 4,
            hasSubMenu: true,
            subMenu: [
                {
                    subMenuName: "View Cities",
                    path: "/admin/manage-cities/view-cities",
                    icon: <VisibilityIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 0
                },
                {
                    subMenuName: "Add Cities",
                    path: "/admin/manage-cities/add-cities",
                    icon: <AddCircleIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 1
                }
            ]
        }
        ,
        {
            name: " Hotels",
            path: "/admin/manage-hotels",
            icon: <HotelIcon className={classes.listItemIcon} />,
            activeIndex: 5,
            hasSubMenu: true,
            subMenu: [
                {
                    subMenuName: "View Hotels",
                    path: "/admin/manage-hotels/view-hotels",
                    icon: <VisibilityIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 0
                },
                {
                    subMenuName: "Add Hotels",
                    path: "/admin/manage-hotels/add-hotels",
                    icon: <AddCircleIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 1
                }
            ]
        },
        {
            name: " Package Types",
            path: "/admin/manage-package-types",
            icon: <LayersIcon className={classes.listItemIcon} />,
            activeIndex: 6,
            hasSubMenu: true,
            subMenu: [
                {
                    subMenuName: "View Package Types",
                    path: "/admin/manage-package-types/view-package-types",
                    icon: <VisibilityIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 0
                },
                {
                    subMenuName: "Add Package Types",
                    path: "/admin/manage-package-types/add-package-types",
                    icon: <AddCircleIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 1
                }
            ]
        },
        {
            name: " Package Themes",
            path: "/admin/manage-package-themes",
            icon: <LibraryBooksIcon className={classes.listItemIcon} />,
            activeIndex: 7,
            hasSubMenu: true,
            subMenu: [
                {
                    subMenuName: "View Package Themes",
                    path: "/admin/manage-package-themes/view-package-themes",
                    icon: <VisibilityIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 0
                },
                {
                    subMenuName: "Add Package Themes",
                    path: "/admin/manage-package-themes/add-package-themes",
                    icon: <AddCircleIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 1
                }
            ]
        },
        {
            name: " Packages",
            path: "/admin/manage-packages",
            icon: <DvrIcon className={classes.listItemIcon} />,
            activeIndex: 8,
            hasSubMenu: true,
            subMenu: [
                {
                    subMenuName: "View Packages",
                    path: "/admin/manage-packages/view-packages",
                    icon: <VisibilityIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 0
                },
                {
                    subMenuName: "Add Packages",
                    path: "/admin/manage-packages/add-packages",
                    icon: <AddCircleIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 1
                }
            ]
        },
        {
            name: " Itinerary",
            path: "/admin/manage-itinerary",
            icon: <ListAltIcon className={classes.listItemIcon} />,
            activeIndex: 9,
            hasSubMenu: true,
            subMenu: [
                {
                    subMenuName: "View Itinerary",
                    path: "/admin/manage-itinerary/view-itinerary",
                    icon: <VisibilityIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 0
                },
                {
                    subMenuName: "Add Itinerary",
                    path: "/admin/manage-itinerary/add-itinerary",
                    icon: <AddCircleIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 1
                }
            ]
        },
        {
            name: "Trips",
            path: "/admin/manage-trips",
            icon: <FlightIcon className={classes.listItemIcon} />,
            activeIndex: 10,
            hasSubMenu: true,
            subMenu: [
                {
                    subMenuName: "View Trips",
                    path: "/admin/manage-trips/view-trips",
                    icon: <VisibilityIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 0
                },
                {
                    subMenuName: "Add Trips",
                    path: "/admin/manage-trips/add-trips",
                    icon: <AddCircleIcon className={classes.listItemIcon} />,
                    subMenuActiveIndex: 1
                }
            ]
        }
    ]

    useEffect(() => {
        listItemsArray.forEach((item) => {
            switch (window.location.pathname) {
                case `${item.path}`:
                    if (selectedIndex !== item.activeIndex) {
                        setSelectedIndex(item.activeIndex);
                    }
                    break;
                default:
                    break;
            }
        })
    })

    const listContainer = (
        <List
            component="nav"
            className={classes.listContainer}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Console
                </ListSubheader>
            }>
            {listItemsArray.map((item, key) => (
                <React.Fragment key={key} >
                    <Divider />
                    <ListItem
                        button
                        // onClick={() => { fnToggleDrawer(false); setSelectedIndex(item.activeIndex); }}
                        onClick={() => { handleSubMenu(item.activeIndex); setSelectedIndex(item.activeIndex); }}
                        component={Link}
                        to={item.path}
                        selected={selectedIndex === item.activeIndex}
                        classes={{ selected: classes.seletedListItem }}>
                        <ListItemIcon >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} disableTypography >{item.name}</ListItemText>
                        {item.hasSubMenu ? openSubMenu[item.activeIndex] ? <ExpandLess /> : <ExpandMore /> : null}
                    </ListItem>
                    <Collapse in={openSubMenu[item.activeIndex]} timeout="auto" unmountOnExit>
                        {item.subMenu.map((subMenuItem, keySub) => (
                            <List key={keySub} component="div" disablePadding className={classes.listContainer}>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        {subMenuItem.icon}
                                    </ListItemIcon>
                                    <ListItemText className={classes.nestedListItemText} disableTypography>{subMenuItem.subMenuName}</ListItemText>
                                </ListItem>
                                <Divider />
                            </List>
                        ))}
                    </Collapse>
                </React.Fragment>
            ))}

        </List>)

    const fnToggleDrawer = (value) => {
        setToggleDrawer(value);
    }

    const drawer = (
        <React.Fragment>
            <Button onClick={() => fnToggleDrawer(true)} className={classes.btnToggle} >
                <ExpandMoreIcon />
                Open Console</Button>
            <Drawer anchor="top" classes={{ paper: classes.drawerPaper }} open={toggleDrawer} onClose={() => fnToggleDrawer(false)}>
                {listContainer}
            </Drawer>
            <Grid container>
                <Grid item className={classes.contentDrawer}>
                    <Switch>
                        <Route exact path="/admin/manage-homepage" component={ManageHomePage} />
                    </Switch>
                </Grid>
            </Grid>
        </React.Fragment>

    )

    const fixedDrawer = (
        <Grid container>
            <Grid item md={2}>
                {listContainer}
            </Grid>
            <Grid item md={10} className={classes.contentFixed}>
                <Switch>
                    <Route exact path="/admin/manage-homepage" component={ManageHomePage} />
                </Switch>
            </Grid>
        </Grid >
    )

    return (
        <React.Fragment>
            {matches ? drawer : fixedDrawer}
        </React.Fragment>
    )
}

export default MainAdmin;