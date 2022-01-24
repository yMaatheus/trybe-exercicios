const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const pearsontrappistEnterprise = {
    ...user,
    ...jobInfos,
};

const {name: maria, age, nationality, profession, squad, squadInitials} = pearsontrappistEnterprise;

console.log(`Hi, my name is ${maria}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);