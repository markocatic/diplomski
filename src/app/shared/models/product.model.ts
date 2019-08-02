export class Product {
  private _product_id: number;
  private _brand: string;
  private _name: string;
  private _description_short: string;
  private _description: string;
  private _price: number;
  private _stock: number;
  private _image: string;

  constructor(
    product_id: number,
    brand: string,
    name: string,
    description_showrt: string,
    description: string,
    price: number,
    stock: number,
    image: string
  ) {
    this._product_id = product_id;
    this._brand = brand;
    this._name = name;
    this._description_short = description_showrt;
    this._description = description;
    this._price = price;
    this._stock = stock;
    this._image = image;
  }

  public get product_id(): number {
    return this._product_id;
  }
  public set product_id(value: number) {
    this._product_id = value;
  }
  public get brand(): string {
    return this._brand;
  }
  public set brand(value: string) {
    this._brand = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get description_short(): string {
    return this._description_short;
  }
  public set description_short(value: string) {
    this._description_short = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get stock(): number {
    return this._stock;
  }
  public set stock(value: number) {
    this._stock = value;
  }
  public get image(): string {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }
}
