package signup.server.domain;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    @Query("SELECT * FROM user WHERE account_id = :accountId")
    User findByAccountId(String accountId);

    @Query("SELECT * FROM user WHERE email = :email")
    User findByEmail(String email);

    @Query("SELECT * FROM user WHERE phone_number = :phoneNumber")
    User findByPhoneNumber(String phoneNumber);
}
