import { formatDistanceToNow, format } from 'date-fns';
import { es } from 'date-fns/locale'; // Importa la localización en español

export function useTimeHuman(date) {
  if (!date) return '';

  const now = new Date();
  const targetDate = new Date(date);

  // Calcula la diferencia en horas
  const hoursDifference = Math.abs((now - targetDate) / (1000 * 60 * 60));

  // Si la diferencia es menor a 12 horas, muestra el formato human-readable
  if (hoursDifference < 12) {
    return formatDistanceToNow(targetDate, {
      addSuffix: true,
      locale: es, // Localización en español
    });
  }

  // Si la diferencia es mayor a 12 horas, muestra la fecha completa en formato español
  return format(targetDate, "d 'de' MMMM 'de' yyyy, h:mm a", { locale: es });
}
