/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

// const logItems = function(items = []) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * 
 * logItems()
 */

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names = '', phones = '') {
//   const namesArray = names.split(',');
//   const phonesArray = phones.split(',');

//   for (let i = 0; i < namesArray.length; i++) {
//     console.log(`${namesArray[i]} has this number: ${phonesArray[i]}`);
//   }
// }

// printInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/**
 * Напиши функцію formatTime(minutes), яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */


// function formatTime(minutes) {
//   const days = Math.floor(minutes / (60 * 24)).toString();
//   const hours = Math.floor((minutes - days * 24 * 60) / 60).toString();
//   const mins = (minutes % 60).toString();

//   return `${days} days ${hours.padStart(2, "0")}:${mins.padStart(2, "0")}`
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// console.log(formatTime(3647)); // "24:01"


// function name() {
//   return undefined;
// }

// const result = console.log("Wdwdwd")

// console.log(result);