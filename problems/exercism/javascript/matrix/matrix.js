export class Matrix {
  constructor(matrixString) {
    this._rows = matrixString.split('\n').map(row => row.split(' ').map(Number));
    this._columns = this._rows[0].map((_, i) => this._rows.map(row => row[i])); 
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
