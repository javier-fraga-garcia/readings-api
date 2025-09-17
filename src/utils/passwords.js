import argon2 from "argon2";

export const hashPassword = async (password) => {
  const hash = await argon2.hash(password, { type: argon2.argon2id });
  return hash;
};

export const verifyPassword = async (plainPass, hashPass) => {
  try {
    return await argon2.verify(hashPass, plainPass);
  } catch (error) {
    return false;
  }
};
