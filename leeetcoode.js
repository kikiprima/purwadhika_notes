function combinationSum(candidates, target) {
    const result = [];
    
    function backtrack(remainingTarget, currentCombination, start) {
        if (remainingTarget === 0) {
            result.push(currentCombination.slice());
            return;
        }
        
        if (remainingTarget < 0) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            currentCombination.push(candidates[i]);
            backtrack(remainingTarget - candidates[i], currentCombination, i);
            currentCombination.pop();
        }
    }
    
    backtrack(target, [], 0);
    return result;
}