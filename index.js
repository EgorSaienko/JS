
console.log("Task 1");
//Створіть тип об'єктів MP3 плеєра за допомогою прототипів.
var MP3_1 = {
    name: "Чути гімн",
    nameExcutor: "SKOFKA",
}
var MP3_2 = {
    volume: "60%",
    songLength: "2:33",
}
MP3_1.__proto__ = MP3_2;
console.log("Назва треку\t", MP3_1.name);
console.log("Ім'я виконавця:\t", MP3_1.nameExcutor);
console.log("Гучність\t", MP3_1.volume);
console.log("Довжина треку\t", MP3_1.songLength);
