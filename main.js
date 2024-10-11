
const bikes = [
    {
        name : "name1",
        weight : 10,
    },
    {
        name : "name2",
        weight : 20,
    },
    {
        name : "name3",
        weight : 5,
    },
    {
        name : "name4",
        weight : 40,
    },
];

const getMinWeight = (bikes) => {
    const lightestBike = bikes.reduce( (minBike,currentBike) =>{
        return currentBike.weight < minBike.weight? currentBike : minBike;
    });
    return lightestBike;
};

console.log(getMinWeight(bikes));