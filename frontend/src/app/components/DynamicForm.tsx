"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Button,
  FormLabel,
  Paper,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  FormHelperText
} from "@mui/material";
import formFields from "../data/formFields.json";

interface FormValues {
  [key: string]: any;
}

export default function DynamicForm() {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const { handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: formFields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue ?? "";
      return acc;
    }, {} as FormValues)
  });

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) reset(JSON.parse(storedData));
  }, [reset]);

  const onSubmit = (data: FormValues) => {
    localStorage.setItem("formData", JSON.stringify(data));
    setSubmittedData(data);
  };

  const renderField = (field: any) => {
    switch (field.type) {
      case "TEXT":
        return (
          <Controller
            key={field.name}
            name={field.name}
            control={control}
            rules={{
              required: field.required ? `${field.label} is required` : false,
              pattern:
                field.name === "email"
                  ? {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email address"
                    }
                  : undefined
            }}
            render={({ field: controllerField, fieldState: { error } }) => (
              <TextField
                {...controllerField}
                label={field.label}
                fullWidth
                margin="normal"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        );

      case "RADIO":
        return (
          <Box sx={{ mt: 2, width: "100%" }} key={field.name}>
            <FormLabel>{field.label}</FormLabel>
            <Controller
              name={field.name}
              control={control}
              rules={{ required: field.required ? `${field.label} is required` : false }}
              render={({ field: controllerField, fieldState: { error } }) => (
                <>
                  <RadioGroup {...controllerField} row>
                    {field.options?.map((option: string) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                  {error && <Typography color="error">{error.message}</Typography>}
                </>
              )}
            />
          </Box>
        );

      case "LIST":
        return (
          <Controller
            key={field.name}
            name={field.name}
            control={control}
            rules={{ required: field.required ? `${field.label} is required` : false }}
            render={({ field: controllerField, fieldState: { error } }) => (
              <FormControl fullWidth margin="normal" error={!!error} sx={{ minWidth: "100%" }}>
                <InputLabel>{field.label}</InputLabel>
                <Select {...controllerField} label={field.label}>
                  {field.options?.map((option: string) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                {error && <FormHelperText>{error.message}</FormHelperText>}
              </FormControl>
            )}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Paper sx={{ p: 5, mt: 4, borderRadius: 2, boxShadow: 3 }}>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {formFields.map((field) => (
          <Box key={field.name}>{renderField(field)}</Box>
        ))}

        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button
            type="button"
            variant="outlined"
            onClick={() => {
              reset(
                formFields.reduce((acc, field) => {
                  acc[field.name] = field.defaultValue ?? "";
                  return acc;
                }, {} as FormValues)
              );
              localStorage.removeItem("formData");
              setSubmittedData(null);
            }}
          >
            Reset
          </Button>
        </Box>
      </form>

      {submittedData && (
        <Paper sx={{ mt: 4, p: 3, backgroundColor: "#f5f5f5" }}>
          <Typography variant="h6" gutterBottom>
            Submitted Details
          </Typography>
          {Object.entries(submittedData).map(([key, value]) => (
            <Typography key={key}>
              <strong>{key}:</strong> {value}
            </Typography>
          ))}
        </Paper>
      )}
    </Paper>
  );
}
