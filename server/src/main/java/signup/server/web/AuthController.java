package signup.server.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import signup.server.domain.User;
import signup.server.domain.UserRepository;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity login(HttpServletRequest request, User candidate) {
        User origin = userRepository.findByAccountId(candidate.getAccountId());

        if (origin == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("user not found");
        }

        try {
            origin.verify(candidate);

            HttpSession session = request.getSession();
            session.setAttribute("user", candidate);

            return ResponseEntity.accepted().build();
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}
