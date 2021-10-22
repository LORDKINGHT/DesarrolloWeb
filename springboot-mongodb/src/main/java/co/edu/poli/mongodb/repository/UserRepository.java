package co.edu.poli.mongodb.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import co.edu.poli.mongodb.model.User;

public interface UserRepository extends MongoRepository<User, String>{


}
