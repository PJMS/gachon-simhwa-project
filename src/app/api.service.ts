import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import csv from 'csvtojson';

const csvParser = csv();

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getPERPBR() {
    return this.httpClient.get(
      '/assets/sample_data/전종목_PER_PBR_20221103.json'
    );
  }
}
