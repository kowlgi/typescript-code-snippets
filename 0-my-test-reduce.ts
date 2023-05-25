let people = [
    {
        name: 'Sethu',
        age: 42,
        city: 'Erode'
    },
    {
        name: 'Barath',
        age: 19,
        city: 'Barur'
    },
    {
        name: 'Charles',
        age: 23,
        city: 'Warsaw'
    }
];

type Item = {
    name: string;
    age?: string;
    city: string;
}

let finaldata = people.reduce((data, item) => {
    data.push({name: item.name, city: item.city}); 
    return data;
}, [] as Item[]);

console.log(finaldata);