import AxiosInstance from './wrapper'

class Request {
    // constructor() {
    //     this.axios = AxiosInstance;
    // }

    get = ({ path, payload: { params = null, data = null } }) => {
        return AxiosInstance.request({ method: 'GET', url: path, params, data });
    }

    post = ({ path, payload: { params = null, data = null } }) => {
        return AxiosInstance.request({ method: 'POST', url: path, params, data });
    }

    patch = ({ path, payload: { params = null, data = null } }) => {
        return AxiosInstance.request({ method: 'PATCH', url: path, params, data });
    }

    delete = ({ path, payload: { params = null, data = null } }) => {
        return AxiosInstance.request({ method: 'DELETE', url: path, params, data });
    }

    put = ({ path, payload: { params = null, data = null } }) => {
        return AxiosInstance.request({ method: 'PUT', url: path, params, data });
    }
}

export default Request;