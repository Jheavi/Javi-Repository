function likes(names) {
    const likesStr = names.length > 1 ? 'like this' : 'likes this';
    let people;
    if (names.length === 0) {
        people = 'no one' ;
    } else if (names.length === 1) {
        people = names[0];
    } else if (names.length === 2) {
        people = `${names[0]} and ${names[1]}`;
    } else if (names.length === 3) {
        people = `${names[0]}, ${names[1]} and ${names[2]}`;
    } else {
        people = `${names[0]}, ${names[1]} and ${names.length - 2} others`;
    }

    return `${people} ${likesStr}`
}

module.exports = likes;