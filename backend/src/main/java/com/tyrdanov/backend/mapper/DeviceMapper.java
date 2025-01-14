package com.tyrdanov.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.tyrdanov.backend.dto.DeviceDto;
import com.tyrdanov.backend.entity.Device;
import com.tyrdanov.backend.entity.File;

@Mapper
public interface DeviceMapper {
    
    @Mapping(target = "id", source = "device.id")
    @Mapping(target = "imageId", source = "file.id")
    @Mapping(target = "name", source = "device.name")
    @Mapping(target = "type", source = "device.type")
    @Mapping(target = "bucketId", source = "device.bucket.id")
    DeviceDto toDto(Device device);

    @Mapping(target = "bucket", ignore = true)
    @Mapping(target = "id", source = "deviceDto.id")
    @Mapping(target = "name", source = "deviceDto.name")
    @Mapping(target = "type", source = "deviceDto.type")
    Device toDevice(DeviceDto deviceDto, File file);

}
