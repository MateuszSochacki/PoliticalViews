package com.poll.mapper;

import com.poll.dto.stateView.StateViewCreateRequestDto;
import com.poll.model.StateViewEntity;

public final class StateViewMapper {

    public static StateViewEntity fromDto(final StateViewCreateRequestDto dto) {

        return new StateViewEntity(
                dto.getAutonomy(), dto.getZyzdem(), dto.getMilitaryService(), dto.getForeignPolicy(),
                dto.getImmigrationRights(), dto.getMedia(), dto.getAirPollutions(), dto.getWaterPollutions(),
                dto.getLandPollutions(), dto.getClimateChanges(), dto.getAgeReq(), dto.getEduReq(), dto.getWealthReq(),
                dto.getEthnicityReq(), dto.getLanguageIReq(), dto.getEduIReq(), dto.getEthnicityIReq(),
                dto.getReligionReq(), null
        );
    }

}
