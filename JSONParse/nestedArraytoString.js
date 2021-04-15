const arr = [
    'hello', [
        'world', 'how', [
            'are', 'you', [
                'without', 'me'
            ]
        ]
    ]
];
function parseArray(arr) {
    return helper(arr);
}

function helper(arr) {
    if (!arr || arr.length === 0) {
        return "";
    }
    let ans = "";
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            ans += arr[i];
        } else {
            ans += helper(arr[i]);
        }
    }
    return ans;
}
console.log(parseArray(arr));