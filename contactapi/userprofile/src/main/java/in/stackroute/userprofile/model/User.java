package in.stackroute.userprofile.model;



import javax.persistence.*;

@Entity
@Table(name = "REGD_USERS")
public class User {

    @Id //primary key
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increment value
    private int userId;
    private String firstname;
    private String lastname;
    private String email;
    private String city;
    private String phone;
    private String age;
    private String password;

    public User() {
    }

    public User(int userId, String firstname, String lastname, String email, String city, String phone, String age, String password) {
        this.userId = userId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.city = city;
        this.phone = phone;
        this.age = age;
        this.password = password;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
