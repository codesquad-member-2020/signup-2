package signup.server.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import signup.server.domain.User;
import signup.server.domain.UserRepository;

@Service
public class UserDuplicationCheckService {

    @Autowired
    private UserRepository userRepository;

    public User checkDuplication(String type, String value) {
        User user = null;

        switch (type) {
            case "accountId":
                user = userRepository.findByAccountId(value);
                break;
            case "email":
                user = userRepository.findByEmail(value);
                break;
            case "phoneNumber":
                user = userRepository.findByPhoneNumber(value);
                break;
        }

        return user;
    }

}
