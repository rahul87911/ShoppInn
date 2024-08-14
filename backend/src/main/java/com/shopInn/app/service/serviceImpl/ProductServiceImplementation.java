package com.shopInn.app.service.serviceImpl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.domain.Page;
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
		
		Category topLevel=categoryRepository.findByName(req.getTopLevelCategory()); 
		
		if(topLevel==null) {
			Category topLevelCategory=new Category();
			topLevelCategory.setName(req.getTopLevelCategory());
			topLevelCategory.setLevel(1);
			
			topLevel=categoryRepository.save(topLevelCategory);
		}
		
		
		Category secondLevel=categoryRepository.findByNameAndParent(req.getSecondLevelCategory(),topLevel.getName());
		
		if(secondLevel==null) {
			Category secondLevelCategory=new Category();
			secondLevelCategory.setName(req.getSecondLevelCategory());
			secondLevelCategory.setParentCategory(topLevel);
			secondLevelCategory.setLevel(2);
			
			secondLevel=categoryRepository.save(secondLevelCategory);
		}
		
		Category thirdLevel=categoryRepository.findByNameAndParent(req.getThirdLevelCategory(), secondLevel.getName());
		if(thirdLevel==null)
		{
			Category thirdLevelCategory=new Category();
			thirdLevelCategory.setName(req.getThirdLevelCategory());
			thirdLevelCategory.setParentCategory(secondLevel);
			thirdLevelCategory.setLevel(3);
			
			thirdLevel=categoryRepository.save(thirdLevelCategory);
		}
		
		
		
		Product product=new Product();
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
		product.setCategory(thirdLevel);
		product.setCreatedAt(LocalDateTime.now());
		
		Product savedProduct=productRepository.save(product);
		
		
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
		// TODO Auto-generated method stub
		return null;
	}

	
	
	
	
	@Override
	public List<Product> findProductByCategory(String category) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
	
	
	
	@Override
	public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice,
			Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
		// TODO Auto-generated method stub
		return null;
	}

}
