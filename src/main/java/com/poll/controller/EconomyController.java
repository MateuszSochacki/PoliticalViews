package com.poll.controller;

import com.poll.dto.IdDto;
import com.poll.dto.economy.EconomyCreateRequestDto;
import com.poll.service.EconomyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EconomyController {

    private static final String ENTITY_ID = "id";
    private static final String ADD_ECONOMY = "/addEconomy";

    @Autowired
    private EconomyService service;

    @PostMapping(value = ADD_ECONOMY)
    public IdDto add(@RequestBody final EconomyCreateRequestDto economyDto) {
        return service.add(economyDto);
    }
}
