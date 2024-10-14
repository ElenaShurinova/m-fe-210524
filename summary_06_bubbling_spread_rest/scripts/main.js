const numbers = [1, 2, 3, 4];

const first = ['this', 'is', 'the', 'first', 'part'];
const second = ['and', 'this', 'is', 'the', 'second', 'one'];
const strings = ['another', 'array', 'of', 'simple', 'strings'];

const dvalin = {
  name: 'Dvalin',
  age: 232,
  weapon: 'axe',
  skills: {
    melee: 12
  }
}

const balin = {
  name: 'Balin',
  age: 320,
  weapon: 'sword',
  skills: {
    melee: 8
  }
}

const filli = {
  name: 'Filli',
  age: 172,
  weapon: 'spear',
  skills: {
    melee: 9
  }
}

const killi = {
  name: 'Killi',
  age: 163,
  weapon: 'crossbow',
  skills: {
    melee: 7,
    archery: 10
  }
}

const torin = {
  name: 'Torin',
  nickname: 'The Oakshield',
  age: 201,
  weapons: ['sword', 'hammer', 'dagger'],
  skills: {
    melee: 10,
    archery: 5,
    magic: 2
  }
}

const nori = {
  name: 'Nori',
  age: 415,
  weapons: ['hammer', 'dagger', 'bow', 'knives'],
  skills: {
    melee: 7,
    archery: 3
  }
}

const standardArmour = ['helmet', 'armour', 'shield'];

const standardAmmo = {
  bowler: 'steel bowler',
  flask: 'metal flask',
  flintstone: 'mechanical flintstone',
  food: ['meat', 'nuts', 'bread', 'ale'],
  others: {
    socks: 'wool socks',
    jacket: 'leather jacket'
  }
}

// Для задачи 9 и далее
const torinTroops = [];

// 1. Пристрелочная, вспоминаем деструктуризацию. У нас есть объект `torin`. С помощью деструктуризации, записать в переменные `name`, `nickname` значения соответствующих свойств объекта `torin`

const { name, nickname } = torin;

console.log(name); 
console.log(nickname);

// 2. Еще деструктуризация. Записать в переменную `secondWeapon` второе оружие объекта `torin`

const { weapons } = torin;
const [, secondWeapon] = weapons;

console.log(secondWeapon);

// 3. Пишем функцию `gatherWeapons`. Она должна принять произвольное количество гномов. Каждый гном - это объект со свойством `weapon`, которое содержит строку с названием вооружения. Функция должна вернуть массив вооружений.

function gatherWeapons(...dwarves) {
  return dwarves.map(dwarf => dwarf.weapon);
}

// Пример использования функции
const dwarf1 = { name: 'Гимли', weapon: 'Топор' };
const dwarf2 = { name: 'Двалин', weapon: 'Меч' };
const dwarf3 = { name: 'Балин', weapon: 'Копье' };


console.log(weapons); 

// 4. Пишем функцию `gatherNamedWeapons`. Она также должна принять произвольное количество гномов. Функция должна вернуть объект, ключами которого будут имена гномов (свойство `name`), а значениями - названия вооружений (свойство `weapon`).

function gatherNamedWeapons(...dwarves) {
  return dwarves.reduce((acc, dwarf) => {
      acc[dwarf.name] = dwarf.weapon;
      return acc;
  }, {});
}
console.log(gatherNamedWeapons(filli, dvalin)); 


// 5. Пишем функцию `dwarfTrainer`. Она должна принимать первым аргументом объект с данными гнома, вторым - число `n`, и далее - произвольное количество строк с именами навыков, которые мы хотим прокачать. Нужно, чтобы у объекта гнома, значения этих навыков увеличились на `n`. Если этого навыка еще нет - надо его добавить.
// const balin = {
//   name: 'Balin',
//   age: 320,
//   weapon: 'sword',
//   skills: {
//     melee: 8
//   }
// }

dwarfTrainer(balin, 4, 'melee'); // balin.skills.melee теперь равно 12
dwarfTrainer(balin, 3, 'archery', 'magic'); // balin.skills.melee = 12, balin.skills.archery = 3, balin.skills.magic = 3

function dwarfTrainer(dwarf, n, ...skills) {
 

  skills.forEach(skills => {
      dwarf.skills[strings] += n;
  });
}

dwarfTrainer(balin, 4, 'melee'); 
console.log(balin.skills.melee); 

// 6. Пишем функцию `moriaForgery`. Кузница Мории должна обеспечивать гномов добротной броней. Есть стандарт, по которому каждому гному положены броня, щит, шлем. Это массив `standardArmour`. Функция будет принимать в аргументах гнома. Нужно, чтобы гному добавилось свойство `armour`, которое будет содержать массив с теми же данными, которые есть в `standardArmour`.


function moriaForgery(dwarf) {
  const standardArmour = ['helmet', 'armour', 'shield'];
  dwarf.armour = [...standardArmour];
}
moriaForgery(nori);
console.log(nori.armour); 


// 7. И теперь напишем функцию `provideAmmo`, которая будет выдавать каждому гному стандартный набор снаряжения. Этот стандартный набор хранится в объекте `standardAmmo`. Функция примет в аргументе объект гнома, и должна сделать ему свойство `ammo`, которое будет содержать содержимое `standardAmmo`.

function provideAmmo(dwarf) {
  const standardAmmo = {
    bowler: 'steel bowler',
    flask: 'metal flask',
    flintstone: 'mechanical flintstone',
    food: ['meat', 'nuts', 'bread', 'ale', 'tomate'],
    others: {
      socks: 'wool socks',
      jacket: 'leather jacket'
    }
  };
  dwarf.ammo = { ...standardAmmo };
}


provideAmmo(torin);
console.log(torin.ammo); 

// 8. Теперь поработаем с DOM. Нужно создать функцию `renderDwarfForm`. Она будет средствами JS делать форму, и возвращать ссылку на созданный DOM-узел. Форма должна содержать 2 инпута (name, age), выпадающий список для выбора оружия (значения `sword`, `axe`, `hammer`, `crossbow`, тексты такие же но с большой буквы), и кнопку Save.


function renderDwarfForm() {
  // Создаем форму
  const form = document.createElement('form');

  // Создаем поле для имени
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name: ';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameLabel.appendChild(nameInput);

  // Создаем поле для возраста
  const ageLabel = document.createElement('label');
  ageLabel.textContent = 'Age: ';
  const ageInput = document.createElement('input');
  ageInput.type = 'number';
  ageInput.name = 'age';
  ageLabel.appendChild(ageInput);

  // Создаем выпадающий список для выбора оружия
  const weaponLabel = document.createElement('label');
  weaponLabel.textContent = 'Weapon: ';
  const weaponSelect = document.createElement('select');
  weaponSelect.name = 'weapon';

  const weapons = ['Sword', 'Axe', 'Hammer', 'Crossbow'];
  weapons.forEach(weapon => {
      const option = document.createElement('option');
      option.value = weapon.toLowerCase();
      option.textContent = weapon;
      weaponSelect.appendChild(option);
  });

  weaponLabel.appendChild(weaponSelect);

  // Создаем кнопку Save
  const saveButton = document.createElement('button');
  saveButton.type = 'submit';
  saveButton.textContent = 'Save';

  // Добавляем все элементы в форму
  form.appendChild(nameLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(ageLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(weaponLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(saveButton);

  // Возвращаем ссылку на созданный DOM-узел
  return form;
}