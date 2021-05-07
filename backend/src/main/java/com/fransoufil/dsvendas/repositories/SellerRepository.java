package com.fransoufil.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fransoufil.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
