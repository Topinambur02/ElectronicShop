package com.tyrdanov.backend.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import com.tyrdanov.backend.dto.BucketDto;
import com.tyrdanov.backend.entity.Bucket;
import com.tyrdanov.backend.entity.Device;

@Mapper
public interface BucketMapper {

    @Mapping(target = "deviceIds", source = ".", qualifiedByName = "getDeviceIds")
    BucketDto toDto(Bucket bucket);

    @Named("getDeviceIds")
    default List<Long> getDeviceIds(Bucket bucket) {
        return bucket
                .getDevices()
                .stream()
                .map(Device::getId)
                .toList();
    }

}
