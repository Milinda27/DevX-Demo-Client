import { TestBed } from '@angular/core/testing';

import { DemoDataService } from './demo-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DemoDataService', () => {
  let httpTestingController: HttpTestingController;
  let service: DemoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,],
      providers:[

      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DemoDataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return odata Datasource', () => {
    service.getDataSource()
    expect(service).toBeTruthy();
  });
  it('should return products', () => {
    service.getProducts().subscribe((products)=>{
      expect(products)
    })
    expect(service).toBeTruthy();
  });
  it('should return users', () => {
    expect(service).toBeTruthy();
  });
});
