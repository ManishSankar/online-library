import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 

  ngOnInit(){
      //console.log(this.rowData)
  }

  constructor(private router: Router) {
   
  }

 
   public getLoginComponent(){
    this.router.navigate(['/login']); 
   }

   public getAdminComponent(){
    this.router.navigate(['/admin']); 
   }

}
