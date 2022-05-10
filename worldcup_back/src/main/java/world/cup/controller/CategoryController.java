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

import world.cup.models.Category;
import world.cup.repositories.CategoryRepository;



@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class CategoryController {
	@Autowired
	CategoryRepository categoryrepo;
	
	
	
	
	@GetMapping("/Categorys")
	public List<Category> getAllCategorys() {
		List<Category> pro = categoryrepo.findAll();
        return pro;
	    
	}

	@PostMapping("/addCategory")
	public Category addCategory(@Valid @RequestBody Category Category) {
	    return categoryrepo.save(Category);
	}

	
	@GetMapping("/Category/{id}")
	public Category findCategoryById(@PathVariable(value = "id") Long Id) {
	    return categoryrepo.findById(Id).orElseThrow(null);
	           // .orElseThrow(() -> new ResourceNotFoundException("Category", "id", Id));
	}
	
	@DeleteMapping("/Category/{id}")
	public ResponseEntity<?> deleteCategory(@PathVariable(value = "id") Long CategoryId) {
	    Category Category = categoryrepo.findById(CategoryId).orElseThrow(null);
	            //.orElseThrow(() -> new ResourceNotFoundException("Category", "id", CategoryId));

	   // CategoryRepository.deleteById(CategoryId);
	    categoryrepo.delete(Category);

	    return ResponseEntity.ok().build();
	}
	
	@PutMapping("/Category/{id}")
	public Category updateCategory(@PathVariable(value = "id") Long Id,
	                                        @Valid @RequestBody Category CategoryDetails) {

	    Category Category = categoryrepo.findById(Id).orElseThrow(null);
	    
	   
	    Category.setName(CategoryDetails.getName());
	    
	    

	    Category updatedCategory = categoryrepo.save(Category);
	    return updatedCategory;
	}
	
	

	

}
