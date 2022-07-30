package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

@Transactional
public interface CustomerRepo extends JpaRepository<Customer,  String>{

    @Query("select c from Customer c where c.cusId=?1")
    public Customer getCustomerById(String id);

/*    @Query(value = "select cusId from Customer order by cusId desc LIMIT 1", nativeQuery = true)
    String generateCustomerId();*/

    @Query(value = "select cusId from Customer order by cusId desc LIMIT 1", nativeQuery = true)
    public String getLastCustId();

    @Query(value = "select COUNT(*) from Customer", nativeQuery = true)
    int countSavedCustomers();

    @Query("select c.email from Customer c where c.email=?1")
    public String existsByEmail(String email);

}
