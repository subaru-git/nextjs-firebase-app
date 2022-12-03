interface User {
  id: string;
  name: string;
  photoURL: string;
  email: string;
  createdAt: number;
  description?: string;
  gender?: string;
  title?: string;
  links?: string[];
  coverURL?: string;
}
