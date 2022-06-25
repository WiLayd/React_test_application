
import EmployesListItem from "../employes-list-item/employes-list-item"
import './employes-list.css'

const EmployesList = ({ data, onDelete, onTogleIncrease, onTogleRise }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;

        return <EmployesListItem
            key={id}
            {...itemProps}
            onDelete={() => { onDelete(id) }}
            onTogleIncrease={() => onTogleIncrease(id)}
            onTogleRise={() => onTogleRise(id)} />
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployesList; 