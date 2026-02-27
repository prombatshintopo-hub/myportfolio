import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md rounded-[10px] border border-[var(--primary)]/25 bg-[var(--card)]/78 p-8 text-center backdrop-blur-md">
        <p className="text-xs tracking-[0.16em] text-[var(--secondary)] uppercase">404</p>
        <h1 className="mt-3 font-display text-3xl text-[var(--foreground)]">Page not found</h1>
        <p className="mt-3 text-sm text-[var(--muted-foreground)]">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent)]"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
