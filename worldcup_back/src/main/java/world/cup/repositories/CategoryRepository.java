package world.cup.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import world.cup.models.*;

public interface CategoryRepository extends JpaRepository<Category, Long>{
	List<Category> findAll();
}
