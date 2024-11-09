package com.xuspi.burgerxusping.service;

import com.xuspi.burgerxusping.exception.ProductNotFoundException;
import com.xuspi.burgerxusping.model.Product;
import com.xuspi.burgerxusping.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found"));
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public void updateProduct(Product request) {
        var product = productRepository.findById(request.getId())
                .orElseThrow(() -> new ProductNotFoundException("Product not found"));
        mergeProduct(product, request);
        productRepository.save(product);
    }

    private void mergeProduct(Product product, Product request) {
        product.setName(request.getName());
        product.setPrice(request.getPrice());
    }
}
