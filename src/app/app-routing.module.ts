import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { LecturaComponent } from './components/lectura/lectura.component';


const routes: Routes = [
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'lectura', component: LecturaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'encuesta' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
