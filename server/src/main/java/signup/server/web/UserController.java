package signup.server.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import signup.server.domain.User;
import signup.server.domain.UserRepository;

import java.net.URI;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private static Logger logger = LoggerFactory.getLogger(UserController.class);

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

    @PostMapping
    public ResponseEntity<String> signup(User user) {
        try {
            userRepository.save(user);
            URI uri = URI.create("/");
            return ResponseEntity.created(uri).build();
        } catch (Exception e) {
            logger.info(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

}
