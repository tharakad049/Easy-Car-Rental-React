import  axios from "../axios";

class CarService {
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
}
export default new CarService();