const Email = ({ required, getValue }) => {
  return (
    <input
      type="email"
      id="email"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-caption text-neutral-900 focus:border-primary-500 focus:ring-primary-500"
      placeholder="dele@gmail.com"
      required={required && false}
      onChange={(e) => console.log(e)}
    />
  );
};
const Text = ({ required, getValue, placeholder }) => {
  return (
    <input
      type="text"
      id="text"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-caption text-neutral-900 focus:border-primary-500 focus:ring-primary-500"
      placeholder={placeholder}
      required={required && false}
      onChange={(e) => console.log(e)}
    />
  );
};
const Password = ({ required, getValue }) => {
  return (
    <input
      type="text"
      id="text"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-caption text-neutral-900 focus:border-primary-500 focus:ring-primary-500"
      placeholder="password"
      required={required && false}
      onChange={(e) => console.log(e)}
    />
  );
};

export const Input = {
  Email: Email,
  Text: Text,
  Password: Password,
  //   TextArea: TextArea,
};
