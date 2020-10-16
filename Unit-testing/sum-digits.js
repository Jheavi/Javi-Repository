function digitalRoot(n) {
    let answer = n.toString().split('').reduce((a, b) => a*1 + b*1)*1;
    return answer >= 10 ? digitalRoot(answer) : answer;
}

module.exports = digitalRoot;