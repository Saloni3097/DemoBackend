const mongoose = require('mongoose');
const nonceSchema = require('../model/nonceSchema');
require('express');

const set_nonce = async function (req, resp) {
    // const data = new AuctionDetailsSchema(req.body);
    let createNonce = 0;
    const result = await nonceSchema.create({ nonce: createNonce })
    console.log("result <<<<", result);
    // const result = await data.save();
    // console.log(req.body);
    resp.send(result);
};

const get_nonce = async function (req, res) {
    const currentNonce = req.body.nonce
    console.log("currentNonce", currentNonce);
    // console.log(req.params);
    try {
        const data = await nonceSchema.find();
        res.json(data);
    } catch (err) {
        res.json({ message: err })
        console.log('Error', err)

    }
}

const get_by_nonce = async function (req, res) {
    // const currentNonce = req.body.nonce
    // console.log("currentNonce", currentNonce);
    // console.log(req.params);
    try {
        const data = await nonceSchema.findOne();
        res.json(data);
    } catch (err) {
        res.json({ message: err })
        console.log('Error', err)

    }
}

const update_nonce = async function (req, res) {

    // let  NonceToBeUpdateWith = req.body.nonce
    // console.log("NonceToBeUpdateWith>>>>>>",NonceToBeUpdateWith);
    let CurrentNonce = req.params.nonce
    // let CurrentNonce = nonceSchema.findOne();
    console.log("CurrentNonce", CurrentNonce);
    let UpdateNonce = parseInt(CurrentNonce) + 1;
    console.log("updated nonce", UpdateNonce);
    try {
        let data1 = await nonceSchema.findOne({ nonce: CurrentNonce });
        console.log("Data is", data1);
        if (!data1 && CurrentNonce == 0) {
            console.log("Inside if");
            const result = await nonceSchema.create(req.body);
            console.log("result<<<<<<<<", result);
            res.send(result);
        }
        // console.log("Inside try");
        else if (UpdateNonce) {
            console.log("Inside else if");
            const data = await nonceSchema.updateOne(
                req.params,
                {
                    nonce: UpdateNonce
                }
            );
            res.send(data);
            console.log("here>>>>>", data);
        }
        else {
            console.log("Else");
        }
    } catch (err) {
        res.json({ message: err })
    }
};

module.exports = {
    set_nonce,
    get_nonce,
    get_by_nonce,
    update_nonce
}