import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { UserRepoComponent } from './user-repo/user-repo.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchComponent,
    RepoSearchComponent,
    UserRepoComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
