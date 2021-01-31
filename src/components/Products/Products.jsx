import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles';



const products = [
    {id:1, name:'shoes', description:'running shoes', price:'$1', img:'https://cdn.shopify.com/s/files/1/0180/4854/8964/files/pum-mobile2-011121_x800.jpg?v=1610394170'},
    {id:2, name:'MacBook', description:'apple mac book',price:'$12', img:'https://media.gettyimages.com/photos/an-apple-macbook-pro-13inch-2ghz-laptop-computer-taken-on-november-10-picture-id824840112'},
    {id:3, name:'art', description:'red triangle',price:'$123', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshX6yNXj0w3y3m3m8r7ThBid_tlCSMKC2gA&usqp=CAU'}

];

const Products = () => {
    const classes = useStyles()
    return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Grid container justify="center" spacing={4}>
                    {products.map(product => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                    ))}
                </Grid>
            </main>
    )
}
export default Products