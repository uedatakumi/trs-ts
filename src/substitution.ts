type Substitution = [string, Term][];

function substitute(t: Term, sigma: Substitution): Term {
    return typeof t === 'string'
        ? sigma.find(([x]) => x === t)?.[1] ?? t
        : { name: t.name, params: t.params.map(u => substitute(u, sigma)) };
}
