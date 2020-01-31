package com.poll.mapper;

import com.poll.dto.socialView.SocialViewCreateRequestDto;
import com.poll.model.SocialViewEntity;
import com.poll.model.UserEntity;

public final class SocialViewMapper {

    public static SocialViewEntity fromDto(SocialViewCreateRequestDto dto, UserEntity userEntity) {

        return new SocialViewEntity(
                dto.getReligion(), dto.getDeathPenalty(), dto.getOrientation(), dto.getAbortion(),
                dto.getEuthanasia(), dto.getRace(), dto.getWomenEdu(), dto.getWomenEmploy(),
                dto.getWomenVoting(), dto.getWomenWage(), dto.getWomenMaternity(), dto.getStimAlcohol(), dto.getStimCannabis(),
                dto.getStimHard(), dto.getSitmNicotine(), userEntity
        );
    }
}
