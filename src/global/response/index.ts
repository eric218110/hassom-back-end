export class ResponseInstance {
  private id: string;
  private status: number;
  private data?: any;

  /**
   *
   * Creates an instance of DeleteInstance.
   *
   * @param {string} id
   * @param {*} [data]
   * @param {number} [status]
   * @memberof DeleteInstance
   *
   */

  constructor(id: string, data?: any, status = 200) {
    this.id = id;
    this.status = status;
    this.data = data;
  }

  public delete(): {} {
    return {
      id: this.id,
      message: `Value ${this.id} deleted`,
      status: this.status,
      data: this.data ? this.data : 'Not data',
    };
  }

  public update(): {} {
    return {
      id: this.id,
      message: `Value ${this.id} update`,
      status: this.status,
      data: this.data ? this.data : 'Not data',
    };
  }
}
