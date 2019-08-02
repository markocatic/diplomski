export class Role {
  private _role_id: number;
  private _name: string;

  constructor(role_id: number, name: string) {
    this._role_id = role_id;
    this._name = name;
  }

  public get role_id(): number {
    return this._role_id;
  }
  public set role_id(value: number) {
    this._role_id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
