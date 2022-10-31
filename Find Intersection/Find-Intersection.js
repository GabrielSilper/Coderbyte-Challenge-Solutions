function FindIntersection(strArr) { 
    const result = [];
    strArr = strArr.map(elem => elem.split(','));
    strArr[0].forEach(element => {
        for (let i = 0; i < strArr[1].length; i++) {
            if (strArr[1][i] === element) {
                result.push(Number(element));
            }   
        }
    });
    return result.join(',');
  }
     
  // keep this function call here 
  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));