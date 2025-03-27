export function handleError(error: unknown): string {
    if (error instanceof Error) {
      console.error(error.message);
      return error.message;
    }
    console.error('An unexpected error occurred');
    return 'An unexpected error occurred';
  }
  