const topics = ["HTML", "CSS", "Git", "JavaScript"];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for(let x = 0; x <topics.length; x++) {
        console.log(topics[x]);
    }
}
console.log("Here are the topics we learned about through Prework:");
listTopics()

function selectTopic(){
 if (randomTopic === 'HTML') {
    console.log("Let's study HTML");
 } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS");
 } else if (randomTopic === 'Git') {
    console.log("Let's study Git");
 } else if (randomTopic === 'JavaScript') {
    console.log("Lets' study JavaScript");
 } else {
    console.log("Please try again");
 }
}
console.log("Which topic should I study first?");
selectTopic()