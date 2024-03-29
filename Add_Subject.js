import React, {useContext} from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

export default function Add_Subject(){
    const { setStep, userData, setUserData} =useContext(multiStepContext);
    return(
        <div>
            <Button variant="contained" onClick={()=>setStep(4)} color="primary">Add Subject Data</Button>
        </div>
    )
}