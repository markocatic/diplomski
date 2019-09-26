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
  oneProductForm: FormGroup;
  pageOfItems: Array<any>;
  constructor(
    private categoriesService: CategoriesService,
    public sanitizer: DomSanitizer,
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
    this.oneProductForm = new FormGroup({
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

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  editProduct(id: number) {
    console.log(this.oneProductForm.value.brand_id);
    const brand_id = this.oneProductForm.value.brand_id;
    console.log(this.oneProductForm.value.name);
    const name = this.oneProductForm.value.name;
    console.log(this.oneProductForm.value.description);
    const description = this.oneProductForm.value.description;
    console.log(this.oneProductForm.value.description_short);
    const description_short = this.oneProductForm.value.description_short;
    console.log(this.oneProductForm.value.price);
    const price = this.oneProductForm.value.price;
    console.log(this.oneProductForm.value.new_item);
    const new_item = this.oneProductForm.value.new_item;
    console.log(this.oneProductForm.value.image);
    const image = new FormData();
    image.append('image', this.oneProductForm.value.image);
    console.log(image.get('image'), 'test');
    image.append('brand_id', brand_id);
    image.append('name', name);
    image.append('description', description);
    image.append('description_short', description_short);
    image.append('price', price);
    image.append('new_item', new_item);
    this.productAdmin.updateProduct(image, id).subscribe(response => {
      console.log(response);
      this.categoriesService.getAllProducts().subscribe((response: Product[]) => {
        this.products = response;
      });
    });
  }

  getOneProduct(id: number) {
    this.categoriesService.getOneProduct(id).subscribe((response: Product) => {
      this.oneProduct = response;
      this.oneProductForm.patchValue({ brand_id: response.brand_id });
      this.oneProductForm.patchValue({ name: response.name });
      this.oneProductForm.patchValue({ description: response.description });
      this.oneProductForm.patchValue({ description_short: response.description_short });
      this.oneProductForm.patchValue({ price: response.price });
      this.oneProductForm.patchValue({ new_item: response.new_item });
      // this.oneProductForm.patchValue({new_item: response.new_item});
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
    const brand_id = this.productForm.value.brand_id;
    console.log(this.productForm.value.name);
    const name = this.productForm.value.name;
    console.log(this.productForm.value.description);
    const description = this.productForm.value.description;
    console.log(this.productForm.value.description_short);
    const description_short = this.productForm.value.description_short;
    console.log(this.productForm.value.price);
    const price = this.productForm.value.price;
    console.log(this.productForm.value.new_item);
    const new_item = this.productForm.value.new_item;
    console.log(this.productForm.value.image);
    const image = new FormData();
    image.append('image', this.productForm.value.image);
    console.log(image.get('image'), 'test');
    image.append('brand_id', brand_id);
    image.append('name', name);
    image.append('description', description);
    image.append('description_short', description_short);
    image.append('price', price);
    image.append('new_item', new_item);
    this.productAdmin.saveProduct(image).subscribe(response => {
      console.log(response);
      this.categoriesService.getAllProducts().subscribe((response: Product[]) => {
        this.products = response;
      });
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file);
      this.productForm.get('image').setValue(file);
      // console.log(this.productForm.value.image);
    }
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file);
      this.oneProductForm.get('image').setValue(file);
      // console.log(this.productForm.value.image);
    }
  }
}
