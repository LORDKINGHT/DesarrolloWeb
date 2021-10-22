package co.edu.poli.mongodb;

import org.springframework.boot.SpringApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableSwagger2
public class SpringbootMongodbApplication {

	public static void main(String[] args) {
		
		SpringApplication.run(SpringbootMongodbApplication.class, args);
		
	}

}
