import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MailSenderService {
  botToken = '6206765467:AAEuTWOLz3ReU9g2ysebKdlFtGLO2lWwhoo';
  chatId = '6054985249';
  apiUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

  constructor(private httpClient: HttpClient) { }


  SendMail() : void{
    //ToDo
  }

  SendTelegram(message:string): void{
    const data = {
      chat_id: this.chatId,
      text: message
    };
    
    this.httpClient.post(this.apiUrl, data).subscribe(response => {
      console.log('Message sent to Telegram:', response);
    });

  }

}
