// only for vite, tsup
// remember, this is not barrel file.
const moduleMap = {
    isEmpty: './src/isEmpty.ts',
    size: './src/size.ts',
    keys: './src/keys.ts',
} as const

export default moduleMap