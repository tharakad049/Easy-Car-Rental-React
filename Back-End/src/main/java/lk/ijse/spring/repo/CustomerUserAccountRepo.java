package lk.ijse.spring.repo;

import lk.ijse.spring.entity.CustomerUserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

@Transactional
public interface CustomerUserAccountRepo extends JpaRepository<CustomerUserAccount, String> {

    @Query("select c.password from CustomerUserAccount c where c.userName=?1")
    public String getPassWordByUserName(String userName);

}
