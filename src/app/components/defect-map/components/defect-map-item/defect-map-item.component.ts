import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Defect } from 'src/app/models/defect';

@Directive({
  selector: '[app-defect-map-item]'
})
export class DefectMapItemComponent implements OnInit {

  @Input()
  defect!: Defect;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void { }

  @HostBinding('style.opacity')
  get opacity() {
    return this.defect.severity / 100;
  }

  @HostBinding('style.top.px')
  get top() {
    return this.defect.y;

  }

  @HostBinding('style.left.px')
  get left() {
    return this.defect.x; 
  }

  @HostBinding('style.transform')
  get scale(): SafeStyle {
      return this.sanitizer.bypassSecurityTrustStyle(`scale(${(2 * this.defect.severity) / 100})`);
    }

  }

