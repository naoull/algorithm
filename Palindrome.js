function palindrome(n, m){
    let answer = 0

    for(let num = n; num <= m; num++) {
        if (checkPalindromeCharacter(num.toString())) {
            answer++;
        }
    }

    return answer
}

function checkPalindromeCharacter(inputText) {
    const textLength  = inputText.length;
    let character = textLength - 1;
    for(let num = 0; num < textLength / 2; num++, character--) {
        if (inputText.charAt(num) !== inputText.charAt(character)) {
            return false;
        }
    }
    return true;
}