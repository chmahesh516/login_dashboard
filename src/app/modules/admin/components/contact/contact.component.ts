import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  group: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen asdfasdfasd  dasf', weight: 1.0079, symbol: 'Hfghdfghfg', group: '1' },
  { position: 2, name: 'Helium afsdfasd f', weight: 4.0026, symbol: 'Hefhdf', group: '1' },
  { position: 3, name: 'Lithium asdfasd fasd', weight: 6.941, symbol: 'Lidfghdfgdfg', group: '' },
  { position: 4, name: 'Beryllium asdfcvzcvz', weight: 9.0122, symbol: 'Bedfghdfghdf', group: '' },
  { position: 5, name: 'Boron zvcvzxcvzcvcv', weight: 10.811, symbol: 'Bfghdfghdfg', group: '' },
  { position: 6, name: 'Carbon rtdgfhdgdf hdfghdfg' , weight: 12.0107, symbol: 'Cdfghdfgh', group: '' },
  { position: 7, name: 'Nitrogen dfghdhfg hdfghdfg', weight: 14.0067, symbol: 'Ndfghdfghdfg', group: '' },
  { position: 8, name: 'Oxygen dfghdgfh dfghdgfh', weight: 15.9994, symbol: 'Odfghdfghdf', group: '1' },
  { position: 9, name: 'Fluorine dfghdgdfghdfghdfg' , weight: 18.9984, symbol: 'Fgfhdfghdfg', group: '1' },
  { position: 10, name: 'Neon dfghfghdfgh', weight: 20.1797, symbol: 'Nedfhdfghdfghdf', group: '1' },
  { position: 6, name: 'Carbon rtdgfhdgdf hdfghdfg' , weight: 12.0107, symbol: 'Cdfghdfgh', group: '' },
  { position: 7, name: 'Nitrogen dfghdhfg hdfghdfg', weight: 14.0067, symbol: 'Ndfghdfghdfg', group: '' },
  { position: 8, name: 'Oxygen dfghdgfh dfghdgfh', weight: 15.9994, symbol: 'Odfghdfghdf', group: '1' },
  { position: 9, name: 'Fluorine dfghdgdfghdfghdfg' , weight: 18.9984, symbol: 'Fgfhdfghdfg', group: '1' },
  { position: 10, name: 'Neon dfghfghdfgh', weight: 20.1797, symbol: 'Nedfhdfghdfghdf', group: '1' }
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','name1', 'weight1', 'symbol1','name2', 'weight2', 'symbol2'];
  dataSource = ELEMENT_DATA;

  spanningColumns = ['position'];
  spans : any[] = [];
  k = 1234;

  constructor() {
        this.cacheSpan('position', (d: PeriodicElement) => +d.group === 1 ? 1 : this.k++);
  }
  users = [];
  dataloading = false;
  pageSize = 10;
  lastPage: any;
  paginationEnabled = false;
  selectedRows: any[] | undefined;
  scrollItems: any[] = [];
  showScroll: boolean = false;
  ngOnInit(){
 
  }

  // getRowSpan (element: PeriodicElement, i:number) {
  // const rslt = +element.group < 1 ? '' : (+element.group + 1);
  // console.log(element, i , rslt);
  // return rslt;
  // }

  /**
   * Evaluated and store an evaluation of the rowspan for each row.
   * The key determines the column it affects, and the accessor determines the
   * value that should be checked for spanning.
   */
  cacheSpan(key: any, accessor: any) {
    for (let i = 0; i < ELEMENT_DATA.length;) {
      let currentValue = accessor(ELEMENT_DATA[i]);
      let count = 1;

      // Iterate through the remaining rows to see how many match
      // the current value as retrieved through the accessor.
      for (let j = i + 1; j < ELEMENT_DATA.length; j++) {        
        if (currentValue != accessor(ELEMENT_DATA[j])) {
          break;
        }

        count++;
      } 

      if (!this.spans[i]) {
        this.spans[i] = {};
      }

      // Store the number of similar values that were found (the span)
      // and skip i to the next unique row.
      this.spans[i][key] = count;
      i += count;
    }
  }

  getRowSpan(col: string, index: number) {
    const result = this.spans[index] && this.spans[index][col];
    console.log(result);
    return result;
  }
}

