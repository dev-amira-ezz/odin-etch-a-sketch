// ======= Math Helpers =======
const random = (max) => {
    return Math.floor(Math.random() * max);
}

const percent = (num1, num2) => {
    const result = (num1/num2)*100;
    return result;
}

const power = (num, power) => {
    const result = Math.pow(num, power);
    return result;
}

// ======= DOM Manipulation Helpers =======
// Create a Node
const createNode = (nodeName, nodeType, content, parent, attributeType) => {
    let node = document.querySelector(`#${nodeName}`);
    // Check if the node not already present
    if (node === null) {
        node = document.createElement(nodeType);
        node.setAttribute(attributeType, `${nodeName}`);
        node.textContent = content;
        parent.appendChild(node);
    }
    return node;
}

// Remove all children from a node
const clearNode = (node) => {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

export const Helpers = {
    random,
    percent,
    power,
    createNode,
    clearNode
}
