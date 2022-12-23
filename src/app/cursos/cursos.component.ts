import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy{

  cursos: any[] | undefined;
  pagina!: number;
  incricao: Subscription | undefined;

  constructor(
    private cursosService:CursosService,
    private route:ActivatedRoute,
    private router:Router) {

  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.incricao = this.route.queryParams.subscribe(
      (queryParams:any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy(): void {
    this.incricao?.unsubscribe();
  }

  proximaPagina() {
    // this.pagina++;
    this.router.navigate(['cursos'],
    {queryParams:{'pagina': ++this.pagina}});
  }

}
