import { getImageConfig } from './../../helpers/file.helper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-drag-drop',
  templateUrl: './files-drag-drop.component.html',
  styleUrls: ['./files-drag-drop.component.scss']
})
export class FilesDragDropComponent implements OnInit {
  @Input() files: File[] = [];
  
  getImageConfig = getImageConfig;
  isDragOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDragEnter(): void {
    this.isDragOver = true;
  }

  onDragLeave(): void {
    this.isDragOver = false;
  }

  onDrop(): void {
    this.isDragOver = false;
  }

  onFileDrop(e: any): void {
    const newFile = e.target?.files[0];
    if (newFile) {
      this.files.push(newFile);
    }
  }

  onFileRemove(file: any): void {
    const copiedFiles = [...this.files];
    copiedFiles.splice(this.files.indexOf(file), 1);
    this.files = copiedFiles;
  }

}
