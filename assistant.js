function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = "neutral";
}
 
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  console.log(`Task added: "${task}"`);
};
 
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    const finishedTask = this.tasks.shift();
    console.log(`Completed: "${finishedTask}"`);
  } else {
    console.log("No tasks to complete.");
  }
};
 
PersonalAssistant.prototype.reportMood = function() {
  console.log(`${this.name}'s mood: ${this.mood}`);
};
 
let jarvis = new PersonalAssistant("Jarvis");
jarvis.addTask("Test task");
jarvis.reportMood();
jarvis.completeTask();
 
