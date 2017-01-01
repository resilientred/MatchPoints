import PlayerList from './playerList';

export default class Heap {
  constructor(heap) {
    this.heap = heap || [];
  }

  /*
    void insert(<T> val)
  */
  insert(val) {
    const copiedArr = this.heap.slice().push(val);
    const newHeap = new Heap(copiedArr);
    newHeap.heapifyUp(this.heap.length - 1);
    return newHeap;
  }

  /*
    <T> remove()
    - Returns object with max value inside the heap
  */
  removeMax() {
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];

    this.heap.pop();
    this.heapifyDown(0);

    return max;
  }

  remove(id) {
    const idx = this.heap.findIndex(player => player.get('id') === id);
    const copiedArr = this.heap.slice().push(val);
    copiedArr[idx] = copiedArr[copiedArr.length - 1];
    copiedArr.pop();
    const newHeap = new Heap(copiedArr);

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
    return [idx * 2 + 1, idx * 2 + 2].filter(i => i < this.heap.length);
  }

  sort(order = 'DESC') {
    const heap = this.heap.slice();
    const sorted = [];
    while (this.heap.length > 0) {
      sorted.push(this.removeMax());
    }

    if (order === 'ASC') {
      sorted.reverse();
    }

    this.heap = heap;
    return sorted;
  }

  toPlayerList(schema) {
    const list = new PlayerList(schema);

    while (this.heap.length > 0) {
      list.append(this.removeMax());
    }

    return list;
  }
}
