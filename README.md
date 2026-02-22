# Job Application Tracker

## Answers to Technical Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- **getElementById**: Selects a single element using its unique ID.
- **getElementsByClassName**: Selects all elements with a specific class name and returns them as a collection HTMLCollection.
- **querySelector / querySelectorAll**:`querySelector` finds the first element that matches a CSS selector, while `querySelectorAll` finds all matching elements and returns them as a NodeList.

### 2. How do you create and insert a new element into the DOM?
First create it using `document.createElement('tagName')`. After creating it, you can add text or styles to it. Finally, you insert it into the webpage using methods like `appendChild()` or `prepend()` inside a parent element.

### 3. What is Event Bubbling? And how does it work?
When you click an element, the click event first triggers on that specific element, then it moves up to its parent, then the grandparent, and so on, until it reaches the top of the document.

### 4. What is Event Delegation in JavaScript? Why is it useful?
It is useful because it saves memory and allows you to handle events for elements that are added to the page dynamically after the initial load.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
- **preventDefault()**: Stops the default action of an element.
- **stopPropagation()**: Stops an event from bubbling up to parent elements. It ensures that the event stays only on the element where it was triggered.