import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../data-service/data.service';
@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs: any[];
  loading: boolean;
  noDataFound: boolean;
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
    // ----------- form controll initialization ------------//
    this.formControllInitialization();
    console.log(this.myform);
    // ----------- getting all songs ------------//
    this.getAllSongs();
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
    this.dataService.getSong(this.myform.value.term).subscribe(data => {
      const items = data.json();
      this.songs = items.results;
      if ( this.songs.length) {
        this.loading = false;
      } else {
        this.loading = false;
        this.noDataFound = true;
      }
      console.log(this.songs);
    });
  }

}
