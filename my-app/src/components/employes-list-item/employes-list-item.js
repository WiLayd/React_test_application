import { Component } from 'react'

import "./employes-list-item.css"

class EmployesListItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            increase: false,
            promotion: false
        }
    }

    onPromotion = () => {
        this.setState(({ promotion }) => ({
            promotion: !promotion
        }))
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }

    render() {
        const { name, salary, onDelete } = this.props;
        const { increase } = this.state;
        const { promotion } = this.state;
        let classNames = "list-group-item d-flex justify-content-between"

        if (increase) {
            classNames += ' increase'
        } else if (promotion) {
            classNames += ' like'
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onPromotion}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"
                            onClick={onDelete}></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployesListItem;