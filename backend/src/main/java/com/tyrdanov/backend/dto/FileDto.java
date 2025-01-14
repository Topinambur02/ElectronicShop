package com.tyrdanov.backend.dto;

import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class FileDto {
    
    private Long id;

    private String name;

    private String url;

    private String type;

    private Long size;

    private List<Long> deviceIds;

}
