const timerCalculator = () => {
    const startTime = performance.now();
    return {
        total: (classes: string[]) => {
            const ms = performance.now() - startTime;
            console.log(`Build ${classes.length} different classes `);
            console.log(`${ms} milliseconds`);
            console.log(`${ms / classes.length} milliseconds per class`);
        }
    }
}

export default timerCalculator;