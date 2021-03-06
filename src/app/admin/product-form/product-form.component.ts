import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(private catergoryService: CategoryService, private productService: ProductService) {
    this.categories$ = this.catergoryService.getCategories();
  }

  ngOnInit() {
  }

  save(product) {
    console.log(product);
    this.productService.create(product);
  }

}
