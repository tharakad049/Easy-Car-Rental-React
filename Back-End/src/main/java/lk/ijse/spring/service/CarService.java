package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;

import java.util.List;

public interface CarService {

    void saveCar(CarDTO dto);
    void updateCar(CarDTO dto);
    void deleteCar(String carId);
    CarDTO searchCar(String carId);
    List<CarDTO> getAllCars();
    public CarDTO getCarById(String carId);
}
