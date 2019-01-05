let name = "jessica"
let name2 = "loren"

let love = name + " " + name2 + " are cute!"

let wynter = "cute"
let luna = "punk"

let pain = luna

let myChanges = [1, 32, 4, 5, 5, 5, 3]
let person2Changes = {
    a: 1,
    b: 2,
    c: 3
}

function updateObject(obj, key, newVal) {
    obj[key] = newVal;
    return obj;
}

function deleteVid(conversation, indexToDelete) {
    conversation.splice(indexToDelete, 1);
    return conversation;
}

module.exports = {
    updateObject,
    deleteVid
}
