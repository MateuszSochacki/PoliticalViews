package com.poll.controller;

import com.poll.dto.IdDto;
import com.poll.dto.questionnaire.QuestionnaireCreateRequestDto;
import com.poll.dto.questionnaire.QuestionnaireResponseRequestDto;
import com.poll.service.QuestionnaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class QuestionnaireController {

    private static final String ENTITY_ID = "id";
    private static final String ADD_QUESTIONNAIRE = "/addQuestionnaire";
    private static final String FIND_QUESTIONNAIRE = "/findQuestionnaire";

    @Autowired
    private QuestionnaireService service;

    @PostMapping(value = ADD_QUESTIONNAIRE)
    public IdDto add(@RequestBody final QuestionnaireCreateRequestDto questionnaireDto) {
        return service.add(questionnaireDto);
    }

    @GetMapping(value = FIND_QUESTIONNAIRE)
    public QuestionnaireResponseRequestDto find(@RequestParam(value = ENTITY_ID) final String id) {
        return service.read(IdDto.of(Long.valueOf((id))));
    }
}
