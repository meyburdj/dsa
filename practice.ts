interface Text {
    startIndex: number;
    endIndex: number;
    content: string;
}

interface Sentence {
    texts: Text[]
}

/**
 * takes in array of strings, returns array of Text for each word
 */

function createSentence(chars: string[]): Sentence {

    let texts: Text[] = []

    let index = 0
    for (let word of chars) {
        let text: Text = {
            startIndex: index,
            endIndex: index + word.length - 1,
            content: word
        }
        texts.push(text)
        index += word.length
    }

    return { texts }
}