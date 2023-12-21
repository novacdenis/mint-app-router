"use client";

import type { Login } from "@/types";

import NextLink from "next/link";

import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { FormContainer, PasswordElement, TextFieldElement, useForm } from "react-hook-form-mui";

import { useAuth } from "../providers";

export const LoginForm: React.FC = () => {
  const { onLogin } = useAuth();

  const form = useForm<Login>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: Login) => {
    try {
      await onLogin(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContainer formContext={form} onSuccess={onSubmit}>
      <Stack spacing={2}>
        <TextFieldElement
          fullWidth
          name="email"
          type="email"
          inputMode="email"
          label="Email"
          disabled={form.formState.isSubmitting}
          validation={{
            required: "Email is required",
          }}
        />
        <PasswordElement
          fullWidth
          name="password"
          label="Password"
          disabled={form.formState.isSubmitting}
          validation={{
            required: "Password is required",
          }}
        />

        <Box sx={{ textAlign: "right" }}>
          <Link component={NextLink} href="/forgot-password">
            Forgot password?
          </Link>
        </Box>

        <Button
          fullWidth
          type="submit"
          size="large"
          variant="contained"
          disabled={form.formState.isSubmitting}
        >
          Login
        </Button>

        <Typography variant="body1" sx={{ textAlign: "center" }}>
          By logging in you accept the{" "}
          <Link
            component={NextLink}
            href="https://annea.ai/privacy-policy/"
            rel="noopener"
            target="_blank"
          >
            Privacy Policy
          </Link>
        </Typography>
      </Stack>
    </FormContainer>
  );
};
