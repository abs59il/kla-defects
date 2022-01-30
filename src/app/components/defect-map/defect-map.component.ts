import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-defect-map]',
  templateUrl: './defect-map.component.html',
  styleUrls: ['./defect-map.component.scss']
})
export class DefectMapComponent implements OnInit {

  @Input() 
  @HostBinding('style.width.px')
  width = 800;

  @Input()
  @HostBinding('style.height.px')
  height = 600;

  constructor() { }

  ngOnInit(): void { }

}
