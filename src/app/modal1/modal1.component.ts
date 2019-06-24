import { Component, OnInit } from '@angular/core';
import { NgbActiveModal,NgbModal } from '@ng-bootstrap/ng-bootstrap';


//import {  } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.css']
})
export class Modal1Component {

  activeUseCase = true;
  constructor(private activeModal: NgbActiveModal,private modalService: NgbModal,) {
  }
  closeModal() {
      this.activeModal.close();
  }  
}
