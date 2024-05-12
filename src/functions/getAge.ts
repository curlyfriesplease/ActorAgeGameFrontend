export const getAge = (ageString: string) => {
  if (ageString === null) return null;
  const today = new Date();
  const birthDate = new Date(ageString);
  let ageAsInteger = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    ageAsInteger--;
  }
  return ageAsInteger;
};
