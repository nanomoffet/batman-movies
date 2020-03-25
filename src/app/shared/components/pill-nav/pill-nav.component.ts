import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pill-nav',
  templateUrl: './pill-nav.component.html',
  styleUrls: ['./pill-nav.component.scss']
})
export class PillNavComponent implements OnInit {
  @Input() decadesReleased: string[];
  @Output() selectedDecadeChange = new EventEmitter<string>();
  selectedDecade = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelectedDecade(decade: string): void {
    this.selectedDecade === decade ? this.selectedDecade = '' : this.selectedDecade = decade;
    this.selectedDecadeChange.emit(this.selectedDecade);
  }

}
