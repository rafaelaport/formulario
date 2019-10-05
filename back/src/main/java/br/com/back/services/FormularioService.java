package br.com.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.back.models.Formulario;
import br.com.back.repositories.FormularioRepository;

@Service
public class FormularioService {
	
	@Autowired
	private FormularioRepository formularioRepository;
	
	public Optional<Formulario> findById(Long idFormulario){
		return formularioRepository.findById(idFormulario);
	}
	
	public List<Formulario> findAll(){
		return formularioRepository.findAll();
	}
	
	public Formulario save(Formulario formulario) {
		return formularioRepository.save(formulario);
	}
	
	/*public void deleteById(Long idFormulario) {
		formularioRepository.deleteById(idFormulario);
	}
	
	public void deleteAll() {
		formularioRepository.deleteAll();
	}*/

}
