import { Component } from '@angular/core';
import { ChatService } from '../../Services/chat.service';

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

  // arreglo de mensajes que pintas en el HTML
  messages = [
    { from: 'bot', text: '¡Hola! Soy SuperBot. ¿En qué te puedo ayudar?' }
  ];
  entrada = '';
  Data: any;

  constructor(private chatService: ChatService) { }

  send() {
    const text = this.entrada?.trim();
    if (!text) { return; }

    this.messages.push({ from: 'user', text });
    this.entrada = '';

    let obj = {
      request: text
    }
    this.chatService.EnviarMensaje(obj).subscribe(x => {
      this.Data = x;
      this.messages.push({ from: 'bot', text: this.Data.response });
      this.scrollToBottom();
    })
      
  }
    private scrollToBottom() {
    setTimeout(() => {
      const c = document.querySelector('.chat-body');
      if (c) { c.scrollTop = c.scrollHeight; }
    }, 50);
  }
}