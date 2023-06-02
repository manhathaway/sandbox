const body = document.body

/*
// Creating an HTML element in JS.
    const div = document.createElement('div')
    body.appendChild(div)
*/

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
    const span_bye = document.querySelector('#bye')

    span_hi.remove()
    div_span_container.removeChild(span_bye)
    div_span_container.remove()
*/

const span_hi = document.querySelector('.hi')

// Adding CSS styling to HTML elements.
span_hi.style.backgroundColor = "red"
span_hi.style.color = "white"