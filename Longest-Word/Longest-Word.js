function LongestWord(sen) {
  // code goes here
  sen = sen.split(' ');
  sen = sen.map(elem => elem.replace(/[^a-zA-Z0-9]/gi,''));
  sen = sen.reduce((cum,cur)=> cur.length > cum.length ? cur : cum);
  return sen;
}

// keep this function call here
console.log(LongestWord('Oi tudo bem!?#'));
