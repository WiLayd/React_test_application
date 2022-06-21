
import EmployesListItem from "../employes-list-item/employes-list-item"
import './employes-list.css'

const EmployesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployesListItem />
            <EmployesListItem />
            <EmployesListItem />
        </ul>
    )
}

export default EmployesList;