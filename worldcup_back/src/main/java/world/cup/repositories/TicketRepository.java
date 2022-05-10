package world.cup.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import world.cup.models.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long>{
	List<Ticket> findAll();
}
