type Var = string;
type Func = {
  name: string;
  terms: Term[];
}

type Term = Var | Func;
