package com.poll.dto.user;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class UserCreateRequestDto {

    @NotNull
    @NotEmpty
    private final String userName;

    @NotNull
    @NotEmpty
    private final String password;

    public static UserCreateRequestDto of(final String userName, final String password) {
        return new UserCreateRequestDto(userName, password);
    }
}
