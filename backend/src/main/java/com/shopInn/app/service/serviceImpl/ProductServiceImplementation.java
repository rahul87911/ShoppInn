package com.shopInn.app.service.serviceImpl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.shopInn.app.exception.ProductException;
import com.shopInn.app.model.Category;
import com.shopInn.app.model.Product;
import com.shopInn.app.repo.CategoryRepository;
import com.shopInn.app.repo.ProductRepository;
import com.shopInn.app.request.CreateProductRequest;
import com.shopInn.app.service.ProductService;
import com.shopInn.app.service.UserService;


@Service
public class ProductServiceImplementation implements ProductService {

	private ProductRepository productRepository;
	private UserService userService;
	private CategoryRepository categoryRepository;
	
	
	
	
	public ProductServiceImplementation(ProductRepository productRepository, UserService userService,
			CategoryRepository categoryRepository) {
		this.productRepository = productRepository;
		this.userService = userService;
		this.categoryRepository = categoryRepository;
	}

	
	
	
	@Override
	public Product createProduct(CreateProductRequest req) {
	    // Handling top-level category
	    Category topLevel = categoryRepository.findByName(req.getTopLevelCategory());
	    
	    if (topLevel == null) {
	        Category topLevelCategory = new Category();
	        topLevelCategory.setName(req.getTopLevelCategory());
	        topLevelCategory.setLevel(1);
	       
	        topLevel = categoryRepository.save(topLevelCategory);
	    }

	    // Handling second-level category
	    Category secondLevel = categoryRepository.findByNameAndParent(req.getSecondLevelCategory(), topLevel.getName());
	    
	    if (secondLevel == null) {
	        Category secondLevelCategory = new Category();
	        secondLevelCategory.setName(req.getSecondLevelCategory());
	        secondLevelCategory.setParentCategory(topLevel); // Parent is the top-level category
	        secondLevelCategory.setLevel(2);
	        secondLevel = categoryRepository.save(secondLevelCategory);
	    }

	    // Handling third-level category
	    Category thirdLevel = categoryRepository.findByNameAndParent(req.getThirdLevelCategory(), secondLevel.getName());
	    
	    if (thirdLevel == null) {
	        Category thirdLevelCategory = new Category();
	        thirdLevelCategory.setName(req.getThirdLevelCategory());
	        thirdLevelCategory.setParentCategory(secondLevel); // Parent is the second-level category
	        thirdLevelCategory.setLevel(3);
	        thirdLevel = categoryRepository.save(thirdLevelCategory);
	    }

	    // Creating the product and associating it with the third-level category
	    Product product = new Product();
	    product.setTitle(req.getTitle());
	    product.setColor(req.getColor());
	    product.setDescription(req.getDescription());
	    product.setDiscountedPrice(req.getDiscountedPrice());
	    product.setDiscountedPrice(req.getDiscountPercent());
	    product.setImageUrl(req.getImageUrl());
	    product.setBrand(req.getBrand());
	    product.setPrice(req.getPrice());
	    product.setSizes(req.getSize());
	    product.setQuantity(req.getQuantity());
	    product.setCategory(thirdLevel); // Associating with the third-level category
	    product.setCreatedAt(LocalDateTime.now());

	    Product savedProduct = productRepository.save(product);

	    return savedProduct;
	}


	
	
	
	@Override
	public String deleteProduct(Long productId) throws ProductException {
		Product product=findProductById(productId);
		product.getSizes().clear();
		productRepository.delete(product);
		return "Product deleted Successfully !!";
	}

	
	
	
	@Override
	public Product updateProduct(Long productId, Product req) throws ProductException {
		Product product=findProductById(productId);
		
		
		    if (req.getTitle() != null) {
		        product.setTitle(req.getTitle());
		    }

		    if (req.getColor() != null) {
		        product.setColor(req.getColor());
		    }

		    if (req.getDescription() != null) {
		        product.setDescription(req.getDescription());
		    }

		    if (req.getDiscountedPrice() != 0) {
		        product.setDiscountedPrice(req.getDiscountedPrice());
		    }

		    if (req.getDiscountPercent() != 0) {
		        product.setDiscountPercent(req.getDiscountPercent());
		    }

		    if (req.getImageUrl() != null) {
		        product.setImageUrl(req.getImageUrl());
		    }

		    if (req.getBrand() != null) {
		        product.setBrand(req.getBrand());
		    }

		    if (req.getPrice() != 0) {
		        product.setPrice(req.getPrice());
		    }

		    if (req.getSizes() != null && !req.getSizes().isEmpty()) {
		        product.setSizes(req.getSizes());
		    }

		    if (req.getQuantity() != 0) {
		        product.setQuantity(req.getQuantity());
		    }

		    if (req.getCategory() != null) {
		        product.setCategory(req.getCategory());
		    }
		
     		if(req.getQuantity()!=0) {
			product.setQuantity(req.getQuantity());
	    	}
     		
		return productRepository.save(product);
	}

	
	
	
	
	@Override
	public Product findProductById(Long id) throws ProductException {
		Optional<Product> opt=productRepository.findById(id);
		
		if(opt.isPresent())
		{
			return opt.get();
		}
		throw new ProductException("Product not found with id-"+id);
	}

	
	
	
	
	@Override
	public List<Product> findProductByCategory(String category) throws ProductException {
	    // Find the category by name
	    Category categoryEntity = categoryRepository.findByName(category);
	    
	    if (categoryEntity == null) {
	        throw new ProductException("Category not found: " + category);
	    }
	    
	    // Fetch products by category
	    List<Product> products = productRepository.findByCategory(categoryEntity);
	    
	    return products;
	}

	
	
	
	
	
	@Override
	public Page<Product> getAllProduct(String category, List<String>colors, 
			List<String> sizes, Integer minPrice, Integer maxPrice, 
			Integer minDiscount,String sort, String stock, Integer pageNumber, Integer pageSize ) {

		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		
		List<Product> products = productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);
		
		
		if (!colors.isEmpty()) {
			products = products.stream()
			        .filter(p -> colors.stream().anyMatch(c -> c.equalsIgnoreCase(p.getColor())))
			        .collect(Collectors.toList());
		
		
		} 

		if(stock!=null) {

			if(stock.equals("in_stock")) {
				products=products.stream().filter(p->p.getQuantity()>0).collect(Collectors.toList());
			}
			else if (stock.equals("out_of_stock")) {
				products=products.stream().filter(p->p.getQuantity()<1).collect(Collectors.toList());				
			}
				
					
		}
		int startIndex = (int) pageable.getOffset();
		int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());
		
		 if (startIndex < 0) {
	            startIndex = 0; // Default to zero if negative pageNumber is provided
	        }
		

		List<Product> pageContent = products.subList(startIndex, endIndex);
		Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable, products.size());
	    return filteredProducts; // If color list is empty, do nothing and return all products
		
		
	}




	@Override
	public List<Product> findAllProducts() {
		 return productRepository.findAll();
	}

}
