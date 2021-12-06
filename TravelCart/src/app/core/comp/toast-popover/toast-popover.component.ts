import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastPopoverService } from '../../services/toast-popover.service';

@Component({
  selector: 'app-toast-popover',
  templateUrl: './toast-popover.component.html',
  styleUrls: ['./toast-popover.component.scss']
})
export class ToastPopoverComponent implements OnInit, OnDestroy {


  messages : any[] = [];

  constructor(
    private toastService: ToastPopoverService
  ) { }


  ngOnDestroy(): void {
  
  }
  

  ngOnInit(): void {
    this.toastService.toastMessage().subscribe(messages =>this.messages = messages)
  
  
  }

  remove(id : number){
    this.toastService.clearMessage(id);
  }

}
