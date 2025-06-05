// Importamos Zod
    const { z } = window.Zod;

    // Esquema para validar los datos del formulario
    const registerSchema = z.object({
  name: z.string().min(1, "El campo nombre no puede estar vacio."),
  email: z.string().email("El correo es inválido"),
  password: z
    .string()
    .superRefine((val, ctx) => {
      if (!val || val.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "La contraseña es obligatoria.",
        });
        return; // detiene los mensajes de error cuando contraseña esta vacia, pero habilita los demas cuando por ejemplo el unico caracter sea #.
      }

      if (val.length < 6) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 6,
          type: "string",
          inclusive: true,
          message: "La contraseña debe tener al menos 6 caracteres.",
        });
      }

      if (!/^[a-zA-Z0-9$]+$/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "La contraseña contiene caracteres especiales no permitidos",
        });
      }
    }),
});
      document.getElementById("registerForm").addEventListener("submit", (event) => {
      event.preventDefault();
      
      // Capturamos los valores ingresados
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      try {
        // PISTA: Usa el método correcto de Zod para validar el esquema.
        registerSchema.parse(formData)
        alert("¡Registro exitoso!");
      } catch (error) {
        // PISTA: Muestra los mensajes de error en la página.
        alert(`Errores:\n⚠️${error.errors.map(e => e.message).join("\n⚠️")}`);
      }
    });