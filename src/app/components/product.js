// Para imágenes estáticas LOCALES
import Image from 'next/image';

export default function Producto({ imagen }) {
  return (
    <Image
      src={`/images/${imagen}`} //Ruta relativa desde public/
      alt="Producto"
      width={300}
      height={200}
      priority // Para imágenes importantes
    />
  );
}