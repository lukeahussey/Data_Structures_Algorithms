class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    console.log('Attempting set...');
    if (this.get(key) !== undefined) {
      throw new Error(`Unhandled hash collision detected at key "${key}":\n`, value);
    }
    this.data[this._hash(key)] = value;
    console.log(`New value stored against key "${key}":\n`, value);
  }

  get(key) {
    let value = this.data[this._hash(key)];
    if (value !== undefined) {
      console.log(`Retrieving value stored with key "${key}":\n`, value);
    }
    return value;
  }

  listContent() {
    console.log('HashTable data contains:\n', this.data);
  }
}

const myHashTable = new HashTable(50);
myHashTable.listContent();

myHashTable.set('grapes', 10000)
myHashTable.get('grapes');

myHashTable.set('apples', 9)
myHashTable.set('apples', 11)   // throws unhandled hash collision error
myHashTable.get('apples');

myHashTable.listContent();