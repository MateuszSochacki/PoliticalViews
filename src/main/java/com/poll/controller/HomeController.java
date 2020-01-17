package com.poll.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping({"/","/{path:(?!.*.js|.*.css|.*.jpg).*$}"})
    public  String index(){
        return "index";
    }

}