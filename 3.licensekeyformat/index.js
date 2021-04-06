/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = (S, K) => {
    S = S.toUpperCase();
    S = S.replace(/-/g,"");
    const stringArray = [];
    for(let i=S.length; i > 0; i-=K){
        const index = i-K;
        const qty = index >=0 ? K : S.length % K;
        stringArray.unshift(S.substr(Math.max(index, 0), qty));
    }
    return stringArray.join('-');
    
};