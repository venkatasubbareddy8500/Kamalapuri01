//Normal export
// export const PI = 3.14

// export function add(a,b){
//     console.log(a+b)
// }

//export together

const PI_DATA = 3.14
function add(a,b){
    console.log(a+b)
}

// export {PI, add}


//export with alias

export {PI_DATA as PI, add}

//export with default

export default function minus(a,b){
    console.log(a-b)
}