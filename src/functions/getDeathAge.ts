export const getDeathAge = (ageString: string, deathAgeString: string) => {
  if (deathAgeString === null) return null;
  const birthDate = new Date(ageString);
  const deathDate = new Date(deathAgeString);
  let ageAsInteger = deathDate.getFullYear() - birthDate.getFullYear();
  const m = deathDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && deathDate.getDate() < birthDate.getDate())) {
    ageAsInteger--;
  }
  return ageAsInteger;
};
