import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BottomSheetOverviewExampleSheet } from './ui/bottom-sheet-overview.component';

@Component({
  selector: 'app-material',
  imports: [
      CommonModule,
      MatSlideToggleModule,
      MatBadgeModule,
      MatIconModule,
      MatButtonModule,
      MatBottomSheetModule,
    ],
  templateUrl: './material.component.html',
})
export default class MaterialComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}


