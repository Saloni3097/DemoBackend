const express = require('express');
const router = express.Router();

const NonceDetailsController = require('../controllers/nonceController');

router.post('/', NonceDetailsController.set_nonce);
router.get('/', NonceDetailsController.get_nonce);
router.get('/:nonce', NonceDetailsController.get_by_nonce);

// router.delete('/:_id', NFTDetailsController.delete_nft_details);
router.put('/:nonce',NonceDetailsController.update_nonce);
router.put('/',NonceDetailsController.update_nonce);
router.patch('/:nonce',NonceDetailsController.update_nonce);
router.patch('/',NonceDetailsController.update_nonce);


module.exports = router;