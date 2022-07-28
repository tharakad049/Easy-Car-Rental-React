package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Id;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CustomerDTO {
    @Id
    private String cusId;
    private String email;
    private String nicNumber;
    private String drivingLicenseNumber;
    private String address;
    private String contactNumber;
}
