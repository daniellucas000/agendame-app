<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useForm, useField } from "vee-validate";
import { schema } from "./schema";
import { useAuthStore } from "@/stores/auth";

const feedbackMessage = ref("");
const router = useRouter();

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    email: "test@example.com",
    password: "password",
  },
});

const { value: email } = useField("email");
const { value: password } = useField("password");

const authStore = useAuthStore();

const submit = handleSubmit(async (values) => {
  await login(values);
});

function login(values) {
  feedbackMessage.value = "";

  authStore.sanctum().then(() => {
    // authStore
    axios.get("/api/user");
    //   .login(values?.email, values?.password)
    //   .then(() => {
    //     router.push({ name: "dashboard" });
    //   })
    //   .catch(() => {
    //     feedbackMessage.value = "Seu email ou senha estão inválidos.";
    //   });
  });
}
</script>

<template>
  <v-alert v-if="feedbackMessage" color="error" class="mb-2">{{
    feedbackMessage
  }}</v-alert>
  <v-form @submit.prevent="submit">
    <v-row class="d-flex mb-3">
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">E-mail</v-label>
        <v-text-field
          :error-messages="errors?.email"
          v-model="email"
          variant="outlined"
          color="primary"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">Senha</v-label>
        <v-text-field
          v-model="password"
          :error-messages="errors?.password"
          variant="outlined"
          type="password"
          color="primary"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="pt-0">
        <div class="d-flex flex-wrap align-center ml-n2">
          <div class="ml-sm-auto">
            <RouterLink
              to="/"
              class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
              >Esqueceu sua senha?</RouterLink
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="pt-0">
        <v-btn
          type="submit"
          :loading="isSubmitting"
          color="primary"
          size="large"
          block
          flat
          >Entrar</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>
