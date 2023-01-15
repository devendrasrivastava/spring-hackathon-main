package in.stackroute.userprofile.controller;

import in.stackroute.userprofile.exceptions.CredentialsMismatchException;
import in.stackroute.userprofile.exceptions.UserExistsException;
import in.stackroute.userprofile.model.User;
import in.stackroute.userprofile.model.UserCredentials;
import in.stackroute.userprofile.model.UserReset;
import in.stackroute.userprofile.repository.UserProfileRepository;
import in.stackroute.userprofile.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Map;

@RestController
@RequestMapping("api/v1/users")
public class UserController {

    @Autowired
    private UserService service;


    @PostMapping("register")
    public ResponseEntity<User> registerUser(@RequestBody User newUser) throws UserExistsException {
        User addedUser = service.registerUser(newUser);
        return new ResponseEntity<>(addedUser, HttpStatus.CREATED);
    }

    @PostMapping("login")
    public ResponseEntity<?> loginUser(@RequestBody UserCredentials credentials, HttpSession session) throws CredentialsMismatchException {
        String token = service.authenticateUser(credentials);

        Map<String, ?> data = Map.of("jwt_token", token, "status", 200, "email", credentials.getEmail());

        return new ResponseEntity<>(data,HttpStatus.OK);

    }


}
