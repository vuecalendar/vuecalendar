/**
 * Defines a calendar plugin with a stable `name` field.
 *
 * @param {string} name
 * @param {object} implementation
 * @returns {object}
 */
export function definePlugin(name, implementation) {
    return Object.assign({ name }, implementation);
}
