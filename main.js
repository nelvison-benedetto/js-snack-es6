//SNACK 1
// const bikes = [  //js obj
//     {
//         name : "name1",
//         weight : 10,
//     },
//     {
//         name : "name2",
//         weight : 20,
//     },
//     {
//         name : "name3",
//         weight : 5,
//     },
//     {
//         name : "name4",
//         weight : 40,
//     },
// ];
// const getMinWeight = (bikes) => {
//     const lightestBike = bikes.reduce( (minBike,currentBike) =>{
//         return currentBike.weight < minBike.weight? currentBike : minBike;
//     });
//     return lightestBike;
// };
// console.log(getMinWeight(bikes));

const football = [
    {name:"team1", points:0, fouls:0},
    {name:"team2", points:0, fouls:0},
    {name:"team3", points:0, fouls:0},
    {name:"team4", points:0, fouls:0},
];

function genRandomNums(){
    let rnum = Math.floor(Math.random()*100 + 1 );
    return rnum;
}

football.forEach( (item,index) =>{
    item.points = genRandomNums();
    item.fouls = genRandomNums();
});

console.log(football);