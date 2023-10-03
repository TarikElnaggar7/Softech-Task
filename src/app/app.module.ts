import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StartUpService } from './core/services/start-up.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    StartUpService,
    {
      provide: APP_INITIALIZER,
      deps: [StartUpService],
      multi: true,
      useFactory: (StartUpService: StartUpService) => {
        return () => {
          return StartUpService.bootstrap();
        };
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
