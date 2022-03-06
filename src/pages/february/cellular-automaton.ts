type color = [number, number, number];

export abstract class CellularAutomaton {
    abstract update(oldImage: ImageData, newImage: ImageData, x: number, y: number): void;

    init(_context: CanvasRenderingContext2D, _width: number, _height: number) { }
    finishFrame() { }

    // helper function
    get(image: ImageData) {
        return [
            image.width,
            image.height,
            [
                [1, 0],
                [image.width - 1, 0],
                [0, 1],
                [0, image.height - 1],
            ],
        ] as const;
    }
}

export class SteppingStone extends CellularAutomaton {
    init(context: CanvasRenderingContext2D, width: number, height: number) {
        const image = context.getImageData(0, 0, width, height);

        for (let y = 0; y < image.height; y++) {
            for (let x = 0; x < image.width; x++) {
                set(image, x, y, rand(255), rand(255), rand(255));
            }
        }

        context.putImageData(image, 0, 0);
    }

    update(oldImage: ImageData, newImage: ImageData, x: number, y: number): void {
        const [width, height, directions] = this.get(oldImage);

        if (Math.random() < 0.5) {
            // set to color of one of its neighbours
            const dir = directions[rand(4)];
            set(newImage, x, y, ...get(oldImage, (x + dir[0]) % width, (y + dir[1]) % height));
        } else {
            // keep color
            set(newImage, x, y, ...get(oldImage, x, y));
        }
    }
}

export class Cyclic extends CellularAutomaton {
    states: number[];
    newStates: number[];
    colors: color[];
    numStates: number;

    constructor(width: number, height: number, numStates: number) {
        super();
        this.numStates = numStates;
        this.states = Array<number>(width * height);
        this.newStates = Array<number>(width * height);

        this.colors = Array<color>(numStates);

        for (let i = 0; i < numStates; i++) {
            this.colors[i] = [rand(255), rand(255), rand(255)];
        }

        for (let i = 0; i < width * height; i++) {
            this.states[i] = rand(numStates);
        }
    }

    update(oldImage: ImageData, newImage: ImageData, x: number, y: number): void {
        const [width, height, directions] = this.get(oldImage);

        let currentState = this.states[y * width + x];
        const nextState = (currentState + 1) % this.numStates;
        let update = false;
        for (const d of directions) {
            const idx = ((y + d[1]) % height) * width + ((x + d[0]) % width);
            if (this.states[idx] === nextState) {
                update = true;
                break;
            }
        }

        if (update) {
            currentState = nextState;
        }

        this.newStates[y * width + x] = currentState;

        set(newImage, x, y, ...this.colors[currentState]);
    }

    finishFrame() {
        // update states
        this.states.splice(0, this.states.length, ...this.newStates);
    }
}

function rand(max: number) {
    return Math.floor(Math.random() * max);
}

function set(image: ImageData, x: number, y: number, r: number, g: number, b: number) {
    const idx = 4 * (y * image.width + x);
    image.data[idx + 0] = r;
    image.data[idx + 1] = g;
    image.data[idx + 2] = b;
    image.data[idx + 3] = 255;
}

function get(image: ImageData, x: number, y: number): color {
    const idx = 4 * (y * image.width + x);
    return [image.data[idx], image.data[idx + 1], image.data[idx + 2]];
}