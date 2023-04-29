let pronoun = ['the', 'our'];
let adj = ['great', 'big', 'exuberant', 'fearless', 'vibrant', 'jovial'];
let noun = ['jogger', 'racoon', 'giraffe', 'muffin', 'pickle', 'penguin'];
let extension = ['.com', '.net', '.org', '.io', '.dev', '.info'];

function generateDomain() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          const domain = `${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`;
          console.log(domain);
        }
      }
    }
  }
}

generateDomain();