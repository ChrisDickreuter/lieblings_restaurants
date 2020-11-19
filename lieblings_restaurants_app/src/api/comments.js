import Axios from "axios";

export default {
    store(data) {
        return Axios.post('/comments', data)
    },
}