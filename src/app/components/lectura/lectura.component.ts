import { Component, OnInit, NgZone } from '@angular/core';
import { EncuestaService } from '../../services/encuesta.service';
// import Instascan from 'instascan';
// import * as Instascan from 'instascan';
import { BrowserQRCodeReader } from '@zxing/library';

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.css'],
})
export class LecturaComponent implements OnInit {
  constructor(public encuestaService: EncuestaService) {}

  ngOnInit() {
    this.escanearQR();
  }

  escanearQR() {

    const codeReader = new BrowserQRCodeReader();

    codeReader.listVideoInputDevices().then((videoInputDevices) => {

      videoInputDevices.forEach((device) => {
        
        console.log(`${device.label}, ${device.deviceId}`);
        const firstDeviceId = videoInputDevices[0].deviceId;

        codeReader.decodeOnceFromVideoDevice(firstDeviceId, 'video').then((result) => {

          const resultado = result.getText();
          const data = JSON.parse(resultado);

          this.encuestaService.getEncuesta(data.id).subscribe((resp: any)=> {
            console.log(resp);
            this.stopScan(codeReader);
          });
          
        }).catch((err) => console.log(err));

      });

    }).catch((err) => console.log(err));

  }

  stopScan(codeReader) {
    codeReader.reset();
    this.escanearQR();
  }
}
