'use client';

import * as React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Stack,
  Link,
  Card,
} from '@mui/material';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { InferType } from 'yup';

const userSchema = yup.object({
  email: yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
})
  .required();

type FormData = InferType<typeof userSchema>;

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Sign up data:', data);
    // send data to API here
  };

  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}>
        <Card sx={{ maxWidth: 400, width: '100%', p: 4 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}
          >
            <TextField
              label="Email"
              variant="filled"
              error={!!errors.email}
              helperText={errors.email?.message}
              id="email"
              {...register("email")}
              type="email"
              fullWidth
            />

            <TextField
              label="Password"
              variant="filled"
              error={!!errors.password}
              helperText={errors.password?.message}
              id="password"
              {...register("password")}
              type="password"
              fullWidth
            />

            <TextField
              label="Confirm Password"
              variant="filled"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              id="confirmPassword"
              {...register("confirmPassword")}
              type="password"
              fullWidth
            />

            {/* <FormControlLabel */}
            {/*   control={<Checkbox value="remember" color="primary" />} */}
            {/*   label="I agree to the terms and conditions" */}
            {/* /> */}

            <Button type="submit" variant="contained" fullWidth>
              Sign up
            </Button>

            <Link href="#" variant="body2" sx={{ alignSelf: 'center' }}>
              Already have an account? Sign in
            </Link>
          </Box>
        </Card>
      </Stack>
    </>
  );
}
