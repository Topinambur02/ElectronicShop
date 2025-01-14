package com.tyrdanov.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.tyrdanov.backend.dto.FileDto;
import com.tyrdanov.backend.entity.File;

@Mapper(componentModel = "spring")
public interface FileMapper {
    
    @Mapping(target = "deviceIds", ignore = true)
    FileDto toDto(File file);

}
