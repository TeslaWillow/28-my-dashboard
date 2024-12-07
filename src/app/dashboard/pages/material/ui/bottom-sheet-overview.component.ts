import { Component, inject } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  imports: [MatListModule],
})
export class BottomSheetOverviewExampleSheet {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetOverviewExampleSheet>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
