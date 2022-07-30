package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RegisterCustomerDTO {
    private String cusId;
    private String email;
    private String nicNumber;
    private String drivingLicenseNumber;
    private String address;
    private String contactNumber;
    private String username;
    private String password;
}
