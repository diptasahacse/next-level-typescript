interface Model<TUser, TMethods> {
  data: TUser;
  methods: TMethods;
}

interface IIUser {
  fName: string;
  lName: string;
}
interface IIMethods {
  getFullName(): string;
}
type model = Model<IIUser, IIMethods>;

class PPerson implements model {
  data: IIUser;
  methods: IIMethods;

  constructor(fName: string, lName: string) {
    this.data = {
      fName,
      lName,
    };
    this.methods = {
      getFullName: () => `${fName} ${lName}`,
    };
  }
}
const person01 = new PPerson("Dipta", "Saha")

console.log(person01.methods.getFullName())