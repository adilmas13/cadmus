import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MenuModule } from './modules/menu/menu.module'
import { ComposerModule } from './modules/composer/composer.module'
import { NotesListModule } from './modules/notes-list/notes-list.module'
import { IconModule } from './modules/common/icon/icon.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ComposerModule,
    NotesListModule,
    IconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
