const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames() {
    return weapons.map(weapon=> weapon.name)
};
function getCountReliableWeapons (durabilityInput) {
    return weapons.filter(weapon => weapon.durability > durabilityInput).length
  
};
function hasReliableWeapons(durabilityInput) {
    return weapons.some(weapon => weapon.durability > durabilityInput)
};
function getReliableWeaponsNames (durabilityInput) {
   const arr = weapons.filter(weapon => weapon.durability > durabilityInput);
   return arr.map(weapon=> weapon.name);
};
function getTotalDamage() {
    return weapons.reduce((sumAttack, weapon) => {
        return sumAttack + weapon.attack
        }, 0)
};


function getValuestCountToSumValues(array, sum) {
  
    return array.reduce((accum, element, index) => {
        if (accum.sumElements < sum) {
            return {sumElements: accum.sumElements + element, count: accum.count + 1}
        };
        return accum;           
    }, {sumElements: 0, count: 0}).count;
};
