import { Component, OnInit, NgModule } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'students-cmp',
    moduleId: module.id,
    templateUrl: 'students.component.html',
    styleUrls: ['students.component.css']
})

export class StudentsComponent implements OnInit{
    totalItems = 64;
    currentPage = 4;
 
    setPage(pageNo: number): void {
        this.currentPage = pageNo;
    }
    ngOnInit(){
        
    }
}
