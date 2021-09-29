import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  navigation = [
    {route: './', routeActOpt: {exact: true}, actClass: 'active', icon: '<i class="fas fa-newspaper" ></i>', last: ''},
    {route: 'users', routeActOpt: '', actClass: 'active', icon: '<i class="fas fa-user-friends"></i>', last: ''},
    {route: '/chat', routeActOpt: '', actClass: 'active', icon: '<i class="far fa-comment-alt"></i>', last: 'last'}
  ]

  constructor(){}
  ngOnInit(){}

}
