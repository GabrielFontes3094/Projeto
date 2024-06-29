package br.com.MarkFontes.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.MarkFontes.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
