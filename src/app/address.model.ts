export class Address {
  public ip: string;
  public category: any[];
  public created: string;
  public country:string;
  public isoCode:string;
  public isWhitelisted:boolean;

  constructor (ip:string, category: any[], created: string, country: string, isoCode: string, isWhitelisted:boolean) {
      this.ip = ip;
      this.category = category;
      this.created = created;
      this.country = country;
      this.isoCode = isoCode;
      this.isWhitelisted = isWhitelisted;
  }
}
