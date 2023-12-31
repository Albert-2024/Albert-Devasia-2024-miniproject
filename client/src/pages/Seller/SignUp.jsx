import  React ,{ Fragment } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputLabel, MenuItem } from '@mui/material';
import { useState } from 'react';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useForm } from 'react-hook-form';




function Copyright(props) {
    
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignUp() {        
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    

        const [category, setCategory] = useState('');

        const handleChange = (event) => {
        const {name,value} = event.target;
        }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Typography variant="inherit" color="textSecondary">
                                
                             </Typography>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone"
                                    type='tel'
                                    name="phone"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    id="company"
                                    label="Company"
                                    name="company"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    id="brands"
                                    label="Brand Name"
                                    type='text'
                                    name="brands"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormGroup>
                                    <FormControl>
                                        <InputLabel required id="item">
                                            Category
                                        </InputLabel>
                                        <Select labelId='item'
                                            id='item select'
                                            value={category}
                                            label='Category'
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'laptop'}>Laptop</MenuItem>
                                            <MenuItem value={'desktop'}>Desktop</MenuItem>
                                            <MenuItem value={'mobile'}>Mobile Devices</MenuItem>
                                            <MenuItem value={'headset'}>Hand Set</MenuItem>
                                            <MenuItem value={'speaker'}>Speaker</MenuItem>

                                        </Select>
                                    </FormControl>
                                </FormGroup>

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>

    );
}
