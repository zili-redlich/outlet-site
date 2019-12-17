import React, {Component} from 'react';
import ProductList from '../../components/ProductList';

class Products extends Component {
    state = {
        products: [],
        page: 0,
        isFetching: false,
        search: '',
    }

    componentDidMount() {
        this.setState({products: [
                                    {id:1, name:'שולחן', description:'שולחן יפה עם עיטורים', imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYasP3Ozy2WRqNcLKf5d0VjtDtlh3L2eJRCEsyfUYhr0AC9UW'},
                                    {id:2, name:'שולחן מחשב', description:'שולחן מחשב',imgUrl:'https://benda.co.il/pub/media/catalog/product/cache/588d05a133a2a4c8b69326ffbb96e2fc/8/1/81000-000-08.jpg'}
                                ],
                        search: 'מוצרים מתצוגה'
                                });
        console.log(this.state.products.length);
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.search}
                </h1>
                <p>length {this.state.products.length}</p>
                <ProductList list={this.state.products}/>
            </div>
            
        )
    }

}

export default Products;