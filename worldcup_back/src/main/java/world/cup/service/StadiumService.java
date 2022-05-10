package world.cup.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import world.cup.models.Stadium;
import world.cup.repositories.StadiumRepository;

@Service
@Transactional
public class StadiumService {

	private final StadiumRepository stadiumRepo ;

    @Autowired
    public StadiumService(StadiumRepository stadiumRepo) {
        this.stadiumRepo = stadiumRepo;
    }

    
    public List<Stadium> findAllStadium() {
        return stadiumRepo.findAll();
    }

    
    public Stadium addStadium(Stadium stadium) {
       return stadiumRepo.save(stadium);
    }
    
    public Stadium updateStadium(Stadium stadium) {
        return stadiumRepo.save(stadium);
    }

    public Stadium findStadiumById(Long id) {
      return stadiumRepo.findById(id).orElseThrow();
    }

   // public void deleteStadium(Long id){
    //	stadiumRepo.deleteStadiumById(id);
    //}
	
	
}
