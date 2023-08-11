var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics() {
 for (var x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

function selectTopic() {
    if (topics[3] === 'HTML') {
      console.log("Let's study HTML!");
    } else if (topics[3] === 'CSS') {
      console.log("Let's study CSS!");
    } else if (topics [3] === 'Git') {
      console.log("Let's study Git!");
    } else if (topics [3]=== 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();