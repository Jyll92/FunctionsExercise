// 1
function spookyGhost(){
    console.log("Boo!!!");
}
spookyGhost();
// 2
function candy(goal){
    // for (let i = 0; i < 4; i++) {
    // console.log(goal);
    // }
    console.log(goal);
    console.log(goal);
    console.log(goal);
    console.log(goal);
}
candy("Get Candy");
// 3
function werewolf(a, b){
    if (a === `Full` && b === `Moon`){
        console.log(`ARH-WOO!`)
    }
}
werewolf(`Full`, `Moon`);
werewolf(`Crescent`, `Moon`);
// 4
function halloween(){
    return `October 31st`;
}
console.log(halloween());

// 5
function isEnoughCandy(pieces){
    // if (pieces >= 31){
    //     return true;
    // } else {
    //     return false;
    // }

    return (pieces >= 31) ? true : false;
}
console.log(isEnoughCandy(31));
console.log(isEnoughCandy(2));

// 6
function candyCounter(nums){
    let total = 0;
    for (i = 0; i < nums.length; i++){
        total += nums[i];
    }
    return total;
}
console.log(candyCounter([1, 2, 3]));

// 7 
const hauntedMansion = function() {
    console.log("Welcome, foolish mortals, to the Haunted Mansion!")};
    
hauntedMansion();

// 8 
ghostbusters = () => `Who You Gonna Call?`;
console.log(ghostbusters());

// 9
// No

// 10
// Yes

// 11
const costumes = ["Ghost", "Princess", "Pirate"];


const upperCostumes = costumes.map(i => i.toUpperCase());

console.log(upperCostumes);

// Bonus
// 12
const stephenKingMovies = ["The Shining", "Christine", "It", "The Mist", "Creepshow", "Pet Sematary"];

const twoMovies = stephenKingMovies.filter(i => i.length === 9);
console.log(twoMovies);

// 13
const halloweenSongs1 = ["Monster Mash", "Thriller"];
const halloweenSongs2 = ["I Put A Spell On You", "Ghostbusters"];
const halloweenJukeBox = (songs) => {
    let randomSong = Math.floor(Math.random() * songs.length);
    console.log(songs[randomSong]);
}
halloweenJukeBox(halloweenSongs1);
halloweenJukeBox(halloweenSongs2);

// 14
const caps = string => {
    let newString = "";
    for (i = 0; i < string.length; i++){
        if (i % 2 === 0){
            newString = newString + string[i].toUpperCase();
        } else {
            newString = newString + string[i];
        }
    }
    return newString;
}
console.log(caps("asdasdasdasd"));