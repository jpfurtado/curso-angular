import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/servicos/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animais: Animal[] = [
    {'nome':'Larry', 'tipo':'cachorro', 'idade': 7},
    {'nome':'Miao', 'tipo':'gato', 'idade': 2},
    {'nome':'Anita', 'tipo':'cachorro', 'idade': 12},
    {'nome':'Itajara', 'tipo':'cavalo',  'idade': 5}
  ]

  idadeAnimal = '';

  constructor(private listService: ListService) { }
  ngOnInit(): void {
  }
  mostraIdade(animal: Animal) {
    this.idadeAnimal = `${animal.nome}(${animal.tipo}) tem ${animal.idade} anos!`;
  }
  removeAnimal(animal: Animal) {
    console.log('Removendo animal...')
    this.animais = this.listService.remove(this.animais, animal)
  }
}
