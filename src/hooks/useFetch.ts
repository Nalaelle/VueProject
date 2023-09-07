// Composable
import { ref, type Ref } from 'vue';


export interface ApiResponse<T> {
  data: Ref<T | null>;
  isLoading: Ref<boolean>;
  error: Ref<Error | null>;
}

export function useFetch<T>(url: string): ApiResponse<T> {
  const data: Ref<T | null> = ref(null);
  const isLoading: Ref<boolean> = ref(false);
  const error: Ref<Error | null> = ref(null);

  async function fetchData(url: string): Promise<void> {
    isLoading.value = true;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      data.value = await response.json() as T;
      // console.log(data.value);
      console.log('***');
      console.log(isLoading.value); 
    } catch (err) {
      error.value = err as Error; 
    } finally {
      isLoading.value = false;
    }
  }

  fetchData(url);

  return { data, isLoading, error };
}