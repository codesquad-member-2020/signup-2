package signup.server.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import signup.server.domain.User;
import signup.server.domain.UserRepository;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDuplicationCheckService duplicationCheckService;

    @GetMapping("/signup-check")
    public ResponseEntity<String> signupCheck(@RequestParam("type") String type, @RequestParam("value") String value) {
        User target = duplicationCheckService.checkDuplication(type, value);

        if (target == null) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok().build();
    }

}
