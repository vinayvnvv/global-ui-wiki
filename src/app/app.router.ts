import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { StartComponent } from './docs/start/start.component';
import { ButtonsComponent } from './docs/buttons/buttons.component';
import { InputComponent } from './docs/input/input.component';
import { TypographyComponent } from './docs/typography/typography.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'docs', component: DocsComponent,
  	children: [
      { path: '', redirectTo: 'start', pathMatch: 'full' },
      { path: 'start', component: StartComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'input', component: InputComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routerComponents = [HomeComponent, DocsComponent, StartComponent, ButtonsComponent, InputComponent, TypographyComponent];

 