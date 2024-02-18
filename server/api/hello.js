export default defineEventHandler((event) => {
  const data = {
    name: 'eric',
    age: '18',
    sex: 'man',
  };
  return { data };
});
