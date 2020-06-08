import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from "../../Button/ToggleButton";

export default function SiteRow({ well }) {
    return (
        <tr key={well._id}>
            <td>
                {well.wellName}
            </td>
            <td>{well.wellNum}</td>
            <td>{well.apiNum}</td>
            <td>
                <ToggleButton
                    isOn={well.isOn}
                    name={well.wellName}
                    id={well._id}
                />
            </td>
        </tr>
    )
}
