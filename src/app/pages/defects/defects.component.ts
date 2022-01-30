import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Defect } from 'src/app/models/defect';
import { StateService } from 'src/app/state/state.service';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-defects',
  templateUrl: './defects.component.html',
  styleUrls: ['./defects.component.scss']
})
export class DefectsComponent implements OnInit {

  severity = new FormControl();

  defects = this.state.data$;

  selectedDefect?: Defect;

  constructor(private route: ActivatedRoute, private state: StateService) {

    this.severity.valueChanges.pipe(
      debounceTime(200),
    ).subscribe(response => {
      if (this.selectedDefect) {
        this.state.updateDefect(this.selectedDefect.uuid, response)
      }
    })

   }

  ngOnInit(): void { 

    this.route.paramMap.pipe(
      switchMap(params =>  this.state.getById(params.get('id')))
    ).subscribe(defect => {
    
        this.selectedDefect = defect;
        this.severity.patchValue(defect?.severity);
        
    });

  }

}

