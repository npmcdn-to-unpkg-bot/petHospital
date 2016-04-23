import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

//use Java Class, not XML
@Configuration
@EnableAutoConfiguration
//scan Spring Bean
@ComponentScan( basePackages = {"petHospital.application", "petHospical.controller"} )
public class WebApplication {
    public static void main(String args[]){
        //run SpringApplication
        SpringApplication.run(WebApplication.class, args);
    }
}