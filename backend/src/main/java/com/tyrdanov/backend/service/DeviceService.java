package com.tyrdanov.backend.service;

import org.springframework.stereotype.Service;

import com.tyrdanov.backend.repository.DeviceRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DeviceService {
    
    private final DeviceRepository repository;

}
