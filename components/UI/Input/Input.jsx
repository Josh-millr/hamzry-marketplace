const Email = ({ required, getValue }) => {
  return (
    <input
      type="email"
      id="email"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-caption focus:border-primary-500 focus:ring-primary-500"
      placeholder="dele@gmail.com"
      required={required && false}
      onChange={(e) => getValue(e.target.value)}
    />
  );
};

export const Input = {
  Email: Email,
  //   Password: Password,
  //   TextArea: TextArea,
};
