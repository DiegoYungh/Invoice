/**
 * Takes a nested object and returns a shallow object keyed with the path names
 * e.g. { "level1.level2": "value" }
 *
 * @param  {Object}      Nested object e.g. { level1: { level2: 'value' } }
 * @return {Object}      Shallow object with path names e.g. { 'level1.level2': 'value' }
 */
declare function objToPath(obj: any): any;

/**
 * @param {Object}  Object to fetch attribute from
 * @param {String}  Object path e.g. 'user.name'
 * @return {Mixed}
 */
declare function getNested(obj: any, path: string, return_exists: boolean): any;

/**
 * @param {Object} obj                Object to fetch attribute from
 * @param {String} path               Object path e.g. 'user.name'
 * @param {Object} [options]          Options
 * @param {Boolean} [options.unset]   Whether to delete the value
 * @param {Mixed}                     Value to set
 */
declare function setNested(obj: any, path: string, val: any, options: any): void;

declare namespace Backbone {
  class DeepModel extends Backbone.Model {}
}