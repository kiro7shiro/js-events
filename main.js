/**
 * Basic event system for vanilla js.
 */
import { Messanger } from './Messanger.js'

const msgr = new Messanger()
msgr.on('test', (data) => console.log(data))
msgr.post('test', {'a':1, 'b':2})

console.log(msgr)

export { Messanger }