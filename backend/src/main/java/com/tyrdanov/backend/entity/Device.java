package com.tyrdanov.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "devices")
public class Device {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private Integer price;

    private String brand;

    private String type;

    private Integer year;

    private String color;

    private String country;

    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "bucket_id", nullable = true)
    private Bucket bucket = null;

}
