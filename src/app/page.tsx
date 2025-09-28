// app/page.tsx
import { Container, Typography } from "@mui/material";
import DynamicForm from "./components/DynamicForm";
import ClientOnly from "./components/ClientOnly";

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Signup Form
      </Typography>
      <ClientOnly>
        <DynamicForm />
      </ClientOnly>
    </Container>
  );
}
