import Axios from "axios";

export default {
    all() {
        return Axios.get('/restaurants')
    },
    getById(id) {
        return Axios.get(`/restaurants/${id}`)
    },
}