/*
// Creating an HTML element in JS.
    const div = document.createElement('div')
    body.appendChild(div)
/*

/*
// Adding text to our element.
    div.innerText = 'hello world'
*/

/*
// Creating an HTML element with formatting, and adding it to our div element.
    const italics = document.createElement("em")
    const heading = document.createElement("h1")
    italics.innerText = "I am Alex"
    heading.innerText = "I am Alex"
    div.append(italics)
    div.append(heading)
*/

/*
// Targeting and removing elements by their attributes.
    const div_span_container = document.querySelector('#span-container')
    const span_hi = document.querySelector('.hi')
    
    // You can also use document.getElementBy(ClassName/Id) to target elements with a particular class/ID.  
    const span_hi = document.getElementById("hi")
    const span_bye = document.querySelector('#bye')

    span_hi.remove()
    div_span_container.removeChild(span_bye)
    div_span_container.remove()
/*

/*
// Adding CSS styling to HTML elements.
    span_hi.style.backgroundColor = "red"
    span_hi.style.color = "white"
*/

/*
const body = document.body
    body.style.margin = '0'
    body.style.padding = '0'
    body.style.width = '100vw'
    body.style.height = '100vh'

const span_container = document.getElementById('span-container')
    span_container.style.margin = '0 auto'
    span_container.style.width = 'fit-content'
    span_container.style.height = '100%'
    span_container.style.display = 'flex'
    span_container.style.gap = '1vw'
    span_container.style.justifyContent = 'center'
    span_container.style.alignItems = 'center'

const spanStyling = (element) => {
    element.style.border = '2px solid black'
    element.style.padding = '5px'
    element.style.borderRadius = '25%'
}

let spanArr = [];
let whyHide = ['w', 'h', 'y', 'h', 'i', 'd', 'e'];
span_container.addEventListener("click", event => {
  if (event.target.matches("span")) {
    for (let i = 0; i < 10; i++) {
      spanArr.push(document.createElement("span"));
      span_container.appendChild(spanArr[i]);
      spanStyling(spanArr[i]);
    };
    const spanList = Array.from(spanArr);
    console.log(typeof spanList);
  }})

const span_container_children = Array.from(span_container.children)
for (let i = 0; i < span_container_children.length; i++) {
    spanStyling(span_container_children[i])
    console.log(i)
}
*/

/*
'addNums(arr, n)' will be a function that returns the sum of each item in an array, where the arguments signify:
    - arr:  An arbitrary array.
    - n:    The number of items in the array that will be summed together (arr[n - 1] + arr[n - 2] + ... + arr[n - n], where arr[n - 1] is the nth item in an array).
Note that:
    - addNums(arr, n)       =   addNums(arr, n - 1)         +   arr[n = 1].
    - multiplyNums(arr, n)  =   multiplyNums(arr, n - 1)    *   arr[n - 1].
This is what allows these types of recursion functions to work.
*/

/*
// We initialize a variable 'box' that we will add each array item to.
let box = 0;
const addNums = (arr, n) => {
    // Once this 'if statement' holds true, this marks the end of the 'loop', and outputs the sum of the array that we have stored in 'box'.
    if (n <= 0) {
      return box;
    // Assuming (n > 0), arr[n - 1] is added to 'box' and the function calls itself, but reducing the value of n by 1 each time the function is called. This repeats until the above 'if statement' is no longer false.
    // By decrementing the value of n by 1 each time the 'else statement' runs, we are adding each index of the array to 'box' until the above if statement holds true.
    // What's really going on behind the scenes is: 0 + arr[4] + arr[3] + ... + arr[0].
    } else {
        box = box + arr[n - 1];
        return addNums(arr, n - 1);
    }
  }
console.log(addNums([1, 2, 3, 4, 5], 5));
*/

/*
// 'rangeGlobal' returns an array with values between and inclusive of arguments 'lower' and 'upper'.
// This function initializes a global variable 'countArray'.
const globalArray = [];
function rangeGlobal(lower, upper) {
    if (lower == (upper + 1)) {
      return globalArray;
    } else {
      globalArray.push(lower);
      return rangeGlobal(lower + 1, upper);
    }
  }
/*

/*
// 'rangeLocal' does the same thing as 'rangeGlobal' except it doesn't rely on a global variable.
function rangeLocal(lower, upper) {
    if (lower == (upper + 1)) {
      return [];
    } else {
      const arr = rangeLocal(lower + 1, upper)
      arr.unshift(lower);
      return arr;
    }
  }
console.log(rangeLocal(1, 10));
*/