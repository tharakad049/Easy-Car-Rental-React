package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.FileDownloadUtil;
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


    @PostMapping(path = "checkAccount", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseUtil checkUserAccount(String userName,String password){
        customerService.checkUserAccount(userName,password);
        return new ResponseUtil(200,"Login SuccessFull",null);
    }








    @GetMapping(path = "generateCusId")
    public ResponseUtil getNewCusId(){
        String newId = customerService.getNewId();
        return new ResponseUtil(200,"new Customer Id Received",newId);
    }

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
    public ResponseUtil uploadCustomerIDImage(@RequestParam("ID")  MultipartFile[] multipartFile, @RequestParam String cusId) {

        String pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\IdCardImage";
        String [] view={"Front","Back"};
        for (int i=0; i<view.length; i++){
            String imageName=cusId+"ID_CARD"+view[i]+".jpeg";
            if(!searchFileUtil.searchFile(pathDirectory, imageName)){
                Files.copy(multipartFile[i].getInputStream(), Paths.get(pathDirectory+ File.separator+imageName), StandardCopyOption.REPLACE_EXISTING);
            }else {
                return new ResponseUtil(400,"ID_CARD image Duplicate..",null);
            }
        }
        return new ResponseUtil(200,"ID_CARD image added success..",null);
    }

    @SneakyThrows
    @PostMapping(path = "uploadLicenceImage")
    public ResponseUtil uploadCustomerLicenceImage(@RequestParam("Licence")MultipartFile[] multipartFiles, @RequestParam String cusId){

        String pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\LicenseImage";
        String [] view={"Front","Back"};

        for (int i=0; i<view.length; i++){
            String imageName=cusId+"Licence_CARD"+view[i]+".jpeg";
            if(!searchFileUtil.searchFile(pathDirectory, imageName)){
                Files.copy(multipartFiles[i].getInputStream(), Paths.get(pathDirectory+ File.separator+imageName), StandardCopyOption.REPLACE_EXISTING);
            }else {
                return new ResponseUtil(400,"License_Card image Duplicate..",null);
            }
        }
        return new ResponseUtil(200,"License_Card image added success..",null);
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

  /*  @GetMapping(params = {"test"})
    public ResponseUtil generateCustomersId(@RequestParam String test) {
        return new ResponseUtil(200, "Ok", customerService.generateCustomerId());
    }*/

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil ViewAllCar(){
        List<CarDTO> cars =customerService.viewAllCars();
        return new ResponseUtil(200,"All car Details received",cars);
    }
}
