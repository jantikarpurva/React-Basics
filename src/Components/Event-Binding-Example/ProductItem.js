import React from "react";
class ProductItem extends React.Component{
    constructor(props) {
        super(props);
    this.state = {
        product : {
            Name : 'Bulb',
            Quantity : 2,
            Price : 100
        }
    }
    }

    increaseQuantity = () => {
        this.setState({
            product : {
                ...this.state.product,
                Quantity : this.state.product.Quantity + 1
            }
        });
    }

    decreaseQuantity = () => {
        this.setState({
            product : {
                ...this.state.product,
                Quantity : (this.state.product.Quantity - 1) > 0 ? this.state.product.Quantity - 1 : 1
            }
        });
    }
    render() {
        let {Name,Quantity,Price} = this.state.product;
        return (
           <React.Fragment>
                <div className="container mt-5 bg-success p-2">
                    <pre>
                            {JSON.stringify(this.state)}
                        </pre>
                    <div className="row">
                        <div className="col-md-4 m-auto p-auto">
                            <h1 className="lead">Product</h1>
                        </div>

                        <div className="col-md-8">
                            <table className="table table-hover table-bordered table-success">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{Name}</td>
                                        <td>&#8377; {(Price*Quantity).toFixed(2)}</td>
                                        <td>
                                            <button className="btn btn-primary btn-sm" onClick={this.decreaseQuantity}>-</button>
                                            {Quantity}
                                            <button className="btn btn-primary btn-sm" onClick={this.increaseQuantity}>+</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
           </React.Fragment>
        );
    }

}
export default ProductItem;