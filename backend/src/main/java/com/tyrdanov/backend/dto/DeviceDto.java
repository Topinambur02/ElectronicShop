package com.tyrdanov.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeviceDto {
    
    private Long id;

    private String name;

    private Integer price;

    private String brand;

    private String type;

    private Integer year;

    private String color;

    private String country;

    private Long bucketId;

    private Long imageId;

}
