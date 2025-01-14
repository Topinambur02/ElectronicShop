package com.tyrdanov.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tyrdanov.backend.entity.File;

public interface FileRepository extends JpaRepository<File, Long> {

}
