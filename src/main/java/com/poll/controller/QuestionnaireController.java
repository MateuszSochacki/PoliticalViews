package com.poll.controller;

import com.poll.dto.IdDto;
import com.poll.dto.questionnaire.QuestionnaireCreateRequestDto;
import com.poll.service.QuestionnaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionnaireController {

    private static final String ENTITY_ID = "id";
    private static final String ADD_QUESTIONNAIRE = "/addQuestionnaire";

    @Autowired
    private QuestionnaireService service;

    @PostMapping(value = ADD_QUESTIONNAIRE)
    public IdDto add(@RequestBody final QuestionnaireCreateRequestDto questionnaireDto) {
        return service.add(questionnaireDto);
    }
}
