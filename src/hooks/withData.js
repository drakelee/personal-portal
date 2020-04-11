import axios from 'axios'

const get = () => {
    return axios.get('http://localhost:8080/events')
}