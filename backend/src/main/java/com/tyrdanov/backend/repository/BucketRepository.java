package com.tyrdanov.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tyrdanov.backend.entity.Bucket;

public interface BucketRepository extends JpaRepository<Bucket, Long> {
}
