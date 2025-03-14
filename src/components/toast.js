import { toast } from 'sonner';

export function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    toast.success("Correo copiado al portapeles");
  });
}