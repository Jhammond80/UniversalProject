import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom'
import '../styles/Table.css'


const Table = ({ projects, onDelete }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const getRowColorClass = (value) => {
        if (value < 100) {
            return 'table-row-color1'; // CSS class for values less than 100
        } else if (value >= 100 && value < 1000) {
            return 'table-row-color2'; // CSS class for values between 100 and 1000
        } else {
            return 'table-row-color3'; // CSS class for values 1000 or greater
        }
    };


    return (
    <div className='table-wrapper'>
        <table>
        <thead>
            <tr>
            <th>Placeholder</th>
            <th>Placeholder</th>
            <th>Placeholder</th>
            <th>Placeholder</th>
            <th>Placeholder</th>
            </tr>
        </thead>
        <tbody>
            {projects.map((project) => (
            <tr key={project._id} className={getRowColorClass(project.valueThree)}>
                <td>{project.valueOne}</td>
                <td>{project.valueTwo}</td>
                <td>{project.valueThree}</td>
                <td>{project.valueFour? 'Open': 'Closed'}</td>
                <td>
                {/* Use location to conditionaly render which path you do not want the button to show on */}
                {location.pathname === `'/'` && (
                    <button className='table-button' onClick={() => onDelete(project._id)}>Delete</button>
                )}
                {location.pathname === `'/'` && (
                <button className='table-button' onClick={() => navigate(`/project/${project._id}/details`)}>Details</button>
                )}
                <button className='table-button' onClick={() => navigate(`/project/${project._id}/update`)}>Update</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
};

export default Table;
