package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.CustomerUserAccount;
import lk.ijse.spring.entity.RentalRequest;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.CustomerUserAccountRepo;
import lk.ijse.spring.repo.RentalRequestRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private RentalRequestRepo rentalRequestRepo;

    @Autowired
    private CustomerUserAccountRepo customerUserAccountRepo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private CarRepo carRepo;





    @Override
    public void checkUserAccount(String userName,String password) {
        if (customerUserAccountRepo.existsById(userName)){
            String pass = customerUserAccountRepo.getPassWordByUserName(userName);
            if (!pass.equals(password)){
                throw new RuntimeException("Password Incorrect");
            }
        }else {
            throw new RuntimeException("userName Incorrect");
        }

    }











    @Override
    public void existUserCustomerAccount(String userName){

        boolean b = customerUserAccountRepo.existsById(userName);
        if (b==true){
            throw new RuntimeException("User Account Already Exist");
        }
    }

    @Override
    public void existEmail(String email) {
        String s = customerRepo.existsByEmail(email);
        if (s!=null){
            throw new RuntimeException("Email Already Exist");
        }
    }


    @Transactional
    @Override
    public void saveCustomer(@RequestBody RegisterCustomerDTO registerCustomerDTO) {
        if (!customerRepo.existsById(registerCustomerDTO.getCusId())) {
            customerRepo.save(mapper.map(registerCustomerDTO, Customer.class));
            if (!customerUserAccountRepo.existsById(registerCustomerDTO.getUsername())) {
                customerUserAccountRepo.save(mapper.map(registerCustomerDTO, CustomerUserAccount.class));
            } else {
                throw new RuntimeException("UserAccount Already Exist");
            }
        } else {
            throw new RuntimeException("Customer Already Exist..!");
        }
    }




    @Override
    public String getNewId() {
        String lastCustId = customerRepo.getLastCustId();

        String[] split = lastCustId.split("-");
        long index = Long.parseLong(split[1]);

        long incrementId=++index;

        if (incrementId<10){
            return "C-00"+incrementId ;
        }else if (incrementId>=10 && index<100){
            return "C-0"+ incrementId ;
        }else if(incrementId>=100){
            return "C-"+ incrementId ;
        }
        return "C-001";
    }


    @Override
    public void deleteCustomer(String cusId) {
        if (customerRepo.existsById(cusId)) {
            customerRepo.deleteById(cusId);
        } else {
            throw new RuntimeException("Please check the Customer ID.. No Such Customer..!");
        }
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (customerRepo.existsById(dto.getCusId())) {
            customerRepo.save(mapper.map(dto, Customer.class));
        } else {
            throw new RuntimeException("No Such Customer To Update..! Please Check the ID..!");
        }
    }

    @Override
    public CustomerDTO searchCustomer(String cusId) {
        if (customerRepo.existsById(cusId)) {
            return mapper.map(customerRepo.findById(cusId).get(), CustomerDTO.class);
        } else {
            throw new RuntimeException("No Customer For " + cusId + " ..!");
        }
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        return mapper.map(customerRepo.findAll(), new TypeToken<List<CustomerDTO>>() {
        }.getType());
    }

/*    @Override
    public String generateCustomerId() {
        return customerRepo.generateCustomerId();
    }*/

    @Override
    public int countSavedCustomers() {
        return customerRepo.countSavedCustomers();
    }

    @Override
    public List<Car> viewAllCars() {
        return carRepo.findAll();
    }

    @Override
    public List<Car> rentalRequest(RentalRequestDTO rentalRequestDTO) {
        if (!rentalRequestRepo.existsById(rentalRequestDTO.getRequestId())) {

            Customer customer = customerRepo.getCustomerById(rentalRequestDTO.getCusId());
            Car car = carRepo.getCarById(rentalRequestDTO.getCarId());
            RentalRequest rentalRequest = new RentalRequest();
            rentalRequest.setRequestId(rentalRequestDTO.getRequestId());
            rentalRequest.setCustomer(customer);
            rentalRequest.setCar(car);
            rentalRequest.setPickupDateAndTime(rentalRequestDTO.getPickupDateAndTime());
            rentalRequest.setDamagePaySlip(rentalRequestDTO.getDamagePaySlip());
            rentalRequest.setRentPayment(rentalRequestDTO.getRentPayment());
            rentalRequest.setState("pending");
            rentalRequestRepo.save(rentalRequest);
        } else {
            throw new RuntimeException("Rental request Fail");
        }
        return null;
    }
}


