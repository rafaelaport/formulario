package br.com.back.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.back.models.Usuario;
import br.com.back.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public Optional<Usuario> findById(Long idUsuario){
		return usuarioRepository.findById(idUsuario);
	}
//	
//	if(usuario.nome === "usuario@email.com" &&
//		      usuario.senha === '123456'){
//
//		        this.usuarioAutenticado = true;
//		        this.mostrarMenuEmitter.emit(true);
//		        this.router.navigate(['/']);
//
//		      } else {
//
//		        this.usuarioAutenticado = false;
//		        this.mostrarMenuEmitter.emit(false);
//
//		      }

}
