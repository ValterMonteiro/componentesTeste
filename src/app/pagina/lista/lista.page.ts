import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  atores = [
    {
      nome: "Daenerys Targaryen",
      avatar: "/assets/imgDaenerys.png",
      estrelas: "25"
    },
    {
      nome: "Jon Snow",
      avatar: "/assets/imgJonSnow.png",
      estrelas: "21"
    }
  ]

/* inserindo cards */
nome = "Daenerys Targaryen";
avatar = "/assets/imgDaenerys.png";

  constructor() { }

  ngOnInit() {
  }

}
