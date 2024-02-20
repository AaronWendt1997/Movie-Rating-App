import React from "react";

import { Stack, Paper, TextField, Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'

const FilterBox = () => {


    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Stack spacing={2}>
                <Paper>
                    <TextField 
                        label="Search Movies"
                        variant="outlined"
                        fullWidth
                    /> 
                </Paper>
                <Paper>
                    <FormControl>
                        <RadioGroup>
                            <FormControlLabel 
                                value="rating"
                                control={<Radio />}
                                label="Rating"
                            />
                            <FormControlLabel 
                                value="date"
                                control={<Radio />}
                                label="Release Date"
                            />
                            <FormControlLabel 
                                value="runtime"
                                control={<Radio />}
                                label="Runtime"
                            />
                        </RadioGroup>
                    </FormControl>
                </Paper>
                <Paper>
                    Item 3
                </Paper>
            </Stack>  
        </Box>

    )
};

export default FilterBox;