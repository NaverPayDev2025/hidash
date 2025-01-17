// only for vite, tsup
// remember, this is not barrel file.
const moduleMap = {
    assign: './src/assign.ts',
    before: './src/before.ts',
    chunk: './src/chunk.ts',
    clamp: './src/clamp.ts',
    clone: './src/clone.ts',
    cloneDeep: './src/cloneDeep.ts',
    debounce: './src/debounce.ts',
    delay: './src/delay.ts',
    difference: './src/difference.ts',
    entries: './src/entries.ts',
    eq: './src/eq.ts',
    every: './src/every.ts',
    filter: './src/filter.ts',
    findIndex: './src/findIndex.ts',
    findLastIndex: './src/findLastIndex.ts',
    first: './src/first.ts',
    flatten: './src/flatten.ts',
    flow: './src/flow.ts',
    groupBy: './src/groupBy.ts',
    gt: './src/gt.ts',
    has: './src/has.ts',
    identity: './src/identity.ts',
    includes: './src/includes.ts',
    isArray: './src/isArray.ts',
    isEmpty: './src/isEmpty.ts',
    isEqual: './src/isEqual.ts',
    isError: './src/isError.ts',
    isFunction: './src/isFunction.ts',
    isMap: './src/isMap.ts',
    isNil: './src/isNil.ts',
    isNull: './src/isNull.ts',
    isNumber: './src/isNumber.ts',
    isObject: './src/isObject.ts',
    isPlainObject: './src/isPlainObject.ts',
    isSet: './src/isSet.ts',
    isString: './src/isString.ts',
    isSymbol: './src/isSymbol.ts',
    isUndefined: './src/isUndefined.ts',
    join: './src/join.ts',
    keys: './src/keys.ts',
    last: './src/last.ts',
    lt: './src/lt.ts',
    map: './src/map.ts',
    mapValues: './src/mapValues.ts',
    memoize: './src/memoize.ts',
    merge: './src/merge.ts',
    omit: './src/omit.ts',
    once: './src/once.ts',
    pick: './src/pick.ts',
    pickBy: './src/pickBy.ts',
    range: './src/range.ts',
    repeat: './src/repeat.ts',
    reverse: './src/reverse.ts',
    shuffle: './src/shuffle.ts',
    size: './src/size.ts',
    sleep: './src/sleep.ts',
    some: './src/some.ts',
    sum: './src/sum.ts',
    sumBy: './src/sumBy.ts',
    throttle: './src/throttle.ts',
    times: './src/times.ts',
    toNumber: './src/toNumber.ts',
    toPairs: './src/toPairs.ts',
    toString: './src/toString.ts',
    transform: './src/transform.ts',
    trim: './src/trim.ts',
    union: './src/union.ts',
    uniq: './src/uniq.ts',
    uniqBy: './src/uniqBy.ts',
    uniqWith: './src/uniqWith.ts',
    values: './src/values.ts',
} as const

export default moduleMap
