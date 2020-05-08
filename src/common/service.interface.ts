/**
 * @author Eric Silva
 * @export IService
 * @interface IService
 * @template T TemplateDTO Object Entity
 */

export interface IService<T> {
  index(id: string): Promise<T>;

  show(): Promise<T[]>;

  create(createDTO: T): Promise<T>;

  update(id: string, updateDTO: T): Promise<{}>;

  delete(id: string): Promise<{}>;
}
