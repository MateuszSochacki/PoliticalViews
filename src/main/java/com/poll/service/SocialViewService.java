package com.poll.service;

import com.poll.dto.IdDto;
import com.poll.dto.socialView.SocialViewCreateRequestDto;
import com.poll.mapper.SocialViewMapper;
import com.poll.repository.EconomyRepository;
import com.poll.repository.SocialViewRepository;
import com.poll.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SocialViewService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SocialViewRepository socialViewRepository;

    public IdDto add(SocialViewCreateRequestDto dto) {
        return IdDto.of(
                socialViewRepository.save(
                        SocialViewMapper.fromDto(dto, userRepository.findUser(dto.getUserId()))));
    }
}
