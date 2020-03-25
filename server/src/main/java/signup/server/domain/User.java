package signup.server.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import signup.server.web.UnauthorizedException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class User {

    @Id
    private int id;

    private String accountId;

    @JsonIgnore
    private String password;

    private String name;

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private LocalDate birthday;

    private boolean isMale;

    private String email;

    private String phoneNumber;

    public void setId(int id) {
        this.id = id;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setBirthday(String birthday) {
        this.birthday = LocalDate.parse(birthday, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
    }

    public void setMale(boolean male) {
        isMale = male;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void verify(User candidate) {
        if(!password.equals(candidate.password))
            throw new UnauthorizedException();
    }

    public boolean matchId(Integer id) {
        return this.id == id;
    }
}
