package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class Customer {
    @Id
    private String cusId;
    private String email;
    private String nicNumber;
    private String drivingLicenseNumber;
    private String address;
    private String contactNumber;

    @OneToMany(mappedBy = "customer")
    private List<RentalRequest> rentalRequests = new ArrayList<RentalRequest>();
}
