const express = require('express');
const mongoose = require('mongoose');

const AuctionRoute = require('./routes/AuctionDetailsRoutes');
const BidderRoute = require('./routes/BidderDetailRoutes');
const FlateSaleRout = require('./routes/FlateSaleRoute');
const TransactionHistoryRoute = require('./routes/transactionHistoryRoutes');
const UserDetailsRoute = require('./routes/UserDetailsRoutes');
const NFTDetailsRoute = require('./routes/nftDetailsRoutes');
const NonceRoute = require('./routes/nonceRoutes');
const MarketplaceRoute = require('./routes/marketplaceDetailsRoutes');
const UserVerificationRoute = require('./routes/UserVerificationRouter');
//const CreateRoute = require('./routes/createRouter');

const cors = require('cors');
const app = express();
app.use(express.json());
require('./model/db');

const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

app.use(cors({
    origin: '*'
}));

app.use('/auctiondetails', AuctionRoute);
app.use('/bidderdetails', BidderRoute);
app.use('/flatesale', FlateSaleRout);
app.use('/transactionhistory', TransactionHistoryRoute);
app.use('/userdetails', UserDetailsRoute);
app.use('/nftdetails', NFTDetailsRoute);
app.use('/nonce', NonceRoute);
app.use('/Marketplace', MarketplaceRoute);
app.use('/UserVerification', UserVerificationRoute);

// console.log("server at port:",port);
// app.listen(port);


app.listen(port, () => {
    console.log(`Server Connected on port ${port}!`);
});