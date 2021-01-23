class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
};

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addHead(data) {
        const newNode = new Node(data, this.head, null);

        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        };
        this.size++;
    }

    addtail(data) {
        const newNode = new Node(data, null, this.tail);
        if (this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        };
        this.size++;
    };

    insert(data, pos) {
        if (pos < 0 || pos > this.size) {
            return null;
        }

        const newNode = new Node(data, null, null);
        let current = this.head;
        let previous;

        if (pos === 0) {
            newNode.next = current;
            current.prev = newNode;
            this.head = newNode;
        } else {
            for (let i = 0; i < pos; i++) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.prev = previous;
            current.prev = newNode;
            previous.next = newNode;
        }
        this.size++;
    };

    removeHead() {
        if (!this.head) {
            return null;
        }
        let valor = this.head.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return valor
    };

    removeTail() {
        if (!this.tail) {
            return null;
        }
        let valor = this.tail.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return valor;
    };

    removeData(data) {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.data === data) {
                if (!previous) {
                    return this.removeHead();
                } else if (!current.next) {
                    return this.removeTail();
                } else {
                    previous.next = current.next;
                    current.next.prev = previous;
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null;
    };

    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        };
        return result += 'X';
    }

    printreverse() {
        let current = this.tail;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.prev;
        };
        return result += 'X'
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

};

const dll = new DoubleLinkedList();

dll.addHead(3);
dll.addHead(4);
dll.addtail(5);
dll.addtail(6);
dll.addHead(7);

console.log(dll.print());
//dll.removeHead();
//dll.removeHead();

//dll.removeTail();
//dll.removeTail();

dll.removeData(6);
console.log(dll.print());