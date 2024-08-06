package com.demo.ProjectBackend.Dao;

import org.springframework.data.repository.CrudRepository;

import com.demo.ProjectBackend.beans.Request;

public interface RequestRepository extends CrudRepository<Request,Integer>{

}
