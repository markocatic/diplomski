export class City {
  private _city_id: number;
  private _name: string;
  private _country_id: number;

  constructor(city_id: number, name: string, country_id: number) {
    this._city_id = city_id;
    this._name = name;
    this._country_id = country_id;
  }

  public get city_id(): number {
    return this._city_id;
  }
  public set city_id(value: number) {
    this._city_id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get country_id(): number {
    return this._country_id;
  }
  public set country_id(value: number) {
    this._country_id = value;
  }
}
