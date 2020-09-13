/**
 * Represents an event that get's send around.
 */
class Event {
    constructor(eventName, context) {
        this.eventName = eventName
        this.callbacks = []
        this.context = context
    }

    addCallback(callback) {
        this.callbacks.push(callback)
    }

    execute(data) {
        const callbacks = this.callbacks.slice(0)
        callbacks.forEach((callback) => {
            callback.call(this.context, data)
        })
    }

    removeCallback(callback) {
        const index = this.callbacks.findIndex(cb => {
            if (cb.name === callback.name) {
                var s1, s2
                s1 = cb.toString().replace(/\s/g, '')
                s2 = callback.toString().replace(/\s/g, '')
                return s1 === s2
            }else{
                return false
            }
        })
        if (index > -1) {
            this.callbacks.splice(index, 1)
            return true
        }else{
            return false
        }
    }
}

export { Event } 