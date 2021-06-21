import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import {
  Button, TextField, Typography, Container,
} from '@material-ui/core';

const StartPage = () => {
  const history = useHistory();

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const handleCreateGrid = useCallback((data) => {
    const rows = Number(data.rows);
    const columns = Number(data.columns);
    if (rows <= 10 && columns <= 10) {
      sessionStorage.setItem('rows', rows);
      sessionStorage.setItem('columns', columns);
      history.push('/main_page');
    }
  }, [history]);

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Create Grid
        </Typography>
        <form
          onSubmit={handleSubmit(handleCreateGrid)}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="rows"
            label="rows"
            name="rows"
            inputProps={{ maxLength: 2 }}
            {...register('rows', { required: true, pattern: /^\d+$/ })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="columns"
            label="columns"
            id="columns"
            inputProps={{ maxLength: 2 }}
            {...register('columns', { required: true, pattern: /^\d+$/ })}
          />
          {
            (errors.rows || errors.columns)
            && 'Both fields are required, you only need to enter numbers. Both numbers must be less than 10'
          }
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Create grid
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default StartPage;
