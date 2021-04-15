//TDD
/*
// level 1
const strSimpleArray = "[ a, 33 ]";
const strSimpleObject = "{ a: 33 }";
// level 2
const strArrayObject = "[ a, { b: 2} , 33 ]";
const strObjectArray = "{ a:1, b:[ 2   ] , c:33   }";
// level 3
const strComplex1 = "[ {a:1 } , {b:2} , 3 ]";
const strComplex2 = "[{b:[21,22]} , 3 ]";
const strComplex3 = "[ {a:1 , b:[{bb:2.1}], c:{cc:cc}, d:3}]";
const strComplex4 = "[ {a:1 , b:[{bb:2.1}], c:{cc:cc}, d:3} , {b:2} , 3 ]";
 */
function parseString(Str) {
    if (!Str) {
        return null;
    }
    const array = [];
    for (let i = 0; i < Str.length; i++) {
        if (Str[i] === '[' || Str[i] === ']') {
            continue;
        }
        if (Str[i] === ',') {
            continue;
        }
        array.push(parseInt(Str[i]));

    }
    return array;
}

function parseNestedArray(Str) {
    if (!Str) {
        return null;
    }


    Str = Str.replace(/^\[|]$/gi, "");
    //console.log(Str);
    //console.log(newStr + "hello");
    const array = [];
    for (let i = 0; i < Str.length; i++) {
        if (Str[i] === ',') {
            continue;
        }
        if (Str[i] === '[') {

            const nestedArray = parseNestedArray(Str.substring(i));
            let addLength = 0;
            nestedArray.forEach((item) => {
                if (item instanceof Array) {
                    addLength += item.length + item.length - 1 + 2 - 1;
                }
            })
            console.log(addLength);
            i += nestedArray.length + nestedArray.length - 1 + 2 + addLength ;
            //console.log(i);

            array.push(nestedArray);
            //console.log(array);
            if (Str[i] === ']') {
                return array;
            }
            continue;
        }
        if (Str[i] === ']') {
            return array;
        }

        array.push(parseInt(Str[i]));
    }
    return array;
}
function flatten(Str) {
    if (!Str) {
        return null;
    }
    let stack = [];

    for (let i = 0; i < Str.length; i++) {
        if (Str[i] === '[') {
            stack.push('[');
            continue;
        }
        if (Str[i] === ']') {
            let temp = [];
            while (stack.length !== 0 && stack[stack.length - 1] !== '[') {
                let peek = stack.pop();
                temp.unshift(parseInt(peek));
            }
            stack.pop();
            stack.push(...temp);
            continue;
        }
        if (Str[i] === ',') {
            continue;
        }
        stack.push(Str[i]);
        // queue.push(parseInt(Str[i]));

    }
    return stack;
}
function parse(Str) {
    if (!Str) {
        return null;
    }
    const stack = [];
    for (let i = 0; i < Str.length; i++) {
        if (Str[i] === '[') {
            stack.push(Str[i]);
            continue;
        }
        if (Str[i] === ']') {
            const temp = [];
            while (stack.length !== 0 && stack[stack.length - 1] !== '[') {
                temp.unshift(stack.pop());
            }
            stack.pop();
            stack.push(temp);
            continue;
        }
        if (Str[i] === ',') {
            continue;
        }
        stack.push(parseInt(Str[i]));
    }
    return stack[0];
}
console.log(parse("[1,[2,3,[4,5,[4,5]]],4]"));
// let result = parseNestedArray("[1,[2,3,[4,5,[4,5]]],4]");
// result.forEach((item) => {
//     console.log(item);
// })
//console.log(result);