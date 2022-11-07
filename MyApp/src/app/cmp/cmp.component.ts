import {transition,trigger,query,animate,style} from '@angular/animations'
import {Component} from '@angular/core'
@Component({
  selector: 'inner',
  template: `
    <div [@queryAnimation]="exp">
      <h1>Title</h1>
      <div class="content">
        Blah blah blah
      </div>
    </div>
  `,
  animations: [
   trigger('queryAnimation', [
     transition('* => goAnimate', [
       // hide the inner elements
       query('h1', style({ opacity: 0 })),
       query('.content', style({ opacity: 0 })),

       // animate the inner elements in, one by one
       query('h1', animate(1000, style({ opacity: 1 }))),
       query('.content', animate(1000, style({ opacity: 1 }))),
     ])
   ])
 ]
})
export class Cmp {
  exp = '';

  goAnimate() {
    this.exp = 'goAnimate';
  }
}