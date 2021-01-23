//PILA

class Stack {

    constructor() {
        this.items = {};
        this.top = 0;
    };

    push(data) {
        this.items[this.top] = data;
        this.top++;
    }
    pop() {
        let deletedData;
        if (this.top) {
            deletedData = thi.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedData;
        }
        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return data;
    }

    getSize() {
        return this.top;
    }

    isEmpty() {
        if (!this.getSize()) {
            return true;
        } else {
            return false;
        }
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.items[this.top];
        }
    }
    print() {
        let result = '';
        for (let i = this.top; i > 0; i--) {
            result += this.items[i] + ' ';
        }
        return result;
    }
}

const stack = new Stack();

stack.push('plato 1');
stack.push('plato 2');
stack.push('plato 3');

console.log(stack)

console.log(stack.isEmpty());
console.log(stack.getSize());
console.log(stack.peek());