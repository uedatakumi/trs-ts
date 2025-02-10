type Var = string;
type Func = {
  name: string;
  params: Term[];
}

type Term = Var | Func;
type Rule = [Term, Term];
type TRS = Rule[];
