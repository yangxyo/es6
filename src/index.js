let journal = []

/**
 * @param {string[]} events
 * @param {boolean} squirrel
 */
function addEntry(events, squirrel) {
    journal.push({ events, squirrel })
}

addEntry(
    ["work", "sdfdsf", "touched tree", "pizza", "running", "television"],
    false
)
addEntry(
    ["work", "ice cream", "lasagna", "touched tree", "brushed teeth"],
    false
)
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true)
