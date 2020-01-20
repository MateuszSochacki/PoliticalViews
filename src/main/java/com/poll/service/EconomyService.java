package com.poll.service;

import com.poll.dto.IdDto;
import com.poll.dto.economy.EconomyCreateRequestDto;
import com.poll.mapper.EconomyMapper;
import com.poll.repository.EconomyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class EconomyService {

    @Autowired
    private EconomyRepository economyRepository;

    public IdDto add(EconomyCreateRequestDto dto) {

        return IdDto.of(
                economyRepository.save(
                        EconomyMapper.fromDto(dto)));
    }
}
