package com.tyrdanov.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tyrdanov.backend.dto.DeviceDto;
import com.tyrdanov.backend.mapper.DeviceMapper;
import com.tyrdanov.backend.repository.DeviceRepository;
import com.tyrdanov.backend.repository.FileRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DeviceService {

    private final DeviceMapper mapper;
    private final DeviceRepository repository;
    private final FileRepository fileRepository;

    public List<DeviceDto> getAll() {
        return repository
                .findAll()
                .stream()
                .map(mapper::toDto)
                .toList();
    }

    public DeviceDto getById(Long id) {
        final var device = repository
                .findById(id)
                .orElseThrow();

        return mapper.toDto(device);
    }

    public DeviceDto create(DeviceDto deviceDto) {
        final var imageId = deviceDto.getImageId();
        final var file = fileRepository.findById(imageId).orElseThrow(() -> new RuntimeException("File not found"));
        final var device = mapper.toDevice(deviceDto, file);
        device.setFile(file);
        final var created = repository.save(device);

        return mapper.toDto(created);
    }

    public DeviceDto update(DeviceDto deviceDto) {
        final var imageId = deviceDto.getImageId();
        final var file = fileRepository.findById(imageId).orElseThrow(() -> new RuntimeException("File not found"));
        final var device = mapper.toDevice(deviceDto, file);
        final var updated = repository.save(device);

        return mapper.toDto(updated);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}
