package br.com.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.back.models.Usuario;
import br.com.back.services.UsuarioService;

@RestController
@RequestMapping("/login")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
//	@GetMapping
//	public List<Usuario> findAll(){
//		return usuarioService.findAll();
//	}
	
	@GetMapping(value="/{idUsuario}")
	public ResponseEntity<Usuario> findById(@PathVariable Long idUsuario){
		return usuarioService.findById(idUsuario)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
//	@PostMapping
//	public ResponseEntity<Usuario> create(@Valid @RequestBody Usuario usuario){
//		Usuario obj = usuarioService.save(usuario);
//		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
//		return ResponseEntity.created(uri).body(obj);
//	}
	
//	@PutMapping(value="/{id}")
//	public ResponseEntity update(@PathVariable("id") long id,
//	                                      @RequestBody Usuario usuario) {
//	   return usuarioService.findById(id)
//	           .map(record -> {
//	               record.setName(contact.getName());
//	               record.setEmail(contact.getEmail());
//	               record.setPhone(contact.getPhone());
//	               Contact updated = contactService.save(record);
//	               return ResponseEntity.accepted().body(updated);
//	           }).orElse(ResponseEntity.notFound().build());
//	}
	
//	@DeleteMapping(path ={"/{id}"})
//	public ResponseEntity<?> delete(@PathVariable long id) {
//	   return usuarioService.findById(id)
//	           .map(record -> {
//	        	   usuarioService.deleteById(id);
//	               return ResponseEntity.ok().build();
//	           }).orElse(ResponseEntity.notFound().build());
//	}
}
