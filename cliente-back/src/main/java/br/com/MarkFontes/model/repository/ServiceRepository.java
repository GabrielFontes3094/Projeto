package br.com.MarkFontes.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.MarkFontes.entity.Servico;

public interface ServiceRepository extends JpaRepository<Servico, Integer> {

}
