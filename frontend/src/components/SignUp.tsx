import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, signup } = useAuth();

  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signup(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <br />
        <Link to="/login">Old User Login</Link>
      </form>
    </div>
  );
}
