package com.poll.controller;

import com.poll.dto.IdDto;
import com.poll.dto.stateView.StateViewCreateRequestDto;
import com.poll.service.StateViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StateViewController {

    private static final String ENTITY_ID = "id";
    private static final String ADD_STATE_VIEW = "/addStateView";

    @Autowired
    private StateViewService service;

    @PostMapping(value = ADD_STATE_VIEW)
    public IdDto add(@RequestBody final StateViewCreateRequestDto stateViewDto) {
        return service.add(stateViewDto);
    }
/*
    @GetMapping(value = FIND_DICTIONARY)
    public DictionaryResponseDto find(@RequestParam(value = ENTITY_ID) final String id) {
        return service.read(IdDto.of(Long.valueOf((id))));
    }

    @GetMapping(value = FIND_USERS_DICTIONARIES)
    public List<DictionaryDto> findUsersDictionaries(@RequestParam(value = ENTITY_ID) final String userId) {
        return service.readUsersDictionaries(IdDto.of(Long.valueOf((userId))));
    }

    @PutMapping(value = MODIFY_DICTIONARY)
    public DictionaryDto modify(@RequestBody final DictionaryDto dictionary) {
        return service.modify(dictionary);
    }

    @DeleteMapping(value = DELETE_DICTIONARY)
    public Boolean delete(@RequestBody final IdDto id) {
        return service.delete(id);
    }*/
}
