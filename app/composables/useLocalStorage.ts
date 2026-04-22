export default function useLocalStorage() {
  function getItem(key: string): string | null {
    if (typeof window === 'undefined') return null;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  function setItem(key: string, value: string) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
  }

  function removeItem(key: string) {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  }

  return {
    getItem,
    setItem,
    removeItem,
  };
}