import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CitysService } from 'src/app/Service/citys.service';

@Component({
  selector: 'app-search-where',
  templateUrl: './search-where.component.html',
  styleUrls: ['./search-where.component.css','./animated-textbox-1.css','./animated-textbox.css','./animated-textbox2-1.css','./animated-textbox2.css','./animated-textbox3-1.css','./animated-textbox3.css']
})
export class SearchWhereComponent implements OnInit {

  allcites: any;

  from: any;
  to: any;
  date: any;

  minDate="2021-02-15";

  constructor(private service: CitysService,private spinner:NgxSpinnerService,
    private route:Router,
    private fb:FormBuilder) { }

  ngOnInit() {
    // this.getallcites();
  }

  getallcites() {
    this.service.getcits().subscribe((Response) => {
      this.allcites = Response;
      // console.log(this.allcites);
    })
  }

  searchdata=this.fb.group({
    froms: [''],
    too: [''],
    date: ['']
  });


  formset() {
    // console.log(this.from);
    if(this.from!=null)
    {
      this.checkdata();
    }
  }

  toset() {
    // console.log(this.to);
    if(this.from!=null)
    {
      this.checkdata();
    }
  }

  dateset() {
    // console.log(this.date);
    if(this.from!=null)
    {
      this.checkdata();
    }
  }

  checkdata()
  {
    if(this.from!=null && this.to!=null && this.date!=null)
    {
      this.spinner.show();
      this.searchdata.value.froms=this.from;
      this.searchdata.value.too=this.to;
      this.searchdata.value.date=this.date;
      // console.log(this.searchdata.value);
       setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      localStorage.setItem("searchdata",JSON.stringify(this.searchdata.value));
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
      this.route.navigate(['/h/search']);
    }
  }

}
