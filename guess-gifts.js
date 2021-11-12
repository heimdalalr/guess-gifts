function guessGifts(wishlist, presents) {

    const result = [];

    for (let j = 0; j<presents.length; j++) {

        for (let i = 0; i<wishlist.length; i++) {

            if (presentMatches(wishlist[i], presents[j])) {
                result.push(wishlist[i]['name']);
            }
        }
    }

    return result;

}

function presentMatches(listItem, present) {

    let matches = true

    for (property in present) {
        if (listItem[property] != present[property]) {
            matches = false
        }
    }

    return matches;

}

function log(result) {

    for (let i=0; i<result.length; i++) {
        console.log(result[i]);
    }
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

log(guessGifts(wishlist, presents));