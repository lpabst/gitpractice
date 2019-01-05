var assert = require("chai").assert;
var expect = require("chai").expect;
var updateObject = require('./../howiwork.js').updateObject
var deleteVid = require('./../howiwork.js').deleteVid

let wynter = {
    age: 2,
    color: "grey",
    birthday: "September 1, 2016"
};

let luna = {
    age: 1,
    color: 'gray',
    birthday: 'Feb 21, 2017'
}

let conversation = [{ i: 0 }, { i: 1 }, { i: 2 }]


describe("updateObject function", function () {
    it("it should update the color", function () {
        let updatedObj = updateObject(wynter, "color", "green");
        assert.equal(updatedObj.color, 'green');
    });
    it("it should update the age", function () {
        let updateAge = updateObject(wynter, "age", "0");
        assert.equal(updateAge.age, 0);

    });
    it("it should change the age", function () {
        let updateAge = updateObject(wynter, "age", "0");
        expect(luna.age).to.equal(1)
    })
    it('it should delete video properly', function () {
        expect(conversation.length).to.equal(3);
        expect(conversation[1].i).to.equal(1)
        let updatedConvo = deleteVid(conversation, 1)
        expect(conversation.length).to.equal(2);
        expect(conversation[1].i).to.equal(2)
    })
});