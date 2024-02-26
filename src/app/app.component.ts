import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   weatherData!:any;
  searchForm!:FormGroup;
  constructor(private fb:FormBuilder,private service:WeatherService){}

  ngOnInit(){
    this.searchForm=this.fb.group({
      city:[null,Validators.required]
    })
  }

  getWeather(){
    // console.log(this.searchForm.value);
    this.service.searchWeather(this.searchForm.get(['city'])!.value).subscribe((res)=>{
      console.log(res);
      this.weatherData=res;
      console.log(this.weatherData);
    
    })
  }
}



