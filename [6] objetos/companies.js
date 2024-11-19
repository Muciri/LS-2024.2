const companies = [
    {
        name: 'Amazon',
        founded: 1994,
        industry: ['E-Comerce', 'Cloud']
    },

    {
        name: 'Facebook',
        founded: 2004,
        industry: ['Social']
    },

    {
        name: 'Alphabet Inc',
        founded: 2015,
        industry: ['Search', 'Cloud', 'Advertising']
    }
];

companies.map( (x) => x.kind = 'Internet Company' );

companies.sort((a, b) => a.name.localeCompare(b.name));

const MAX_NAME_LENGHT = Math.max(
  ...companies.map((company) => company.name.length)
);

function show(companies) {
  return companies
    .map(
      (company) => company.name.padEnd(MAX_NAME_LENGHT + 3, '.') + company.founded
    ).join('\n');
}

console.log(show(companies));