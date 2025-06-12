package com.mohit.foodappbackend;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class Config implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // applies to all endpoints
                .allowedOrigins("http://localhost:5173") // only allow Vite dev server
                .allowedMethods("GET", "OPTIONS")
                .allowedHeaders("*");
    }
}
