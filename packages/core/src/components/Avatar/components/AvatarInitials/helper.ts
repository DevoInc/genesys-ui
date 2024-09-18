export const formatInitials = (str: string) =>
  str.substring(0, 2).toUpperCase();

export const getInitialsFromName = (name: string) => {
  const nameArr = name?.split(' ');
  const firstNameInitials = nameArr?.length > 0 ? nameArr[0].charAt(0) : '';
  const secondNameInitials = nameArr?.length > 1 ? nameArr[1].charAt(0) : '';
  return nameArr?.length > 0 ? firstNameInitials + secondNameInitials : '';
};
