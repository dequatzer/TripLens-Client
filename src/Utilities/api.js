import axios from 'axios';

export default {
    fnGetHomeCarouselDtls() {
        return axios.get("/api/get-home-carousel-dtls")
    }
}