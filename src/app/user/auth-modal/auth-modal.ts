import { Component } from '@angular/core';

import { Modal } from '../../shared/modal/modal';

@Component({
  imports: [Modal],
  selector: 'app-auth-modal',
  styleUrl: './auth-modal.css',
  templateUrl: './auth-modal.html',
})
export class AuthModal {}
