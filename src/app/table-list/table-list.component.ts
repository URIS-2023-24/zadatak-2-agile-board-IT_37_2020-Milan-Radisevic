import { Component, OnInit } from '@angular/core';
import { Contributor } from 'app/models/Contributor';
import { Task } from 'app/models/Task';
import { ContributorsService } from 'app/services/contributors/contributors.service';
import { TasksService } from 'app/services/tasks/tasks.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  // Nizovi koji ce se koristiti za prikazivanje podataka. Moraju biti tipizirani kako bismo na jednostavan nacin pristupali njihovim obelezjima
  tasks: Task[] = []; //niz task
  contributors: Contributor[] = [];
  
  // Kroz konstruktor uvek zelimo da injektujemo sve potrebne servise, koje kasnije mozemo slobodno koristiti u kodu.
  constructor(private taskService: TasksService,
    private contributorsService: ContributorsService) { }

  ngOnInit() {
    //ucitati podatke na inicijalizaciji komponente, zbog preglednosti, delimo kod u funkc. startSubscription()
    this.startSubscription();
  }

  startSubscription(){
    this.taskService.getTasks().subscribe( res => {
      this.tasks = res; //ukoliko imaju isti naziv i tip podatka nije potrebno mapiranje.
    }); //ova metoda vraca observable objekat, ne znaci nista osim ako se subscribujemo, u trenutku kad dobijemo
        //json samo ako smo subovani se moze dobiti json.

    this.contributorsService.getContributors().subscribe(res => {
      this.contributors = res;
    });
  }
}
