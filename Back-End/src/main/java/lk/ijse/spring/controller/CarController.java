package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.ImageDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.FileDownloadUtil;
import lk.ijse.spring.util.ResponseUtil;
import lk.ijse.spring.util.SearchFileUtil;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@RequestMapping("easy/v1/car")
@CrossOrigin
public class CarController {

    @Autowired
    CarService carService;

    @Autowired
    AdminService adminService;

    @Autowired
    FileDownloadUtil fileDownloadUtil;

    @Autowired
    SearchFileUtil searchFileUtil;

   /* @Autowired
    FileUploadUtil fileUploadUtil;*/



    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path = "addCar",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCar(@RequestBody CarDTO car){
        carService.saveCar(car);
        return new ResponseUtil(200, "Saved", null);
    }

    @SneakyThrows
    @PostMapping(path = "addCarImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addCarImage(@RequestParam(value = "param") MultipartFile[] multipartFile , @RequestParam("carId") String carId){

        String pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\CarImage\\";

        String [] carImageView={"Front","Back","Side","Interior"};
        for (int i = 0; i < multipartFile.length; i++) {
            String[] split=multipartFile[i].getContentType().split("/");

            if (split[1].equals("jpeg") || split[1].equals("png")){
                String imageName=carId+carImageView[i]+".jpeg";
                Files.copy(multipartFile[i].getInputStream(), Paths.get(pathDirectory+ File.separator+imageName), StandardCopyOption.REPLACE_EXISTING);
                //fileUploadUtil.saveFile(pathDirectory+imageName , multipartFile[i]);

            }else {
                return new ResponseUtil(404,"please..  must be Car images type  jpeg or png",null);
            }
        }
        return new ResponseUtil(200,"Car images added complete",null);
    }

    @GetMapping(path = "getCarImage" , produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<?> getCarImage(@RequestBody ImageDTO imageDTO){
        Resource fileAsResource = fileDownloadUtil.getFileAsResource(imageDTO);

        if (fileAsResource==null){
            return ResponseEntity.badRequest().contentType(MediaType.APPLICATION_JSON).body("Car Image not found");
        }
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(fileAsResource);
    }



    @PutMapping(path = "updateCar" , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCar(@RequestBody CarDTO car){
        carService.updateCar(car);
        return new ResponseUtil(200, "Updated", null);
    }

    @SneakyThrows
    @PutMapping(path = "updateCarImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCarImage(@RequestParam(value = "carImage") MultipartFile multipartFile , @RequestParam("carId") String carId ,@RequestParam("view") String view){

        String pathDirectory = "E:\\CarRental System Assignment\\Car-Rental-System-New\\src\\main\\resources\\static\\CarImage";
        if (searchFileUtil.searchFile(pathDirectory,carId+view+".jpeg")){
            Files.copy(multipartFile.getInputStream(),Paths.get(pathDirectory+File.separator+carId+view+".jpeg"),StandardCopyOption.REPLACE_EXISTING);
            return new ResponseUtil(200,"car Image Updated",null);
        }
        return new ResponseUtil(200,"car Image Fail",null);
    }


    @DeleteMapping(params = {"carId"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCar(@RequestParam String carId){
        carService.deleteCar(carId);
        return new ResponseUtil(200, "Deleted", null);
    }

    @SneakyThrows
    @DeleteMapping(path = "deleteCarImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCarAllImages(@RequestParam String carId){
        String pathDirectory = "E:\\CarRental System Assignment\\Car-Rental-System-New\\src\\main\\resources\\static\\CarImage";
        String [] carImageView={"Front","Back","Side","Interior"};

        for (int i=0; i<carImageView.length; i++){
            Files.deleteIfExists(Paths.get(pathDirectory+File.separator+carId+carImageView[i]+".jpeg"));
        }

        return new ResponseUtil(200,"car Delete success",null);
    }



    @GetMapping(path = "viewRentalRequest", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil viewRentalRequest(){
        List<RentalRequestDTO> allRentalRequest = adminService.rentalRequests();
        return new ResponseUtil(200,"car Delete success",allRentalRequest);
    }

    @GetMapping(path ="getAllCars" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCars(){
        List<CarDTO> allCars = carService.getAllCars();
        return new ResponseUtil(200,"Get All Cars",allCars);
    }
}
