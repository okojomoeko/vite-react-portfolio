export const getImageUrl = (name: string) => new URL(`/src/assets/images/works/${name}`, import.meta.url).href;
