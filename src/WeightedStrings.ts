export function weightedStrings(s: string, queries: number[]): string[] {
    function charWeight(char: string): number {
        return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }

    const weights = new Set<number>();
    let i = 0;
    while (i < s.length) {
        const char = s[i];
        let weight = 0;
        while (i < s.length && s[i] === char) {
            weight += charWeight(char);
            weights.add(weight);
            i++;
        }
    }

    return queries.map(query => weights.has(query) ? "Yes" : "No");
}
