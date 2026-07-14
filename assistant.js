function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = "neutral";
}
 
let jarvis = new PersonalAssistant("Jarvis");
 
console.log("Name:", jarvis.name);
console.log("Tasks:", jarvis.tasks);
console.log("Mood:", jarvis.mood);
 
