import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="bg-[#F9F9F9] dark:bg-[#0F0F0F] flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold text-title-color dark:text-title-color-dark">
        Página não encontrada
      </h1>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Inicio
        </Link>
      </p>
    </div>
  )
}
