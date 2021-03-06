import PlayerList from './playerList';

/* Immutable implementation */
export default class Heap {
  constructor(heap, map) {
    this.heap = heap || [];
    this.map = map || {};
  }

  find(id) {
    return Number.isInteger(this.map[id]);
  }
  /*
    Heap<T> insert(<T> val)
    returns a new heap with inserted value
  */
  insert(val) {
    const copiedArr = this.heap.slice();
    copiedArr.push(val);

    const copiedMap = {
      ...this.map,
      [val._id]: copiedArr.length - 1,
    };
    const newHeap = new Heap(copiedArr, copiedMap);
    newHeap.heapifyUp(newHeap.heap.length - 1);

    return newHeap;
  }

  /*
    <T> removeMax()
    - Returns object with max value inside the heap
  */
  removeMax() {
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    delete this.map[this.heap[0]._id];
    this.heap.pop();
    this.heapifyDown(0);

    return max;
  }

  /*
    Heap<T> remove(id)
    - Returns a new heap with the player removed
  */
  remove(id) {
    const idx = this.map[id];
    const copiedArr = this.heap.slice();
    const copiedMap = Object.assign({}, this.map);

    delete copiedMap[id];
    if (idx < copiedArr.length - 1) {
      copiedMap[copiedArr[copiedArr.length - 1]._id] = idx;
      copiedArr[idx] = copiedArr[copiedArr.length - 1];
    }
    copiedArr.pop();
    const newHeap = new Heap(copiedArr, copiedMap);
    newHeap.heapifyDown(idx);

    return newHeap;
  }
  /*
    [0, 1, 2, 3, 4, 5, 6]
    parent Math.ceil(idx / 2) - 1

    child1 idx * 2 + 1
    child2 idx * 2 + 2
  */
  heapifyUp(idx) {
    if (idx === 0) {
      return;
    }

    const parentIdx = Math.ceil(idx / 2) - 1;
    if (this.heap[idx].rating > this.heap[parentIdx].rating) {
      this.swap(idx, parentIdx);
      return this.heapifyUp(parentIdx);
    }
  }

  swap(idx1, idx2) {
    this.map[this.heap[idx1]._id] = idx2;
    this.map[this.heap[idx2]._id] = idx1;
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  heapifyDown(idx) {
    const childIndices = this.childIndices(idx);
    const parent = this.heap[idx];

    if (childIndices.length > 1) {
      const leftIdx = childIndices[0];
      const left = this.heap[leftIdx];
      const rightIdx = childIndices[1];
      const right = this.heap[rightIdx];

      if (left.rating > parent.rating && left.rating > right.rating) {
        this.swap(leftIdx, idx);
        return this.heapifyDown(leftIdx);
      } else if (right.rating > parent.rating) {
        this.swap(rightIdx, idx);
        return this.heapifyDown(rightIdx);
      }
    } else if (childIndices.length === 1) {
      const child = this.heap[childIndices[0]];

      if (child.rating > parent.rating) {
        this.swap(childIndices[0], idx);
        return this.heapifyDown(childIndices[0]);
      }
    }
  }

  childIndices(idx) {
    return [(idx * 2) + 1, (idx * 2) + 2].filter(i => i < this.heap.length);
  }

  sort(order = 'DESC') {
    const copiedHeap = new Heap(this.heap.slice(), Object.assign({}, this.map));
    const sorted = [];
    while (copiedHeap.heap.length > 0) {
      sorted.push(copiedHeap.removeMax());
    }

    if (order === 'ASC') {
      sorted.reverse();
    }

    return sorted;
  }

  toPlayerList(schema) {
    // make sure there is only one instance of list per heap.
    if (this.playerList) {
      return this.playerList;
    }
    const list = new PlayerList(schema);
    const copiedHeap = new Heap(this.heap.slice(), Object.assign({}, this.map));
    while (copiedHeap.heap.length > 0) {
      list.append(copiedHeap.removeMax());
    }

    this.playerList = list;
    return list;
  }

  removePlayerList() {
    this.playerList = null;
    return this;
  }
}
