import { useState } from 'react';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';

const Home = () => {
     const [email, setEmail] = useState('');
  return (
    <div>
      <h1>Home</h1>

      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="correo@ejemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button label="Ingresar" />
    </div>
  );
};

export default Home;
