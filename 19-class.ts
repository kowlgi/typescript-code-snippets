class House {
    address: string = "E 6/1";
    name: string = "Sriniketan";
    owner: string = "KVS";
    color?: string; // optional property do not need to be initialized or set in constructor
    residents!: number; // non-null assertion bypasses strictPropertyInitialization is bypassed
    constructor(name: string, address: string, owner?: string) {
        this.name = name;
        this.address = address;
        if(owner) this.owner = owner;
    }

    // static functions are utility functions
    static isAddressInBangalore(address: string) {
        return true;
    }
}

let house: House = new House("srini", "e6");

class TownHome extends House {
   floors: number;
    constructor(name: string, address: string, owner: string, flooors: number){
        super(name, address, owner);
        this.floors = flooors;
    }
}   