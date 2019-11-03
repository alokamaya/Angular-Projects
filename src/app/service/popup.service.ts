import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeletePopupComponent } from '../feed-composition-detail/delete-popup/delete-popup.component';

@Injectable()
export class PopupService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(msg) {
    return this.dialog.open(DeletePopupComponent, {
      width: '500px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '10px' },
      data: {
        message: msg
      }
    });
  }
}
