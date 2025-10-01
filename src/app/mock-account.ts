export class Account {
  constructor(
    public id: string,
    public balance: number = 0,
    public isActive: boolean = true
  ) {}
}

export let accountInstances = [
  new Account("ACC001", 1500.75, true),
  new Account("ACC002", 2500.50),
  new Account("ACC003", 0, false),
  new Account("ACC004", -150.25, true),
  new Account("ACC005", 100000, true)
];