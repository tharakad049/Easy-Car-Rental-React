import  axios from "../axios";

class CarService {
    getCarImage = async (carId,view) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('easy/v1/car/getCarImage?carId='+carId+'&view='+view, {
                responseType: 'blob',
            })

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    getAllCar = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('easy/v1/car/getAllCars')

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    addCarImage = async (data,carId) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('easy/v1/car/addCarImage?carId='+carId,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    addCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('easy/v1/car/addCar',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    updateCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('easy/v1/car/updateCar',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    updateCarImage = async (carImage,carId, view) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('easy/v1/car/updateCarImage?carId='+carId+'&view='+view,carImage)
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
export default new CarService();