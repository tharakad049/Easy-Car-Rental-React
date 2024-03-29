package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Car {
    @Id
    private String carId;
    private String vehicleType;
    private String brand;
    private String numOfPassenger;
    private String transmissionType;
    private String fuelType;
    private String dailyPrice;
    private String monthlyPrice;
    private String dailyFreeKm;
    private String monthlyFreeKm;
    private String priceOfExtraKm;
    private String registerNumber;
    private String color;
    private String state;

    @OneToMany(mappedBy = "car")
    private Set<DriverSchedule> driverSchedules = new HashSet<DriverSchedule>();



}