package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.RentalRequest;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CarServiceImpl implements CarService {

    @Autowired
    public CarRepo carRepo;

    @Autowired
    public ModelMapper mapper;

    @Override
    public void saveCar(CarDTO dto) {
        if (!carRepo.existsById(dto.getCarId())){
            carRepo.save(mapper.map(dto, Car.class));
        }else {
            throw new RuntimeException("Car Already Exist..!");
        }
    }

    @Override
    public void updateCar(CarDTO dto) {
        if (carRepo.existsById(dto.getCarId())){
            carRepo.save(mapper.map(dto, Car.class));
        }else {
            throw new RuntimeException("No Such Car To Update..! Please Check the Id..!");
        }
    }

    @Override
    public void deleteCar(String carId) {
        if (carRepo.existsById(carId)){
            carRepo.deleteById(carId);
        }else {
            throw new RuntimeException("Please check the Car Id.. No Such Car..!");
        }
    }
    @Override
    public CarDTO searchCar(String carId) {
        if (carRepo.existsById(carId)){
            return mapper.map(carRepo.findById(carId).get(), CarDTO.class);
        }else {
            throw new RuntimeException("No Car For " + carId + " ..!");
        }
    }

    @Override
    public List<CarDTO> getAllCars() {
        long count = carRepo.count();
        if (count != 0) {
            List<Car> all = carRepo.findAll();
            List<CarDTO> allcars = new ArrayList<>();
            for (Car car : all) {
                allcars.add(mapper.map(car, CarDTO.class));
            }

            return allcars;
        } else {
            throw new RuntimeException("Car Empty");
        }
    }
}
