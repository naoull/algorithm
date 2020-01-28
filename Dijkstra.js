function dijkstra(town, roadInfo, deliverTime) {
    // 플루이드 워셜 알고리즘 사용
    let answer = 0;
    const loadDistansces = new Array(town+1);
    for (let i =1; i <= town; ++i) {
        // 전체 경로 경우의 수 계산 무한대 가정, 초기화
        loadDistansces[i] = new Array(town+1).fill((Number.MAX_VALUE) * 2);
        loadDistansces[i][i] = 0;
    }
    // 최소경로 구하기
    for (const passCase of roadInfo) {
        const [a,b,c]= passCase;
        loadDistansces[a][b] = loadDistansces[b][a] = Math.min(c, loadDistansces[a][b]);
    }
    // 끝점 조합탐색 흠..
    for (let k = 1; k <= town; k++) {
        for (let i = 1; i <= town; ++i) {
            for (let j = 1; j <= town; j++) {
                loadDistansces[i][j] = Math.min(loadDistansces[i][j], loadDistansces[i][k] + loadDistansces[k][j]);
            }
        }
    }
    answer = loadDistansces[1].filter(loadDistansces => loadDistansces <= deliverTime);
    return answer.length;
}