// Здесь будем писать код

const numbers = [1,2,3,5,9,7,11,13,9,17,18,9,101,191];

const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

const weapons = ['sword', 'axe', 'naginata', 'crossbow', 'spear', 'bow', 'hammer', 'dagger', 'yari', 'protazan'];

const archery = ['crossbow', 'bow'];
const melee = ['sword', 'axe', 'naginata', 'spear', 'hammer', 'dagger', 'yari', 'protazan'];

const dwarwes = [
  { name: 'Torin', age: 232 },
  { name: 'Dvalin', age: 301 },
  { name: 'Balin', age: 454 },
  { name: 'Filli', age: 198 },
  { name: 'Killi', age: 203 }
]

const bilbo = { name: 'Bilbo', age: 34 };







// 1. Пристрелочная. Вспоминаем все методы работы с массивами. 
// Для каждого элемента массива `weapons`, вывести в консоль его
//  название, индекс, и количество символов в названии.



weapons.forEach((weapon, index) => {
  console.log(`Название: ${weapon}, Индекс: ${index}, Количество символов: ${weapon.length}`);
});

// 2. Из массива `weapons`, получить массив чисел, которые 
// будут количеством символов в элементах массива `weapons`.



const weaponLengths = weapons.map(weapon => weapon.length);

console.log(weaponLengths);

// 3. Из массива `weapons`, получить массив строк, элементы к
// оторого будут приведены к верхнему регистру. 
// Желаемый результат `['SWORD', 'AXE', 'NAGINATA', ...]`



const upperWeapons = weapons.map(weapon => weapon.toUpperCase());

console.log(upperWeapons);

// 4. Из массива `weapons`, получить массив строк, элементы 
// которого будут содержать наименования оружия с большой буквы.
//  Желаемый результат - `['Sword', 'Axe', 'Naginata', ...]`.



const capitalWeapons = weapons.map(weapon => weapon.charAt(0).toUpperCase() + weapon.slice(1));

console.log(capitalWeapons);

// 5. Из массива `weapons`, получить массив объектов. У объектов 
// должны быть свойства `name` (значение оружия), и `skill` 
// (уровень владения). В качестве уровня владения брать индекс 
// элемента в исходном массиве. Желаемый результат: `[ {name: '
// sword', skill: 0}, {name: 'axe', skill: 1}, {name: 'naginata',
//  skill: 2}, ...]`.

const weaponObjects = weapons.map((name, index) => ({
  name: name,
  skill: index
}));

console.log(weaponObjects);

// 6. Из массива гномов `dwarwes`, получить массив гномов не старше 
// 250 лет (свойство age не больше 250).

;

const youngDwarves = dwarwes.filter(dwarf => dwarf.age <= 250);

console.log(youngDwarves);

// 7. Из массива гномов `dwarwes`, получить массив гномов 
// средненго возраста (от 150 до 350 лет).

const agedDwarves = dwarwes.filter(dwarf => dwarf.age >= 150 && dwarf.age <= 350);

console.log(agedDwarves);

// 8. Определить индекс элемента `naginata` в массиве `weapons`.


const indexNaginata = weapons.indexOf('naginata');

console.log(indexNaginata);

// 9. Найти первого гнома в массиве гномов, чей возраст больше 300 лет.

const firstOldDwarf = dwarwes.find(dwarf => dwarf.age > 300);

console.log(firstOldDwarf);

// 10. Задача с подвохом. Найти самого старшего гнома в массиве гномов

const oldestDwarf = dwarwes.reduce((oldest, dwarf) => {
  return (dwarf.age > oldest.age) ? dwarf : oldest;
}, dwarwes[0]);

console.log(oldestDwarf);

// 11. Массив гномов `dwarwes` содержит данные о строе гномов. 
// /Определить индекс гнома с именем `Dvalin`.

const indexDvalin = dwarwes.findIndex(dwarf => dwarf.name === 'Dvalin');

console.log(indexDvalin);

// 12. У нас есть новый участник похода, объект `bilbo`. 
// Нужно сделать так, чтобы он стал в строй после гнома по 
// имени `Dvalin`. То есть, нужно добавить в середину массива 
// гномов новый элемент.



// Найти индекс гнома по имени Dvalin
const indexNewDvalin = dwarwes.findIndex(dwarf => dwarf.name === 'Dvalin');

// Вставить Bilbo в массив после Dvalin
dwarwes.splice(indexNewDvalin + 1, 0, bilbo);

console.log(dwarwes);

// 13. Найти в массиве оружия те элементы, которые относятся к 
// оружию дальнего боя 
// (то есть, которые входят в массив `archery`).

const rangedWeapons = weapons.filter(weapon => archery.includes(weapon));

console.log(rangedWeapons);

// 14. Упорядочить гномов по возрастанию их возраста.
dwarwes.sort((a, b) => a.age - b.age);

console.log(dwarwes);

// 15. Получить из массива гномов массив имен гномов.

const names = dwarwes.map(dwarf => dwarf.name);

console.log(names);

const dwarfNames = dwarwes.map( (el) => el.name );
const dawrwes2 = dwarwes.reduce( ( acc, val ) => {
  acc.push( val.name );
  return acc;
}, [] );

console.log(dwarfNames);

// 16. Получить из массива гномов их суммарный возраст.

const totalAge = dwarwes.reduce((sum, dwarf) => sum + dwarf.age, 0);

console.log(totalAge);

// 17. Написать функцию `giveWeapon`. Она принимает на вход 
// объект (гнома), строку с именем оружия, которое мы даем гному, 
// и число, определяющее уровень владения этим оружием. Функция 
// должна добавить в объект гнома свойство с ключом, равным имени 
// оружия, и значением, равным уровню владения.

function giveWeapon(dwarf, weaponName, skillLevel) {
  // Добавляем свойство с именем оружия и уровнем владения в объект гнома
  dwarf[weaponName] = skillLevel;
}

// Пример использования:
const dwarf = { name: 'Torin', age: 232 };

// Добавляем гному оружие и уровень владения
giveWeapon(dwarf, 'sword', 5);

console.log(dwarf); // { name: 'Torin', age: 232, sword: 5 }

// 18. Вооружить всех гномов из массива `dwarwes` оружием из 
// массива `weapons`. Давать гному то оружие, которое имеет 
// тот же индекс, что и гном. Уровень владения ставить 10.



function armDwarves(dwarves, weapons) {
  dwarves.forEach((dwarf, index) => {
    if (index < weapons.length) { // Проверяем, что индекс не выходит за границы массива weapons
      dwarf[weapons[index]] = 10; // Добавляем оружие с уровнем владения 10
    }
  });
}

armDwarves(dwarwes, weapons);

console.log(dwarwes);