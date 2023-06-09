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

const body = document.body
    body.style.margin = '0'
    body.style.padding = '0'
    body.style.width = '100vw'
    body.style.height = '100vh'

const span_container = document.getElementById('span-container')
    span_container.style.margin = '0 auto'
    span_container.style.width = '100%'
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

const span_container_children = Array.from(span_container.children)
for (let i = 0; i < span_container_children.length; i++) {
    spanStyling(span_container_children[i])
    console.log(i)
}