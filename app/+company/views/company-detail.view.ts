
let Template = require('../templates/company-detail.tpl.html');

export class CompanyDetailView extends Backbone.View<Backbone.Model> {
  render(){
    this.$el.html(
      Template(this.model.toJSON())
    );

    return this;
  }
}