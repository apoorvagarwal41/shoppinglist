import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { RecipiesComponent } from './recipies/recipies.component'
import { RecipiesListComponent } from './recipies/recipies-list/recipies-list.component'
import { RecipiesDetailComponent } from './recipies/recipies-detail/recipies-detail.component'
import { RecipiesItemComponent } from './recipies/recipies-list/recipies-item/recipies-item.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { CustomDirective } from './custom-directive/custom.directive'
import { UnlessDirective } from './unless/unlessdirective'
import { DropdownDirective } from './dropdownDirective/dropdown-directive.directive'
import { LoggingService } from './logging.service'
import { RecepieService } from './reciepe.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipiesListComponent,
    RecipiesDetailComponent,
    RecipiesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CustomDirective,
    UnlessDirective,
    DropdownDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [LoggingService, RecepieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
