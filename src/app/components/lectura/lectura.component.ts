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

  codeReader = new BrowserQRCodeReader();

  deviceObjects: any = [];
  selectedDeviceObj: any = '';

  constructor(public encuestaService: EncuestaService) {}

  ngOnInit() {
    this.listarDispositivos();
  }

  listarDispositivos() {

    const codeReader = new BrowserQRCodeReader();

    codeReader.listVideoInputDevices().then((videoInputDevices) => {

      this.deviceObjects = videoInputDevices;
      // this.selectedDeviceObj = this.deviceObjects[0];
      // this.escanearQR(this.selectedDeviceObj.deviceId);

    }).catch((err) => console.log(err));

  }

  escanearQR(deviceId) {

    if (deviceId === '') {
      return;
    }

    const codeReader = new BrowserQRCodeReader();

    codeReader.decodeOnceFromVideoDevice(deviceId, 'video').then((result) => {

      const resultado = result.getText();
      const data = JSON.parse(resultado);

      this.encuestaService.getEncuesta(data.id).subscribe((resp: any) => {
        console.log(resp);
        this.stopScan(codeReader);
      });

    }).catch((err) => {
      console.log(err);
    });

  }

  stopScan(codeReader) {
    codeReader.reset();
    // console.log(this.selectedDeviceObj);
    this.escanearQR(this.selectedDeviceObj);
  }

  onChangeObj(newObj) {
    console.log(newObj);
    this.selectedDeviceObj = newObj;
    this.escanearQR(newObj);
    // ... do other stuff here ...
  }

}
