package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.RentalRequest;
import lk.ijse.spring.repo.AdminServiceRepo;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.RentalRequestRepo;
import lk.ijse.spring.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminServiceRepo adminServiceRepo;

    @Autowired
    RentalRequestRepo rentalRequestRepo;

    @Autowired
    ModelMapper mapper;


    @Override
    public List<RentalRequestDTO> rentalRequests() {
        return null;
    }

    @Override
    public void saveAdmin(AdminDTO adminDTO) {
        if (!adminServiceRepo.existsById(adminDTO.getAdminId())){
            adminServiceRepo.save(mapper.map(adminDTO, Admin.class));
        }else {
            throw new RuntimeException(adminDTO.getAdminId() + " " + "Admin Already Exists..!");
        }
    }

    @Override
    public void updateAdmin(AdminDTO adminDTO) {
        if (adminServiceRepo.existsById(adminDTO.getAdminId())){
            adminServiceRepo.save(mapper.map(adminDTO, Admin.class));
        }else {
            throw new RuntimeException(adminDTO.getAdminId() + " " + "No Such Admin..! Please Check The Correct Id..!");
        }
    }

    @Override
    public void deleteAdmin(String id) {
        if (adminServiceRepo.existsById(id)){
            adminServiceRepo.deleteById(id);
        }else {
            throw new RuntimeException(id + " " + "No Such Admin..! Please Check The Correct Id..!");
        }
    }

    @Override
    public AdminDTO searchAdmin(String id) {
        if (adminServiceRepo.existsById(id)){
            Admin admin = adminServiceRepo.findById(id).get();
            return mapper.map(admin, AdminDTO.class);
        }else {
            throw new RuntimeException(id + " " + "No Such Admin..! Please Check The Id..!");
        }
    }

    @Override
    public List<AdminDTO> getAllAdmin() {
        List<Admin> all = adminServiceRepo.findAll();
        return mapper.map(all, new TypeToken<List<AdminDTO>>(){
        }.getType());
    }

}
