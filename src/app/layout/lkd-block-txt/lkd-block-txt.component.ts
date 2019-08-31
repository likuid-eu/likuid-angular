import { Component, OnInit, Input } from '@angular/core';
import { BlockTxt } from '../../models/lkd-interfaces';

@Component({
  selector: 'lkd-block-txt',
  templateUrl: './lkd-block-txt.component.html',
  styleUrls: ['./lkd-block-txt.component.scss']
})
export class LkdBlockTxtComponent implements OnInit {

  @Input() data: BlockTxt;

  constructor() { }

  ngOnInit() {
  }

}