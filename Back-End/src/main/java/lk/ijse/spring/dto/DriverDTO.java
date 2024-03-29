package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class DriverDTO {
    private String driverId;
    private String email;
    private String contactNumber;
    private String drivingLicenseNumber;
    private String address;
    private String state;
}
