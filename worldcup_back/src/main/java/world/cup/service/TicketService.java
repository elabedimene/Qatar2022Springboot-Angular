package world.cup.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import world.cup.models.Ticket;
import world.cup.repositories.TicketRepository;

@Service
@Transactional
public class TicketService {

	
	private final TicketRepository ticketRepo ;

    @Autowired
    public TicketService(TicketRepository ticketRepo) {
        this.ticketRepo = ticketRepo;
    }

    
    public List<Ticket> findAllTicket() {
        return ticketRepo.findAll();
    }

    
    public Ticket addTicket(Ticket ticket) {
       return ticketRepo.save(ticket);
    }
    
    public Ticket updateTicket(Ticket ticket) {
        return ticketRepo.save(ticket);
    }

    public Ticket findTicketById(Long id) {
      return ticketRepo.findById(id).orElseThrow();
    }

   // public void deleteTicket(Long id){
    //	ticketRepo.deleteTicketById(id);
    //}
}
