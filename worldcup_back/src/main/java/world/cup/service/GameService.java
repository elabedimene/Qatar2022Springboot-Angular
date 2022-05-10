package world.cup.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import world.cup.models.Game;
import world.cup.repositories.GameRepository;

@Service
@Transactional
public class GameService {

	
	private final GameRepository gameRepo ;

    @Autowired
    public GameService(GameRepository gameRepo) {
        this.gameRepo = gameRepo;
    }

    
    public List<Game> findAllGame() {
        return gameRepo.findAll();
    }

    
    public Game addGame(Game game) {
       return gameRepo.save(game);
    }
    
    public Game updateGame(Game game) {
        return gameRepo.save(game);
    }

    public Game findGameById(Long id) {
      return gameRepo.findById(id).orElseThrow();
    }

   // public void deleteGame(Long id){
    //	gameRepo.deleteGameById(id);
    //}
}
