const nums = [3, 7, 9, 2, 1, 6, 8];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log('-----')

for(let n of nums){
    console.log(n);
}

console.log('-----')

nums.forEach((a,b) => { console.log(a,b); });