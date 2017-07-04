import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { FormCategoryComponent } from "./form-category/form-category.component";




const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'formCategory',
    component: FormCategoryComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
