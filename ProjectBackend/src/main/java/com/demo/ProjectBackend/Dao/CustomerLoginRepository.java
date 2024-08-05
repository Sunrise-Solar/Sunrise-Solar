package com.demo.ProjectBackend.Dao;

import org.springframework.data.repository.CrudRepository;

import com.demo.ProjectBackend.beans.CustomerLogin;

public interface CustomerLoginRepository extends CrudRepository<CustomerLogin,Integer>{

}
