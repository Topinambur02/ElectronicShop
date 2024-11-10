package com.tyrdanov.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tyrdanov.backend.dto.BucketDto;
import com.tyrdanov.backend.dto.DeviceDto;
import com.tyrdanov.backend.mapper.BucketMapper;
import com.tyrdanov.backend.mapper.DeviceMapper;
import com.tyrdanov.backend.repository.BucketRepository;
import com.tyrdanov.backend.repository.DeviceRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BucketService {

        private final BucketMapper mapper;
        private final DeviceMapper deviceMapper;
        private final BucketRepository repository;
        private final DeviceRepository deviceRepository;

        public BucketDto addDeviceToBucket(Long bucketId, Long deviceId) {
                final var bucket = repository
                                .findById(bucketId)
                                .orElseThrow(() -> new RuntimeException("Bucket not found"));
                final var device = deviceRepository
                                .findById(deviceId)
                                .orElseThrow(() -> new RuntimeException("Device not found"));

                device.setBucket(bucket);
                deviceRepository.save(device);
                bucket.getDevices().add(device);

                final var dto = mapper.toDto(bucket);

                return dto;
        }

        public BucketDto removeDeviceFromBucket(Long bucketId, Long deviceId) {
                final var bucket = repository
                                .findById(bucketId)
                                .orElseThrow(() -> new RuntimeException("Bucket not found"));
                final var device = deviceRepository
                                .findById(deviceId)
                                .orElseThrow(() -> new RuntimeException("Device not found"));

                bucket.getDevices().remove(device);

                final var dto = mapper.toDto(bucket);

                return dto;
        }

        public List<DeviceDto> getDevices(Long bucketId) {
                final var bucket = repository
                                .findById(bucketId)
                                .orElseThrow(() -> new RuntimeException("Bucket not found"));
                return bucket.getDevices()
                                .stream()
                                .map(deviceMapper::toDto)
                                .toList();
        }

}
