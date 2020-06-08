import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../services/encuesta.service';
import { NgForm } from '@angular/forms';
import { Encuesta } from '../../models/encuesta';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  img: any;

  constructor(public encuestaService: EncuestaService) { }

  ngOnInit(): void {
  }

  enviarEncuesta(form?: NgForm) {

    this.encuestaService.postEncuesta(form.value).subscribe((resp: any) => {
      this.img = resp;
    });

  }

}
