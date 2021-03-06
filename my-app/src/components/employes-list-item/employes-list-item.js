import "./employes-list-item.css"

const EmployesListItem = (props) => {

    const { name, salary, onDelete, onTogleIncrease, onTogleRise, increase, rise } = props;
    let classNames = "list-group-item d-flex justify-content-between"

    if (increase) {
        classNames += ' increase'
    }
    if (rise) {
        classNames += ' like'
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onTogleRise}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onTogleIncrease}>
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

export default EmployesListItem;