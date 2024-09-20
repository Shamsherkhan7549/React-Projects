 function getNo(n){

    let nums = new Array(n);

    for(let i = 0; i < n; i++){
        nums[i] = Math.floor(Math.random()*10);
    }
    return nums;
}

function sum(nums){
    return nums.reduce((ele, sum) => ele+sum, 0);
}

export {getNo, sum}