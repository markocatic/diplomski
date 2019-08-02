export class Country {
  private _country_id: number;
  private _name: string;

  constructor(country_id: number, name: string) {
    this._country_id = country_id;
    this._name = name;
  }
  
  public get country_id(): number {
    return this._country_id;
  }
  public set country_id(value: number) {
    this._country_id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
