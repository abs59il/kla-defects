import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Defect } from 'src/app/models/defect';
import { StateService } from 'src/app/state/state.service';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-defects',
  templateUrl: './defects.component.html',
  styleUrls: ['./defects.component.scss']
})
export class DefectsComponent implements OnInit, AfterViewInit {

  severity = new FormControl();

  defects = this.state.data$;

  selectedDefect?: Defect;

  constructor(private route: ActivatedRoute, private state: StateService) { }

  ngAfterViewInit(): void {  }

  ngOnInit(): void { 

    this.route.paramMap.pipe(
      switchMap(params =>  this.state.getById(params.get('id')))
    ).subscribe(defect => {
    
        this.selectedDefect = defect;
        this.severity.patchValue(defect?.severity);
        
    });

  }

  onChange(event: any) {

    if (this.selectedDefect) {
      this.state.updateDefect(this.selectedDefect.uuid, event.target.value)
    }

  }

}

