import Axios from "axios";

export default {
    all() {
        return Axios.get('/restaurants')
    },
    getById(id) {
        return Axios.get(`/restaurants/${id}`)
    },
    update(id, data) {
        return Axios.put(`/restaurants/${id}`, data)
    },
    store(data) {
        return Axios.post('/restaurants', data)
    },
}