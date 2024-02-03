export class DynamicArray {
  private capacity: number = 0;
  private size: number = 0;
  private array: Array<number | undefined> = [];

  constructor(array: Array<number>) {
    this.size = this.capacity = array.length;
    this.array = array;
  }
  public pushBack(item: number) {
    if (this.capacity === 0) {
      this.capacity = 1;
    } else if (this.capacity === this.size) {
      this.capacity *= 2;
    }
    this.array[this.size] = item;
    this.size++;
  }

  public pushFront(item: number) {
    if (this.capacity === 0) {
      this.capacity = 1;
    } else if (this.capacity === this.size) {
      this.capacity *= 2;
    }
    for (let i = 1; i < this.size; i++) {
      this.array[i + 1] = this.array[i];
    }
    this.array[0] = item;
  }

  public popBack() {
    if (this.capacity === 0) {
      throw Error("The array is empty");
    } else {
      this.array[this.size - 1] = undefined;
      this.size--;
    }
  }

  public popFront() {
    if (this.capacity === 0) {
      throw Error("The array is empty");
    } else {
      for (let i = 1; i < this.size; i++) {
        this.array[i - 1] = this.array[i];
      }
      this.size--;
    }
  }

  public insert(item: number, position: number) {
    let newArray: Array<number | undefined> = [];
    if (this.capacity === 0) {
      this.capacity = 1;
    } else if (this.capacity === this.size) {
      this.capacity *= 2;
      for (let i = 0; i < position; i++) {
        newArray[i] = this.array[i];
      }
      this.size++;
      newArray[position] = item;
      for (let i = position + 1; i < this.size; i++) {
        newArray[i] = this.array[i];
      }
      this.array = newArray;
    } else {
      this.size++;
      for (let i = position; i < this.size; i++) {
        this.array[i + 1] = this.array[i];
      }
      this.array[position] = item;
    }
  }

  public removeFrom(position: number) {
    if (this.capacity === 0) {
      throw Error("The array is empty");
    } else {
      for (let i = position; i < this.size; i++) {
        this.array[i] = undefined;
        this.size--;
      }
    }
  }
}