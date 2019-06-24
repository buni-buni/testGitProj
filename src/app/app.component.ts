import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal1Component } from '../app/modal1/modal1.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private modalService: NgbModal,private activeModal: NgbActiveModal) { }

  showLargeModal() {
    
    var totalPlanned = 0.0;
    var count = 0;
    var fte_risk_ytd = 0.0;
    const activeModal = this.modalService.open(Modal1Component, {
      size: 'lg',
      backdrop: 'static',
      container: 'nb-layout',
    });
    
  }
}
