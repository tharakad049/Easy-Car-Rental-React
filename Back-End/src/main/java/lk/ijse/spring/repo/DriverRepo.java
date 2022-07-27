package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DriverRepo extends JpaRepository<Driver, String> {
/*    @Query(value = "slect driverId from Driver order by driverId desc LIMIT 1", nativeQuery = true)
    String generateDriverId();*/

@Query("select v from Driver v where v.driverId=?1")
public Driver getDriverById(String id);

}
