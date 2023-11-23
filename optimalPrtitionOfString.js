/**
 * 
* use a set to put chars in. if already in set increase counter and reset the
* set. otherwise add char to set
*
 */

function optPart(s) {

    if (s.length < 1) return 0;
    let chars = new Set([s[0]]);
    let counter = 1;

    for (let i = 1; i < s.length; i++) {
        let currChar = s[i];

        if (chars.has(currChar)) {
            counter++;
            chars = new Set([currChar]);
        } else {
            chars.add(currChar);
        }
    }
    return counter;
}