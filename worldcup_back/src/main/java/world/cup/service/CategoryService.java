package world.cup.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import world.cup.models.Category;
import world.cup.repositories.CategoryRepository;

@Service
@Transactional
public class CategoryService {

	private final CategoryRepository categoryRepo ;

    @Autowired
    public CategoryService(CategoryRepository categoryRepo) {
        this.categoryRepo = categoryRepo;
    }

    
    public List<Category> findAllCategory() {
        return categoryRepo.findAll();
    }

    
    public Category addCategory(Category category) {
       return categoryRepo.save(category);
    }
    
    public Category updateCategory(Category category) {
        return categoryRepo.save(category);
    }

    public Category findCategoryById(Long id) {
      return categoryRepo.findById(id).orElseThrow();
    }

   // public void deleteCategory(Long id){
    //	categoryRepo.deleteCategoryById(id);
    //}
}
