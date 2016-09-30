import { CompanyActions } from '../company.actions.ts';

let Template = require('../templates/company-list.tpl.html');

export class CompanyListView extends Backbone.View<Backbone.Model> {
  events(): Backbone.EventsHash{
    return {
      'click .detail-button': this.onClickDetail,
      'click .delete-button': this.onClickDelete
    }
  };

  initialize(){
    this.listenTo(this.collection, 'update', this.render);
  }

  render(){
    this.$el.html(
      Template({
        items: this.collection.toJSON()
      })
    )

    return this;
  }

  onClickDetail(event: Event){
    event.preventDefault();
    event.stopPropagation();

    let companyId = $(event.currentTarget).data('companyId');

    CompanyActions.companyDetail(companyId);
  }

  onClickDelete(event: Event){
    event.preventDefault();
    event.stopPropagation();

    let companyId = $(event.currentTarget).data('companyId');

    CompanyActions.deleteCompany(companyId);
  }
}