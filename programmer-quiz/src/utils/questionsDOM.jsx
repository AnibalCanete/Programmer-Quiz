
export const questionsDOM = [
    // Difficulty - Easy
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "DOM",
        "Question": "¿What does the DOM represent in web development?",
        "CorrectAnswer": "The DOM is a structured representation of the HTML document and provides a way to access and manipulate its structure, style, and content.",
        "IncorrectAnswers": [
            "A programming language for styles.",
            "A database to store tags.",
            "A network protocol for HTML."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "DOM",
        "Question": "¿How do you access an element by its ID in the DOM?",
        "CorrectAnswer": "By using document.getElementById('elementId').",
        "IncorrectAnswers": [
            "document.querySelectorId('id')",
            "document.getElementsById('id')",
            "document.findById('id')"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "DOM",
        "Question": "¿How can you select elements by their class in the DOM?",
        "CorrectAnswer": "By using document.getElementsByClassName('className').",
        "IncorrectAnswers": [
            "document.queryClass('name')",
            "document.getClass('name')",
            "document.selectClass('name')"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "DOM",
        "Question": "¿Which method is used to get elements by their tag name?",
        "CorrectAnswer": "document.getElementsByTagName('tagName').",
        "IncorrectAnswers": [
            "document.getTag('name')",
            "document.querySelectorTag('name')",
            "document.findTag('name')"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "DOM",
        "Question": "¿How do you change the text content of an element?",
        "CorrectAnswer": "By using the innerText or textContent property of the element.",
        "IncorrectAnswers": [
            "Using innerHTMLText",
            "Using setTextValue",
            "Using textUpdate"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "DOM",
        "Question": "¿Which property returns the HTML content of an element?",
        "CorrectAnswer": "innerHTML",
        "IncorrectAnswers": [
            "outerHTML",
            "textValue",
            "htmlContent"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "DOM",
        "Question": "¿Which method selects the first element that matches a CSS selector?",
        "CorrectAnswer": "document.querySelector('selector')",
        "IncorrectAnswers": [
            "document.querySelectorAll('selector')",
            "document.getElement('selector')",
            "document.find('selector')"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "DOM",
        "Question": "¿Which property returns the value of a form field?",
        "CorrectAnswer": "value",
        "IncorrectAnswers": [
            "text",
            "innerText",
            "formValue"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "DOM",
        "Question": "¿Which property returns the parent node of an element?",
        "CorrectAnswer": "parentNode",
        "IncorrectAnswers": [
            "parentElement",
            "rootNode",
            "mainParent"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "DOM",
        "Question": "¿Which property returns all the children of a node?",
        "CorrectAnswer": "childNodes",
        "IncorrectAnswers": [
            "childrenList",
            "nodeChildren",
            "subNodes"
        ]
    },
    // Difficulty - Medium
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "DOM",
        "Question": "¿How do you modify the inner HTML of an element?",
        "CorrectAnswer": "By using the element's innerHTML property.",
        "IncorrectAnswers": [
            "With setHTMLContent",
            "With updateHTML",
            "With htmlInside"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "DOM",
        "Question": "¿How do you change the CSS style of an element?",
        "CorrectAnswer": "By accessing the element's style property and modifying its CSS properties.",
        "IncorrectAnswers": [
            "Using setCSS()",
            "Modifying the class attribute directly",
            "Using updateStyleSheet()"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "DOM",
        "Question": "¿How do you add or remove a CSS class from an element?",
        "CorrectAnswer": "By using the add and remove methods on the element's classList property.",
        "IncorrectAnswers": [
            "Using setClass()",
            "Modifying the style attribute",
            "Using toggleClass() without classList"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "DOM",
        "Question": "¿How are events handled in the DOM?",
        "CorrectAnswer": "By using addEventListener to bind a function to an event on a specific element.",
        "IncorrectAnswers": [
            "Using setEvent()",
            "Using onEventTrigger()",
            "Using eventHandler()"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "DOM",
        "Question": "¿How can you get or change attributes of an element?",
        "CorrectAnswer": "By using the getAttribute and setAttribute methods.",
        "IncorrectAnswers": [
            "With getAttr and setAttr",
            "With attr()",
            "With modifyAttribute()"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "DOM",
        "Question": "¿How do you navigate the DOM using parent, child, and sibling nodes?",
        "CorrectAnswer": "By using properties such as parentNode, childNodes, and nextSibling.",
        "IncorrectAnswers": [
            "Using parent(), children(), sibling()",
            "Using DOMTree.get()",
            "Using nodeStructure()"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "DOM",
        "Question": "¿What is event bubbling in the DOM?",
        "CorrectAnswer": "A mechanism where the event propagates from the innermost element to the outermost element.",
        "IncorrectAnswers": [
            "It is the automatic cancellation of the event.",
            "It is the duplication of events in the DOM.",
            "It is the execution of events in reverse order."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "DOM",
        "Question": "¿What is the difference between innerText and textContent?",
        "CorrectAnswer": "innerText respects styles and visibility, while textContent returns all plain text.",
        "IncorrectAnswers": [
            "They are exactly the same.",
            "innerText returns HTML.",
            "textContent only works on inputs."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "DOM",
        "Question": "¿Which method is used to stop event propagation?",
        "CorrectAnswer": "stopPropagation()",
        "IncorrectAnswers": [
            "preventDefault()",
            "cancelEvent()",
            "stopEvent()"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "DOM",
        "Question": "¿Which property returns the width and height of the browser window?",
        "CorrectAnswer": "window.innerWidth and window.innerHeight",
        "IncorrectAnswers": [
            "document.width and document.height",
            "screen.width and screen.height",
            "viewport.size"
        ]
    },
    // Difficulty - Hard
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "DOM",
        "Question": "¿How do you add a new element to the DOM?",
        "CorrectAnswer": "By creating the element with document.createElement and adding it with appendChild or insertBefore.",
        "IncorrectAnswers": [
            "By using addElement() directly",
            "By modifying innerHTML",
            "By using DOM.insert()"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "DOM",
        "Question": "¿How can you remove an element from the DOM?",
        "CorrectAnswer": "By selecting the element and using removeChild or remove on the parent.",
        "IncorrectAnswers": [
            "By using deleteElement()",
            "By using innerHTML = ''",
            "By using removeNode()"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "DOM",
        "Question": "¿How do you prevent the default action of an event in the DOM?",
        "CorrectAnswer": "By using preventDefault on the event object.",
        "IncorrectAnswers": [
            "By using stopPropagation",
            "By using cancelEvent",
            "By using defaultOff"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "DOM",
        "Question": "¿What is a document fragment in the DOM and what is it used for?",
        "CorrectAnswer": "A lightweight container for storing fragments of elements that can be inserted into the document.",
        "IncorrectAnswers": [
            "A type of custom event.",
            "A function to clone nodes.",
            "A special HTML tag."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "DOM",
        "Question": "¿How do you create a text node in the DOM?",
        "CorrectAnswer": "By using the method document.createTextNode('text').",
        "IncorrectAnswers": [
            "By using createNode('text')",
            "By using newTextNode('text')",
            "By using document.text('text')"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "DOM",
        "Question": "¿How do you clone an element in the DOM?",
        "CorrectAnswer": "By using the cloneNode method on the element you want to clone.",
        "IncorrectAnswers": [
            "By using copyElement()",
            "By using duplicateNode()",
            "By using cloneElement()"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "DOM",
        "Question": "¿What is a DocumentFragment and what is its advantage?",
        "CorrectAnswer": "It is a type of DOM node that allows grouping changes and applying them to the document at once, improving performance.",
        "IncorrectAnswers": [
            "A node that automatically deletes elements.",
            "A node that only exists in HTML5.",
            "A node that blocks events."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "DOM",
        "Question": "¿How do you select multiple elements that share the same CSS selector?",
        "CorrectAnswer": "By using document.querySelectorAll('CSSselector').",
        "IncorrectAnswers": [
            "By using document.querySelector('CSSselector')",
            "By using document.getElementsBySelector('CSSselector')",
            "By using document.selectAll('CSSselector')"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "DOM",
        "Question": "¿What is the Shadow DOM?",
        "CorrectAnswer": "A technique that encapsulates styles and structure of a component to avoid conflicts.",
        "IncorrectAnswers": [
            "A type of hidden event.",
            "An invisible node.",
            "An API for animations."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "DOM",
        "Question": "¿What is the difference between append and appendChild?",
        "CorrectAnswer": "append allows adding nodes and text, appendChild only nodes.",
        "IncorrectAnswers": [
            "They are exactly the same.",
            "appendChild allows multiple nodes at once.",
            "append only works on inputs."
        ]
    }
];
