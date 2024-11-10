package com.tyrdanov.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.tyrdanov.backend.dto.DeviceDto;
import com.tyrdanov.backend.entity.Device;

@Mapper(componentModel = "spring")
public interface DeviceMapper {
    
    @Mapping(target = "bucketId", ignore = true)
    DeviceDto toDto(Device device);

    @Mapping(target = "bucket", ignore = true)
    @Mapping(target = "id", source = "deviceDto.id")
    Device toDevice(DeviceDto deviceDto);

}
