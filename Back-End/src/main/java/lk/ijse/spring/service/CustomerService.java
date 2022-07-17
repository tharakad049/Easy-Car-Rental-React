package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Car;

import java.util.List;

public interface CustomerService {
    void saveCustomer(RegisterCustomerDTO registerCustomerDTO);
    void deleteCustomer(String cusId);
    void updateCustomer(CustomerDTO dto);
    CustomerDTO searchCustomer(String cusId);
    List<CustomerDTO> getAllCustomers();
    String generateCustomerId();
    int countSavedCustomers();
    List<Car> viewAllCars();
    List<Car> rentalRequest(RentalRequestDTO rentalRequestDTO);
}
