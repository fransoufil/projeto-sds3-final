package com.fransoufil.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fransoufil.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
