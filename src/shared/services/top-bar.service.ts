import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TopBarService {
  title$: BehaviorSubject<string> = new BehaviorSubject<string>("Untitled");

  /**
   * Set title
   *
   * @param title: string
   */
  setTitle(title: string) {
    this.title$.next(title);
  }
}
