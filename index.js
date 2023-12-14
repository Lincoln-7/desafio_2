let victories = 145;
let defeats = 80;
let result = subtrair(victories, defeats);

function subtrair(victories, defeats){
    return victories - defeats;
} 
let ranking;

if (result < 10 ) {
    ranking = "Iron";
} else if (result >= 11 && result <= 20) {
    ranking = "Bronze";

} else if (result >= 21 && result <= 50) {
    ranking = "Silver"; 

} else if (result >= 51 && result <= 70) {
    ranking= "Gold";

} else if (result >= 71 && result <= 90) {
    ranking = "Platinum";

} else if (result >= 91 && result <= 100) {
    ranking = "Ascending";

} else if (result >= 101 && result <= 140) {
    ranking = "Immortal";

} else {
    ranking = "Radiante";
}

console.log("O heroi possui " + result + " vitórias e está na patente " + ranking)