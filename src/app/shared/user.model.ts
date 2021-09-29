export interface UserModel {
  uid: string;
  email: string;
  password: string;
  name: string;
  img: string;
  pm?: {
    name: string;
    img: string;
    chat: {
      from: string;
      to: string;
    }[];
  }[];
}

