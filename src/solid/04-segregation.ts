interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface RunningBird {
    run(): void;
}

interface SwimerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {

    public fly(): number { return 50 }
    public eat(): void {}

}

class Hummingbird implements Bird, FlyingBird {

    public fly(): number { return 20 }
    public eat(): void {}

}

class Ostrich implements Bird, RunningBird {

    public eat(): void {}
    public run(): void {}

}

class Penguin implements Bird, SwimerBird {

    public eat(): void {}
    public swim(): void {}

}

