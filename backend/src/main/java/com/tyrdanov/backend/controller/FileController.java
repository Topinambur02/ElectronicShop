package com.tyrdanov.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tyrdanov.backend.dto.FileDto;
import com.tyrdanov.backend.service.FileService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/files")
public class FileController {
    
    private final FileService service;

    @GetMapping
    public List<FileDto> getAll() {
        return service.getAll();
    }

    @GetMapping("{id}")
    public FileDto getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public FileDto create(@RequestParam MultipartFile file) {
        return service.create(file);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

}
