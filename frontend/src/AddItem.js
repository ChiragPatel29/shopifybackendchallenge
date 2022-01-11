import React, {Component} from 'react';
import axios from 'axios';

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            itemname: '',
            price: '',
            quantity: '',
            location: '',
        }
    }

    onChangeItemName(e) {
        this.setState({
            itemname: e.target.value
        })
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    onChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        })
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
        const item = {
            itemname: this.state.itemname,
            price: this.state.price,
            quantity: this.state.quantity,
            location: this.state.location,

        }

        console.log(item);

        axios.post('https://shopifybackendapi.herokuapp.com/inventory/add', item)
            .then(res => console.log(res.data));
        this.setState({
            itemname: '',
            price: '',
            quantity: '',
            location: '',
        })
        window.location.reload();
    }

    render() {
        return (
            <React.Fragment>

                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add New Item
                </button>
                {/*<button type="button" class="btn btn-secondary">Export Product Data to a CSV</button>*/}

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add New Item</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <form onSubmit={this.onSubmit}>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Item Name</label>
                                        <input type="text" class="form-control" id="itemName"
                                               aria-describedby="emailHelp"
                                               value={this.state.itemname}
                                               onChange={this.onChangeItemName}
                                        />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Price</label>
                                        <input type="text" class="form-control" id="price" aria-describedby="emailHelp"
                                               value={this.state.price}
                                               onChange={this.onChangePrice}
                                        />

                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Quantity</label>
                                        <input type="text" class="form-control" id="quantity"
                                               aria-describedby="emailHelp"
                                               value={this.state.quantity}
                                               onChange={this.onChangeQuantity}
                                        />

                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Location</label>
                                        <input type="text" class="form-control" id="location"
                                               aria-describedby="emailHelp"
                                               value={this.state.location}
                                               onChange={this.onChangeLocation}
                                        />

                                    </div>

                                    <button type="submit" class="btn btn-success">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
