import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    message: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService){
        //this.products = _productService.getProducts();
    }

    toogleImage(): void {
        //debugger;
        this.showImage =  !this.showImage;
    }

    //onRatingClicked(message: string): void{
        //this.message = message;
    //}

    ngOnInit(): void {
        console.log('In OnInit');
        //this.products = this._productService.getProducts();
        //debugger;
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List: ' + message;
    }
}