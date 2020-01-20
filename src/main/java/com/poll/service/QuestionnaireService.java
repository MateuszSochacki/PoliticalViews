package com.poll.service;

import com.poll.dto.IdDto;
import com.poll.dto.questionnaire.QuestionnaireCreateRequestDto;
import com.poll.mapper.QuestionnaireMapper;
import com.poll.repository.QuestionnaireRepository;
import com.poll.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class QuestionnaireService {

    @Autowired
    private QuestionnaireRepository questionnaireRepository;
    
    @Autowired
    private UserRepository userRepository;

    public IdDto add(QuestionnaireCreateRequestDto questionnaireDto) {
        return IdDto.of(
                questionnaireRepository.save(
                        QuestionnaireMapper.fromDto(
                                questionnaireDto,
                                userRepository.findUser(questionnaireDto.getUserId()))));
    }
}
