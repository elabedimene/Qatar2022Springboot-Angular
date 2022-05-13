package world.cup.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import world.cup.models.Game;
import world.cup.repositories.GameRepository;
import world.cup.service.GameService;

@CrossOrigin(origins = "*" , maxAge = 3600)
@RestController
@RequestMapping("/api")
public class GameController {
	
	@Autowired
	GameRepository gamerepo;
	
	
	
	
	@GetMapping("/Games")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public List<Game> getAllGames() {
		List<Game> pro = gamerepo.findAll();
        return pro;
	    
	}

	@PostMapping("/addGame")
	@PreAuthorize("hasRole('ADMIN')")
	public Game addGame(@Valid @RequestBody Game Game) {
	    return gamerepo.save(Game);
	}

	
	@GetMapping("/Game/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Game findGameById(@PathVariable(value = "id") Long Id) {
	    return gamerepo.findById(Id).orElseThrow(null);
	           // .orElseThrow(() -> new ResourceNotFoundException("Game", "id", Id));
	}
	
	@DeleteMapping("/Game/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> deleteGame(@PathVariable(value = "id") Long GameId) {
	    Game Game = gamerepo.findById(GameId).orElseThrow(null);
	            //.orElseThrow(() -> new ResourceNotFoundException("Game", "id", GameId));

	   gamerepo.deleteById(GameId);
	    gamerepo.delete(Game);

	    return ResponseEntity.ok().build();
	}
	
	@PutMapping("/Game/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Game updateGame(@PathVariable(value = "id") Long Id,
	                                        @Valid @RequestBody Game GameDetails) {

	    Game Game = gamerepo.findById(Id).orElseThrow(null);
	    
	   
	    Game.setDate(GameDetails.getDate());
	    Game.setEquipe1(GameDetails.getEquipe1());
	    Game.setEquipe2(GameDetails.getEquipe2());
	    

	    Game updatedGame = gamerepo.save(Game);
	    return updatedGame;
	}
	
	

	

	}
	

