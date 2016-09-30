import * as $ from 'jquery';
import { CompanyCollection } from './+company/company.collection';
import { CompanyListView } from './+company/views/company-list.view';
import { CompanyFormView } from './+company/views/company-form.view';
import { CompanyDetailView } from './+company/views/company-detail.view';
import { Store } from './store';
// Styling
require('./index.scss');
// Templating
let Template = require('./index.tpl.html');
// Code
class ViewTest extends Backbone.View<Backbone.Model> {
  private companyListView: CompanyListView;
  private companyFormView: CompanyFormView;

  initialize(){
    // Create a CompanyList
    this.companyListView = new CompanyListView({
      collection: CompanyCollection
    });
    // Create a CompanyForm
    this.companyFormView = new CompanyFormView();
    // Listen
    // this.listenTo(Store, 'change:currentCompanyId', this.renderDetail);
    Store.on('change:currentCompanyId', this.renderDetail.bind(this));
    // this.listenTo(Store, 'change', this.renderDetail);

    this.render();
  }

  render(){
    this.$el.html(Template());
    // Replace CompanyList
    this.$el.find('.company-list').replaceWith(
      this.companyListView.render().el
    );
    // Replace CompanyForm
    this.$el.find('.company-form').replaceWith(
      this.companyFormView.render().el
    );
    return this;
  }

  renderDetail(){
    let companyId = Store.get('currentCompanyId');
    let companyModel = CompanyCollection.get(companyId);

    if(companyModel !== undefined){
      this.$el.find('.company-detail').html(
        new CompanyDetailView({ model: companyModel }).render().el
      );
    } else if(companyModel === undefined){
      this.$el.find('.company-detail').empty();
    }
  }
}

$(() => {
    // Finally, we kick things off by creating the **App**.
    new ViewTest({ 
      el: $('#invoice-application')
    });
});