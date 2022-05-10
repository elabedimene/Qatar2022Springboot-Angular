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

import world.cup.models.Ticket;
import world.cup.repositories.TicketRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class TicketController {

	@Autowired
	TicketRepository ticketrepo;
	
	
	
	
	@GetMapping("/Tickets")
	public List<Ticket> getAllTickets() {
		List<Ticket> pro = ticketrepo.findAll();
        return pro;
	    
	}

	@PostMapping("/addTicket")
	public Ticket addTicket(@Valid @RequestBody Ticket Ticket) {
	    return ticketrepo.save(Ticket);
	}

	
	@GetMapping("/Ticket/{id}")
	public Ticket findTicketById(@PathVariable(value = "id") Long Id) {
	    return ticketrepo.findById(Id).orElseThrow(null);
	           // .orElseThrow(() -> new ResourceNotFoundException("Ticket", "id", Id));
	}
	
	@DeleteMapping("/Ticket/{id}")
	public ResponseEntity<?> deleteTicket(@PathVariable(value = "id") Long TicketId) {
	    Ticket Ticket = ticketrepo.findById(TicketId).orElseThrow(null);
	            //.orElseThrow(() -> new ResourceNotFoundException("Ticket", "id", TicketId));

	   // TicketRepository.deleteById(TicketId);
	    ticketrepo.delete(Ticket);

	    return ResponseEntity.ok().build();
	}
	
	@PutMapping("/Ticket/{id}")
	public Ticket updateTicket(@PathVariable(value = "id") Long Id,
	                                        @Valid @RequestBody Ticket TicketDetails) {

	    Ticket Ticket = ticketrepo.findById(Id).orElseThrow(null);
	    
	   
	    Ticket.setPrice(TicketDetails.getPrice());
	    Ticket.setSellDate(TicketDetails.getSellDate());
	    
	    

	    Ticket updatedTicket = ticketrepo.save(Ticket);
	    return updatedTicket;
	}
	
	

		
}
