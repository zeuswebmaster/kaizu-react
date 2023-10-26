export type UserResponse = {
  app_metadata: {
    provider: string;
    providers: string[];
  };
  aud: string;
  confirmation_sent_at: string;
  created_at: string;
  email: string;
  id: string;
  phone: string;
  role: string;
  identities: any[];
  user_metadata: object;
};
