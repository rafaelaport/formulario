package br.com.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import br.com.back.models.Formulario;

@Repository
public interface FormularioRepository extends JpaRepository<Formulario, Long> {

}
