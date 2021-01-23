class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    add(data) {
        const newnode = new Node(data, null);
        if (!this.head) {
            this.head = newnode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            };
            current.next = newnode;
        };
        this.size++;
    }

    insert(data, pos) {
        if (pos < 0 || pos > this.size) {
            return null;
        };

        const newNode = new Node(data);
        let current = this.head;
        let previous;

        if (pos === 0) {
            newNode.next = current;
            this.head = newNode;
        } else {
            for (let i = 0; i < pos; i++) {
                previous = current;
                current = current.next;
            };
            newNode.next = current;
            previous.next = newNode;
        };
        this.size++;
    };

    removeData(data) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.data === data) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        };
        return null;
    };

    removePos(pos) {
        if (pos < 0 || pos > this.size) {
            return null;
        };

        let current = this.head;
        let previous = null;

        if (pos === 0) {
            this.head = current.next;
        } else {
            for (let i = 0; i < pos; i++) {
                previous = current;
                current = current.next;
            };
            previous.next = current.next;
        };
        this.size--;
        return current.data;
    };

    print() {
        if (!this.size === 0) {
            return null
        }
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data += ' -> ';
            current = current.next;
        };
        result += 'NULL'
        return result;
    };

    isEmpty() {
        return this.size === 0;
    };

    getSize() {
        return this.size;
    }
};

const ll = new LinkedList();
ll.add(12);
ll.insert(37, 1);
ll.add(99);
ll.removePos(1);
console.log(ll.print());