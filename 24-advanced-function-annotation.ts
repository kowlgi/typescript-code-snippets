interface Cherry {
    size: number;
    sweetness: number;
}

// you can add a type annotation to this. I don't know where this is useful!!
function eat(this:Cherry) {
    this.size = 100;
}
