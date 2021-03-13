
import React , {Component} from 'react';

import Book from './Book';
import booksData from './booksData';

export default class BookList extends Component {


    state={
        books : booksData
    };









    render(){
        return(
            <section>
                {this.state.books.map((item)=><Book key={item.id} info={item} />)}

            </section>
            
        )
    }
}