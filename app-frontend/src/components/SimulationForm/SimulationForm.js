import { Validators } from "../../util/Validator";
import InputField from "../common/InputField";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import { useState } from "react";
import useApi from "../../hooks/useApi";
import PropTypes from 'prop-types';
import './SimulationForm.css';

function SimulationForm({ setData }) {
    const [noOfSimulations, setNoOfSimulations] = useState('');
    const [door, setDoor] = useState('');
    const [preference, setPreference] = useState('');

    const { post } = useApi();

    const handleClick = (event) => {
        event.preventDefault();
        setData({ 'results': [], totalWins: 0 });
        const simulationData = {
            "simulationDetails": {
                "numberOfSimulations": noOfSimulations,
                "chosenDoor": door,
                "preference": preference
            }
        };

        post('http://localhost:9090/api/simulation-results', simulationData).then(data => {
            setData(data);
        });
    }

    const isValueOutOfRange = () => {
        return noOfSimulations < 1 || noOfSimulations > 100 ? true : false;
    }

    return (
        <div className="simulation-details">
            <InputField
                value={noOfSimulations}
                label='Number of simulations'
                placeholder='Number of simulations'
                validators={[
                    { check: Validators.required, message: 'Field is mandatory' },
                    { check: Validators.number, message: 'Field value should be a number' },
                    { check: Validators.range, message: 'Value should be between 1 and 100 (inclusive)' }
                ]}
                onChange={setNoOfSimulations}
            />
            <Dropdown
                data={[
                    { value: 'A', label: 'A' },
                    { value: 'B', label: 'B' },
                    { value: 'C', label: 'C' },
                ]}
                label='Select Initial Door'
                value={door}
                placeholder='Select initial door'
                onChange={setDoor}
            />
            <Dropdown
                data={[
                    { value: 'Keep', label: 'Keep' },
                    { value: 'Change', label: 'Change' },
                ]}
                label='Select Preference'
                value={preference}
                placeholder='Select preference'
                onChange={setPreference}
            />
            <Button
                onClick={handleClick}
                value='Run Simulation'
                disabled={isValueOutOfRange() || noOfSimulations === '' || door === '' || preference === ''}
            />
        </div>
    );
}

SimulationForm.propTypes = {
    setData: PropTypes.func
}

export default SimulationForm;
