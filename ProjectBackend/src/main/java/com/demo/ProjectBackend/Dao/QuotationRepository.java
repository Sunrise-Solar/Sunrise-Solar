package com.demo.ProjectBackend.Dao;

import org.springframework.data.repository.CrudRepository;

import com.demo.ProjectBackend.beans.Quotation;

public interface QuotationRepository extends CrudRepository<Quotation,Integer>{

}
