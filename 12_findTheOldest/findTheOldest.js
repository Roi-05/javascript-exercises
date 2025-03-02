function getAge (birth, death) {
    if (death === undefined) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    const oldest = people.sort((a, b)  => {
        let currentGuy = getAge(a.yearOfBirth, a.yearOfDeath);
        let nextGuy = getAge(b.yearOfBirth, b.yearOfDeath);

        return (currentGuy > nextGuy) ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
