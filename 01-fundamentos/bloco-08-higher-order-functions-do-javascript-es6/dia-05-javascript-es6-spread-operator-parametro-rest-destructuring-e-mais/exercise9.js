const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
};

const weeksYear = ({spring, summer, autumn, winter} = yearSeasons) => [...spring, ...summer, ...autumn, ...winter];

console.log(weeksYear());