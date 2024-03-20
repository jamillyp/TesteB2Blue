import { Button, TextField } from '@mui/material';
import { Container, ContentButton } from './styles';
import { useState } from 'react';

interface FormProps {
    stationName: string;
    handleChange: (value: number, stationName: string) => void;
}

export default function Form({ stationName, handleChange }: FormProps) {
    const [value, setValue] = useState<number | ''>(0);
    const [error, setError] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue !== '' ? parseInt(inputValue) : '');

        if (inputValue !== '' && (parseInt(inputValue) > 100 || parseInt(inputValue) < 0)) {
            setError('O valor deve estar entre 0 e 100');
        } else {
            setError('');
        }
    };

    const handleButtonClick = () => {
        if (!error && value !== '') {
            handleChange(value as number, stationName);
            setValue('');
        }
    };

    return (
        <Container>
            <h5>{stationName}</h5>
            <TextField
                id="standard-number"
                label="Volume"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
                value={value !== '' ? value : ''}
                onChange={handleInputChange}
                error={!!error}
                helperText={error}
            />
            %
            <ContentButton>
                <Button variant='contained' onClick={handleButtonClick} >Adicionar</Button>
            </ContentButton>
        </Container>
    )
}
