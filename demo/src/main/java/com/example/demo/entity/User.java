package com.example.demo.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long _id;

    @Column(name = "first_name", nullable = false, unique = true)
    private String _firstName;

    @Column(name = "last_name", nullable = false, unique = true)
    private String _lastName;

    @Column(name = "email", nullable = false, unique = true)
    private String _email;

    @Column(name = "password", nullable = false, unique = true)
    private String _password;

    @OneToMany(mappedBy = "_user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Song> _songs;

}
