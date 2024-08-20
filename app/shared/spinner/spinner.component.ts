import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from 'src/app/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  isLoading!: Observable<boolean>;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.isLoading = this.spinnerService.isLoading.asObservable();
  }
}
