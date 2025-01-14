package com.tyrdanov.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.tyrdanov.backend.dto.FileDto;
import com.tyrdanov.backend.entity.File;
import com.tyrdanov.backend.mapper.FileMapper;
import com.tyrdanov.backend.repository.FileRepository;

import io.minio.GetPresignedObjectUrlArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import io.minio.RemoveObjectArgs;
import io.minio.http.Method;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FileService {

    private static final String BUCKET_NAME = "electronicshop";
    private final FileRepository repository;
    private final FileMapper mapper;
    private final MinioClient minioClient;

    public List<FileDto> getAll() {
        return repository
                .findAll()
                .stream()
                .map(mapper::toDto)
                .toList();
    }

    public FileDto getById(Long id) {
        final var file = repository.findById(id).orElseThrow();

        return mapper.toDto(file);
    }

    public FileDto create(MultipartFile multipartFile) {
        try {
            final var name = multipartFile.getOriginalFilename();
            final var type = multipartFile.getContentType();
            final var size = multipartFile.getSize();
            final var inputStream = multipartFile.getInputStream();

            minioClient.putObject(
                PutObjectArgs
                    .builder()
                    .bucket(BUCKET_NAME)
                    .object(name)
                    .contentType(type)
                    .stream(inputStream, inputStream.available(), -1)
                    .build());

            final var url = minioClient.getPresignedObjectUrl(
                GetPresignedObjectUrlArgs
                    .builder()
                    .bucket(BUCKET_NAME)
                    .method(Method.GET)
                    .object(name)
                    .build()
            );
            final var file = File
                    .builder()
                    .name(name)
                    .url(url)
                    .type(type)
                    .size(size)
                    .devices(null)
                    .build();

            final var savedFile = repository.save(file);

            return mapper.toDto(savedFile);

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public void delete(Long id) {
        final var file = repository.findById(id).orElseThrow();
        final var name = file.getName();

        try {
            minioClient.removeObject(
                RemoveObjectArgs
                    .builder()
                    .bucket(BUCKET_NAME)
                    .object(name)
                    .build());

            repository.delete(file);
        } 
        catch (Exception e) {
            e.printStackTrace();
        }
    }

}
