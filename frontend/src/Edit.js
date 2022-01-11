import React, {Component} from 'react';
import axios from 'axios';

export default class Edit extends Component {
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
            _id: props.location.pathname.substring(6)
        }
    }


    componentDidMount() {
        axios.get('https://shopifybackendapi.herokuapp.com/inventory/items/' + this.state._id)
            .then(response => {
                this.setState(
                    {
                        itemname: response.data.itemname,
                        price: response.data.price,
                        quantity: response.data.quantity,
                        location: response.data.location,
                        _id: response.data._id
                    }
                )
            })
            .catch((error) => {
                console.log(error);
            })
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
        console.log(this.state._id);
        axios.post('https://shopifybackendapi.herokuapp.com/inventory/update/' + this.state._id, item)
            .then(res => console.log(res.data));
        this.setState({
            itemname: '',
            price: '',
            quantity: '',
            location: '',
        })
        window.location.href = "/";
    }

    render() {
        return (
            <React.Fragment>

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
            </React.Fragment>
        )
    }
}
