package com.fransoufil.dsvendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fransoufil.dsvendas.dto.SaleDTO;
import com.fransoufil.dsvendas.dto.SaleSuccessDTO;
import com.fransoufil.dsvendas.dto.SaleSumDTO;
import com.fransoufil.dsvendas.entities.Sale;
import com.fransoufil.dsvendas.repositories.SaleRepository;
import com.fransoufil.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository saleRepository;
	
	//solução simples para evitar a consulta repetida: serve quando são poucos os parâmetros, no caso, apenas 5 vendedores
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
		sellerRepository.findAll();
		Page<Sale> result =  saleRepository.findAll(pageable);
		return result.map(SaleDTO::new);
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupBySeller() {
		return saleRepository.amountGroupBySeller();
	}
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupBySeller() {
		return saleRepository.successGroupBySeller();
	}
}

