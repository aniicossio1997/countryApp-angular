import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit,OnDestroy {
  private deboucer:Subject<string>= new Subject<string>;
  private deboucerSusbription?: Subscription;
  @Input()
  public placeholder:string='';

  @Input()
  public initialValue:string=''

  //evento que emite el nodo hijo al padre
  @Output()
  public onValue: EventEmitter<string>= new EventEmitter<string>();
  emitValue(value:string):void{
    this.onValue.emit(value);
  }
  @Output()
  public onDebounce=new EventEmitter<string>();
  ngOnDestroy(): void {
    this.deboucerSusbription?.unsubscribe();
  }
  ngOnInit(): void {
    // this.deboucerSusbription=
    // this.deboucer
    // .pipe(
    //   debounceTime(300)
    // )
    // .subscribe(value=>{
    //   this.onDebounce.emit(value)
    //   console.log('debouncer value',value)
    // })
  }


  public onKeyPress(term:string): void{
    this.deboucer.next(term);
  }
}
