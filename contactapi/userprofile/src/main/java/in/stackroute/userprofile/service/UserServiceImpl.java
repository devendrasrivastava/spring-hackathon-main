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

//    private Logger logger=LoggerFactory.getLogger(UserServiceImpl.class);
    @Autowired
    private UserProfileRepository repository;

    PasswordEncoder passwordEncoder;


    @Autowired
    private JWTGeneratorService jwtGeneratorService;


@Override
public User registerUser(User newUser) throws UserExistsException {
    BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
    String encryptedpwd = bcrypt.encode(newUser.getPassword());
    newUser.setPassword(encryptedpwd);
    if(repository.existsByEmail(newUser.getEmail())){
//            logger.error("User already exists with the given email");
        throw new UserExistsException("User with the email already Exists");
    }
    User user = repository.save(newUser);
//        logger.info("User successfully registered");
    return user;
}

    

    @Override
    public String authenticateUser(UserCredentials credentials) throws CredentialsMismatchException {
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
//        logger.debug("Accessing database for getting user credentials");
        Optional<User> userByEmail = repository.getUserByEmail(credentials.getEmail());
        if(userByEmail.isEmpty()){
//            logger.error("User not found with the given email");
            throw new CredentialsMismatchException("InValid credentials");
        }
        User user = userByEmail.get();
        if(bcrypt.matches(credentials.getPassword(),user.getPassword())){
//        if (user.getPassword().equals(credentials.getPassword())){
//            logger.info("user authenticated successfully");
            String token = jwtGeneratorService.generateToken(credentials.getEmail());
            return token;
        }else{
//            logger.error("Password mismatch for the user with the given email");
            throw new CredentialsMismatchException("InValid credentials");
        }
    }


}
