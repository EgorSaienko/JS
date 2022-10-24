"use strict"
//Створіть тип об'єктів MP3-плеєрів за допомогою конструкторів об'єктів.
console.log("\t\t task1");

function MP3(name_name, nameExecutor_name, volume_name, songLength_name) { 
    return { 
        name: name_name, 
        nameExecutor: nameExecutor_name, 
        volume: volume_name, 
        songLength: songLength_name, 
        displayInfo: function() { 
            console.log("Назва треку: \t" + this.name + "\nІм'я виконавця: \t" + this.nameExecutor +  "\nГучність: \t" + this.volume + "\nДовжина треку: \t" + this.songLength); 
        } 
    }; 
} 
var song1 = new MP3("Чути гімн", "SKOFKA", "60%", "2:33"); 
song1.displayInfo();
var song2 = new MP3("У нашому місті", "Міша Крупін", "28%", "2:36");
song2.displayInfo();

