import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {NgxTributeDirective} from "ngx-tribute";

@Component({
  selector: 'app-tribute',
  templateUrl: './tribute.component.html',
  styleUrls: ['./tribute.component.less']
})
export class TributeComponent implements OnInit, AfterViewInit {
  @ViewChild('tributeDirective', {static: false}) tributeDirective: NgxTributeDirective<any>;

  private mentionItem = '{{mentionItem}}';

  private tributeOptionsForcontenteditable = {
    values: [
        { key: 'first name', value: 'first name' },
        { key: 'last name', value: 'last name' },
        { key: 'country', value: 'country' }
    ],
    trigger: '{{',
    menuItemTemplate:  (item) => {
      return '{{'+item.string + '}}';
    },
    selectTemplate: function (item) {
      return '{{<span>'+item.original.value+'</span>}}';
    },
    allowSpaces: true,
    //autocompleteMode: true,
  }

  private tributeOptions = {
    values: [
      { key: 'first name', value: 'first name' },
      { key: 'last name', value: 'last name' },
      { key: 'country', value: 'country' }
  ],
    trigger: '{{',
    menuItemTemplate:  (item) => {
      return '{{' +item.string+ '}}';
    },
    selectTemplate: function (item) {
      return '{{' +item.original.value+ '}}';
    },
    allowSpaces: true,
    replaceTextSuffix: '' // option which allows remove space after mention items but i get smtng like this -->  {{country}}{
    //autocompleteMode: true,
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.tributeDirective)
  }

}
