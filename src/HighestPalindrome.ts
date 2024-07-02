export function highestPalindrome(s: string, k: number): string | number {
    function helper(s_list: string[], left: number, right: number, k: number): string[] | number {
        if (left >= right) {
            return k >= 0 ? s_list : -1;
        }

        if (s_list[left] === s_list[right]) {
            return helper(s_list, left + 1, right - 1, k);
        } else {
            if (k <= 0) return -1;
            if (s_list[left] > s_list[right]) {
                s_list[right] = s_list[left];
            } else {
                s_list[left] = s_list[right];
            }
            return helper(s_list, left + 1, right - 1, k - 1);
        }
    }

    function maximizePalindrome(s_list: string[], left: number, right: number, k: number): string[] | number {
        if (left > right) return s_list;
        if (s_list[left] === s_list[right]) {
            if (s_list[left] !== '9' && k >= 2) {
                s_list[left] = s_list[right] = '9';
                k -= 2;
            }
            return maximizePalindrome(s_list, left + 1, right - 1, k);
        } else {
            if (k <= 0) return -1;
            if (s_list[left] !== '9') {
                s_list[left] = '9';
                k -= 1;
            }
            if (s_list[right] !== '9') {
                s_list[right] = '9';
                k -= 1;
            }
            return maximizePalindrome(s_list, left + 1, right - 1, k);
        }
    }

    let s_list = s.split('');
    let modified_list = helper(s_list, 0, s.length - 1, k);
    if (modified_list === -1) return -1;
    return maximizePalindrome(modified_list as string[], 0, s.length - 1, k).join('');
}
