/**
 * Basic event system for vanilla js.
 */
import { Messanger } from './Messanger.js'

const msgr = new Messanger()
msgr.on('test', data => console.log(data))
msgr.post('test', {'a':1, 'b':2})

console.log(msgr.events.test)

const removed = msgr.off('test', data => console.log(data))
console.log('callback removed : ', removed)

const notRemoved = msgr.off('test2', data => {})
console.log('callback not removed : ', !notRemoved)

export { Messanger }