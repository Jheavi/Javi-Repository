function digitalRoot(n) {
    let nString = n.toString();
    let answer = 0;
      
    for (let i = 0; i < nString.length; i++) {
      answer += nString[i]*1;
    }

    if (answer > 9) {
      answer = digitalRoot(answer);
    }

    return answer;
}

module.exports = digitalRoot;