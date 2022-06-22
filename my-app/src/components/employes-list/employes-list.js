
import EmployesListItem from "../employes-list-item/employes-list-item"
import './employes-list.css'

const EmployesList = ({ data }) => {

    const elements = data.map(item => {
        return <EmployesListItem {...item} />
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployesList; 