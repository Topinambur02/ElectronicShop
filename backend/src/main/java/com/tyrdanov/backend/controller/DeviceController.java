package com.tyrdanov.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.tyrdanov.backend.dto.DeviceDto;
import com.tyrdanov.backend.service.DeviceService;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequiredArgsConstructor
@RequestMapping("device")
public class DeviceController {
    
    private final DeviceService service;

    @GetMapping
    public List<DeviceDto> getAll() {
        return service.getAll();
    }

    @GetMapping("{id}")
    public DeviceDto getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public DeviceDto create(@RequestBody DeviceDto dto) {
        return service.create(dto);
    }

    @PutMapping
    public DeviceDto update(@RequestBody DeviceDto dto) {
        return service.update(dto);
    }
    
    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

}
