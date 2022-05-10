package world.cup.repositories;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;

import world.cup.models.Game;

public interface GameRepository extends JpaRepository<Game, Long> {
		  List<Game> findAll();
		 

}
