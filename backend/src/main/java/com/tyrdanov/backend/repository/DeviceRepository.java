package com.tyrdanov.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tyrdanov.backend.entity.Device;

public interface DeviceRepository extends JpaRepository<Device, Long> {
}
