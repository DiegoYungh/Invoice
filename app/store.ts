import { Dispatcher } from './dispatcher';
import { CompanyConstants } from './+company/company.constants';
import { ActionInterface } from './+company/company.actions.ts';
import { CompanyModel } from './+company/models/company.model';

interface StateInterface {
  companies: CompanyModel[];
  currentCompanyId: string;
  addingNewCompany: boolean;
}

const initialState: StateInterface = {
  companies: [],
  currentCompanyId: null,
  addingNewCompany: false
}

class StoreClass extends Backbone.DeepModel {
  default(){
    return initialState;
  }

  initialize(){
    this.listenTo(Dispatcher, CompanyConstants.COMPANY_ACTION, this.onCompanyAction);
  }

  onCompanyAction(action: ActionInterface): void{
    let companyId = action.data.id;

    switch (action.type) {
      case CompanyConstants.COMPANY_DETAIL:
        this.set('currentCompanyId', companyId);
        break;
      case CompanyConstants.COMPANY_DELETE:
        if(this.get('currentCompanyId') === companyId){
          this.set('currentCompanyId', undefined);
        }
        break;
    }
  }
}

export var Store = new StoreClass();