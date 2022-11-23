const mongoose = require('mongoose');
// const AuctionDetailsSchema = require('../model/AuctionDetailsSchema');
const MarketplaceDetailsSchema= require('../model/marketplaceDetailsSchema');
const express = require('express');


exports.create_post = async function (req, resp) {
    const data = new MarketplaceDetailsSchema(req.body);
    const result = await data.save();
    console.log(req.body);
    resp.send(result);
};


exports.get_posts = async function (req, resp) {

    const data = await MarketplaceDetailsSchema.find();
    resp.send(data);
};
exports.get_post = async function (req, resp) {

    const data = await MarketplaceDetailsSchema.findOne(req.params);
    resp.send(data);
};


exports.delete_post = async function (req, resp) {
    console.log(req.params);
    const data = await MarketplaceDetailsSchema.deleteOne(req.params);
    resp.send(data);
};


exports.put_post = async function (req, resp) {
    console.log(req.params);
    const data = await MarketplaceDetailsSchema.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    resp.send(data);
};
/*
exports.create_flate_sale = async function(req,resp){
    const data = new flateSaleSchema(req.body);
    const result = await data.save();
    resp.send(result);
};

exports.get_flate_sale = async function(req,resp){
    const data = await flateSaleSchema.find();
    resp.send(data);
};

exports.delete_flat_sale = async function(req,resp){
    const data = await flateSaleSchema.deleteOne(req.params);
    resp.send(data);
};

exports.update_flat_sale = async function(req,resp){
    console.log(req.params);
    const data = await flateSaleSchema.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    resp.send(data);
}

 */