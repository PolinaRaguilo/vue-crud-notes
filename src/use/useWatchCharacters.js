import { watch } from 'vue';

export const useWatchCharachters = (valueToWatch, maxChars = 100) => {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxChars) {
      alert(`Only ${maxChars} characters allowed!!!`);
    }
  });
};
