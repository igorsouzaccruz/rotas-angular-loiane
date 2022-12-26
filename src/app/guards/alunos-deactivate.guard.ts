import { IFormCanDeactivate } from './iform-candeactivate';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable, retry } from "rxjs";


@Injectable({providedIn: 'root'})
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
  canDeactivate(
    component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|boolean {

    // return !component.podeMudarRota();
    return component.podeDesativar();
  }
}
