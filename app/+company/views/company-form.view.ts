import { CompanyModel } from '../models/company.model';
import { CompanyActions } from '../company.actions';

let Template = require('../templates/company-form.tpl.html');

export class CompanyFormView extends Backbone.View<CompanyModel> {
  tagName: 'form';

  events(): Backbone.EventsHash {
    return {
      'submit': this.onSubmit,
      'change #name': this.updateField.bind(this, 'name'),
      'change #firstName': this.updateField.bind(this, 'owner.firstName'),
      'change #lastName': this.updateField.bind(this, 'owner.lastName'),
      'change #email': this.updateField.bind(this, 'owner.email'),
      'change #phone': this.updateField.bind(this, 'owner.phone'),
      'change #street': this.updateField.bind(this, 'address.street'),
      'change #number': this.updateField.bind(this, 'address.number'),
      'change #city': this.updateField.bind(this, 'address.city'),
      'change #province': this.updateField.bind(this, 'address.province'),
      'change #code': this.updateField.bind(this, 'address.code')
    };
  }

  initialize(){
    if(this.model === undefined){
      this.model = new CompanyModel();
    }
  }

  render(){
    this.$el.html(Template(this.model.toJSON()));

    return this;
  }

  onFail(){
    
  }

  onSuccess(){
    this.model.clear();
    this.render();
  }

  onSubmit(event: Event){
    event.preventDefault();
    event.stopPropagation();

    CompanyActions.addCompany(this.model.toJSON());
    this.onSuccess();

    return false;
  }

  updateField(fieldName: string, changeEvent: any): void{
    let value = changeEvent.target.value;
    this.model.set(fieldName, value);
  }
}