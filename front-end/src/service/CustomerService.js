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
import  axios from "../axios";

class CustomerService {

    registerCustomer= async (data) => {
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

/*    uploadImageCustomerNIC= async (dataFile,cusID) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('easy/v1/customer/uploadIdImage?cusId'+cusID,dataFile)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    uploadImageCustomerDrivingLicence= async (dataFile,cusID) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('easy/v1/customer/uploadLicenceImage?cusId'+cusID,dataFile)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }*/





/*
    //----------------------------------------------------------------------------------------
*/


    uploadImageCustomerNIC= async (dataFile, cusId) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('easy/v1/customer/uploadIdImage?cusId='+cusId,dataFile)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    uploadImageCustomerDrivingLicence= async (dataFile, cusID) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('easy/v1/customer/uploadLicenceImage?cusId='+cusID,dataFile)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    getLastCustId= async () =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('easy/v1/customer/generateCusId')

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }











    checkCustomerUserAccount=async (userName,password) =>{
        const promise = new Promise((resolve, reject) => {
            var qs = require('qs');
            var data = qs.stringify({
                'userName': userName,
                'password': password,
            });
            var config = {
                method: 'post',
                url: 'easy/v1/customer/checkAccount',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
            };
            axios(config)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }






















    ifExistCustomerUserAccount= async (userName) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('easy/v1/customer/ifExistUserAccount?userName='+userName)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    ifExistEmail= async (email) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('easy/v1/customer/ifExistEmail?email='+email)

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

export default new CustomerService();