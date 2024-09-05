import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/services/crud.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  
  constructor(private crud: CrudService){

  }

  ngOnInit(): void {
    this.showCategories();
  }

  categories: Categories[] = [];
  errorCat: string = "";

  showCategories(){
    this.crud.getCategories().subscribe({
      next: (value: any) => {
        if(value){
          this.categories = value.categories;
        }
      },
      error: (err: any) => {
        console.error('Error fetching categories:', err);
        this.errorCat = "No Categories Found"
      },
    })
  }

}

export interface Categories{
  id: number;
  name: string;
}