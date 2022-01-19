const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const generateRandomNumber = (min, max) => Math.random() * (max - min) + min;

const dragonAttack = () => {
    const max = dragon.strength;
    const min = 15;
    return generateRandomNumber(min, max);
}

const warriorAttack = () => {
    const max = warrior.strength * warrior.weaponDmg;
    const min = warrior.strength;
    return generateRandomNumber(min, max);
}

const mageAttack = () => {
    const turnoStatus = {
        danoCausado: 'Não possui mana suficiente',
        manaGasta: 0,
    }
    if (mage.mana > 15) {
        const min = mage.intelligence;
        const max = mage.intelligence * 2;
        turnoStatus.danoCausado = generateRandomNumber(min, max);
        turnoStatus.manaGasta = 15;
    }
    return turnoStatus;
}

const gameActions = {
    turnoWarrior: (warriorAttack) => {
        const warriorDamage = warriorAttack();
        warrior.damage = warriorDamage;

        dragon.healthPoints -= warriorDamage;
    },
    turnoMage: (mageAttack) => {
        const mageDamage = mageAttack().danoCausado;
        const manaGasta = mageAttack().manaGasta;
        mage.damage = mageDamage;
        mage.mana -= manaGasta;

        dragon.healthPoints -= mageDamage;
    },
    turnoDragon: (dragonAttack) => {
        const dragonDamage = dragonAttack();
        dragon.damage = dragonDamage;

        warrior.healthPoints -= dragonDamage;
        mage.healthPoints -= dragonDamage;
    },
    status: () => battleMembers,
};

gameActions.turnoWarrior(warriorAttack);
gameActions.turnoMage(mageAttack);
gameActions.turnoDragon(dragonAttack);
console.log(gameActions.status());