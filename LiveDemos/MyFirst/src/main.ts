import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyLib } from './app/MyLib';

//import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(MyLib)
  .catch(err => console.error(err));
