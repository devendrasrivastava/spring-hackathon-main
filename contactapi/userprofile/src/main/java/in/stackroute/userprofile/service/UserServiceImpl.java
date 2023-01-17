package in.stackroute.userprofile.service;

import in.stackroute.userprofile.exceptions.CredentialsMismatchException;
import in.stackroute.userprofile.exceptions.UserExistsException;
import in.stackroute.userprofile.model.User;
import in.stackroute.userprofile.model.UserCredentials;
import in.stackroute.userprofile.model.UserReset;
import in.stackroute.userprofile.repository.UserProfileRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{


    @Autowired
    private UserProfileRepository repository;


    @Autowired
    private JWTGeneratorService jwtGeneratorService;


    // here user with same email cannot register again
    // if user enters a duplicate email, this method with throw UserExistsException
    // if all ok, then user details will be registered in the MySQL database
    @Override
    public User registerUser(User newUser) throws UserExistsException {
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        String encryptedpwd = bcrypt.encode(newUser.getPassword());

        //this will encrypt the password in the hash code
        newUser.setPassword(encryptedpwd);


        //if user email already exist then this condition will execute
    if(repository.existsByEmail(newUser.getEmail())){
        throw new UserExistsException("User with the email already Exists");
    }

    // if all ok, then this will save the user details in the MySql server
        User user = repository.save(newUser);

        return user;
}

    

    @Override
    public String authenticateUser(UserCredentials credentials) throws CredentialsMismatchException {
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

        Optional<User> userByEmail = repository.getUserByEmail(credentials.getEmail());
        if(userByEmail.isEmpty()){

            throw new CredentialsMismatchException("InValid credentials");
        }
        User user = userByEmail.get();
        if(bcrypt.matches(credentials.getPassword(),user.getPassword())){
//        if (user.getPassword().equals(credentials.getPassword())){
//            logger.info("user authenticated successfully");
            String token = jwtGeneratorService.generateToken(credentials.getEmail());
            return token;
        }else{
            throw new CredentialsMismatchException("InValid credentials");
        }
    }


}
