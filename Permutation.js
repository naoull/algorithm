function permutation(inputArray)
{
    let answer = 0;
    let ArrayCase = arrayIndexingCase(inputArray);
    let beforeNumber = 0;
    ArrayCase.map(o => {
        let resultNumber = 0;
        for(let i = 0; i < o.length -1; i++) {
            resultNumber += Math.abs(o[i] - o[i+1]);
        }
        if (resultNumber > beforeNumber) {
            beforeNumber = resultNumber;
        }
    })
    return answer = beforeNumber;
}

// 전체 배열 순서 변경 전체의 수 찾기.
function arrayIndexingCase(array) {
    return array.reduce(
    function(list, el) {
        var newList = [];
        list.forEach(function(seq) {
            for (let i = seq.length; i >= 0; i--) {
                let newSequence = [].concat(seq);
                newSequence.splice(i, 0, el);
                newList.push(newSequence);
            }
        });
        return newList;
    },
    [[]]
    );
}