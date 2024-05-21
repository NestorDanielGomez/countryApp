import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './searchBox.component.html',
  styleUrl: './searchBox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = ''

  @Output()
  public onValue = new EventEmitter<string>()

  emitValue (value: string):void {
    this.onValue.emit(value)

  }

 }
