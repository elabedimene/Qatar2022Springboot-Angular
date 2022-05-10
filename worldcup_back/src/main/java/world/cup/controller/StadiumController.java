package world.cup.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import world.cup.models.Stadium;
import world.cup.repositories.StadiumRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class StadiumController {
	@Autowired
	StadiumRepository stadiumrepo;
	
	
	
	
	@GetMapping("/Stadiums")
	public List<Stadium> getAllStadiums() {
		List<Stadium> pro = stadiumrepo.findAll();
        return pro;
	    
	}

	@PostMapping("/addStadium")
	public Stadium addStadium(@Valid @RequestBody Stadium Stadium) {
	    return stadiumrepo.save(Stadium);
	}

	
	@GetMapping("/Stadium/{id}")
	public Stadium findStadiumById(@PathVariable(value = "id") Long Id) {
	    return stadiumrepo.findById(Id).orElseThrow(null);
	           // .orElseThrow(() -> new ResourceNotFoundException("Stadium", "id", Id));
	}
	
	@DeleteMapping("/Stadium/{id}")
	public ResponseEntity<?> deleteStadium(@PathVariable(value = "id") Long StadiumId) {
	    Stadium Stadium = stadiumrepo.findById(StadiumId).orElseThrow(null);
	            //.orElseThrow(() -> new ResourceNotFoundException("Stadium", "id", StadiumId));

	   // StadiumRepository.deleteById(StadiumId);
	    stadiumrepo.delete(Stadium);

	    return ResponseEntity.ok().build();
	}
	
	@PutMapping("/Stadium/{id}")
	public Stadium updateStadium(@PathVariable(value = "id") Long Id,
	                                        @Valid @RequestBody Stadium StadiumDetails) {

	    Stadium Stadium = stadiumrepo.findById(Id).orElseThrow(null);
	    
	   
	    Stadium.setAddress(StadiumDetails.getAddress());
	    Stadium.setCapacity(StadiumDetails.getCapacity());
	   
	    

	    Stadium updatedStadium = stadiumrepo.save(Stadium);
	    return updatedStadium;
	}
	
	

	
}
