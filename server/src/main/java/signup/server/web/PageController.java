package signup.server.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping
    public String home() {
        return "home";
    }


    @GetMapping("info")
    public String info() {
        return "info";
    }

}
