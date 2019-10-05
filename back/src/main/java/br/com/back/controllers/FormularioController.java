package br.com.back.controllers;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.back.models.Formulario;
import br.com.back.services.FormularioService;

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
	
	@GetMapping
	@RequestMapping("/consulta")
	public List<Formulario> findAll(){
		return formularioService.findAll();
	}
	
	@GetMapping(value="consulta/{idFormulario}")
	public ResponseEntity<Formulario> findById(@PathVariable Long idFormulario){
		return formularioService.findById(idFormulario)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	

}
