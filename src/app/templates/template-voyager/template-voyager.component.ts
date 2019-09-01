import { Component, OnInit } from '@angular/core';
import { blockTri, catcheyeHeader } from '../../data/voyager.data';

@Component({
  selector: 'lkd-template-voyager',
  templateUrl: './template-voyager.component.html',
  styleUrls: ['./template-voyager.component.scss']
})
export class TemplateVoyagerComponent implements OnInit {

  // ----------------------------------------------
  // --- DATA BINDING
  // ----------------------------------------------

  blockTri = blockTri;
  catcheyeHeader = catcheyeHeader;

  constructor() { }

  ngOnInit() {
  }

}
