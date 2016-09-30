import { Dispatcher } from '../dispatcher';
import { CompanyConstants } from './company.constants';

export interface ActionInterface {
  type: string;
  data: any;
}

class CompanyActionsClass {
  public companyDetail(companyId: string): void{
    let action: ActionInterface = {
      type: CompanyConstants.COMPANY_DETAIL,
      data: { id: companyId }
    };

    Dispatcher.trigger(CompanyConstants.COMPANY_ACTION, action);
  }
  public addCompany(companyData: any): void{
    let action: ActionInterface = {
      type: CompanyConstants.COMPANY_ADD,
      data: companyData
    };

    Dispatcher.trigger(CompanyConstants.COMPANY_ACTION, action);
  }
  public deleteCompany(companyId: string): void{
    let action: ActionInterface = {
      type: CompanyConstants.COMPANY_DELETE,
      data: { id: companyId }
    };

    Dispatcher.trigger(CompanyConstants.COMPANY_ACTION, action);
  }
}

export var CompanyActions = new CompanyActionsClass();