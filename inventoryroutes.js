const router = require('express').Router();
let Inventory = require('./inventoryschema');

//DEMO
router.route('/hi').get((req, res) => {
    console.log("HI There!");
    const itemname = "HELLO";
    const price = "Price";
    const quantity = "13";
    const location = "MTL";

    const newItem = new Inventory({
        itemname,
        price,
        quantity,
        location
    });

    res.json(newItem);
});

//GET
router.route('/inventory/items').get((req, res) => {
    Inventory.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));

});


//GET Particular ID
router.route('/inventory/items/:id').get((req, res) => {
    Inventory.findById(req.params.id)
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));

});


//POST
router.route('/inventory/add').post((req, res) => {
    const itemname = req.body.itemname;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const location = req.body.location;


    const newItem = new Inventory({
        itemname,
        price,
        quantity,
        location
    });

    newItem.save()
        .then(() => res.json('Item added to inventory!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update
router.route('/inventory/update/:id').post((req, res) => {
    Inventory.findByIdAndUpdate(req.params.id,{"itemname":req.body.itemname,"price":req.body.price,
        "quantity":req.body.quantity,"location":req.body.location})
        .then(() => res.json('ITEM Updated With new value'))
        .catch(err => res.status(400).json('Error: ' + err));
});


//DELETE
router.route('/inventory/delete/:id').delete((req, res) => {
    Inventory.findByIdAndDelete(req.params.id)
        .then(() => res.json('Inventory deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
