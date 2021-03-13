import React , {Component} from 'react';


export default class Book extends Component {




    render(){



        const {id , author , title , img} = this.props.info




        return(
            <article className='book'>

                <img src={img} width='150' alt='book' />

                <div>
                    <h3>id: {id}</h3>


                    <h3>author: {author} </h3>
                    <h3>title: {title}</h3>


                </div>
            </article>
        )
    }
}