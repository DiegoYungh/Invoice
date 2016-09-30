import { Dispatcher } from '../dispatcher';
import { CompanyModel } from './models/company.model';
import { CompanyConstants } from './company.constants.ts';
import { ActionInterface } from './company.actions.ts';

class CompanyCollectionClass extends Backbone.Collection<Backbone.Model> {
  private localStorage = new Backbone.LocalStorage('CompanyCollection');

  initialize(){
    this.listenTo(Dispatcher, CompanyConstants.COMPANY_ACTION, this.onAction);
  }

  onAction(action: ActionInterface): void{
    switch (action.type) {
      case CompanyConstants.COMPANY_ADD:
        let rawData = action.data;

        this.add(new CompanyModel(rawData));
        break;
      case CompanyConstants.COMPANY_DELETE:
        let companyId = action.data.id;

        this.remove(companyId);
        break;
    }
  }

  get model() {
    return CompanyModel;
  }
}

export const CompanyCollection = new CompanyCollectionClass();