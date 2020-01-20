package com.poll.dto.stateView;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public final class StateViewCreateRequestDto {

    @NotNull
    @NotEmpty
    private final String autonomy;

    @NotNull
    @NotEmpty
    private final String zyzdem;

    @NotNull
    @NotEmpty
    private final String militaryService;

    @NotNull
    @NotEmpty
    private final String foreignPolicy;

    @NotNull
    @NotEmpty
    private final String immigrationRights;

    @NotNull
    @NotEmpty
    private final String media;

    @NotNull
    @NotEmpty
    private final Boolean airPollutions;

    @NotNull
    @NotEmpty
    private final Boolean waterPollutions;

    @NotNull
    @NotEmpty
    private final Boolean landPollutions;

    @NotNull
    @NotEmpty
    private final Boolean climateChanges;

    @NotNull
    @NotEmpty
    private final Boolean ageReq;

    @NotNull
    @NotEmpty
    private final Boolean eduReq;

    @NotNull
    @NotEmpty
    private final Boolean wealthReq;

    @NotNull
    @NotEmpty
    private final Boolean ethnicityReq;

    @NotNull
    @NotEmpty
    private final Boolean languageIReq;

    @NotNull
    @NotEmpty
    private final Boolean eduIReq;

    @NotNull
    @NotEmpty
    private final Boolean ethnicityIReq;

    @NotNull
    @NotEmpty
    private final Boolean religionReq;

    public static StateViewCreateRequestDto of(
            final String autonomy,
            final String zyzdem,
            final String militaryService,
            final String foreignPolicy,
            final String immigrationRights,
            final String media,
            final Boolean airPollutions,
            final Boolean waterPollutions,
            final Boolean landPollutions,
            final Boolean climateChanges,
            final Boolean ageReq,
            final Boolean eduReq,
            final Boolean wealthReq,
            final Boolean ethnicityReq,
            final Boolean languageIReq,
            final Boolean eduIReq,
            final Boolean ethnicityIReq,
            final Boolean religionReq) {
        return new StateViewCreateRequestDto(
                autonomy,
                zyzdem,
                militaryService,
                foreignPolicy,
                immigrationRights,
                media,
                airPollutions,
                waterPollutions,
                landPollutions,
                climateChanges,
                ageReq,
                eduReq,
                wealthReq,
                ethnicityReq,
                languageIReq,
                eduIReq,
                ethnicityIReq,
                religionReq);
    }
}
