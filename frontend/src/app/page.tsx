"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [zipCodes, setZipCodes] = useState<string[]>([]);
  const [zip, setZip] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchZipCodes() {
      try {
        const response = await fetch('http://localhost:8080/api/restaurants/zipCodes');
        const data = await response.json();
        setZipCodes(data);
        console.log('Zip codes:', data);
      } catch (error) {
        console.error('Error fetching zip codes:', error);
      }
    }

    fetchZipCodes();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (zipCodes.includes(zip)) {
      router.push(`/restaurant/${zip}`);
    } else {
      //TODO: Cambiar por un modal
      alert('Código postal no encontrado');
    }
  };

  return (
    <main className="flex flex-col mx-auto max-w-[800px] mt-10">
      <h1 className="text-2xl mb-10">Bienvenido a Burger Xusping</h1>
      <p>Introduce el código postal de la ciudad en la que quieres hacer un pedido</p>
      <form className="my-5" onSubmit={handleSubmit}>
        <input
          type="text"
          id="zip"
          name="zip"
          maxLength={5}
          placeholder="Código postal"
          className="mx-0 border p-1 mr-4"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <button type="submit" className="bg-orange-400 py-1 px-2 rounded-sm">Buscar</button>
      </form>
    </main>
  );
}