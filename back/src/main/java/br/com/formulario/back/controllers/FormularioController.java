package br.com.formulario.back.controllers;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.formulario.back.models.Formulario;
import br.com.formulario.back.services.FormularioService;

@RestController
public class FormularioController {
	
	@Autowired
	private FormularioService formularioService;
	
	@PostMapping
	@RequestMapping("/painel")
	public ResponseEntity<Formulario> create(@Valid @RequestBody Formulario formulario){
		
		Formulario obj = formularioService.save(formulario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{idFormulario}")
				.buildAndExpand(obj.getIdFormulario()).toUri();
		
		return ResponseEntity.created(uri).body(obj);
	}

}
