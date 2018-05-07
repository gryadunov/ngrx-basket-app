import {Injectable} from '@angular/core';
@Injectable()
export class StorageService {

  constructor() {}

  public get(key: string, defaultValueInCaseOfAbsent:any = undefined): any {
    const itemValue = window.localStorage.getItem(key);
    return itemValue ? JSON.parse(itemValue) : defaultValueInCaseOfAbsent;
  }

  public set(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  public clear(key: string): boolean {
    if (window.localStorage.getItem(key) !== undefined && window.localStorage.removeItem) {
      window.localStorage.removeItem(key);
      return true;
    }
    return false;
  }

}
