import { Component,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @Input()
  public placeholder:string='';

  //evento que emite el nodo hijo al padre
  @Output()
  public onValue: EventEmitter<string>= new EventEmitter<string>();

  emitValue(value:string):void{
    this.onValue.emit(value);
    console.log({onValue:this.onValue})
  }
}
