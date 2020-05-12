import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import PopularDestinations from './PopularDestinations';
import TrendingPackages from './TrendingPackages';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import CustomerReview from './CustomerReview';
import WhyUs from './WhyUs';
import api from '../../Utilities/api';

const Home = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const useStyles = makeStyles((theme) => ({
        containerStyleDestinations: {
            backgroundColor: "#eee",
            padding: "30px 0",
            margin: "0 auto",
            textAlign: "center",
            // backgroundColor: "blue"
            maxWidth: "100%"
        },
        containerStylePackages: {
            padding: "30px 0",
            textAlign: "center",
            marginBottom: "100px",
            // backgroundColor: "red"
        },
        containerWhyUs: {
            padding: "30px 0",
            textAlign: "center",
            height: "100%",
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/images/parallax/bgparallax-09.jpg') center/cover no-repeat fixed",
            //backgroundImage: "url('/images/parallax/bgparallax-01.jpg')",
            maxWidth: "100%",
            color: "white",
            // marginBottom: "100px"
        },
        containerStyleReviews: {
            // backgroundColor: "#eee",
            padding: "30px 0",
            // maxWidth: "100%",
            textAlign: "center",
            // margin: "0 auto"
            marginBottom: "100px"
        }

    }));

    let trendingPackageSlider = {
        dots: true,
        infinite: true,
        arrow: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };

    let customerReviewSlider = {
        dots: true,
        infinite: true,
        arrow: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };

    //If the screen size is less than 600px ie xs
    if (matches) {
        trendingPackageSlider = {
            dots: false,
            infinite: true,
            arrow: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
            cssEase: "linear"
        };

        customerReviewSlider = {
            dots: false,
            infinite: true,
            arrow: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
            cssEase: "linear"
        };
    }


    let [homeCarouselDtls, setHomeCarouselDtls] = useState([]);

    useEffect(() => {
        api.fnGetHomeCarouselDtls().then(res => {
            setHomeCarouselDtls(res.data);
        })
    }, []);

    let popularDestinations = [
        {
            title: "Ooty",
            subheader: "A place in the mountains",
            imageUrl: "/images/destinations/img01.jpg",
            description: "Ooty is one of the most sort after places in India. The misty weather is cooler in summer and gives a much needed rest to mind"
        },
        {
            title: "Ladakh",
            subheader: "Another place in the mountains",
            imageUrl: "/images/destinations/img02.jpg",
            description: "A place must visit in the summer, with its open beautiful layers of mountains"
        },
        {
            title: "Taj Mahal",
            subheader: "A monument of Love",
            imageUrl: "/images/destinations/img03.jpg",
            description: "One of the 7 wonders of the world. A symbol of Love. Its enough to describe it. You must see it if you havn't still with your loved onces"
        },
        {
            title: "Jaipur",
            subheader: "Also know as pink city",
            imageUrl: "/images/destinations/img04.jpg",
            description: "Ooty is one of the most sort after places in India. The misty weather is cooler in summer and gives a much needed rest to mind"
        },
        {
            title: "Himalayas",
            subheader: "Highest peak in the world",
            imageUrl: "/images/destinations/img05.jpg",
            description: "A place must visit in the summer, with its open beautiful layers of mountains"
        },
        {
            title: "Rajasthan",
            subheader: "Land of Rajputs",
            imageUrl: "/images/destinations/img06.jpg",
            description: "One of the 7 wonders of the world. A symbol of Love. Its enough to describe it. You must see it if you havn't still with your loved onces"
        }
    ]

    let trendingPackages = [

        {
            title: "Kullu Manali and Shimla",
            subheader: "A place in the mountains",
            imageUrl: "/images/packages/img-multi-1.jpg",
            description: "Ooty is one of the most sort after places in India. The misty weather is cooler in summer and gives a much needed rest to mind",
            dateRange: "5D/4N",
            cost: "2000"
        },
        {
            title: "South India Star",
            subheader: "Another place in the mountains",
            imageUrl: "/images/packages/img-multi-2.jpg",
            description: "A place must visit in the summer, with its open beautiful layers of mountains",
            dateRange: "2D/1N",
            cost: "2000"
        },
        {
            title: "West India Package",
            subheader: "A monument of Love",
            imageUrl: "/images/packages/img-multi-3.jpg",
            description: "One of the 7 wonders of the world. A symbol of Love. Its enough to describe it. You must see it if you havn't still with your loved onces",
            dateRange: "6D/5N",
            cost: "2000"
        },
        {
            title: "East India Package",
            subheader: "Also know as pink city",
            imageUrl: "/images/packages/img-multi-4.jpg",
            description: "Ooty is one of the most sort after places in India. The misty weather is cooler in summer and gives a much needed rest to mind",
            dateRange: "7D/6N",
            cost: "5000"
        },
        {
            title: "Piligrim Package",
            subheader: "A monument of Love",
            imageUrl: "/images/packages/img-multi-5.jpg",
            description: "One of the 7 wonders of the world. A symbol of Love. Its enough to describe it. You must see it if you havn't still with your loved onces",
            dateRange: "6D/5N",
            cost: "4532"
        },
        {
            title: "Goa Package",
            subheader: "Also know as pink city",
            imageUrl: "/images/packages/img-multi-6.jpg",
            description: "Ooty is one of the most sort after places in India. The misty weather is cooler in summer and gives a much needed rest to mind",
            dateRange: "7D/6N",
            cost: "5000"
        }

    ]

    const customerReviews = [
        {
            customerName: "John Snow",
            customerReview: "I had a very memorable experience with TripLens. The service provider is really helpfull in helping us choose the right package and they are kind enough to adjust according to our needs.",
            imageUrl: "/images/customerProfiles/profilePic1.jpg"
        },
        {
            customerName: "Sanjay Snow",
            customerReview: "Excellent services n best prices for every packages which are customizable.",
            imageUrl: "/images/customerProfiles/profilePic2.jpg"
        }
    ]

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container disableGutters maxWidth="xl">
                <Carousel interval="4000" indicators={false}>
                    {
                        homeCarouselDtls.map((item, index) => {
                            return (<CarouselItem key={index} item={item} />)
                        })
                    }
                </Carousel>
            </Container>
            <Container disableGutters className={classes.containerStyleDestinations}  >
                <Typography variant="h1">
                    Most Popular Destinations
                </Typography>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    {
                        popularDestinations.map((item, index) => {
                            return (<PopularDestinations key={index} item={item} />)
                        })
                    }

                </Grid>
            </Container>
            <Container disableGutters className={classes.containerStylePackages} >
                <Typography variant="h1">
                    Top Trending Packages
                </Typography>
                <Slider {...trendingPackageSlider}  >
                    {
                        trendingPackages.map((item, index) => {
                            return (<TrendingPackages key={index} item={item} />)
                        })
                    }
                </Slider>
            </Container>
            <Container disableGutters className={classes.containerWhyUs}>
                <Typography variant="h1">
                    Why TripLens?
                </Typography>
                <WhyUs />
            </Container>
            <Container disableGutters className={classes.containerStyleReviews}>
                <Typography variant="h1">
                    Our Customer Reviews
                </Typography>
                <Slider {...customerReviewSlider} >
                    {
                        customerReviews.map((item, index) => {
                            return (<CustomerReview key={index} item={item} />)
                        })
                    }
                </Slider>
            </Container>
        </React.Fragment>
    )

}

export default Home;