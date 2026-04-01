
// ==== Queue ====

// function queue() {
//     var collection = []

//     // to print the elements of the array
//     this.print = function() {
//         console.log(collection);
//     };

//     // to add to the queue (at the end)
//     this.enqueue = function (element) {
//         collection.push(element);
//     };

//     // to remove the element at beginning of the queue
//     this.dequeue = function () {
//         return collection.shift();
//     };

//     // to display the elements at the beginning of the queue
//     this.front = function () {
//         return collection[0];
//     };

//     // to return the length of the queue
//     this.size = function () {
//         return collection.length;
//     };

//     // to check if the queue is empty
//     this.isEmpty = function () {
//         return(collection.length === 0);
//     };
// }

// var q = new queue();
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.print();
// q.dequeue();
// console.log(q.front())
// q.print();

function priorityQueue() {
    
    var collection = [];
    
    this.printCollection = function () {
        (console.log(collection));
    };

    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        }else{
            var added = false;
            for(var i=0; i<collection.length; i++){
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    };

    this.dequeue = function () {
        var value = collection.shift();
        return value[0];
    }

    // to display the elements at the beginning of the queue
    this.front = function () {
        return collection[0];
    };

    // to return the length of the queue
    this.size = function () {0
        return collection.length;
    };

    // to check if the queue is empty
    this.isEmpty = function () {
        return(collection.length === 0);
    };

}

var pq = new priorityQueue();
pq.enqueue(['beau carnes', 2]);
pq.enqueue(['quincy', 3]);
pq.enqueue(['ewa mitulska', 1])
pq.enqueue(['ewa idris', 9])
pq.printCollection();
pq.dequeue();
console.log(pq.dequeue());
pq.front();
pq.printCollection();