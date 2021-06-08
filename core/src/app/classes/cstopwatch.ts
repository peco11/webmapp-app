export class CStopwatch {
    private startTime: number;
    private totalTime: number;
    private isPaused: boolean;

    constructor(stopwatchString?: string) {
        var obj = typeof stopwatchString !== 'undefined' ? JSON.parse(stopwatchString) : {};

        this.startTime = obj.startTime ? obj.startTime : undefined;
        this.totalTime = obj.totalTime ? obj.totalTime : 0;
        this.isPaused = obj.isPaused ? obj.isPaused : false;
    }

    start(): void {
        this.startTime = Date.now();
        this.totalTime = 0;
        this.isPaused = false;
    }

    pause(): void {
        this.totalTime += Date.now() - this.startTime;
        this.isPaused = true;
    }

    resume(): void {
        this.startTime = Date.now();
        this.isPaused = false;
    }

    stop(): void {
        this.startTime = null;
        this.totalTime = 0;
        this.isPaused = false;
    }

    getTime(): number {
        return this.isPaused ? this.totalTime : this.totalTime + Date.now() - this.startTime;
    }

    toString(): string {
        var obj = {
            startTime: this.startTime,
            totalTime: this.totalTime,
            isPaused: this.isPaused
        };

        return JSON.stringify(obj);
    }

    toJson(): any {
        return {
            startTime: this.startTime,
            totalTime: this.totalTime,
            isPaused: this.isPaused
        };
    }
}

export interface IShareOptions {
    message?: string;
    subject?: string;
    url?: string;
}
