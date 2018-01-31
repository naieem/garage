import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// ======================================
// RXjs libraries
// ======================================
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { DataService } from '../../data-service/data.service';
@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs: Observable<any[]>;
  loading: boolean;
  noDataFound: boolean;
  private searchTerms = new Subject<string>();

  // ----------- favourite counter configuration ------------//
  favouriteList: any[] = [];
  favouriteTitle: string;
  favCounter: number;
  // ----------- favourite counter configuration ends ------------//
  // langs: string[] = [
  //   'English',
  //   'French',
  //   'German',
  // ];
  myform: FormGroup;
  // controlls: string[] = [
  //   'firstName',
  //   'lastName',
  //   'email',
  //   'password',
  //   'language'
  // ];
  term: FormControl;
  // lastName: FormControl;
  // email: FormControl;
  // password: FormControl;
  // language: FormControl;
  constructor(private dataService: DataService) { }

  // =========================================
  // init function after all content loading
  // =========================================
  ngOnInit() {
    this.favCounter = 0;
    this.favouriteTitle = 'Favourite Itunes Items';
    // ----------- form controll initialization ------------//
    this.formControllInitialization();
    console.log(this.myform);
    // ----------- getting all songs ------------//
    // this.getAllSongs();
    this.songs = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.dataService.getSong(term)),
    );
    // this.dataService.getSong(this.myform.value.term).subscribe(data => {
    //   const items = data.json();
    //   this.songs = items.results;
    //   if ( this.songs.length) {
    //     this.loading = false;
    //     this.noDataFound = false;
    //   } else {
    //     this.loading = false;
    //     this.noDataFound = true;
    //   }
    //   console.log(this.songs);
    // });
  }

  // ======================================
  // getting all songs
  // ======================================
  getAllSongs() {
    // this.dataService.getSong().subscribe(data => {
    //   const items = data.json();
    //   this.songs = items.results;
    //   console.log(this.songs);
    // });
  }

  // ======================================
  // initializing form controll
  // ======================================
  formControllInitialization() {
    this.createFormControls();
    this.createForm();
  }
  // ======================================
  // Creating form controlls
  // ======================================
  createFormControls() {
    this.term = new FormControl('', Validators.required);
    // this.lastName = new FormControl('sfds', Validators.required);
    // this.email = new FormControl('sdfd', [
    //   Validators.required,
    //   Validators.pattern('[^ @]*@[^ @]*')
    // ]);
    // this.password = new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(8)
    // ]);
    // this.language = new FormControl('', Validators.required);
  }
  // ======================================
  // creating forms
  // ======================================
  createForm() {
    this.myform = new FormGroup({
      // name: new FormGroup({
      //   firstName: this.firstName,
      //   lastName: this.lastName,
      // }),
      term: this.term
      // password: this.password,
      // language: this.language
    });
  }
  // ======================================
  // Searching on itunes
  // ======================================
  searchItunes() {
    this.loading = true;
    this.noDataFound = false;
    this.searchTerms.next(this.myform.value.term);
  }
  // ======================================
  // Adding to favourite list
  // ======================================
  addToFavourite(songsInfo: any) {
    this.favouriteList.push(songsInfo);
    this.favCounter++;
  }

}
