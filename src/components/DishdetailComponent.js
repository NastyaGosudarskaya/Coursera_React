import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
    }

    renderDish(dish){
        if (dish!=null)
        {
            return(
                 <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
        if (comments!=null){
            return(
                <div>
                    <h4>Comments</h4>
                    {comments.map(function(comment){
                        return(
                            <div>
                                <ul className="list-unstyled">
                                    <li>{comment.comment}</li>
                                    <li>-- {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    checkSelectedDish(dish){

        if (dish!=null){
            return(this.renderComments(dish.comments));
        }
        else{
            return;
        }

    }

    render(){
        return(

            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.checkSelectedDish(this.props.selectedDish)}
                </div>
            </div>
        );
    }

}

export default DishDetail;