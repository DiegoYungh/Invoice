import {
  v4
} from 'node-uuid';

export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface AddressInterface {
  street: string;
  number: string;
  city: string;
  province: string;
  code: string;
}

export class CompanyModel extends Backbone.DeepModel {
  public id: string;
  public name: string = null;
  public owner: UserInterface = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null
  };
  public address: AddressInterface = {
    street: null,
    number: null,
    city: null,
    province: null,
    code: null
  };

  defaults(): Backbone.ObjectHash {
    return {
      id: null,
      name: null,
      owner: {
        firstName: null,
        lastName: null,
        email: null,
        phone: null
      },
      address: {
        street: null,
        number: null,
        city: null,
        province: null,
        code: null
      }
    }
  }

  initialize(){
    this.set('id', v4());
  }

  get fullName(): string {
    return `${this.get('owner.firstName')} ${this.get('owner.lastName')}`;
  }
}