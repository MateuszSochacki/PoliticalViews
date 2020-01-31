package com.poll.service;

import com.poll.dto.IdDto;
import com.poll.dto.stateView.StateViewCreateRequestDto;
import com.poll.mapper.StateViewMapper;
import com.poll.repository.StateViewRepository;
import com.poll.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class StateViewService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StateViewRepository stateViewRepository;

    public IdDto add(StateViewCreateRequestDto stateViewDto) {

        return IdDto.of(
                stateViewRepository.save(
                        StateViewMapper.fromDto(stateViewDto, userRepository.findUser(stateViewDto.getUserId()))));
    }
}
