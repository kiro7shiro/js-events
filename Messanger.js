import { Event } from './Event.js'

/**
 * Represents a messanger that can send or recieve events.
 */
class Messanger {
    constructor() {
        this.events = {}
    }

    off(eventName, callback) {
        const event = this.events[eventName]
        if (!event) return false
        const removed = event.removeCallback(callback)
        if (removed && event.callbacks.length === 0) {
            delete this.events[eventName]
        }
        return removed
    }

    on(eventName, callback, context) {
        let event = this.events[eventName]
        if (!event) {
            event = new Event(eventName, context)
            this.events[eventName] = event
        }
        event.addCallback(callback)
    }
    
    post(eventName, data) {
        const event = this.events[eventName]
        if (event) event.execute(data)
    }
}

Messanger.Event = Event

export { Messanger }