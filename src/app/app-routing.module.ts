import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasComponent } from './pages/ofertas/ofertas.component';

const routes: Routes = [
  {path: 'ofertas', component: OfertasComponent},
  {path: '', redirectTo: '/ofertas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
