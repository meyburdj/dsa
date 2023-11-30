function findWords(words) {
    let rows = {
        'q': 1, 'w': 1, 'e': 1, 'r': 1, 't': 1, 'y': 1, 'u': 1, 'i': 1, 'o': 1, 'p': 1,
        'a': 2, 's': 2, 'd': 2, 'f': 2, 'g': 2, 'h': 2, 'j': 2, 'k': 2, 'l': 2,
        'z': 3, 'x': 3, 'c': 3, 'v': 3, 'b': 3, 'n': 3, 'm': 3
    };

    let finalWords = [];

    for (let i = 0; i < words.length; i++) {
        let yes = true;
        let firstRow = rows[words[i][0].toLowerCase()];

        for (let j = 1; j < words[i].length; j++) {
            if (rows[words[i][j].toLowerCase()] !== firstRow) {
                yes = false;
                break;
            }
        }

        if (yes) finalWords.push(words[i]);
    }
    return finalWords;
}
