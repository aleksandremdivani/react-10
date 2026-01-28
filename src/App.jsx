import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const validateInput = (name, value) => {
    switch (name) {
      case "email":
        if (!value.includes("@")) return "Your Email must include @";
        else if (value === "") return "Email is required";
        break;
      case "username":
        if (value.length < 4)
          return "Your username must be at least 4 characters long";
        else if (value === "") return "Username is required";
        break;
      case "password":
        if (value === "") return "Password is required";
        else if (value.length < 8)
          return "password must be at least 8 characters long";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setValidationErrors((prev) => ({
      ...prev,
      [name]: validateInput(name, value),
    }));
  };

  return (
    <main className="flex h-dvh w-full justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="rounded-md bg-white items-center w-full max-w-[460px] h-[500px] flex flex-col p-5 justify-between"
      >
        <h1 className="text-[40px] font-bold">Create your account</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-4 h-[48px] w-full rounded-lg"
        />
        {validationErrors.username && (
          <p className="text-red-500">{validationErrors.username}</p>
        )}
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={form.email}
          placeholder="Email"
          className="border p-4 h-[48px] w-full rounded-lg"
        />
        {validationErrors.email && (
          <p className="text-red-500">{validationErrors.email}</p>
        )}
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="border p-4 h-[48px] w-full rounded-lg"
        />
        {validationErrors.password && (
          <p className="text-red-500">{validationErrors.password}</p>
        )}
        <button className="py-3 text-white w-[250px] bg-lime-300 rounded-xl">
          Sign up
        </button>
      </form>
    </main>
  );
}

export default App;
