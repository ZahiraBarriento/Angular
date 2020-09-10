import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutaUnoComponent } from './components/ruta-uno/ruta-uno.component';
import { RutaDosComponent } from './components/ruta-dos/ruta-dos.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/*El Enrutamiento o rutas en Angular es la manera en la que navegamos 
entre las vistas de nuestra aplicación, en una web normal nosotros 
navegamos entre paginas HTML, pero en Angular navegamos entre vistas 
que hemos generado a base de módulos y componentes.*/
const routes: Routes = [{
  path:'ruta-uno',
  component: RutaUnoComponent
},
{
  path:'ruta-dos',
  component: RutaDosComponent
},
{
  path:'',
  component: HomeComponent
},
{
  path:'**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
