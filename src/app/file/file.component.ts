import { Component, Output, EventEmitter } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { HttpClient } from '@angular/common/http';

pdfDefaultOptions.assetsFolder = 'bleeding-edge';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})

export class FileComponent {

  constructor(private http: HttpClient) {}

  pdfFile: File | null = null;
  showUploadButton = true;
  pdfUrl: string | any;
  
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const formData = new FormData();

    if (input.files?.length) {
      this.pdfFile = input.files[0];
      this.showUploadButton = false;
      this.pdfUrl = this?.pdfFile;
      formData.append('pdfFile', this.pdfFile);

      this.http.post('https://3eeb-204-199-66-51.ngrok.io/upload', formData).subscribe(
        (response) => {
          console.log('Archivo subido con éxito', response);
        },
        (error) => {
          console.error('Error al subir el archivo', error);
        })      
    }
  }

}







