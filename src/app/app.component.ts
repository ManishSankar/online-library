import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import { Book } from './components/book/book.component';
import { Module } from '@ag-grid-community/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public gridApi;
  public gridColumnApi;

  public modules: Module[] = [ClientSideRowModelModule];
  public columnDefs;
  public defaultColDef;
  public rowData;
  public rowSelection;
  public selectedData :any[]=[];

  ngOnInit(){
      //console.log(this.rowData)
  }

  constructor(public http: HttpClient) {
    this.columnDefs = [
      { field: 'bookTitle',
      headerCheckboxSelection: true,
      checkboxSelection: true },
      //filter: false,
      {
        field: 'isbn',
        filter: 'agNumberColumnFilter',
        maxWidth: 100,
      },
      { field: 'Language' },
      {
        field: 'publicationYear',
        maxWidth: 100,
      },
    //   {
    //     field: 'date',
    //     filter: 'agDateColumnFilter',
    //     filterParams: {
    //       comparator: function(filterLocalDateAtMidnight, cellValue) {
    //         var dateAsString = cellValue;
    //         if (dateAsString == null) return -1;
    //         var dateParts = dateAsString.split('/');
    //         var cellDate = new Date(
    //           Number(dateParts[2]),
    //           Number(dateParts[1]) - 1,
    //           Number(dateParts[0])
    //         );
    //         if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
    //           return 0;
    //         }
    //         if (cellDate < filterLocalDateAtMidnight) {
    //           return -1;
    //         }
    //         if (cellDate > filterLocalDateAtMidnight) {
    //           return 1;
    //         }
    //       },
    //       browserDatePicker: true,
    //     },
    //   },
      { field: 'categoryType' },
      {
        field: 'noOfCopiesActual',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'noOfCopiesCurrent',
        filter: 'agNumberColumnFilter',
      },
     
      {
        field: 'author',
      },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      filter: true,
    };
    this.rowSelection = 'multiple';
  }

  // onQuickFilterChanged() {
  //   this.gridApi.setQuickFilter(document.getElementById('quickFilter').val();
  // }
  onRowSelected(event) {
  }
  addBooks(){
    console.log(this.selectedData);
    this.http
    .post(
      'http://localhost:8080/api/saveBooks',this.selectedData
    )
    .subscribe(data => {
        console.log(data);
    });
  }
   
  removeBooks(){
    console.log(this.selectedData);
  }

  onSelectionChanged(event) {
    this.selectedData=[];
    let data:any[] = event.api.getSelectedNodes();
    for(let i=0;i<data.length;i++){
      this.selectedData.push(data[i].data)
    }
    // window.alert('selection changed, ' + rowCount + ' rows selected');
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        'http://localhost:8080/api/getBooks'
      )
      .subscribe(data => {
        console.log(data);
        this.rowData = data;
      });
  //   this.rowData=[
  //       {
  //         "isbn": 1,
  //         "Book_Title": "Half GirlFriend",
  //         "Publication_year": 2001,
  //         "Language": "English",
  //         "Category_Type": "Novel",
  //         "No_Of_Copies_Actual": 200,
  //         "No_Of_Copies_Current": 50,
  //         "Author": "Chetan Bhagat"
  //       },
  //       {
  //         "isbn": 47891,
  //         "Book_Title": "Hamlet ",
  //         "Publication_year": 1580,
  //         "Language": "English",
  //         "Category_Type": "Novel",
  //         "No_Of_Copies_Actual": 2000,
  //         "No_Of_Copies_Current": 550,
  //         "Author": "William Shakespeare"
  //       },
  //       {
  //         "isbn": 1546,
  //         "Book_Title": "The Adventures of Huckleberry Finn ",
  //         "Publication_year": 1945,
  //         "Language": "English",
  //         "Category_Type": "Story",
  //         "No_Of_Copies_Actual": 200,
  //         "No_Of_Copies_Current": 90,
  //         "Author": "Mark Twain"
  //       },
  //       {
  //         "isbn": 1876,
  //         "Book_Title": "War and Peace ",
  //         "Publication_year": 1856,
  //         "Language": "English",
  //         "Category_Type": "Story",
  //         "No_Of_Copies_Actual": 200,
  //         "No_Of_Copies_Current": 120,
  //         "Author": "Lio Tolstoy"
  //       },
  //       {
  //         "isbn": 7845,
  //         "Book_Title": "The Inheritance",
  //         "Publication_year": 2001,
  //         "Language": "English",
  //         "Category_Type": "Novel",
  //         "No_Of_Copies_Actual": 200,
  //         "No_Of_Copies_Current": 50,
  //         "Author": "Kiran Desai"
  //       },
  //       {
  //         "isbn": 78945,
  //         "Book_Title": "Chava",
  //         "Publication_year": 1993,
  //         "Language": "Marathi",
  //         "Category_Type": "History",
  //         "No_Of_Copies_Actual": 800,
  //         "No_Of_Copies_Current": 20,
  //         "Author": "Shivaji Sawant"
  //       },
  //       {
  //         "isbn": 124578,
  //         "Book_Title": "Mrutunjay",
  //         "Publication_year": 1992,
  //         "Language": "Marathi",
  //         "Category_Type": "History",
  //         "No_Of_Copies_Actual": 1000,
  //         "No_Of_Copies_Current": 500,
  //         "Author": "Shivaji Sawant"
  //       }
  //     ]
  
   }

}
