"use strict"
console.log("\t\t task1");

//Напишіть функцію створення об'єктів, які описують MP3 плеєр.
function MP3(name, nameExecutor, volume, songLength) {
    return {
        name: name,
        nameExecutor: nameExecutor,
        volume: volume,
        songLength: songLength,
        displayInfo: function() {
            console.log("Назва треку: \t" + name + "\nІм'я виконавця: \t" + nameExecutor +  "\nГучність: \t" + volume + "\nДовжина треку: \t" + songLength);
        }
    };
}
var song1 = MP3("Чути гімн", "SKOFKA", "60%", "2:33");
var song2 = MP3("У нашому місті", "Міша Крупін", "28%", "2:36");
song1.displayInfo();
song2.displayInfo();

console.log("\t\t task2");
function maxSalary(a) {
    var max = 0;
    for(var maxS in a) {
        if(a[maxS] > max) {
            max = a[maxS];
        }
    }
    return max;
}
var salaries1 = {
    John: 100,
    Bill: 300,
    Mike: 250,
};
var salaries2 = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50,
};

console.log("Max salary 1 = \t", maxSalary(salaries1));
console.log("Max salary 2 = \t", maxSalary(salaries2));