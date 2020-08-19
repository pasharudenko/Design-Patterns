//Single responsibility

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join('\n');
  }

  /** Wrong!!! Create seperate class for this! */
  save(filename) {}
  load(filename) {}
  loadFromUrl(url) {}
}

Journal.count = 0;

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
j.addEntry('I ate a bug.');
j.removeEntry(3);
j.toString();
