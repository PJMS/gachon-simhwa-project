import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject, delay, tap } from 'rxjs';
import { ApiService } from '../api.service';

export interface ForeseeDialogData {
  payload: {
    jongmokCode: string;
    prevCount: number;
  };
}

@Component({
  selector: 'app-foresee-result',
  templateUrl: './foresee-result.component.html',
  styleUrls: ['./foresee-result.component.scss'],
})
export class ForeseeResultComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: ForeseeDialogData,
    private apiService: ApiService
  ) {}

  isLoading$ = new BehaviorSubject<boolean>(true);

  result$ = this.apiService.foresee(this.data.payload).pipe(
    delay(1000),
    tap(() => this.isLoading$.next(false))
  );

  ngOnInit(): void {}
}
