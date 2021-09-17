import jwt from "jsonWebToken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'mySecretKey',
    {
      expiresIn: "30d",
    }
  );
};
