import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/features/categories/services/categories.service';
import { Product } from 'src/app/shared/models/product.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductAdminService } from '../../services/product-admin.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.scss']
})
export class ProductPanelComponent implements OnInit {
  products: Product[];
  oneProduct: Product;
  productForm: FormGroup;

  constructor(
    private categoriesService: CategoriesService,
    private sanitizer: DomSanitizer,
    private productAdmin: ProductAdminService
  ) {
    this.productForm = new FormGroup({
      brand_id: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      description_short: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      price: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      new_item: new FormControl('', [Validators.required]),
      image: new FormControl('')
    });
  }

  ngOnInit() {
    this.categoriesService.getAllProducts().subscribe((response: Product[]) => {
      this.products = response;
    });
  }

  getOneProduct(id: number) {
    this.categoriesService.getOneProduct(id).subscribe((response: Product) => {
      this.oneProduct = response;
    });
  }

  deleteProduct(id: number) {
    this.productAdmin.deleteProduct(id).subscribe((response: any) => {
      console.log(response);
      this.categoriesService.getAllProducts().subscribe((response: Product[]) => {
        this.products = response;
      });
    });
  }

  onAdd() {
    console.log(this.productForm.value.brand_id);
    console.log(this.productForm.value.name);
    console.log(this.productForm.value.description);
    console.log(this.productForm.value.description_short);
    console.log(this.productForm.value.price);
    console.log(this.productForm.value.new_item);
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.productForm.get('image').setValue(file);
      console.log(this.productForm.value.image);
    }
  }
}
