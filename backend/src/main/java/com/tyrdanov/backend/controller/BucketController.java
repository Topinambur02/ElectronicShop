package com.tyrdanov.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tyrdanov.backend.dto.BucketDto;
import com.tyrdanov.backend.dto.DeviceDto;
import com.tyrdanov.backend.service.BucketService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("buckets")
public class BucketController {

    private final BucketService service;

    @PostMapping("/{bucketId}/add/{deviceId}")
    public BucketDto addDeviceToBucket(@PathVariable Long bucketId, @PathVariable Long deviceId) {
        return service.addDeviceToBucket(bucketId, deviceId);
    }

    @PostMapping("/{bucketId}/remove/{deviceId}")
    public BucketDto removeDeviceFromBucket(@PathVariable Long bucketId, @PathVariable Long deviceId) {
        return service.removeDeviceFromBucket(bucketId, deviceId);
    }

    @GetMapping("/{bucketId}/devices")
    public List<DeviceDto> getDevicesInBucket(@PathVariable Long bucketId) {
        return service.getDevices(bucketId);
    }

}
