# Job Application Tracker

## Answers to Technical Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- **getElementById**: Selects a single element using its unique ID. It is very fast and efficient.
- **getElementsByClassName**: Selects all elements with a specific class name and returns them as a collection (HTMLCollection).
- **querySelector / querySelectorAll**: These are flexible methods. `querySelector` finds the first element that matches a CSS selector, while `querySelectorAll` finds all matching elements and returns them as a NodeList.

### 2. How do you create and insert a new element into the DOM?
To add a new element, you first create it using `document.createElement('tagName')`. After creating it, you can add text or styles to it. Finally, you insert it into the webpage using methods like `appendChild()` or `prepend()` inside a parent element.

### 3. What is Event Bubbling? And how does it work?
Event Bubbling is a way events propagate in the DOM. When you click an element, the click event first triggers on that specific element, then it moves up to its parent, then the grandparent, and so on, until it reaches the top of the document.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where you add a single event listener to a parent element instead of adding multiple listeners to individual child elements. It is useful because it saves memory and allows you to handle events for elements that are added to the page dynamically after the initial load.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
- **preventDefault()**: Stops the default action of an element. For example, it prevents a form from reloading the page or a link from opening a new URL.
- **stopPropagation()**: Stops an event from bubbling up to parent elements. It ensures that the event stays only on the element where it was triggered.