interface Room {
    type: "Room";
    dimensions: string;
    doors: number;
    windows: number;
}

interface Building {
    type: "Building"; // helps to discriminate between types
    entrances: number;
    storeys: number;
}

function makeSomething(input: Building | Room) {
    if(input.type === "Room") {
        console.log(input.doors);
    } else console.log(input.entrances);
}