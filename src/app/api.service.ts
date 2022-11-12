import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BigNumber from 'bignumber.js';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForeseeDialogData } from './foresee-result/foresee-result.component';
import { PerPbr } from './models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<PerPbr[]>('/assets/data/perpbr.json');
  }

  getAllYahooAvailable() {
    return this.httpClient.get<string[]>(
      `/assets/data/yahoo_finance_ks_codes.json`
    );
  }

  foresee(payload: ForeseeDialogData['payload']): Observable<{
    estmPrice: string;
    lastPrice: string;
    diff: string; // 0~1 percentage
  }> {
    return this.httpClient
      .get<{
        estmPrice: string;
        lastPrice: string;
      }>(`${environment.apiUrl}/foresee`, {
        params: { ...payload },
      })
      .pipe(
        map((res) => ({
          ...res,
          diff: new BigNumber(res.estmPrice)
            .div(res.lastPrice)
            .minus(1)
            .toFixed(4, BigNumber.ROUND_CEIL),
        }))
      );
  }
}
