export enum Login {
  tooManyRequests = 'Firebase: Error (auth/too-many-requests).',
  wrongPassword = 'Firebase: Error (auth/wrong-password).',
  wrongEmail = "Firebase: Error (auth/user-not-found).",
}
export enum LoginRes {
  tooManyRequests = 'Too many requests',
  wrongEmailOrPassword = 'Wrong Email or/and Password'
}

export enum Reg {
  inUse = "Firebase: Error (auth/email-already-in-use)."
}
export enum RegRes {
  inUse = "Email already in use"
}
