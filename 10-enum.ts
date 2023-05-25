enum SEASONS {
    winter=100,
    summer,
    spring,
    fall
}

const myFavoriteSeason: SEASONS = SEASONS.winter;

function checkForWinter(input: SEASONS) {
    if(input === SEASONS.winter) return true;
}

console.log(SEASONS.winter);