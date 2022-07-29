package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import lk.ijse.spring.util.SearchFileUtil;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@RequestMapping("easy/v1/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @Autowired
    SearchFileUtil searchFileUtil;

    @GetMapping(path = "ifExistEmail")
    public ResponseUtil ifExistEmail(@RequestParam String email){
        customerService.existEmail(email);
        return new ResponseUtil(200,"Email Checked OK",null);
    }

    @GetMapping(path = "ifExistUserAccount")
    public ResponseUtil ifExistUserAccount(@RequestParam String userName){
        customerService.existUserCustomerAccount(userName);
        return new ResponseUtil(200,"User Account Free",null);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path = "addCustomer",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@RequestBody RegisterCustomerDTO registerCustomerDTO) {
        customerService.saveCustomer(registerCustomerDTO);
        return new ResponseUtil(200, "Customer Added Successfully", null);
    }

    @PutMapping(path = "updateCustomer" , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(CustomerDTO customer) {
        customerService.updateCustomer(customer);
        return new ResponseUtil(200, "Updated", null);
    }
    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(String id) {
        customerService.deleteCustomer(id);
        return new ResponseUtil(200, "Deleted", null);
    }




    //-----------------------------------------------------------------------------------------------------------------




    @SneakyThrows
    @PostMapping(path = "uploadIdImage", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadCustomerIDImage(@RequestParam("ID")  MultipartFile multipartFile, @RequestParam String cusId) {

        String pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\IdCardImage";

        String imageName=cusId+"ID_CARD"+".jpeg";
        Files.copy(multipartFile.getInputStream(), Paths.get(pathDirectory+ File.separator+imageName), StandardCopyOption.REPLACE_EXISTING);

        return new ResponseUtil(200,"ID_CARD image added success..",null);
    }


    @SneakyThrows
    @PostMapping(path = "uploadLicenceImage")
    public ResponseUtil uploadCustomerLicenceImage(@RequestParam("Licence")MultipartFile multipartFiles, @RequestParam String cusId){

        String pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\LicenseImage";
        String imageName=cusId+"Licence_CARD"+".jpeg";
        Files.copy(multipartFiles.getInputStream(), Paths.get(pathDirectory+ File.separator+imageName), StandardCopyOption.REPLACE_EXISTING);

        return new ResponseUtil(200,"Licence_Card image added success..",null);
    }




    //-------------------------------------------------------------------------------------------------------------





    @GetMapping(path = "getCustomerImage", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getCustomerIdImage(@RequestParam String name) {
        String pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\IdCardImage";
        Path path = Paths.get(pathDirectory + File.separator + name);
        return new ResponseUtil(200, "Customer id image return complete", path);

    }



    @GetMapping(path = "getCustomerLicenceImage", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getCustomerLicenceImage(@RequestParam String name) {
        String pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\LicenseImage";
        Path path = Paths.get(pathDirectory + File.separator + name);
        return new ResponseUtil(200, "Customer license image return complete", path);

    }





  //---------------------------------------------------------------------------------------------------------------------------






    @SneakyThrows
    @PostMapping(path = "updateCustomerIdCardImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomerImage(@RequestParam(value = "customerImage") MultipartFile multipartFile , @RequestParam("cusId") String cusId ,@RequestParam("view") String view){

        String pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\IdCardImage";
        if (searchFileUtil.searchFile(pathDirectory,cusId+view+".jpeg")){
            Files.copy(multipartFile.getInputStream(),Paths.get(pathDirectory+File.separator+cusId+view+".jpeg"),StandardCopyOption.REPLACE_EXISTING);
            return new ResponseUtil(200,"car Image Updated",null);
        }
        return new ResponseUtil(200,"car Image Fail",null);
    }






    //--------------------------------------------------------------------------------------------------------------------





    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomer(String id) {
        return new ResponseUtil(200, "Ok", customerService.searchCustomer(id));
    }
    @GetMapping(path = " getAll",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCustomers() {
        return new ResponseUtil(200, "Ok", customerService.getAllCustomers());
    }

    @GetMapping(path ="/COUNT/{count}")
    public ResponseUtil countSavedCustomers(@PathVariable String count){
        return new ResponseUtil(200, "Ök", customerService.countSavedCustomers());
    }

    @GetMapping(params = {"test"})
    public ResponseUtil generateCustomersId(@RequestParam String test) {
        return new ResponseUtil(200, "Ok", customerService.generateCustomerId());
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil ViewAllCar(){
        List<Car> cars =customerService.viewAllCars();
        return new ResponseUtil(200,"All car Details received",cars);
    }

    @GetMapping
    public ResponseUtil RentalRequest(RentalRequestDTO rentalRequestDTO){
        List<Car> cars =customerService.rentalRequest(rentalRequestDTO);
        return new ResponseUtil(200,"Request received",cars);

    }
}
