package lk.ijse.spring.service;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.RentalRequestDTO;

import java.util.List;

public interface AdminService {

    List<RentalRequestDTO> rentalRequests();

    void saveAdmin(AdminDTO adminDTO);
    void updateAdmin(AdminDTO adminDTO);
    void deleteAdmin(String id);
    AdminDTO searchAdmin(String id);
    List<AdminDTO> getAllAdmin();


}
