package com.poll.controller;

import com.poll.dto.IdDto;
import com.poll.dto.socialView.SocialViewCreateRequestDto;
import com.poll.service.SocialViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SocialViewController {

    private static final String ENTITY_ID = "id";
    private static final String ADD_SOCIAL_VIEW = "/addSocialView";

    @Autowired
    private SocialViewService service;

    @PostMapping(value = ADD_SOCIAL_VIEW)
    public IdDto add(@RequestBody final SocialViewCreateRequestDto dto) {
        return service.add(dto);
    }
}
