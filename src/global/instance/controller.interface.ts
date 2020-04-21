/**
 * @author Eric Silva
 * @export IController
 * @interface IController
 * @template T TemplateDTO Object
 */

export interface IController<T> {
  index(id: string): Promise<T>;

  show(): Promise<T[]>;

  create(createDTO: T): Promise<T>;

  update(id: string, updateDTO: T): Promise<{}>;

  delete(id: string): Promise<{}>;
}
