package br.com.formulario.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import br.com.formulario.back.models.Formulario;

@Repository
public interface FormularioRepository extends JpaRepository<Formulario, Long> {

}
