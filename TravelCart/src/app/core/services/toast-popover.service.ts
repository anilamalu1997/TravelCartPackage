import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToastPopoverService {

  messages$ = new BehaviorSubject<any[]>([]);
  messages: any[] = [];
  subscription: any = null;

  constructor() {

    this.subscription = setInterval(() => {
      //this.checkExpiry();
    }, 1000);
  }

  toastMessage(): Observable<any[]> {
    return this.messages$.asObservable();
  }

  sendMessage(text:string){
    const id = Math.random();
    this.messages.push({id, text, expiry: dayjs().add(5, 'second').toDate() });
    this.messages$.next(this.messages);

  }

  clearMessage(id:number){

    
    this.messages = this.messages.filter(item => item.id !== id);
    this.messages$.next(this.messages);
  }
  
  checkExpiry() {
    const currentTime = new Date();
    this.messages = this.messages.filter(item => !dayjs(item.expiry).isBefore(currentTime));
    this.messages$.next(this.messages);
  }
}

