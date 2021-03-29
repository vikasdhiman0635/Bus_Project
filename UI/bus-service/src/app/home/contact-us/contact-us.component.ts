import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  contactForm=this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    subject:['',[Validators.required]],
    message:['',[Validators.required]]
  })

  contact()
  {
    console.log(this.contactForm.value);
  }

}

