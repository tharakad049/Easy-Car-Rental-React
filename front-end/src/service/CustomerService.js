/*
import  axios from "../axios";

class CustomerService {
    addCustomerImage = async (data,cusId) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('easy/v1/customer/uploadIdImage?cusId='+cusId,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    addCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('easy/v1/customer/addCustomer',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    getAllCustomers = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('easy/v1/customer/getAll')

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    updateCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('easy/v1/customer/updateCustomer',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    updateCustomerImage = async (image,cusId, view) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('easy/v1/customer/updateCustomerIdCardImage?cusId='+cusId+'&view='+view,image)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
}
export default new CustomerService();*/
