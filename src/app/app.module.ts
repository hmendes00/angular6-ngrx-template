import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './routes';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ScrollingDisplayComponent } from './components/scrolling-display/scrolling-display.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { RootStoreModule } from './root-store/root-store.module';
import { RootStoreModule } from './root-store';
import { StandupService } from './services/standup-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ScrollingDisplayComponent,
    SectionTitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    RootStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
    // EffectsModule.run(BlogEffects),
  ],
  providers: [StandupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
