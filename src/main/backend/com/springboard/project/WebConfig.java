package com.springboard.project;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.data.web.PageableArgumentResolver;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import java.util.List;

@Configuration
@PropertySources({
        @PropertySource("classpath:/META-INF/app_properties/viewName.properties"),
        @PropertySource("classpath:/META-INF/app_properties/page.properties"),
})
public class WebConfig extends WebMvcConfigurationSupport{

    @Bean
    ViewResolver viewResolver(){
        return new InternalResourceViewResolver("/WEB-INF/views/",".jsp");
    }

    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("**").addResourceLocations("classpath:/static/");
        registry.addResourceHandler("/public/**").addResourceLocations("classpath:/static/");
        registry.addResourceHandler("/webjars/bootstrap/**").addResourceLocations("classpath:/META-INF/resources/webjars/bootstrap/4.0.0/dist/");
        registry.addResourceHandler("/webjars/jquery/**").addResourceLocations("classpath:/META-INF/resources/webjars/jquery/3.3.1/dist/");
        registry.addResourceHandler("/webjars/font-awesome/**").addResourceLocations("classpath:/META-INF/resources/webjars/font-awesome/4.7.0/css/");
    }

    @Override
    protected void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        /* adding pageable argument on handler method */
        argumentResolvers.add(new PageableHandlerMethodArgumentResolver());
    }

    @Override
    protected void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }
}
