import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, shareReplay, startWith, switchMap } from 'rxjs';
import { ApiService } from '../api.service';
import {
  ForeseeDialogData,
  ForeseeResultComponent,
} from '../foresee-result/foresee-result.component';

@Component({
  selector: 'app-foresee',
  templateUrl: './foresee.component.html',
  styleUrls: ['./foresee.component.scss'],
})
export class ForeseeComponent implements OnInit {
  constructor(private dialog: MatDialog, private apiService: ApiService) {}

  jongmokCode = new FormControl<string>('');
  prevCount = new FormControl<number>(7);
  hideWoosun = new FormControl<boolean>(true);

  jongmokList$ = this.apiService.getAll().pipe(
    shareReplay(1),
    switchMap((allList) =>
      this.apiService
        .getAllYahooAvailable()
        .pipe(map((avail) => allList.filter((x) => avail.includes(x.종목코드))))
    ),
    map((data) =>
      data.map(({ 종목코드, 종목명 }) => ({
        code: 종목코드 + '.KS',
        name: 종목명,
      }))
    ),
    switchMap((list) =>
      this.hideWoosun.valueChanges.pipe(
        startWith(this.hideWoosun.value),
        map((hide) =>
          list.filter(
            ({ code, name }) =>
              !hide || /우(\(.*\)|[A-Z])?$/.test(name) === false
          )
        )
      )
    ),
    switchMap((list) =>
      this.jongmokCode.valueChanges.pipe(
        startWith(this.jongmokCode.value),
        map((query) =>
          query
            ? list.filter(
                ({ code, name }) =>
                  code.toString()?.includes(query) ||
                  name.toString()?.includes(query)
              )
            : list
        )
      )
    )
  );

  open() {
    this.dialog.open(ForeseeResultComponent, {
      width: '500px',
      data: {
        ui_desc: {},
        payload: {
          jongmokCode: this.jongmokCode.value,
          prevCount: this.prevCount.value,
        },
      } as ForeseeDialogData,
    });
  }

  ngOnInit(): void {}
}
