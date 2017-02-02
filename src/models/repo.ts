// User model based on the structure of github api at
// https://api.github.com/users/{username}
export interface Repo {
  id: string;
  name: string;
  full_name: string;
  owner: {},
  html_url: string,
  description: string
}