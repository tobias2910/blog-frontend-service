/**
 * Group the array based on the provided property name
 *
 * @param {<T> []} array - The array to group
 * @param property - The property name which to use to group the array
 * @returns {{}} - The grouped array
 */
const groupArray = <T>(array: T[], property: string): {} =>
  array.reduce(
    (prev, curr) => ({
      ...prev,
      // @ts-ignore
      [curr[property]]: (prev[curr[property]] || []).concat(curr),
    }),
    {}
  );

export default groupArray;
