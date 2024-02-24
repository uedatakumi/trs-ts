type Var = string;
type Func = {
  name: string;
  params: Term[];
}

type Term = Var | Func;
