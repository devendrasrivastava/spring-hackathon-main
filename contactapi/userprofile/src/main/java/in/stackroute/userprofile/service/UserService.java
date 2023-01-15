package in.stackroute.userprofile.service;

import in.stackroute.userprofile.exceptions.CredentialsMismatchException;
import in.stackroute.userprofile.exceptions.UserExistsException;
import in.stackroute.userprofile.model.User;
import in.stackroute.userprofile.model.UserCredentials;
import in.stackroute.userprofile.model.UserReset;

import java.util.Map;

public interface UserService {
    User registerUser(User newUser) throws UserExistsException;


    String authenticateUser(UserCredentials credentials) throws CredentialsMismatchException;
}
