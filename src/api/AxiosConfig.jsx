import axios from 'axios'

const instance=axios.create({
    baseURL:'https://json-server-api-j9tt.onrender.com'
})
export default instance