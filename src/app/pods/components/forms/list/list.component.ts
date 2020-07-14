import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Datastore } from 'src/app/service/datastore.service';
import { List } from 'src/app/model/list.model';

@Component({
  selector: 'forms-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListFormComponent implements OnInit {
  public listForm: FormGroup;
  private _list : List;

  @Output() created = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() set list(value : List) {
    if(value){
      this._list = value;
      this.listForm?.patchValue({
        titre : this._list.titre
      });
    }
    
  };

  get list() : List {
    return this._list;
  };

  constructor(public datastore: Datastore) {}

  ngOnInit(): void {
    this.listForm = new FormGroup({
      titre : new FormControl(this.list?.titre || '',[
        Validators.required,
        Validators.minLength(4),
      ])
    });
  }

  onReset() {
    // if(this.list){
    //   this.list.titre = ""
    // }
    this.reset.emit();
  }
  onSubmit(data) {
    this.reset.emit();
    if (this.list) {
      this.list.titre = data.titre;
      return this.list.save()
        .subscribe((data) => this.created.emit(data));
    }else{
      return this.datastore.createRecord(List, data)
        .save()
        .subscribe((data) => this.created.emit(data));
    }
    
  }

}
