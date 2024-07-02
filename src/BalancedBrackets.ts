export function isBalanced(s: string): string {
    const bracketPairs: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const stack: string[] = [];

    for (const char of s) {
        if (Object.values(bracketPairs).includes(char)) {
            stack.push(char);
        } else if (Object.keys(bracketPairs).includes(char)) {
            if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
                return "NO";
            }
        }
    }

    return stack.length === 0 ? "YES" : "NO";
}
