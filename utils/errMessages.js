export const ERR_NETWORK = {
  noNetwork: {
    issue: "No Network Connection",
    description:
      "Request is unable to proceed. It seems like you have slight issues with your netowrk connection",
  },
};

export const ERR_SERVER = {
  noResponse: {
    issue: "Server Down",
    description: "Unable to process your request not, Please Try again later.",
  },
};

export const ERR_EMAIL = {
  isEmailNotaken: {
    issue: "Email Not Taken",
    condition: false,
    alert: "info",
    description:
      "This email is not associated with any account, create an account to start using Hamzry",
  },
  isEmailTaken: {
    issue: "Email Taken",
    condition: true,
    alert: "warning",
    description:
      "This email address is already taken, try another email address",
  },
  formatIncorrect: {
    issue: "Email Format Incorrect",
    condition: true,
    alert: "warning",
    description: "The email format is incorrect, use a correct email format",
  },
};
