package com.tyrdanov.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tyrdanov.backend.dto.DeviceDto;
import com.tyrdanov.backend.mapper.DeviceMapper;
import com.tyrdanov.backend.repository.DeviceRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DeviceService {

    private final DeviceMapper mapper;
    private final DeviceRepository repository;

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
        final var device = mapper.toDevice(deviceDto);
        final var created = repository.save(device);

        return mapper.toDto(created);
    }

    public DeviceDto update(DeviceDto deviceDto) {
        final var device = mapper.toDevice(deviceDto);
        final var updated = repository.save(device);

        return mapper.toDto(updated);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}
