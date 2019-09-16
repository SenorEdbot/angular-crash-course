import { Component } from '@angular/core';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

// showcasing how to use constructors and how they run first. Also shows the :void which means the function returns nothing
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title:string = 'Eddie ToDo List';

//   // constructors run on instansiation
//   constructor() {
//     this.changeTitle('John')
//   }

//   // void means it doesn't return anything
//   changeTitle(title:string):void {
//     this.title = title
//   }
// }
