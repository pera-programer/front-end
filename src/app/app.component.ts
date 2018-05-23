import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TransferService } from './transfer.service';
import { Address} from './address.model';
import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('jqxLoader') jqxLoader: jqxLoaderComponent;
  addresses:Address[];
  searchTerm$ = new Subject<string>();
  currentItem:any = 10;
  displayPerPage:any = [5, 10, 20];


  constructor(private transfer: TransferService) { }

  ngOnInit() {
    this.addresses = [];

    this.transfer.getAddresses().subscribe((response) => {
      this.addresses = response;
      this.stopGadget();
    });
    this.transfer.search(this.searchTerm$).subscribe(addresses => {
      //console.log('ovo je ' + addresses);
      this.addresses = addresses;
      this.stopGadget();
    });
  }

  startGadget() {
    this.jqxLoader.open();
  }
  stopGadget() {
    this.jqxLoader.close();
  }

}
