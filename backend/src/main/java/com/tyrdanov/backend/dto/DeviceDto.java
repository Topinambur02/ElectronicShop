package com.tyrdanov.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeviceDto {
    
    private Long id;

    private String name;

    private String description;

    private Integer price;

    private String imageUrl;

    private Long bucketId;

}
